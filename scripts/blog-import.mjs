// Legacy blog → /blog importer.
//
// Pulls posts from the still-live WordPress REST API on blog.kaiteki.my
// (open, no auth, 165 posts) and produces a DRAFT MDX body plus a draft
// content/data/blog.ts metadata entry for each one.
//
//   node scripts/blog-import.mjs --manifest          # inventory every legacy post
//   node scripts/blog-import.mjs <legacy-slug> [...] # import one or more posts
//
// Everything it writes is a DRAFT. On a YMYL medical site the editorial pass is
// not automatable: a doctor byline has to be correct, and Malaysian advertising
// rules (MAB) bar efficacy/outcome claims that the legacy copy is full of. What
// this script removes is the mechanical 60% — fetching, un-Elementoring,
// converting, naming, image download — and it flags the phrases a human must
// rewrite (see RISKY below) so the review is targeted rather than a full reread.
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const API = "https://blog.kaiteki.my/wp-json/wp/v2";
const ROOT = path.join(import.meta.dirname, "..");
const OUT_MDX = path.join(ROOT, "content", "blog");
// Blog media never lands in public/: it is staged here and the deploy workflows
// sync it into R2 (content/blog/AUTHORING.md §3).
const OUT_IMG = path.join(ROOT, "content", "blog", "media");
const CDN = "https://cdn.kaiteki.my/blog";
const WORK = path.join(ROOT, "scripts", ".migration");

/** WP author slug → our content/data/doctors.ts slug. Non-doctor accounts
 *  (admln, kaitekimyadm, vmmaseo) are deliberately absent: a post published by
 *  an admin account needs a real doctor assigned by hand, not a guess. */
const AUTHORS = {
  drcalvin: "dr-calvin-tan",
  drchangcheeseong: "dr-chang-chee-seong",
  drchew: "dr-chew-yuhhui",
  drjacqueline: "dr-jacqueline-tan",
  drjeremy: "dr-jeremy-low",
  drjessie_aesthetic: "dr-jessie-lim",
  drjoaan: "dr-joaan-kong",
  drlimxiaochien: "dr-lim-xiao-chien",
  lucaschew: "dr-lucas-chew",
  drsay: "dr-say-wei-xian",
  drtimchua: "dr-tim-chua",
  drwilliam: "dr-william-yap",
  dryeongbin: "dr-yeong-bin",
};

/** WP category slug → our PostCategory. The legacy blog had 53 categories for
 *  165 posts; ours has 5 (see lib/types.ts for why). First match wins, in the
 *  order the post lists its categories. */
const CATEGORIES = {
  lasers: "Device & Injectables",
  injectables: "Device & Injectables",
  "skin-boosters": "Device & Injectables",
  rejuran: "Device & Injectables",
  microneedling: "Treatments Explained",
  lifting: "Treatments Explained",
  "medical-facial": "Treatments Explained",
  "chemical-peels": "Treatments Explained",
  "minor-surgery": "Treatments Explained",
  hydrafacial: "Treatments Explained",
  "laser-hair-removal-vs-ipl": "Treatments Explained",
  "treatment-vs-treatment": "Treatments Explained",
  "skin-rejuvenation": "Treatments Explained",
  acne: "Skin Concerns",
  "acne-scars": "Skin Concerns",
  aging: "Skin Concerns",
  sagging: "Skin Concerns",
  pigmentation: "Skin Concerns",
  wrinkles: "Skin Concerns",
  pores: "Skin Concerns",
  "dark-eye-circles": "Skin Concerns",
  "uneven-skin-tone": "Skin Concerns",
  "sensitive-skin": "Skin Concerns",
  "skin-bumps": "Skin Concerns",
  "skin-texture-elasticity": "Skin Concerns",
  "tattoo-removal": "Skin Concerns",
  birthmark: "Skin Concerns",
  blackhead: "Skin Concerns",
  hair: "Skin Concerns",
  slimming: "Weight & Wellness",
  "slimming-body-contouring": "Weight & Wellness",
  coolsculpting: "Weight & Wellness",
  "healthy-living": "Weight & Wellness",
  "skin-care": "Skincare",
  "skincare-tips": "Skincare",
  sunburn: "Skincare",
};

/**
 * Phrases that are advertising-compliance risks under the MAB rules or plain
 * overpromising (docs/02 §8). Not a blocklist — a review checklist. Every hit
 * is printed with its line so the editorial pass goes straight to it.
 */
const RISKY = [
  /\bbefore\s*(and|&|\/)\s*after\b/gi,
  /\bguarantee(d|s)?\b/gi,
  /\bpermanent(ly)?\b/gi,
  /\b100\s*%/gi,
  /\bbest\b/gi,
  /\bmiracle\b/gi,
  /\bcure(s|d)?\b/gi,
  /\bproven\b/gi,
  /\bsafe(st)?\b/gi,
  /\bno\s+(side\s+effects|risk|downtime)\b/gi,
  /\bpainless\b/gi,
  /\btestimonial/gi,
  // Efficacy verbs the legacy copy leans on constantly. MAB bars efficacy
  // claims in advertising; these need rewriting to "may help with"-style copy.
  /\beffective(ly)?\b/gi,
  /\bexcellent\b/gi,
  /\bdramatic(ally)?\b/gi,
  /\bremarkabl[ey]\b/gi,
  /\brevolutionary\b/gi,
  /\binstantly\b/gi,
];

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
  emDelimiter: "*",
});
turndown.use(gfm);
// Elementor ships icons, spacers and dividers as empty markup that otherwise
// converts into stray bullets and blank emphasis.
turndown.addRule("dropChrome", {
  filter: (node) =>
    node.nodeName === "I" ||
    node.nodeName === "SVG" ||
    /elementor-(divider|spacer|icon|social|share|toc|widget-button)/.test(node.className || ""),
  replacement: () => "",
});

const get = async (url) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`);
  return res.json();
};

/** Strip Elementor's wrapper divs/sections but keep the semantic content inside.
 *  Also drops the boilerplate consult blurb and CTA button every legacy post
 *  opens and closes with — the new template renders those itself. */
function unElementor(html) {
  return (
    html
      // Elementor's own table-of-contents widget; ours is generated from headings.
      .replace(/<div[^>]*elementor-widget-table-of-contents[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/gi, "")
      // "BOOK FREE CONSULTATION" buttons and the author box.
      .replace(/<a[^>]*(?:api\.whatsapp\.com|wa\.me)[^>]*>[\s\S]*?<\/a>/gi, "")
      .replace(/<div[^>]*elementor-author-box[\s\S]*?<\/div>/gi, "")
      // Structural chrome → nothing. Keeps children, drops the wrapper.
      .replace(/<\/?(?:section|div)[^>]*>/gi, "\n")
      .replace(/\n{3,}/g, "\n\n")
  );
}

/** "alma-titanium-lifting-is-this-non-surgical-facelift-worth-it" is a legacy
 *  WordPress habit — long, question-shaped slugs. Trim to something that reads
 *  as a URL. Always review: this is a permanent, indexed decision. */
function proposeSlug(legacy) {
  const STOP =
    /-(is|are|it|this|that|the|a|an|to|for|of|in|on|and|or|which|what|why|how|you|your|worth|explained|guide|everything|should|know|complete|comprehensive)-/g;
  let s = legacy;
  for (let i = 0; i < 3; i += 1) s = s.replace(STOP, "-");
  s = s.replace(/-{2,}/g, "-").replace(/^-|-$/g, "");
  const parts = s.split("-");
  return parts.length > 6 ? parts.slice(0, 6).join("-") : s;
}

/** Every legacy post opens with the same "If you are excited to understand more
 *  about X, please consult our experienced doctors…" blurb and often closes with
 *  a "Contact us to find out if you're a suitable candidate" line. The new
 *  template renders its own CTA block, so both are chrome, not content. */
function stripBoilerplate(md) {
  return md
    .replace(/^\s*[“"']?If you are excited to understand more[\s\S]*?\n\n/i, "")
    .replace(/\n+Contact us to find out if you[\s\S]*?$/i, "\n")
    .replace(/^\s*#+\s*Table of Contents\s*$/gim, "")
    .trim();
}

/**
 * Pull every inline wp-content image into content/blog/media/<slug>/ and
 * rewrite the markdown to its R2 URL. Without this, 152 migrated posts
 * would keep hotlinking the old subdomain — which breaks the moment the blog
 * host is retired, and leaks the migration to anyone reading the HTML.
 */
async function localiseImages(md, slug) {
  const matches = [...md.matchAll(/!\[([^\]]*)\]\((https:\/\/blog\.kaiteki\.my\/wp-content\/[^)\s]+)\)/g)];
  if (!matches.length) return { md, count: 0 };

  const dir = path.join(OUT_IMG, slug);
  await mkdir(dir, { recursive: true });

  let out = md;
  let n = 0;
  for (const [full, alt, url] of matches) {
    // WordPress appends its resize suffix (-1024x768); the unsized original is
    // the better source for next/image to work from.
    const original = url.replace(/-\d+x\d+(?=\.[a-z]+$)/i, "");
    const name = path.basename(new URL(original).pathname);
    try {
      const res = await fetch(original);
      const buf = Buffer.from(await (res.ok ? res : await fetch(url)).arrayBuffer());
      await writeFile(path.join(dir, name), buf);
      out = out.replace(full, `![${alt}](${CDN}/${slug}/${name})`);
      n += 1;
    } catch {
      // Leave the original URL in place and let the review catch it.
    }
  }
  return { md: out, count: n };
}

/**
 * Rewrite blog.kaiteki.my cross-links to their new home using the manifest's
 * legacy→proposed slug map. This is the single biggest reason a bulk migration
 * is viable: the legacy archive is densely interlinked, and re-pointing those
 * by hand across 152 posts is where the real hours would go.
 *
 * Links whose target is not in the manifest (the doorway pages, the spam, dead
 * posts) are left untouched and reported, because those need a human decision.
 */
function rewriteLinks(md, slugMap) {
  const unresolved = new Set();
  const out = md.replace(
    /\]\(https:\/\/blog\.kaiteki\.my\/([a-z0-9-]+)\/?(#[^)]*)?\)/g,
    (full, legacy, hash = "") => {
      const target = slugMap[legacy];
      if (!target) {
        unresolved.add(legacy);
        return full;
      }
      return `](/blog/${target}${hash})`;
    },
  );
  return { md: out, unresolved: [...unresolved] };
}

const decode = (s = "") =>
  s
    .replace(/&#8217;|&#39;|&rsquo;/g, "'")
    .replace(/&#8220;|&#8221;|&ldquo;|&rdquo;/g, '"')
    .replace(/&#8211;|&ndash;/g, "–")
    .replace(/&#8212;|&mdash;/g, "—")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/<[^>]+>/g, "")
    .trim();

const wordCount = (md) => md.split(/\s+/).filter(Boolean).length;

async function fetchAll(resource, fields) {
  const out = [];
  for (let page = 1; ; page += 1) {
    const batch = await get(`${API}/${resource}?per_page=100&page=${page}&_fields=${fields}`);
    out.push(...batch);
    if (batch.length < 100) return out;
  }
}

async function manifest() {
  await mkdir(WORK, { recursive: true });
  // The legacy blog splits its content across BOTH WP types: the editorial
  // archive is `posts`, but the 51 "skin-specialist-in-<area>" doorway pages
  // are `pages`. Fetching only posts silently drops a third of the URL
  // inventory — and therefore a third of the redirect map.
  const [posts, pages, cats, users] = await Promise.all([
    fetchAll("posts", "id,slug,date,modified,title,categories,author,featured_media"),
    fetchAll("pages", "id,slug,date,modified,title,author,featured_media"),
    fetchAll("categories", "id,slug"),
    fetchAll("users", "id,slug"),
  ]);
  const catById = Object.fromEntries(cats.map((c) => [c.id, c.slug]));
  const userById = Object.fromEntries(users.map((u) => [u.id, u.slug]));

  const toRow = (p, wpType) => {
    const wpCats = (p.categories ?? []).map((id) => catById[id]).filter(Boolean);
    const wpAuthor = userById[p.author];
    return {
      wpType,
      legacySlug: p.slug,
      proposedSlug: proposeSlug(p.slug),
      title: decode(p.title.rendered),
      published: p.date.slice(0, 10),
      modified: p.modified.slice(0, 10),
      wpCategories: wpCats,
      category: wpCats.map((c) => CATEGORIES[c]).find(Boolean) ?? null,
      wpAuthor,
      author: AUTHORS[wpAuthor] ?? null,
      hasImage: p.featured_media > 0,
    };
  };
  const rows = [...posts.map((p) => toRow(p, "post")), ...pages.map((p) => toRow(p, "page"))];

  const file = path.join(WORK, "manifest.json");
  await writeFile(file, JSON.stringify(rows, null, 2));

  const unmappedAuthor = rows.filter((r) => !r.author);
  const unmappedCat = rows.filter((r) => !r.category);
  const noImage = rows.filter((r) => !r.hasImage);
  const collide = rows.filter((r, i) => rows.findIndex((x) => x.proposedSlug === r.proposedSlug) !== i);

  console.log(
    `manifest: ${rows.length} URLs (${posts.length} posts + ${pages.length} pages) → ${path.relative(ROOT, file)}`,
  );
  console.log(`  needs an author assigned : ${unmappedAuthor.length}`);
  console.log(`  needs a category assigned: ${unmappedCat.length}`);
  console.log(`  no featured image        : ${noImage.length}`);
  console.log(`  proposed-slug collisions : ${collide.length}`);
  if (collide.length) console.log("    " + collide.map((c) => c.proposedSlug).join(", "));
}

/** legacy slug → proposed new slug, read from the manifest (build it first with
 *  --manifest). Cached so a batch import reads it once. */
let _slugMap;
async function slugMap() {
  if (_slugMap) return _slugMap;
  try {
    const rows = JSON.parse(await readFile(path.join(WORK, "manifest.json"), "utf8"));
    _slugMap = Object.fromEntries(rows.map((r) => [r.legacySlug, r.proposedSlug]));
  } catch {
    console.warn("  ! no manifest.json — cross-links left pointing at the old host");
    _slugMap = {};
  }
  return _slugMap;
}

async function importPost(legacySlug) {
  const [post] = await get(
    `${API}/posts?slug=${legacySlug}&_fields=id,slug,date,modified,title,content,excerpt,categories,author,featured_media`,
  );
  if (!post) throw new Error(`no post with slug "${legacySlug}"`);

  const [cats, users] = await Promise.all([
    fetchAll("categories", "id,slug"),
    fetchAll("users", "id,slug"),
  ]);
  const wpCats = post.categories
    .map((id) => cats.find((c) => c.id === id)?.slug)
    .filter(Boolean);
  const wpAuthor = users.find((u) => u.id === post.author)?.slug;

  const slug = proposeSlug(post.slug);

  await mkdir(OUT_MDX, { recursive: true });
  await mkdir(OUT_IMG, { recursive: true });

  let body = stripBoilerplate(turndown.turndown(unElementor(post.content.rendered)));
  const localised = await localiseImages(body, slug);
  body = localised.md;
  const linked = rewriteLinks(body, await slugMap());
  body = linked.md;
  const words = wordCount(body);

  // Featured image, kept at its original extension.
  let image = null;
  if (post.featured_media) {
    const media = await get(`${API}/media/${post.featured_media}?_fields=source_url,alt_text`);
    const ext = path.extname(new URL(media.source_url).pathname) || ".jpg";
    image = { path: `${CDN}/${slug}/${slug}${ext}`, alt: media.alt_text || "" };
    const buf = Buffer.from(await (await fetch(media.source_url)).arrayBuffer());
    await mkdir(path.join(OUT_IMG, slug), { recursive: true });
    await writeFile(path.join(OUT_IMG, slug, `${slug}${ext}`), buf);
  }

  const mdxPath = path.join(OUT_MDX, `${slug}.mdx`);
  const exists = existsSync(mdxPath);
  await writeFile(exists ? `${mdxPath}.new` : mdxPath, `${body}\n`);

  // Compliance pre-flight.
  const flags = [];
  for (const re of RISKY) {
    for (const m of body.matchAll(re)) {
      const line = body.slice(0, m.index).split("\n").length;
      flags.push(`    L${line}  ${m[0]}`);
    }
  }

  const entry = `  {
    slug: ${JSON.stringify(slug)},
    title: ${JSON.stringify(decode(post.title.rendered))},
    description: ${JSON.stringify(decode(post.excerpt.rendered).slice(0, 160))},
    category: ${JSON.stringify(wpCats.map((c) => CATEGORIES[c]).find(Boolean) ?? "REVIEW: unmapped")},
    image: ${JSON.stringify(image?.path ?? "REVIEW: no featured image")},
    imageAlt: ${JSON.stringify(image?.alt || "REVIEW: write alt text")},
    author: ${JSON.stringify(AUTHORS[wpAuthor] ?? `REVIEW: unmapped WP author "${wpAuthor}"`)},
    publishedAt: ${JSON.stringify(post.date.slice(0, 10))},
    updatedAt: ${JSON.stringify(post.modified.slice(0, 10))},
    readingMinutes: ${Math.max(1, Math.round(words / 200))},
    leadAnswer: "REVIEW: write the 40-60 word answer-first capsule",
    legacyPath: ${JSON.stringify(`/${post.slug}/`)},
  },`;

  console.log(`\n=== ${post.slug} → /blog/${slug} ===`);
  console.log(`  body      : ${path.relative(ROOT, mdxPath)}${exists ? " (.new — file existed)" : ""}`);
  console.log(`  words     : ${words}`);
  console.log(`  hero      : ${image?.path ?? "none"}`);
  console.log(`  inline img: ${localised.count} localised`);
  console.log(
    `  links     : rewritten to /blog${linked.unresolved.length ? `; ${linked.unresolved.length} unresolved → ${linked.unresolved.join(", ")}` : ""}`,
  );
  console.log(`  wp author : ${wpAuthor} → ${AUTHORS[wpAuthor] ?? "UNMAPPED"}`);
  console.log(`  wp cats   : ${wpCats.join(", ") || "none"}`);
  console.log(`  compliance flags: ${flags.length}`);
  if (flags.length) console.log(flags.slice(0, 12).join("\n"));
  console.log(`\n  draft content/data/blog.ts entry:\n${entry}`);
  return { slug, words, flags: flags.length };
}

const args = process.argv.slice(2);
if (args[0] === "--manifest") {
  await manifest();
} else if (args.length) {
  const results = [];
  for (const s of args) results.push(await importPost(s));
  console.log(
    `\nimported ${results.length} post(s); ${results.reduce((n, r) => n + r.flags, 0)} compliance flags to review`,
  );
} else {
  console.error("usage: node scripts/blog-import.mjs --manifest | <legacy-slug> [...]");
  process.exit(1);
}
