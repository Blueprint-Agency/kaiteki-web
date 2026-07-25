import { existsSync } from "node:fs";
import { join } from "node:path";
import { treatments, treatmentBySlug } from "../content/data/treatments.ts";
import { concerns } from "../content/data/concerns.ts";
import { technology, technologyBySlug } from "../content/data/technology.ts";

const PUBLIC = join(process.cwd(), "public");
const errors: string[] = [];
const err = (m: string) => errors.push(m);

for (const t of treatments) {
  if (t.image && !existsSync(join(PUBLIC, t.image))) err(`treatment ${t.slug}: image missing ${t.image}`);
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

// Graph coverage. relations.ts is the single source of truth for every
// concern→treatment and treatment→technology card grid on the site, so a node
// with no edge is a page that gets (or gives) no internal link. Warnings, not
// errors: a few gaps are real content dependencies, not data bugs.
const warnings: string[] = [];
const linkedTreatments = new Set(concerns.flatMap((c) => c.treatments));
const poweredTreatments = new Set(technology.flatMap((x) => x.treatments));

for (const c of concerns) {
  if (c.treatments.length === 0) warnings.push(`concern ${c.slug}: no treatments mapped`);
}
for (const t of treatments) {
  if (!linkedTreatments.has(t.slug)) warnings.push(`treatment ${t.slug}: no concern links to it`);
  if (!poweredTreatments.has(t.slug)) warnings.push(`treatment ${t.slug}: no technology mapped`);
}

// Reviewer load — `reviewedBy` should spread across the panel, not pile onto
// one or two doctors (E-E-A-T + it reads as boilerplate).
const load = new Map<string, number>();
for (const p of [...treatments, ...concerns, ...technology]) {
  if (p.reviewedBy) load.set(p.reviewedBy, (load.get(p.reviewedBy) ?? 0) + 1);
}
const counts = [...load.values()];
if (counts.length && Math.max(...counts) - Math.min(...counts) > 1) {
  warnings.push(
    `reviewedBy uneven: ${load.size} doctors, ${Math.min(...counts)}–${Math.max(...counts)} pages each`,
  );
}

if (warnings.length) {
  console.warn(`! ${warnings.length} coverage warning(s):\n` + warnings.map((w) => "  - " + w).join("\n"));
}

if (errors.length) {
  console.error(`✗ ${errors.length} content error(s):\n` + errors.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log(
  `✓ content OK — ${treatments.length} treatments, ${concerns.length} concerns, ${technology.length} technology`,
);
