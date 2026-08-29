#!/usr/bin/env node
/**
 * Publishing gate for /blog. One command, run before every post ships:
 *
 *   pnpm check:blog
 *
 * It enforces the authoring contract in content/blog/AUTHORING.md so a post can
 * be written by anyone (or anything) and still be safe to merge: metadata within
 * SEO limits, every cross-reference resolving to a real page, every internal
 * link landing somewhere, house style intact.
 *
 * Errors fail the run. Warnings are judgement calls worth a second look but not
 * worth blocking a publish over.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { posts, categorySlug } from "../content/data/blog.ts";
import { doctorBySlug } from "../content/data/doctors.ts";
import { concernBySlug } from "../content/data/concerns.ts";
import { treatmentBySlug } from "../content/data/treatments.ts";
import { technologyBySlug } from "../content/data/technology.ts";
import { branchBySlug } from "../content/data/branches.ts";

const ROOT = process.cwd();
const BLOG_DIR = join(ROOT, "content", "blog");
const PUBLIC = join(ROOT, "public");
// The R2 bucket's custom domain, the only remote host next.config.ts allows.
const R2_HOST = "https://cdn.kaiteki.my/blog/";

const errors: string[] = [];
const warnings: string[] = [];
const err = (m: string) => errors.push(m);
const warn = (m: string) => warnings.push(m);

// ── Every path a post body is allowed to link to ────────────────────────────
// A link to a page that does not exist is a 404 we shipped ourselves, so the
// set is built from the same data the routes are generated from.
const STATIC_PATHS = [
  "/",
  "/blog",
  "/concerns",
  "/treatments",
  "/technology",
  "/locations",
  "/doctors",
  "/products",
  "/our-story",
  "/privacy",
];
const validPath = (p: string): boolean => {
  if (STATIC_PATHS.includes(p)) return true;
  const [, section, slug, ...rest] = p.split("/");
  if (rest.length) return section === "blog" && slug === "category" && !!categorySlug;
  switch (section) {
    case "blog":
      return posts.some((x) => x.slug === slug);
    case "concerns":
      return !!concernBySlug(slug);
    case "treatments":
      return !!treatmentBySlug(slug);
    case "technology":
      return !!technologyBySlug(slug);
    case "locations":
      return !!branchBySlug(slug);
    case "doctors":
      return !!doctorBySlug(slug);
    default:
      return false;
  }
};
const categoryPaths = new Set(posts.map((p) => `/blog/category/${categorySlug(p.category)}`));

// ── House style: no em-dashes in anything a reader sees ─────────────────────
// The client flagged the first published post as reading AI-generated, and the
// em-dash is the most visible tell. En-dashes in numeric ranges (10–15%) are
// correct typography and stay.
const EM_DASH = /—/;
const READER_FIELDS = ["title", "seoTitle", "description", "imageAlt", "leadAnswer"] as const;

/** Words of actual prose: fences, JSX blocks and markdown syntax removed. */
function wordCount(md: string): number {
  const prose = md
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[#*_>|`-]/g, " ");
  return prose.split(/\s+/).filter(Boolean).length;
}

const today = new Date().toISOString().slice(0, 10);
const isIsoDate = (s: string) => /^\d{4}-\d{2}-\d{2}$/.test(s) && !Number.isNaN(Date.parse(s));

// ── Per-post checks ─────────────────────────────────────────────────────────
const seen = new Set<string>();

for (const p of posts) {
  const at = `post ${p.slug}`;

  if (seen.has(p.slug)) err(`${at}: duplicate slug`);
  seen.add(p.slug);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(p.slug)) err(`${at}: slug must be lowercase-kebab-case`);

  // Metadata within the limits the SERP actually renders (docs/02 §3).
  const metaTitle = p.seoTitle ?? p.title;
  if (metaTitle.length > 60) err(`${at}: meta title ${metaTitle.length} chars (max 60)`);
  else if (metaTitle.length < 30) warn(`${at}: meta title only ${metaTitle.length} chars`);
  if (p.description.length < 120 || p.description.length > 170)
    err(`${at}: description ${p.description.length} chars (must be 120-170, aim 140-160)`);
  else if (p.description.length < 140)
    warn(`${at}: description ${p.description.length} chars (aim 140-160)`);

  // Answer-first capsule: 40-60 words is what stays extractable (docs/05 §1.3).
  const leadWords = p.leadAnswer.split(/\s+/).filter(Boolean).length;
  if (leadWords < 25 || leadWords > 90) err(`${at}: leadAnswer ${leadWords} words (must be 25-90)`);
  else if (leadWords < 40 || leadWords > 60) warn(`${at}: leadAnswer ${leadWords} words (aim 40-60)`);

  for (const f of READER_FIELDS) {
    const v = p[f];
    if (typeof v === "string" && EM_DASH.test(v)) err(`${at}: em-dash in ${f}`);
  }

  // Imagery. A hero is optional (most migrated posts have none and fall back to
  // the generated motif) but a broken path or a missing alt is not.
  if (p.image) {
    // New posts point at R2 (cdn.kaiteki.my); only repo-hosted paths can be
    // checked on disk. A wrong host is caught by next/image at build.
    if (p.image.startsWith("https://")) {
      if (!p.image.startsWith(R2_HOST)) err(`${at}: remote image must be on ${R2_HOST}`);
    } else if (!existsSync(join(PUBLIC, p.image))) err(`${at}: image missing ${p.image}`);
    if (!p.imageAlt) err(`${at}: image set but imageAlt missing`);
    else if (p.imageAlt.length < 30) warn(`${at}: imageAlt is thin (${p.imageAlt.length} chars)`);
  }

  // YMYL attribution: the byline and the reviewer must be real panel doctors.
  if (!doctorBySlug(p.author)) err(`${at}: author '${p.author}' is not a doctor slug`);
  if (p.reviewedBy && !doctorBySlug(p.reviewedBy))
    err(`${at}: reviewedBy '${p.reviewedBy}' is not a doctor slug`);

  for (const s of p.concerns ?? [])
    if (!concernBySlug(s)) err(`${at}: concern '${s}' not found`);
  for (const s of p.treatments ?? [])
    if (!treatmentBySlug(s)) err(`${at}: treatment '${s}' not found`);
  for (const s of p.technology ?? [])
    if (!technologyBySlug(s)) err(`${at}: technology '${s}' not found`);
  for (const s of p.related ?? []) {
    if (s === p.slug) err(`${at}: related links to itself`);
    else if (!posts.some((x) => x.slug === s)) err(`${at}: related post '${s}' not found`);
  }
  if (!(p.concerns ?? p.treatments ?? p.technology))
    warn(`${at}: no concern/treatment/technology mapped, so the post links out to nothing`);

  if (!isIsoDate(p.publishedAt)) err(`${at}: publishedAt '${p.publishedAt}' is not YYYY-MM-DD`);
  else if (p.publishedAt > today) warn(`${at}: publishedAt is in the future`);
  if (p.updatedAt) {
    if (!isIsoDate(p.updatedAt)) err(`${at}: updatedAt '${p.updatedAt}' is not YYYY-MM-DD`);
    else if (p.updatedAt < p.publishedAt) err(`${at}: updatedAt is before publishedAt`);
  }
  if (p.legacyPath && !/^\/.*\/$/.test(p.legacyPath))
    err(`${at}: legacyPath must start and end with '/'`);

  // ── Body ────────────────────────────────────────────────────────────────
  const file = join(BLOG_DIR, `${p.slug}.mdx`);
  if (!existsSync(file)) {
    err(`${at}: body missing at content/blog/${p.slug}.mdx`);
    continue;
  }
  const body = readFileSync(file, "utf8");
  const lines = body.split(/\r?\n/);

  let inFence = false;
  let h2s = 0;
  let sawH2 = false;
  lines.forEach((line, i) => {
    const where = `content/blog/${p.slug}.mdx:${i + 1}`;
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) return;
    if (EM_DASH.test(line)) err(`${where}: em-dash in body copy`);
    if (/^#\s/.test(line)) err(`${where}: body must not set an H1 (the title is the H1)`);
    if (/^##\s/.test(line)) {
      h2s += 1;
      sawH2 = true;
    }
    if (/^###\s/.test(line) && !sawH2) err(`${where}: H3 before any H2`);
    if (/^####+\s/.test(line) && h2s === 0) err(`${where}: heading nested under nothing`);
  });

  if (h2s < 2) err(`${at}: body has ${h2s} H2 section(s), needs at least 2`);

  // Internal links are the reason /blog exists (docs/02 §4).
  const links = [...body.matchAll(/\]\((\/[^)\s]*)\)/g)].map((m) => m[1]);
  const internal = links.map((l) => l.split(/[#?]/)[0].replace(/\/$/, "") || "/");
  for (const l of internal) {
    if (l.startsWith("/blog/category/")) {
      if (!categoryPaths.has(l)) err(`${at}: link to unknown category ${l}`);
      continue;
    }
    if (!validPath(l)) err(`${at}: internal link ${l} does not resolve to a page`);
  }
  if (internal.length < 2) warn(`${at}: only ${internal.length} internal link(s) in the body`);

  // Raw markdown images bypass next/image; <Figure> is the block for this.
  if (/!\[[^\]]*\]\(/.test(body)) warn(`${at}: markdown image in body, use <Figure> instead`);
  for (const tag of body.match(/<Figure[^>]*>/g) ?? []) {
    if (!/\salt="/.test(tag)) err(`${at}: <Figure> without alt text`);
    if (!/\ssrc="/.test(tag)) err(`${at}: <Figure> without src`);
  }

  // Reading time is shown on every card, so a wrong one is a small broken promise.
  const words = wordCount(body);
  if (words < 500) warn(`${at}: body is ${words} words, thin for a YMYL guide`);
  const estimate = Math.max(1, Math.round(words / 225));
  if (Math.abs(estimate - p.readingMinutes) > 3)
    warn(`${at}: readingMinutes ${p.readingMinutes} vs ~${estimate} from ${words} words`);

  for (const f of p.faqs ?? []) {
    if (!f.q.trim().endsWith("?")) warn(`${at}: FAQ question does not end in '?': ${f.q}`);
    if (EM_DASH.test(f.q) || EM_DASH.test(f.a)) err(`${at}: em-dash in an FAQ entry`);
  }
}

// ── Repo-level checks ───────────────────────────────────────────────────────
const bodies = readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
for (const f of bodies) {
  const slug = f.replace(/\.mdx$/, "");
  if (!posts.some((p) => p.slug === slug))
    err(`content/blog/${f}: no entry in content/data/blog.ts, so nothing renders it`);
}

const featured = posts.filter((p) => p.featured);
if (featured.length > 1)
  err(`featured: ${featured.length} posts marked featured, at most one may be`);

// The blog routes and components carry copy too (headings, intro lines, alt
// text), so the em-dash rule applies there as well. Code comments are stripped
// first: a note to a developer is not copy a patient reads.
const stripComments = (src: string) =>
  src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");

const walk = (dir: string) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      walk(p);
      continue;
    }
    if (!/\.tsx?$/.test(e.name)) continue;
    stripComments(readFileSync(p, "utf8"))
      .split(/\r?\n/)
      .forEach((line, i) => {
        if (EM_DASH.test(line)) err(`${p.replace(ROOT + "/", "")}:${i + 1}: em-dash in copy`);
      });
  }
};
walk(join(ROOT, "app", "blog"));
walk(join(ROOT, "components", "blog"));

// ── Report ──────────────────────────────────────────────────────────────────
if (warnings.length) {
  console.warn(`! ${warnings.length} warning(s):\n` + warnings.map((w) => "  - " + w).join("\n") + "\n");
}
if (errors.length) {
  console.error(`✗ blog: ${errors.length} error(s):\n` + errors.map((e) => "  - " + e).join("\n"));
  console.error("\n  Contract: content/blog/AUTHORING.md");
  process.exit(1);
}
console.log(`✓ blog: ${posts.length} post(s) pass the publishing gate`);
