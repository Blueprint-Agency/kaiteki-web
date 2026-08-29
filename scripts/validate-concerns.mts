// Concern-template QA gate (spec §08). Every check here is a rule that would
// otherwise be caught in review, or not at all:
//
//   Q-02  depth matches the registry: full = 12 FAQs + comparison table,
//         lite  = 8 FAQs and NO comparison table
//   Q-03  every "why for X" line is unique across all 14 concern pages
//   Q-04  zero outcome promises, superiority words or prices
//   Q-05  the risks block names at least one thing treatment cannot do
//   Q-07  the reviewer resolves to a real doctor with credentials
//   Q-08  bottom-CTA heading and body are concern-specific
//   Q-10  every jump-nav anchor resolves to a block the page actually renders
//   Q-13  jump nav is at most 7 items
//   Q-14  every media src sits on the concerns CDN prefix (never public/)
//   Q-15  every media src resolves to an entry in config/concern-media.json
//         that the sync script will actually upload (not parked, not held)
//   Q-16  results declare a native width + ratio, and the width matches the
//         manifest's recorded source width (the anti-upscaling guard)
//   Q-17  slides carry alt and NO caption; figures carry a caption
//   Q-18  a concern declaring results has the shared disclaimer rendered
//   Q-19  figures are authored one per cause — they pair by position, so a
//         mismatch re-captions or drops photographs without saying so
//   Q-20  every concern is named in the sign-off ledger — unsigned pages are
//         warned by name, and every ledger entry resolves to a real doctor
//
// Run: pnpm validate:concerns   (exits non-zero on any failure)
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { concerns } from "../content/data/concerns.ts";
import { doctorBySlug } from "../content/data/doctors.ts";
import registry from "../config/concerns.json" with { type: "json" };
import manifest from "../config/concern-media.json" with { type: "json" };
import { concernToc } from "../lib/concern-toc.ts";
import { concernSignoff, concernSignoffs } from "../lib/signoff.ts";
import type { Concern } from "../lib/types.ts";

const errors: string[] = [];
const warnings: string[] = [];
const fail = (slug: string, id: string, msg: string) => errors.push(`${slug} · ${id}: ${msg}`);

// Q-04 — the banned-language sweep, run over every string the page renders.
const BANNED: [RegExp, string][] = [
  [/\bbest\b/i, "superiority claim 'best' (R-02) — use 'commonly considered'"],
  [/\bmost effective\b/i, "superiority claim (R-02)"],
  [/\bindustry[- ]leading\b/i, "superiority claim (R-02)"],
  [/\bguarantee/i, "outcome promise (R-01)"],
  [/\bresults? in \d/i, "outcome promise with a timeframe (R-01)"],
  [/\bRM\s?\d/i, "price (R-03)"],
  [/\bfrom RM\b/i, "price (R-03)"],
];

/**
 * The anchor ids ConcernView actually renders, given the authored data — read
 * from the same list that feeds the page's contents rail, so a jump-nav anchor
 * and a rail entry can never disagree about what the page contains. Technology
 * is passed as present: it is derived from the relations map, not from `c`.
 */
const anchorsOf = (c: Concern): string[] => concernToc(c, true).map((h) => h.id);

// Q-14…Q-16 — every authored media URL must be one the sync script will
// actually upload. Parked keys are excluded on purpose: they never upload, and
// neither does a held asset (ADR-0001 §5) — authoring either produces a page
// that 404s its own imagery, which is the failure Q-15 exists to catch.
const byUrl = new Map<string, number>(
  manifest.assets
    .filter((a) => a.key.startsWith(manifest.bucketPrefix) && !("hold" in a))
    .map((a) => [manifest.publicBase + a.key.slice(manifest.bucketPrefix.length), a.width]),
);

/** Every media src on a concern, tagged with the field it came from. */
function mediaUrls(c: Concern): [string, string][] {
  return [
    ...(c.banner ? [[c.banner.src, "banner"], [c.banner.sm, "banner.sm"]] : []),
    ...(c.figures ?? []).map((f) => [f.src, "figures"]),
    ...(c.slides ?? []).map((s) => [s.src, "slides"]),
    ...(c.illustrations ?? []).map((i) => [i.src, "illustrations"]),
    ...(c.results ?? []).map((r) => [r.src, "results"]),
    ...(c.visitImages ?? []).map((v) => [v.src, "visitImages"]),
  ] as [string, string][];
}

const seenWhy = new Map<string, string>();

for (const c of concerns) {
  const entry = registry.concerns.find((r) => r.slug === c.slug);
  if (!entry) {
    fail(c.slug, "Q-01", "not in config/concerns.json — stop and ask, do not guess an archetype");
    continue;
  }

  // Q-02 — depth. A page with no FAQs at all is unwritten, not wrong.
  const want = registry.depthRules[entry.depth as "full" | "lite"];
  const faqCount = c.faqs?.length ?? 0;
  if (faqCount !== want.faqCount) {
    const msg = `${c.slug} · Q-02: ${entry.depth} depth expects ${want.faqCount} FAQs, has ${faqCount}`;
    (faqCount < 4 ? warnings : errors).push(msg);
  }
  if (entry.depth === "lite" && c.compare) {
    fail(c.slug, "Q-02", "lite depth must omit the comparison table (block 10)");
  }
  if (entry.depth === "full" && c.treatments.length < registry.depthRules.full.minTreatments) {
    fail(c.slug, "Q-02", `full depth needs ${registry.depthRules.full.minTreatments}+ treatments`);
  }

  // Q-03 — the "why for X" line must be unique across all concern pages (R-04).
  // This is the only thing stopping five pages that share a treatment list from
  // competing for the same terms, so a duplicate is a failure, not a warning.
  for (const [slug, w] of Object.entries(c.treatmentWhy ?? {})) {
    const key = w.why.trim().toLowerCase();
    const prev = seenWhy.get(key);
    if (prev) fail(c.slug, "Q-03", `"why for X" on ${slug} duplicates ${prev} (R-04)`);
    else seenWhy.set(key, `${c.slug}/${slug}`);
  }
  const missingWhy = c.treatments.filter((t) => !c.treatmentWhy?.[t]);
  if (missingWhy.length) {
    warnings.push(`${c.slug} · Q-03: no "why for X" line for ${missingWhy.join(", ")} (R-04)`);
  }

  // Q-04 — banned language over the whole authored object.
  const prose = JSON.stringify(c);
  for (const [re, why] of BANNED) {
    const hit = prose.match(re);
    if (hit) fail(c.slug, "Q-04", `${why} — found "${hit[0]}"`);
  }

  // Q-05 — the risks block must name at least one real limit.
  if (
    c.risks &&
    !c.risks.items.some((i) => /cannot|can't|rarely|does not|will not|is not/i.test(i.lead + i.body))
  ) {
    fail(c.slug, "Q-05", "risks block names nothing treatment cannot do (R-05)");
  }

  // Q-07 — reviewer resolves to a credentialed doctor (spec bug B-01).
  const d = doctorBySlug(c.reviewedBy);
  if (!d) fail(c.slug, "Q-07", `reviewedBy "${c.reviewedBy}" does not resolve to a doctor`);
  else if (!d.mmc && !d.credentials) fail(c.slug, "Q-07", `${d.fullName} has no credentials or MMC`);

  // Q-08 — the bottom CTA must not fall back to the template default.
  if (!c.ctaHeading || !c.ctaAssesses) {
    warnings.push(`${c.slug} · Q-08: bottom CTA falls back to the default string (B-03/B-04)`);
  }

  // Q-10 / Q-13 — jump nav. The horizontal jump bar retired from concern pages
  // with the heading gutter (docs/12 §Layout); `jumpNav` survives as the
  // authored ordering hint, so the gate stays until the field is retired too.
  const anchors = new Set(anchorsOf(c));
  for (const j of c.jumpNav ?? []) {
    if (!anchors.has(j.id)) {
      fail(c.slug, "Q-10", `jump nav "${j.label}" → #${j.id}, which no rendered block owns`);
    }
  }
  if ((c.jumpNav?.length ?? 0) > 7) fail(c.slug, "Q-13", "jump nav exceeds 7 items (R-13)");

  // Q-14 / Q-15 — media lives on the concerns CDN prefix, and only where the
  // manifest says something will exist. Either failure is a 404 in production.
  for (const [url, field] of mediaUrls(c)) {
    if (!url.startsWith(manifest.publicBase)) {
      fail(c.slug, "Q-14", `${field} "${url}" is not on ${manifest.publicBase}`);
    } else if (!byUrl.has(url)) {
      fail(c.slug, "Q-15", `${field} "${url}" has no entry in config/concern-media.json`);
    }
  }

  // Q-16 — the anti-upscaling guard (ADR-0001 §5). A width that disagrees with
  // the source is worse than a missing one: it reads as checked.
  for (const r of c.results ?? []) {
    if (!r.nativeWidth || !r.ratio) {
      fail(c.slug, "Q-16", `results "${r.src}" omits nativeWidth or ratio`);
      continue;
    }
    const sourceWidth = byUrl.get(r.src);
    if (sourceWidth && sourceWidth !== r.nativeWidth) {
      fail(c.slug, "Q-16", `results "${r.src}" declares ${r.nativeWidth}px, source is ${sourceWidth}px`);
    }
  }

  // Q-17 — the figure/slide split, at the data layer. A captioned slide
  // double-labels its burned-in headline; an uncaptioned figure says nothing.
  for (const s of c.slides ?? []) {
    if (!s.alt?.trim()) fail(c.slug, "Q-17", `slide "${s.src}" has no alt transcribing its burned-in text`);
    if ("caption" in s) fail(c.slug, "Q-17", `slide "${s.src}" carries a caption — slides are captionless`);
  }
  for (const f of c.figures ?? []) {
    if (!f.caption?.trim()) fail(c.slug, "Q-17", `figure "${f.src}" has no caption (the caption carries the meaning)`);
  }

  // Q-19 — figures pair with causes by position, so a count mismatch is not a
  // cosmetic gap: it re-captions every photograph after the missing one, or
  // drops the tail silently. The pairing is enforced here rather than trusted
  // to the author, because neither failure is visible in review.
  const figureCount = c.figures?.length ?? 0;
  const driverCount = c.drivers?.items.length ?? 0;
  if (figureCount && figureCount !== driverCount) {
    fail(c.slug, "Q-19", `${figureCount} figures against ${driverCount} causes — they pair by position`);
  }
}

// Q-18 — results oblige the disclaimer (ADR-0001 §2). Checked once, against the
// renderers rather than the data: the string is deliberately defined outside
// the concern data so it cannot be edited away one page at a time.
if (concerns.some((c) => c.results?.length)) {
  const root = join(import.meta.dirname, "..");
  const renderers = ["components", "app/concerns"]
    .flatMap((dir) =>
      readdirSync(join(root, dir), { recursive: true, encoding: "utf8" }).map((f) => `${dir}/${f}`),
    )
    // proto-tx/ is the throwaway treatments prototype — a mention there is not
    // the shipped page rendering it. (The concern prototype is gone: issue 06.)
    .filter(
      (f) =>
        f.endsWith(".tsx") &&
        f !== "components/Disclaimer.tsx" &&
        !f.startsWith("components/proto-tx/"),
    );
  if (!renderers.some((f) => /<ResultsDisclaimer\b/.test(readFileSync(join(root, f), "utf8")))) {
    fail("all", "Q-18", "concerns declare results but no renderer renders <ResultsDisclaimer /> (ADR-0001 §2)");
  }
}

// Q-20 — medical sign-off. An unsigned concern is not a failure (the pages are
// authored before they are reviewed), but it must be impossible to miss: it is
// listed here by name, and the page itself says "Awaiting medical review".
const unsigned = concerns.filter((c) => !concernSignoff(c.slug));
for (const c of unsigned) {
  warnings.push(`${c.slug} · Q-20: unsigned — no doctor has reviewed this page (config/concern-signoff.json)`);
}
for (const [slug, s] of Object.entries(concernSignoffs)) {
  if (!concerns.some((c) => c.slug === slug)) fail(slug, "Q-20", "sign-off for a concern that does not exist");
  else if (!doctorBySlug(s.doctor)) fail(slug, "Q-20", `signed off by unknown doctor '${s.doctor}'`);
  else if (Number.isNaN(Date.parse(s.date))) fail(slug, "Q-20", `unparseable sign-off date '${s.date}'`);
}

for (const w of warnings) console.warn(`  warn  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);
console.log(
  `\n${concerns.length} concerns checked · ${errors.length} failures · ${warnings.length} warnings`,
);
process.exit(errors.length ? 1 : 0);
