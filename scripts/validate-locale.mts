// Gate for locale copy (docs/15 item 4.4, docs/18 §7–8, docs/19).
//
//   node --experimental-strip-types scripts/validate-locale.mts
//
// For every content/i18n/<kind>/<locale>/<slug>.json (kinds: scripts/i18n-kinds.mts):
//   L-01 fail  parses, and supplies every piece of copy the English record has
//   L-02 fail  no em-dashes (house voice)
//   L-03 fail  no banned terms: superlatives, guarantees, specialist titles,
//              brand-name drugs (docs/18 §7), per locale
//   L-03r warn guarantee/permanence words and specialist/surgery words: fine
//              only negated, factual, or as a referral, never about Kaiteki
//   L-04 fail  Malay: no Indonesian forms (docs/18 §7.2)
//   L-05 warn  seoTitle / seoDescription length for the locale's script
//   L-06 warn  array lengths differ from English (extra items are ignored)
//   L-07 fail  a ledger entry (content/i18n/pages.ts) with no translation file
//   L-08 warn  a translation file with no ledger entry (it has no URL yet)
//   L-09 fail  a translation file missing from the static index (pnpm i18n:index)
//   L-10 fail  the English copy changed since the translation's snapshot
//              (content/i18n/<kind>/_en/); pnpm i18n:sync <kind> re-aligns by text
// And over content/i18n/locations.ts: L-02 to L-05 and L-06 as above, plus
//   L-11 fail  a branch with a ledger entry but no copy in that file

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { englishRecord, KINDS, LOCALES, type Kind } from "./i18n-kinds.mts";
import { localePages } from "../content/i18n/pages.ts";
import { copyStrings, overlay } from "../lib/i18n-overlay.ts";
import { branchCopy, locationsCopy } from "../content/i18n/locations.ts";
import { branches } from "../content/data/branches.ts";
import { doctorCopy, productCopy, staticPages } from "../content/i18n/static-pages.ts";
import { doctors } from "../content/data/doctors.ts";
import { products } from "../content/data/products.ts";
import doctorsSnapshotEn from "../content/i18n/doctors/_en.json" with { type: "json" };
import productsSnapshotEn from "../content/i18n/products/_en.json" with { type: "json" };

const root = process.cwd();
let failures = 0;
let warnings = 0;
const fail = (where: string, rule: string, msg: string) => {
  failures++;
  console.log(`  FAIL  ${where} · ${rule}: ${msg}`);
};
const warn = (where: string, rule: string, msg: string) => {
  warnings++;
  console.log(`  warn  ${where} · ${rule}: ${msg}`);
};

// Whole-word for Latin, substring for Hanzi. Kept short and specific: a term
// here is one that is never acceptable in this locale's copy.
const BANNED: Record<"zh" | "ms", (string | RegExp)[]> = {
  zh: [
    "最好", "最佳", /第一(名|品牌|家)/, "顶尖", "全马唯一", "全马最多", "领先", "最便宜",
    "根治", "彻底去除", "一次见效", "立即见效",
    "无痛", "零风险", "无副作用", "安全有效",
    "瘦脸针", "美白针", "暗疮针", /\bbotox\b/i, "雷射", "肝斑", "海扶刀", "美容院",
  ],
  ms: [
    /\bterbaik\b/i, /\bpaling bagus\b/i, /\bnombor 1\b/i, /\bno\.? ?1\b/i, /\bterkemuka\b/i,
    /\btermurah\b/i,
    /\bberkesan 100%/i, /\btanpa sakit\b/i, /\btiada kesan sampingan\b/i, /\bselamat 100%/i,
    /\bbotox\b/i, /\bsuntikan putih\b/i, /\btemujanji\b/i,
  ],
};

// Guarantee/permanence words are legitimate when negated ("不作保证", "tidak
// dijamin", the results disclaimer itself), so they are flagged for a human
// read rather than failed.
const REVIEW: Record<"zh" | "ms", RegExp[]> = {
  // Also referral words: a page may send someone to a dermatologist or contrast
  // with surgery, but must never describe Kaiteki as either.
  zh: [/保证/, /永久/, /皮肤科/, /皮肤专科/, /整形/, /整容/],
  ms: [
    /dijamin/i,
    /jaminan/i,
    /\bkekal\b/i,
    /\bhilang terus\b/i,
    /\bhilang sepenuhnya\b/i,
    /\bpakar kulit\b/i,
    /\bklinik pakar\b/i,
  ],
};

const INDONESIAN = [
  /\bperawatan\b/i, /\bbiaya\b/i, /\bdokter\b/i, /\bgratis\b/i, /\bkarena\b/i,
  /\bbisa\b/i, /\bflek hitam\b/i, /\bbopeng\b/i, /\bklinik estetika\b/i,
];

const strings = (x: unknown, path = ""): [string, string][] =>
  typeof x === "string"
    ? [[path, x]]
    : Array.isArray(x)
      ? x.flatMap((v, i) => strings(v, `${path}[${i}]`))
      : x && typeof x === "object"
        ? Object.entries(x).flatMap(([k, v]) => strings(v, path ? `${path}.${k}` : k))
        : [];

function lengths(x: unknown, path = ""): Map<string, number> {
  const m = new Map<string, number>();
  const walk = (v: unknown, p: string) => {
    if (Array.isArray(v)) {
      m.set(p, v.length);
      v.forEach((it, i) => walk(it, `${p}[${i}]`));
    } else if (v && typeof v === "object") {
      for (const [k, w] of Object.entries(v)) walk(w, p ? `${p}.${k}` : k);
    }
  };
  walk(x, path);
  return m;
}

/** L-02, L-03, L-03r and L-04 over every string in `x`. */
function checkCopy(where: string, locale: "zh" | "ms", x: unknown) {
  for (const [p, s] of strings(x)) {
    if (s.includes("—")) fail(where, "L-02", `em-dash in ${p}`);
    for (const t of BANNED[locale]) {
      const hit = typeof t === "string" ? s.includes(t) : t.test(s);
      if (hit) fail(where, "L-03", `"${typeof t === "string" ? t : t.source}" in ${p}`);
    }
    for (const t of REVIEW[locale]) if (t.test(s)) warn(where, "L-03r", `check "${t.source}" is negated or factual in ${p}`);
    if (locale === "ms") {
      for (const t of INDONESIAN) if (t.test(s)) fail(where, "L-04", `Indonesian "${t.source}" in ${p}`);
    }
  }
}

type SeoFields = { seoTitle?: string | null; seoDescription?: string | null; title?: string | null; description?: string | null };

/** L-05: title and description lengths for the locale's script. */
function checkSeo(where: string, locale: "zh" | "ms", o: SeoFields) {
  const title = o.seoTitle ?? o.title;
  const description = o.seoDescription ?? o.description;
  const [tMax, dMin, dMax] = locale === "zh" ? [32, 70, 90] : [60, 130, 165];
  if (title && [...title].length > tMax) warn(where, "L-05", `seoTitle ${[...title].length} chars (max ${tMax})`);
  if (description) {
    const n = [...description].length;
    if (n < dMin || n > dMax) warn(where, "L-05", `seoDescription ${n} chars (want ${dMin}–${dMax})`);
  }
}

for (const kind of Object.keys(KINDS) as Kind[]) {
for (const locale of LOCALES) {
  const kroot = join(root, "content", "i18n", kind);
  const dir = join(kroot, locale);
  const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".json")) : [];
  const ledger = localePages[locale];

  for (const f of files) {
    const slug = f.slice(0, -5);
    const where = `${kind}/${locale}/${slug}`;
    const en = englishRecord(kind, slug);
    if (!en) {
      fail(where, "L-01", `no English ${kind} record with this slug`);
      continue;
    }
    let tr: unknown;
    try {
      tr = JSON.parse(readFileSync(join(dir, f), "utf8"));
    } catch (e) {
      fail(where, "L-01", `invalid JSON: ${(e as Error).message}`);
      continue;
    }
    // L-10: the translation was made from content/i18n/<kind>/_en/<slug>.json.
    // If the English copy has moved on since, positions can shift and a
    // translated sentence would land in the wrong slot, so re-align first.
    const snapFile = join(kroot, "_en", `${slug}.json`);
    if (!existsSync(snapFile)) {
      fail(where, "L-10", `no English snapshot in content/i18n/${kind}/_en/`);
    } else {
      const now = JSON.stringify(copyStrings(en));
      const then = JSON.stringify(copyStrings(JSON.parse(readFileSync(snapFile, "utf8"))));
      if (now !== then) fail(where, "L-10", `English changed since this was translated: run pnpm i18n:sync ${kind}, then translate the blanks`);
    }

    const { missing } = overlay(en, tr);
    if (missing.length) fail(where, "L-01", `${missing.length} untranslated: ${missing.slice(0, 5).join(", ")}${missing.length > 5 ? " …" : ""}`);

    const enLen = lengths(en);
    for (const [p, n] of lengths(tr)) {
      if (enLen.has(p) && enLen.get(p) !== n) warn(where, "L-06", `${p}: ${n} items vs ${enLen.get(p)} in English`);
    }

    checkCopy(where, locale, tr);
    checkSeo(where, locale, tr as SeoFields);

    if (!ledger[KINDS[kind].path(slug)]) warn(where, "L-08", "no ledger entry in content/i18n/pages.ts, so no URL");
  }

  const index = existsSync(join(kroot, "index.ts")) ? readFileSync(join(kroot, "index.ts"), "utf8") : "";
  for (const f of files) {
    if (!index.includes(`"./${locale}/${f}"`)) fail(`${kind}/${locale}/${f.slice(0, -5)}`, "L-09", `not in content/i18n/${kind}/index.ts: run pnpm i18n:index`);
  }

  for (const path of Object.keys(ledger)) {
    const m = path.match(new RegExp(`^/${kind}/([^/]+)$`));
    if (m && !files.includes(`${m[1]}.json`)) fail(`${locale}${path}`, "L-07", "ledger entry with no translation file");
  }
  console.log(`${kind}/${locale}: ${files.length} translation(s) checked`);
}
}

// Copy that lives in a TypeScript dictionary rather than a JSON overlay. Only
// modules with type-only imports load here (node resolves no "@/").
for (const locale of LOCALES) {
  checkCopy(`locations/${locale}`, locale, locationsCopy[locale]);
  checkSeo(`locations/${locale}/hub`, locale, locationsCopy[locale].hub);
  for (const b of branches) {
    const c = branchCopy[locale][b.slug];
    if (!c) {
      if (localePages[locale][`/locations/${b.slug}`]) fail(`locations/${locale}/${b.slug}`, "L-11", "ledger entry with no branch copy in content/i18n/locations.ts");
      continue;
    }
    checkCopy(`locations/${locale}/${b.slug}`, locale, c);
    checkSeo(`locations/${locale}/${b.slug}`, locale, c);
    if (c.hours.length !== b.hours.length) warn(`locations/${locale}/${b.slug}`, "L-06", `hours: ${c.hours.length} lines vs ${b.hours.length} in English`);
  }
  console.log(`locations/${locale}: hub + ${Object.keys(branchCopy[locale]).length} branch(es) checked`);
}

// content/i18n/static-pages.ts: doctors, our story, products, privacy.
// L-01: every string the English has (non-empty) is present and non-empty;
// L-06: arrays as long as the English; L-10: the per-doctor and per-product
// English snapshots still match content/data.
function missingVs(en: unknown, tr: unknown, path = ""): string[] {
  if (typeof en === "string") return en.trim() && !(typeof tr === "string" && tr.trim()) ? [path] : [];
  if (Array.isArray(en)) {
    if (!Array.isArray(tr)) return [path];
    if (tr.length !== en.length) warn("static-pages", "L-06", `${path}: ${tr.length} items vs ${en.length} in English`);
    return en.flatMap((v, i) => missingVs(v, tr[i], `${path}[${i}]`));
  }
  if (en && typeof en === "object") {
    const t = (tr && typeof tr === "object" ? tr : {}) as Record<string, unknown>;
    return Object.entries(en).flatMap(([k, v]) => missingVs(v, t[k], path ? `${path}.${k}` : k));
  }
  return [];
}
const doctorSnapshot = (d: (typeof doctors)[number]) => ({ fullName: d.fullName, role: d.role ?? null, bio: d.bio ?? null, seoTitle: d.seoTitle ?? null, seoDescription: d.seoDescription ?? null });
const productSnapshot = (p: (typeof products)[number]) => ({ name: p.name, brand: p.brand, category: p.category, summary: p.summary, bestFor: p.bestFor ?? null, ingredients: p.ingredients ?? null, highlights: p.highlights ?? null, priceNote: p.priceNote ?? null });
for (const [what, snap, now] of [
  ["doctors", doctorsSnapshotEn, Object.fromEntries(doctors.map((d) => [d.slug, doctorSnapshot(d)]))],
  ["products", productsSnapshotEn, Object.fromEntries(products.map((p) => [p.slug, productSnapshot(p)]))],
] as const) {
  for (const slug of new Set([...Object.keys(snap), ...Object.keys(now)])) {
    if (JSON.stringify((snap as Record<string, unknown>)[slug]) !== JSON.stringify((now as Record<string, unknown>)[slug])) {
      fail(`${what}/${slug}`, "L-10", `English changed since this was translated: update content/i18n/${what}/_en.json and both translations`);
    }
  }
}
for (const locale of LOCALES) {
  const t = staticPages[locale];
  const miss = missingVs(staticPages.en, t);
  if (miss.length) fail(`static-pages/${locale}`, "L-01", `${miss.length} untranslated: ${miss.slice(0, 5).join(", ")}`);
  checkCopy(`static-pages/${locale}`, locale, t);
  for (const page of [t.doctors.hub, t.ourStory, t.products, t.privacy]) checkSeo(`static-pages/${locale}`, locale, page);
  for (const d of doctors) {
    const c = doctorCopy[locale][d.slug];
    const where = `doctors/${locale}/${d.slug}`;
    const m = missingVs(doctorSnapshot(d), c);
    if (m.length) fail(where, "L-01", `${m.length} untranslated: ${m.slice(0, 5).join(", ")}`);
    checkCopy(where, locale, c);
    checkSeo(where, locale, c ?? {});
  }
  for (const p of products) {
    const c = productCopy[locale][p.slug];
    const where = `products/${locale}/${p.slug}`;
    const m = missingVs(productSnapshot(p), c);
    if (m.length) fail(where, "L-01", `${m.length} untranslated: ${m.slice(0, 5).join(", ")}`);
    checkCopy(where, locale, c);
  }
  console.log(`static-pages/${locale}: 4 pages, ${doctors.length} doctors, ${products.length} products checked`);
}

console.log(`\n${failures} failure(s) · ${warnings} warning(s)`);
process.exit(failures ? 1 : 0);
