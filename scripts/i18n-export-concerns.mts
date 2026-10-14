// Dump each English concern record as JSON, the source a translator copies
// for content/i18n/concerns/<locale>/<slug>.json (docs/19).
//
//   node --experimental-strip-types scripts/i18n-export-concerns.mts <outDir> [slug…]
//
// archetype/depth are injected from config/concerns.json at load, so they are
// dropped here: they are not copy and the overlay never reads them anyway.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { concerns } from "../content/data/concerns.ts";

const [outDir, ...only] = process.argv.slice(2);
if (!outDir) throw new Error("usage: i18n-export-concerns.mts <outDir> [slug…]");
mkdirSync(outDir, { recursive: true });

for (const c of concerns) {
  if (only.length && !only.includes(c.slug)) continue;
  const record: Partial<typeof c> = { ...c };
  delete record.archetype;
  delete record.depth;
  writeFileSync(join(outDir, `${c.slug}.en.json`), JSON.stringify(record, null, 2) + "\n");
  console.log(`${c.slug}.en.json`);
}
