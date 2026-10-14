// Re-align translations of a kind with the current English after an English edit.
//
//   node --experimental-strip-types scripts/i18n-sync.mts <kind> [--todo <dir>]
//
// Each translation was made from a snapshot of the English record, kept in
// content/i18n/<kind>/_en/<slug>.json. This pairs every English string in the
// snapshot with its translation, then rebuilds the translation on the CURRENT
// English structure, matching by English TEXT rather than position: a sentence
// that survived the edit keeps its translation wherever it moved, and a new or
// reworded one is left blank (validate:locale L-01 then fails until it is
// translated). The snapshot is refreshed to the current English.
//
// With --todo, writes <dir>/<locale>-<slug>.json listing each blank with the
// nearest old sentence and its translation as a hint, for the translator.

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { copyStrings, FIXED_KEYS, FIXED_ROOT_KEYS } from "../lib/i18n-overlay.ts";
import { englishRecord as record, parseKind } from "./i18n-kinds.mts";

const kind = parseKind(process.argv[2]);
const root = join(process.cwd(), "content", "i18n", kind);
const todoArg = process.argv.indexOf("--todo");
const todoDir = todoArg > 0 ? process.argv[todoArg + 1] : undefined;
if (todoDir) mkdirSync(todoDir, { recursive: true });

const englishRecord = (slug: string) => record(kind, slug);

// Character-bigram similarity, for the hint only (never used to fill a blank).
function similarity(a: string, b: string) {
  const grams = (s: string) => {
    const m = new Map<string, number>();
    for (let i = 0; i < s.length - 1; i++) m.set(s.slice(i, i + 2), (m.get(s.slice(i, i + 2)) ?? 0) + 1);
    return m;
  };
  const A = grams(a.toLowerCase());
  const B = grams(b.toLowerCase());
  let hit = 0;
  for (const [g, n] of A) hit += Math.min(n, B.get(g) ?? 0);
  return (2 * hit) / Math.max(1, a.length + b.length - 2);
}

let totalKept = 0;
let totalBlank = 0;
mkdirSync(join(root, "_en"), { recursive: true });

const slugs = new Set(
  ["zh", "ms"].flatMap((l) =>
    existsSync(join(root, l)) ? readdirSync(join(root, l)).filter((f) => f.endsWith(".json")).map((f) => f.slice(0, -5)) : [],
  ),
);

for (const slug of [...slugs].sort()) {
  const en = englishRecord(slug);
  if (!en) {
    console.log(`  skip  ${slug}: no English record`);
    continue;
  }
  const snapFile = join(root, "_en", `${slug}.json`);
  if (!existsSync(snapFile)) {
    console.log(`  FAIL  ${slug}: no English snapshot at _en/${slug}.json; cannot align safely`);
    process.exitCode = 1;
    continue;
  }
  const snap = JSON.parse(readFileSync(snapFile, "utf8"));
  const snapPairs = copyStrings(snap);

  for (const locale of ["zh", "ms"] as const) {
    const file = join(root, locale, `${slug}.json`);
    if (!existsSync(file)) continue;
    const tr = JSON.parse(readFileSync(file, "utf8"));
    const trByPath = new Map(copyStrings(tr));

    // English text → translation, from the snapshot the translation was made on.
    const dict = new Map<string, string>();
    for (const [p, text] of snapPairs) {
      const t = trByPath.get(p);
      if (t && !dict.has(text)) dict.set(text, t);
    }

    const blanks: { path: string; en: string; hintEn?: string; hintTr?: string }[] = [];
    let kept = 0;
    const build = (v: unknown, path: string, key: string, depth: number): unknown => {
      const fixed = FIXED_KEYS.has(key) || (depth === 1 && FIXED_ROOT_KEYS.has(key));
      if (typeof v === "string") {
        if (fixed) return v;
        const t = dict.get(v);
        if (t) {
          kept++;
          return t;
        }
        let best: [string, number] | undefined;
        for (const old of dict.keys()) {
          const s = similarity(v, old);
          if (!best || s > best[1]) best = [old, s];
        }
        blanks.push({
          path,
          en: v,
          ...(best && best[1] > 0.45 ? { hintEn: best[0], hintTr: dict.get(best[0]) } : {}),
        });
        return "";
      }
      if (Array.isArray(v)) return v.map((it, i) => build(it, `${path}[${i}]`, key, depth + 1));
      if (v && typeof v === "object")
        return Object.fromEntries(
          Object.entries(v).map(([k, w]) => [k, build(w, path ? `${path}.${k}` : k, k, depth + 1)]),
        );
      return v;
    };
    const next = build(en, "", "", 0);
    writeFileSync(file, JSON.stringify(next, null, 2) + "\n");
    if (todoDir && blanks.length) writeFileSync(join(todoDir, `${locale}-${slug}.json`), JSON.stringify(blanks, null, 2) + "\n");
    totalKept += kept;
    totalBlank += blanks.length;
    console.log(`  ${locale}/${slug}: kept ${kept}, blank ${blanks.length}`);
  }
  writeFileSync(snapFile, JSON.stringify(en, null, 2) + "\n");
}
console.log(`\nkept ${totalKept} translations, ${totalBlank} strings need translating`);
