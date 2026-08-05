// Generates the 301 map for retiring blog.kaiteki.my.
//
//   node scripts/blog-redirects.mjs [--format apache|nginx|csv]
//
// IMPORTANT: these rules run on the BLOG HOST, not in next.config.ts. Next can
// only redirect hosts it serves, and it does not serve blog.kaiteki.my — so
// this output is for whatever fronts the WordPress install (Apache/nginx/
// Cloudflare) until the subdomain is switched off entirely.
//
// Reads scripts/.migration/manifest.json (build it with
// `node scripts/blog-import.mjs --manifest`), so the post map covers the whole
// legacy archive rather than only the posts already ported.
import { readFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.join(import.meta.dirname, "..");
const WORK = path.join(ROOT, "scripts", ".migration");
const SITE = "https://kaiteki.my";

/**
 * Doorway-page area → branch slug. These 51 pages ("skin-specialist-in-cheras",
 * "dermatologist-in-puchong", …) earn 22 clicks off 14.8k impressions and are
 * near-duplicates of each other, which is what Google's spam policy calls a
 * doorway. They are NOT migrated; the local intent is folded into the nine real
 * branch pages, which carry NAP, hours, geo and MedicalClinic schema.
 *
 * Derived from each branch's `serves` list in content/data/branches.ts, then
 * hand-checked — a permanent redirect target is not something to infer by
 * fuzzy match. Areas with no sensible branch go to the /locations hub.
 */
const AREA_TO_BRANCH = {
  // Kuala Lumpur
  "mont-kiara": "mont-kiara",
  cheras: "cheras",
  "bukit-jalil": "bukit-jalil",
  "sri-petaling": "bukit-jalil",
  puchong: "bukit-jalil",
  "bukit-bintang": "four-seasons-kl",
  ampang: "four-seasons-kl",
  "kuala-lumpur": "four-seasons-kl",
  "mid-valley": "four-seasons-kl",
  bangsar: "four-seasons-kl",
  kepong: "mont-kiara",
  // Selangor
  "petaling-jaya": "petaling-jaya",
  ss2: "petaling-jaya",
  damansara: "petaling-jaya",
  "kota-damansara": "petaling-jaya",
  ttdi: "petaling-jaya",
  "subang-jaya": "petaling-jaya",
  "shah-alam": "kota-kemuning",
  "kota-kemuning": "kota-kemuning",
  klang: "kota-kemuning",
  "setia-alam": "kota-kemuning",
  // Johor
  "johor-bahru": "southkey-johor-bahru",
};

const DOORWAY_RE = /^(skin-specialist|skin-clinic|dermatologist|aesthetic-clinic)-in-(.+)$/;

/** Injected piracy spam from a compromised WordPress. 410 Gone — never redirect
 *  it, because a 301 would pass its (toxic) signals onto the new domain. */
const SPAM = ["kmspico-download-for-windows-10", "microsoft-office-activator-download"];

/** Malay-language posts. Per the migration decision these move to the /ms
 *  locale rather than being retired — they pull 14.6k impressions, which is
 *  real Malay demand. */
const MALAY = [
  "apakah-itu-post-inflammatory-hyperpigmentation-pih-parut-jerawat-hitam",
  "cara-hilangkan-eyebag",
  "jeragat-muka-punca-jenis-cara-hilangkan-degan-selamat",
  "kulit-muka-kering-punca-cara-rawatan-berkesan",
  "kulit-muka-kusam",
  "muka-breakout-punca-cara-atasi-dan-bila-perlu-rawatan-klinik",
  "pigmentasi-vs-jeragat-punca-ciri-pilihan-rawatan",
  "punca-rambut-gugur-kenali-sebab-dan-cara-mengatasinya",
];

const manifest = JSON.parse(await readFile(path.join(WORK, "manifest.json"), "utf8"));
const bySlug = Object.fromEntries(manifest.map((r) => [r.legacySlug, r]));

/** @type {{from: string, to: string|null, status: 301|410, why: string}[]} */
const rules = [];
const seen = new Set();
const add = (from, to, status, why) => {
  if (seen.has(from)) return;
  seen.add(from);
  rules.push({ from, to, status, why });
};

add("/", `${SITE}/blog`, 301, "blog home");
add("/blogs", `${SITE}/blog`, 301, "legacy post index");

for (const s of SPAM) add(`/${s}`, null, 410, "injected spam — must not pass signals");

for (const s of MALAY) {
  const row = bySlug[s];
  add(`/${s}`, `${SITE}/ms/blog/${row?.proposedSlug ?? s}`, 301, "Malay post → /ms locale");
}

// Doorway pages. Iterate the manifest so we only emit rules for URLs that exist.
const unmappedAreas = new Set();
for (const row of manifest) {
  const m = DOORWAY_RE.exec(row.legacySlug);
  if (!m) continue;
  const branch = AREA_TO_BRANCH[m[2]];
  if (!branch) unmappedAreas.add(m[2]);
  add(
    `/${row.legacySlug}`,
    branch ? `${SITE}/locations/${branch}` : `${SITE}/locations`,
    301,
    branch ? `doorway → ${branch}` : "doorway → locations hub (no branch match)",
  );
}

// Editorial archive.
for (const row of manifest.filter((r) => r.wpType === "post")) {
  add(`/${row.legacySlug}`, `${SITE}/blog/${row.proposedSlug}`, 301, "post");
}

// Any WP *page* that isn't a doorway (about pages, landing pages, leftovers).
// These get flagged rather than guessed at — a page is not automatically a blog
// post, and pointing one at /blog/<slug> would 301 into a 404.
for (const row of manifest.filter((r) => r.wpType === "page")) {
  add(`/${row.legacySlug}`, `${SITE}/blog`, 301, "REVIEW: unclassified WP page");
}

const fmt = (process.argv.find((a) => a.startsWith("--format=")) ?? "--format=apache").split("=")[1];
const lines = [];

if (fmt === "apache") {
  lines.push("# blog.kaiteki.my → kaiteki.my — generated by scripts/blog-redirects.mjs");
  lines.push("# Place in the WordPress host's .htaccess ABOVE the WordPress rewrite block.");
  lines.push("RewriteEngine On");
  for (const r of rules) {
    if (r.status === 410) {
      lines.push(`# ${r.why}`);
      lines.push(`RewriteRule ^${r.from.slice(1)}/?$ - [G,L]`);
    } else {
      lines.push(`RewriteRule ^${r.from === "/" ? "$" : `${r.from.slice(1)}/?$`} ${r.to} [R=301,L]`);
    }
  }
} else if (fmt === "nginx") {
  lines.push("# blog.kaiteki.my → kaiteki.my — generated by scripts/blog-redirects.mjs");
  for (const r of rules) {
    lines.push(
      r.status === 410
        ? `location = ${r.from} { return 410; }  # ${r.why}`
        : `location = ${r.from} { return 301 ${r.to}; }`,
    );
  }
} else {
  lines.push("from,to,status,why");
  for (const r of rules) lines.push(`${r.from},${r.to ?? ""},${r.status},${r.why}`);
}

console.log(lines.join("\n"));

const counts = rules.reduce((acc, r) => ({ ...acc, [r.why.split(" →")[0]]: (acc[r.why.split(" →")[0]] ?? 0) + 1 }), {});
console.error(`\n# ${rules.length} rules: ${JSON.stringify(counts)}`);
if (unmappedAreas.size) console.error(`# areas with no branch match: ${[...unmappedAreas].join(", ")}`);
