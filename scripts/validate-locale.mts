// Gate for locale copy (docs/15 item 4.4, docs/18 §7–8, docs/19).
//
//   node --experimental-strip-types scripts/validate-locale.mts
//
// For every content/i18n/concerns/<locale>/<slug>.json:
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
//              (content/i18n/concerns/_en/); pnpm i18n:sync re-aligns by text

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { concernBySlug } from "../content/data/concerns.ts";
import { localePages } from "../content/i18n/pages.ts";
import { copyStrings, overlay } from "../lib/i18n-overlay.ts";

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
    /\btermurah\b/i, /\bhilang terus\b/i, /\bhilang sepenuhnya\b/i,
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
  ms: [/dijamin/i, /jaminan/i, /\bkekal\b/i, /\bpakar kulit\b/i, /\bklinik pakar\b/i],
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

for (const locale of ["zh", "ms"] as const) {
  const dir = join(root, "content", "i18n", "concerns", locale);
  const files = existsSync(dir) ? readdirSync(dir).filter((f) => f.endsWith(".json")) : [];
  const ledger = localePages[locale];

  for (const f of files) {
    const slug = f.slice(0, -5);
    const where = `${locale}/${slug}`;
    const en = concernBySlug(slug);
    if (!en) {
      fail(where, "L-01", "no English concern with this slug");
      continue;
    }
    let tr: unknown;
    try {
      tr = JSON.parse(readFileSync(join(dir, f), "utf8"));
    } catch (e) {
      fail(where, "L-01", `invalid JSON: ${(e as Error).message}`);
      continue;
    }
    // L-10: the translation was made from content/i18n/concerns/_en/<slug>.json.
    // If the English copy has moved on since, positions can shift and a
    // translated sentence would land in the wrong slot, so re-align first.
    const snapFile = join(root, "content", "i18n", "concerns", "_en", `${slug}.json`);
    if (!existsSync(snapFile)) {
      fail(where, "L-10", "no English snapshot in content/i18n/concerns/_en/");
    } else {
      const record: Record<string, unknown> = { ...en };
      delete record.archetype;
      delete record.depth;
      const now = JSON.stringify(copyStrings(JSON.parse(JSON.stringify(record))));
      const then = JSON.stringify(copyStrings(JSON.parse(readFileSync(snapFile, "utf8"))));
      if (now !== then) fail(where, "L-10", "English changed since this was translated: run pnpm i18n:sync, then translate the blanks");
    }

    const { missing } = overlay(en, tr);
    if (missing.length) fail(where, "L-01", `${missing.length} untranslated: ${missing.slice(0, 5).join(", ")}${missing.length > 5 ? " …" : ""}`);

    const enLen = lengths(en);
    for (const [p, n] of lengths(tr)) {
      if (enLen.has(p) && enLen.get(p) !== n) warn(where, "L-06", `${p}: ${n} items vs ${enLen.get(p)} in English`);
    }

    for (const [p, s] of strings(tr)) {
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

    const o = tr as { seoTitle?: string; seoDescription?: string };
    const [tMax, dMin, dMax] = locale === "zh" ? [32, 70, 90] : [60, 130, 165];
    if (o.seoTitle && [...o.seoTitle].length > tMax) warn(where, "L-05", `seoTitle ${[...o.seoTitle].length} chars (max ${tMax})`);
    if (o.seoDescription) {
      const n = [...o.seoDescription].length;
      if (n < dMin || n > dMax) warn(where, "L-05", `seoDescription ${n} chars (want ${dMin}–${dMax})`);
    }

    if (!ledger[`/concerns/${slug}`]) warn(where, "L-08", "no ledger entry in content/i18n/pages.ts, so no URL");
  }

  const index = readFileSync(join(root, "content", "i18n", "concerns", "index.ts"), "utf8");
  for (const f of files) {
    if (!index.includes(`"./${locale}/${f}"`)) fail(`${locale}/${f.slice(0, -5)}`, "L-09", "not in content/i18n/concerns/index.ts: run pnpm i18n:index");
  }

  for (const path of Object.keys(ledger)) {
    const m = path.match(/^\/concerns\/([^/]+)$/);
    if (m && !files.includes(`${m[1]}.json`)) fail(`${locale}${path}`, "L-07", "ledger entry with no translation file");
  }
  console.log(`${locale}: ${files.length} concern translation(s) checked`);
}

console.log(`\n${failures} failure(s) · ${warnings} warning(s)`);
process.exit(failures ? 1 : 0);
