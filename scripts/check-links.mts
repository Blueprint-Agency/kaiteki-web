/**
 * check:links — the internal-link audit (`docs/15` item 4.3).
 *
 * Every treatment, concern and technology page should link out along each of
 * its link classes, so no page is a dead end and no cluster is an island. This
 * lists every page missing a class, one row per gap. The goal is zero rows; any
 * row fails the run.
 *
 *   treatment  → concerns, technology, related treatments, 1–3 posts, reviewer
 *   concern    → treatments (each with a `treatmentWhy`), technology,
 *                related concerns, posts
 *   technology → treatments, concerns, posts
 *
 * The edges are the ones the templates render (components/TreatmentView,
 * ConcernView, TechnologyView), recomputed here from the data rather than
 * imported from content/data/relations.ts, which uses extensionless imports
 * Node cannot load. Keep the two in step: if a template changes how it picks
 * a class, change it here too.
 *
 * Posts follow `postsFor` in content/data/blog.ts: a treatment or concern
 * counts only posts tagged with it; a technology page also counts posts tagged
 * with any treatment it powers.
 *
 * `--csv` prints the rows as CSV (type, slug, missing) for a dated record.
 */
import { technology } from "../content/data/technology.ts";
import { treatments } from "../content/data/treatments.ts";
import { concerns } from "../content/data/concerns.ts";
import { posts } from "../content/data/blog.ts";
import { doctors } from "../content/data/doctors.ts";

type Gap = { type: "treatment" | "concern" | "technology"; slug: string; missing: string };

/**
 * Gaps that are true of the clinic, not of the linking: the page that would
 * close them does not exist and should not be invented to satisfy this script.
 * Each one is a content decision, so each is printed on every run. Remove an
 * entry as soon as the page it waits on ships.
 */
const EXEMPT: Record<string, string> = {
  "treatment:double-eyelid:concerns": "no eyelid concern page; a crease is not a skin concern",
  "treatment:double-eyelid:technology": "a suture procedure, no device or product page",
  "treatment:double-eyelid:related treatments": "no other eyelid procedure on the menu",
  "treatment:exosome-therapy:technology": "no exosome product page yet; client to name the product",
  "concern:hair-loss:technology": "its one treatment is exosome therapy, which has no product page yet",
  "treatment:laser-hair-removal:concerns": "no unwanted-hair concern page yet",
  "technology:alma:concerns": "powers laser hair removal only, which has no concern page yet",
};

const gaps: Gap[] = [];
const exempted: (Gap & { why: string })[] = [];
const gap = (type: Gap["type"], slug: string, missing: string) => {
  const why = EXEMPT[`${type}:${slug}:${missing}`];
  (why ? exempted.push({ type, slug, missing, why }) : gaps.push({ type, slug, missing }));
};

const treatmentSlugs = new Set(treatments.map((t) => t.slug));
const concernSlugs = new Set(concerns.map((c) => c.slug));
const doctorSlugs = new Set(doctors.map((d) => d.slug));

const concernsOfTreatment = (slug: string) => concerns.filter((c) => c.treatments.includes(slug));
const technologyOfTreatment = (slug: string) => technology.filter((x) => x.treatments.includes(slug));
const postsTagged = (tag: "treatments" | "concerns" | "technology", slugs: string[]) =>
  posts.filter((p) => p[tag]?.some((s) => slugs.includes(s)));

for (const t of treatments) {
  if (!concernsOfTreatment(t.slug).length) gap("treatment", t.slug, "concerns");
  if (!technologyOfTreatment(t.slug).length) gap("treatment", t.slug, "technology");
  if (!t.related.some((r) => treatmentSlugs.has(r))) gap("treatment", t.slug, "related treatments");
  if (!postsTagged("treatments", [t.slug]).length) gap("treatment", t.slug, "posts");
  if (!doctorSlugs.has(t.reviewedBy)) gap("treatment", t.slug, "reviewer");
}

for (const c of concerns) {
  const options = c.treatments.filter((s) => treatmentSlugs.has(s));
  if (!options.length) gap("concern", c.slug, "treatments");
  const noWhy = options.filter((s) => !c.treatmentWhy?.[s]);
  if (noWhy.length) gap("concern", c.slug, `treatmentWhy for ${noWhy.join(", ")}`);
  if (!options.some((s) => technologyOfTreatment(s).length)) gap("concern", c.slug, "technology");
  if (!(c.relatedConcerns ?? []).some((r) => concernSlugs.has(r.slug))) gap("concern", c.slug, "related concerns");
  if (!postsTagged("concerns", [c.slug]).length) gap("concern", c.slug, "posts");
}

for (const x of technology) {
  const powers = x.treatments.filter((s) => treatmentSlugs.has(s));
  if (!powers.length) gap("technology", x.slug, "treatments");
  if (!powers.some((s) => concernsOfTreatment(s).length)) gap("technology", x.slug, "concerns");
  if (!postsTagged("technology", [x.slug]).length && !postsTagged("treatments", powers).length)
    gap("technology", x.slug, "posts");
}

if (process.argv.includes("--csv")) {
  console.log("type,slug,missing");
  for (const g of gaps) console.log(`${g.type},${g.slug},"${g.missing}"`);
  process.exit(gaps.length ? 1 : 0);
}

const pages = treatments.length + concerns.length + technology.length;
const stale = Object.keys(EXEMPT).filter(
  (k) => !exempted.some((e) => `${e.type}:${e.slug}:${e.missing}` === k),
);
if (stale.length) {
  console.log(`✗ exemptions no longer needed, delete them from EXEMPT: ${stale.join("; ")}`);
  process.exit(1);
}
if (exempted.length) {
  console.log(`Exempt (${exempted.length}), each waiting on a page that does not exist yet:`);
  for (const e of exempted) console.log(`    ${e.type} ${e.slug} → ${e.missing}: ${e.why}`);
}
if (!gaps.length) {
  console.log(`✓ check:links — ${pages} pages, every link class present.`);
  process.exit(0);
}
for (const type of ["treatment", "concern", "technology"] as const) {
  const rows = gaps.filter((g) => g.type === type);
  if (!rows.length) continue;
  console.log(`\n✗ ${type}: ${rows.length} gap${rows.length === 1 ? "" : "s"}`);
  for (const g of rows) console.log(`    ${g.slug.padEnd(26)} missing ${g.missing}`);
}
console.log(`\n${gaps.length} gap${gaps.length === 1 ? "" : "s"} across ${pages} pages. Target is 0 (docs/15 item 4.3).`);
process.exit(1);
