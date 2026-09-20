/**
 * check:sameness — guards against the failure mode diagnosed in `docs/03b` T0
 * (re-diagnosis 2026-09-20) and specced in `docs/16`.
 *
 * Google discovered 34 of our URLs and declined to crawl any of them. Sitemap,
 * internal linking and content length were all tested and ruled out. What was
 * left: 35 of 36 technology pages and 18 of 19 treatments carry the *same
 * section headings in the same order*, so the cluster reads as one page
 * published many times. `pico-laser`, the single page authored off that spine,
 * is crawled, indexed and ranking.
 *
 * This script turns that into a number. It fingerprints each page's heading
 * sequence with brand names stripped, so "What is Rejuran?" and "What is
 * Juvéderm?" collapse to the same token and the real duplication is visible.
 *
 * It is a RATCHET, not a pass/fail gate: the budgets below record how bad
 * things are today, and the build fails if a change makes any cluster worse.
 * Lower a budget every time a batch of pages is differentiated — never raise
 * one to make the build pass.
 */
import { technology } from "../content/data/technology.ts";
import { treatments } from "../content/data/treatments.ts";
import { concerns } from "../content/data/concerns.ts";

/**
 * Budget = how many pages in a cluster may be "mostly generic", meaning at
 * least GENERIC_SHARE of their headings are ones half the cluster already uses.
 *
 * Measuring the *whole* heading sequence does not work: a single varying
 * heading ("How polynucleotides work" vs "How VYCROSS gel technology works")
 * makes every sequence unique while the other six headings are identical. The
 * duplication is positional, so count generic headings instead.
 */
const GENERIC_SHARE = 0.6;
const BUDGET: Record<string, number> = {
  // 2026-09-20 baseline — lower these as pages are differentiated. Target: 0.
  technology: 35,
  treatments: 17,
  concerns: 0,
};

/** Brand, device and ingredient names that make two identical headings look different. */
const BRANDS =
  /\b(picosure|pico|rejuran|botox|botulinum|plinest|newest|juvelook|profhilo|sculptra|ellanse|radiesse|juv[eé]derm|restylane|belotero|hydrodeluxe|morpheus\s*8|potenza|sylfirm\s*x|ultherapy|ultracel\s*q|lifthera|xerf|coolsculpting|cooltech|onda|coolwaves|schwarzy|em-?fit|hydrafacial|silkpeel|alma|m22|derma\s*v|pro\s*yellow|quadrostar|fotona|starwalker|pqx|sp\s*dynamis|timewalker|fractional\s*co2|co2|wonderface|btl\s*exilis|art\s*filler|hifu|vycross|polynucleotide|coolwave)\b/gi;

const norm = (h: string) =>
  h
    .toLowerCase()
    .replace(BRANDS, "«brand»")
    .replace(/[^a-z«»]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();

type Page = { slug: string; headings: string[] };

const pagesOf = (items: readonly { slug: string; sections?: readonly { heading: string }[] }[]): Page[] =>
  items.map((i) => ({ slug: i.slug, headings: (i.sections ?? []).map((s) => s.heading) }));

const clusters: Record<string, Page[]> = {
  technology: pagesOf(technology),
  treatments: pagesOf(treatments),
  concerns: pagesOf(concerns),
};

let failed = false;

for (const [name, pages] of Object.entries(clusters)) {
  const withSections = pages.filter((p) => p.headings.length > 0);

  // How often each individual heading repeats across the cluster.
  const headingCount = new Map<string, number>();
  for (const p of withSections) for (const h of p.headings) {
    const k = norm(h);
    headingCount.set(k, (headingCount.get(k) ?? 0) + 1);
  }
  // A heading is "generic" when half the cluster or more already uses it.
  const half = withSections.length / 2;
  const isGeneric = (h: string) => (headingCount.get(norm(h)) ?? 0) >= half;

  const scored = withSections
    .map((p) => {
      const generic = p.headings.filter(isGeneric).length;
      return { slug: p.slug, generic, total: p.headings.length, share: generic / p.headings.length };
    })
    .sort((a, b) => b.share - a.share || b.total - a.total);

  const mostlyGeneric = scored.filter((s) => s.share >= GENERIC_SHARE);
  const budget = BUDGET[name] ?? 0;
  const ok = mostlyGeneric.length <= budget;
  if (!ok) failed = true;

  console.log(`\n${ok ? "✓" : "✗"} ${name}: ${withSections.length} pages with sections`);
  console.log(
    `  mostly-generic pages (≥${Math.round(GENERIC_SHARE * 100)}% shared headings): ${mostlyGeneric.length}  (budget ${budget})`,
  );

  const topGeneric = [...headingCount.entries()]
    .filter(([, n]) => n >= half)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);
  if (topGeneric.length) {
    console.log(`  headings the cluster keeps reusing:`);
    for (const [h, n] of topGeneric) console.log(`     ${String(n).padStart(3)}/${withSections.length}  ${h}`);
  }

  const clean = scored.filter((s) => s.share < GENERIC_SHARE);
  if (clean.length) {
    console.log(
      `  already differentiated (${clean.length}): ${clean
        .slice(-6)
        .map((s) => `${s.slug} ${s.generic}/${s.total}`)
        .join(", ")}`,
    );
  }
  if (mostlyGeneric.length) {
    console.log(
      `  worst offenders: ${mostlyGeneric.slice(0, 8).map((s) => `${s.slug} ${s.generic}/${s.total}`).join(", ")}`,
    );
  }
}

console.log(
  failed
    ? "\nFAIL — a cluster got more templated than its recorded budget. See docs/16 for the per-group spines."
    : "\nOK — no cluster exceeded its sameness budget. Lower the budgets in this file as pages are differentiated.",
);
process.exit(failed ? 1 : 0);
