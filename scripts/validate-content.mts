import { existsSync } from "node:fs";
import { join } from "node:path";
import { treatments, treatmentBySlug } from "../content/data/treatments.ts";
import { concerns, concernBySlug } from "../content/data/concerns.ts";

const PUBLIC = join(process.cwd(), "public");
const errors: string[] = [];
const err = (m: string) => errors.push(m);

for (const t of treatments) {
  if (!existsSync(join(PUBLIC, t.image))) err(`treatment ${t.slug}: image missing ${t.image}`);
  // a machine's parent must be an existing CATEGORY (parent-less) treatment
  if ("parent" in t && (t as { parent?: string }).parent) {
    const p = treatmentBySlug((t as { parent: string }).parent);
    if (!p) err(`treatment ${t.slug}: parent '${(t as { parent: string }).parent}' not found`);
    else if ((p as { parent?: string }).parent) err(`treatment ${t.slug}: parent '${p.slug}' is itself a machine`);
  }
  for (const c of t.concerns) if (!concernBySlug(c)) err(`treatment ${t.slug}: concern '${c}' not found`);
  for (const r of t.related) if (!treatmentBySlug(r)) err(`treatment ${t.slug}: related '${r}' not found`);
}
for (const c of concerns) {
  if (!existsSync(join(PUBLIC, c.image))) err(`concern ${c.slug}: image missing ${c.image}`);
  for (const tr of c.treatments) if (!treatmentBySlug(tr)) err(`concern ${c.slug}: treatment '${tr}' not found`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} content error(s):\n` + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log(`✓ content OK — ${treatments.length} treatments, ${concerns.length} concerns`);
