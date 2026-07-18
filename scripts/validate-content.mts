import { existsSync } from "node:fs";
import { join } from "node:path";
import { treatments, treatmentBySlug } from "../content/data/treatments.ts";
import { concerns } from "../content/data/concerns.ts";
import { technology, technologyBySlug } from "../content/data/technology.ts";

const PUBLIC = join(process.cwd(), "public");
const errors: string[] = [];
const err = (m: string) => errors.push(m);

for (const t of treatments) {
  if (!existsSync(join(PUBLIC, t.image))) err(`treatment ${t.slug}: image missing ${t.image}`);
  for (const r of t.related) if (!treatmentBySlug(r)) err(`treatment ${t.slug}: related '${r}' not found`);
}
for (const c of concerns) {
  if (!existsSync(join(PUBLIC, c.image))) err(`concern ${c.slug}: image missing ${c.image}`);
  for (const tr of c.treatments) if (!treatmentBySlug(tr)) err(`concern ${c.slug}: treatment '${tr}' not found`);
}
for (const x of technology) {
  if (technologyBySlug(x.slug) !== x) err(`technology ${x.slug}: duplicate or unresolved slug`);
  if (x.image && !existsSync(join(PUBLIC, x.image))) err(`technology ${x.slug}: image missing ${x.image}`);
  for (const tr of x.treatments) if (!treatmentBySlug(tr)) err(`technology ${x.slug}: treatment '${tr}' not found`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} content error(s):\n` + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log(
  `✓ content OK — ${treatments.length} treatments, ${concerns.length} concerns, ${technology.length} technology`,
);
