// Dump each English record of a kind as JSON: the source a translator copies
// for content/i18n/<kind>/<locale>/<slug>.json (docs/19).
//
//   node --experimental-strip-types scripts/i18n-export.mts <kind> <outDir> [slug…]

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { englishRecord, KINDS, parseKind } from "./i18n-kinds.mts";

const [kindArg, outDir, ...only] = process.argv.slice(2);
const kind = parseKind(kindArg);
if (!outDir) throw new Error("usage: i18n-export.mts <kind> <outDir> [slug…]");
mkdirSync(outDir, { recursive: true });

for (const { slug } of KINDS[kind].records) {
  if (only.length && !only.includes(slug)) continue;
  writeFileSync(join(outDir, `${slug}.en.json`), JSON.stringify(englishRecord(kind, slug), null, 2) + "\n");
  console.log(`${slug}.en.json`);
}
