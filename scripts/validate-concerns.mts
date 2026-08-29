// Concern-template QA gate (spec §08). Every check here is a rule that would
// otherwise be caught in review, or not at all.
//
// The media rules — Q-14, Q-15, Q-17, Q-21 — are page-type-agnostic in everything
// but the CDN prefix and the manifest they read, so they walk treatments as well
// as concerns from one implementation (docs/14 §Testing Decisions). There is no
// validate-treatments.mts: two near-identical gates drift, and the drift ships as
// a page that 404s its own imagery.
//
// Q-16 is the exception and stays concern-only: it is the anti-upscaling guard on
// the results gallery, and treatments have no results (docs/14 §"No results gallery,
// and no compliance reversal"). Its treatment twin is the 156px `steps` ceiling,
// which arrives with the field in ticket 02.
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
//   Q-14  every media src sits on its page type's CDN prefix (never public/)
//   Q-15  every media src resolves to an entry in that page type's manifest
//         that the sync script will actually upload (not parked, not held)
//   Q-16  results declare a native width + ratio, and the width matches the
//         manifest's recorded source width (the anti-upscaling guard)
//   Q-17  slides carry alt and NO caption; figures carry a caption; a treatment's
//         manufacturer images carry both (rule R-07 labels in four places)
//   Q-18  a concern declaring results has the shared disclaimer rendered
//   Q-19  figures are authored one per cause — they pair by position, so a
//         mismatch re-captions or drops photographs without saying so
// Q-19…Q-21 are numbered twice: docs/14 assigned Q-19…Q-24 to the treatment
// rules without noticing that the concern gate already used the first three.
// The numbers are kept as specced — they are what a reviewer looks for — and
// the page type disambiguates them, as does the slug every failure carries.
//
//   Q-04  (treatments) the same banned-language sweep, over the media captions,
//         labels and alt text — not the whole object, see the check for why
//   Q-19  (treatments) every `steps` icon is at most 156px, its native width —
//         the anti-upscaling guard, and the twin of Q-16
//   Q-20  (treatments) the `areas` union holds: chips or zones, never both, and
//         every zone carries a label and a src
//   Q-21  (treatments) the manufacturer renderer keeps the two labelling places
//         that live in code — R-07 machine-checked rather than commented
//   Q-22  (treatments) none of the five HOLD/EXCLUDE treatments declares media
//   Q-23  (treatments) no more figures than Variant A renders, floor(sections/2)
//   Q-24  (treatments) no rail entry points at a section no block renders
//   Q-20  every concern is named in the sign-off ledger — unsigned pages are
//         warned by name, and every ledger entry resolves to a real doctor
//   Q-21  (--live only) every media URL actually resolves in the bucket
//
// Run: pnpm validate:concerns   (exits non-zero on any failure)
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { concerns } from "../content/data/concerns.ts";
import { doctorBySlug } from "../content/data/doctors.ts";
import { treatments } from "../content/data/treatments.ts";
import registry from "../config/concerns.json" with { type: "json" };
import manifest from "../config/concern-media.json" with { type: "json" };
import treatmentManifest from "../config/treatment-media.json" with { type: "json" };
import { concernToc } from "../lib/concern-toc.ts";
import { treatmentToc, headingAnchor } from "../lib/treatment-toc.ts";
import { concernSignoff, concernSignoffs } from "../lib/signoff.ts";
import type { Concern, Treatment } from "../lib/types.ts";

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

/** One implementation, two callers: concerns sweep the whole authored object,
 *  treatments sweep their media captions. `where` names which, so a failure
 *  says what was read as well as what it found. */
function sweepBanned(slug: string, text: string, where: string) {
  for (const [re, why] of BANNED) {
    const hit = text.match(re);
    if (hit) fail(slug, "Q-04", `${where}${why} — found "${hit[0]}"`);
  }
}

/**
 * The anchor ids ConcernView actually renders, given the authored data — read
 * from the same list that feeds the page's contents rail, so a jump-nav anchor
 * and a rail entry can never disagree about what the page contains. Technology
 * is passed as present: it is derived from the relations map, not from `c`.
 */
const anchorsOf = (c: Concern): string[] => concernToc(c, true).map((h) => h.id);

/** Native width of every `steps` icon (docs/14 §"Step sequence"). */
const STEP_MAX_WIDTH = 156;

/**
 * The five treatments docs/13 §9 excludes from the media work — four HOLD plus
 * one EXCLUDE. Listed here because Q-22 is the rule that they stay empty, and a
 * rule cannot read its own exceptions out of the data it is checking.
 */
const NO_MEDIA = new Set([
  "botulinum-toxin",
  "exosome-therapy",
  "hifu",
  "ultherapy",
  "laser-hair-removal",
]);

/**
 * Every anchor id the treatment renderers set as a literal, read from their
 * source rather than restated here: a list restated in the gate is a second
 * source of truth and goes stale the first time a block is renamed.
 *
 * **This is a spelling check, not a render check** — it proves the id exists in
 * the renderers, not that the block owning it ran. That is as far as a static
 * check reaches, and it is enough for the failure it exists for: the rail and
 * the page derive from one list, so an entry can only go dead by naming an
 * anchor the components no longer set. Section anchors are derived
 * (`id={headingAnchor(...)}`) and checked against the authored headings.
 */
const RENDERED_ANCHORS = new Set(
  ["components/TreatmentView.tsx", "components/treatment-blocks.tsx"].flatMap((f) =>
    [...readFileSync(join(import.meta.dirname, "..", f), "utf8").matchAll(/\bid="([a-z0-9-]+)"/g)].map(
      (m) => m[1],
    ),
  ),
);

// Q-14…Q-16 — every authored media URL must be one the sync script will
// actually upload. Parked keys are excluded on purpose: they never upload, and
// neither does a held asset (ADR-0001 §5) — authoring either produces a page
// that 404s its own imagery, which is the failure Q-15 exists to catch.
type Manifest = {
  bucketPrefix: string;
  publicBase: string;
  assets: { key: string; width: number; hold?: string }[];
};

/**
 * A manifest paired with the URL → source-width map of everything the sync will actually
 * upload. The two always travel together — a URL is only checkable against the manifest it
 * came from — so they are bound once here rather than passed as a pair everywhere.
 */
const uploadable = (m: Manifest) => ({
  publicBase: m.publicBase,
  live: new Map<string, number>(
    m.assets
      .filter((a) => a.key.startsWith(m.bucketPrefix) && !("hold" in a))
      .map((a) => [m.publicBase + a.key.slice(m.bucketPrefix.length), a.width]),
  ),
});

const concernMedia = uploadable(manifest);
const treatmentMedia = uploadable(treatmentManifest);

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

/**
 * Every CDN media src on a treatment. `image` is deliberately absent: the 19 heroes are
 * already-migrated legacy media and stay in public/ (docs/14 §Media delivery).
 */
function treatmentMediaUrls(t: Treatment): [string, string][] {
  return [
    ...(t.manufacturerImages ?? []).map((m) => [m.src, "manufacturerImages"]),
    ...(t.figures ?? []).map((f) => [f.src, "figures"]),
    ...(t.steps ?? []).map((s) => [s.src, "steps"]),
    ...(t.areas ?? []).filter((a) => typeof a !== "string").map((a) => [a.src, "areas"]),
  ] as [string, string][];
}

/**
 * Q-14 / Q-15 — media lives on the page type's CDN prefix, and only where its
 * manifest says something will exist. Either failure is a 404 in production.
 */
function checkMedia(slug: string, entries: [string, string][], m: ReturnType<typeof uploadable>) {
  for (const [url, field] of entries) {
    if (!url.startsWith(m.publicBase)) {
      fail(slug, "Q-14", `${field} "${url}" is not on ${m.publicBase}`);
    } else if (!m.live.has(url)) {
      fail(slug, "Q-15", `${field} "${url}" has no entry in the media manifest`);
    }
  }
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
  sweepBanned(c.slug, JSON.stringify(c), "");

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

  checkMedia(c.slug, mediaUrls(c), concernMedia);

  // Q-16 — the anti-upscaling guard (ADR-0001 §5). A width that disagrees with
  // the source is worse than a missing one: it reads as checked.
  for (const r of c.results ?? []) {
    if (!r.nativeWidth || !r.ratio) {
      fail(c.slug, "Q-16", `results "${r.src}" omits nativeWidth or ratio`);
      continue;
    }
    const sourceWidth = concernMedia.live.get(r.src);
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

// The treatment rules. Q-14 / Q-15 / Q-17 are the concern rules against a second
// data source — treatment media serves from the treatments/ prefix and its own
// manifest, and every other argument is the same. Q-19…Q-24 are treatment-only.
for (const t of treatments) {
  checkMedia(t.slug, treatmentMediaUrls(t), treatmentMedia);

  // Q-04 — the same sweep, over the media captions, labels and alt text only.
  // Deliberately narrower than the concern sweep, which reads the whole object:
  // the treatment prose predates these rules and uses some of these words
  // legitimately (pico-laser's "not a guarantee of suitability" is the opposite
  // of an outcome promise). Widening it is a prose-audit ticket, not this one.
  // The separator has to be something no caption ends or starts with, or a
  // phrase would match across two unrelated captions.
  sweepBanned(
    t.slug,
    [
      ...(t.manufacturerImages ?? []).flatMap((m) => [m.caption, m.alt]),
      ...(t.figures ?? []).map((f) => f.caption),
      ...(t.steps ?? []).flatMap((s) => [s.label, s.body]),
      ...(t.areas ?? []).map((a) => (typeof a === "string" ? a : a.label)),
    ].join("\n"),
    "media caption: ",
  );

  // Q-17 — rule R-07 wants the manufacturer named in four places. Two of them are
  // authored data, so a mark shipped without either is caught here rather than by
  // a compliance reviewer reading fourteen pages.
  for (const m of t.manufacturerImages ?? []) {
    if (!m.caption.trim()) fail(t.slug, "Q-17", `manufacturer image "${m.src}" has no caption (R-07)`);
    if (!m.alt.trim()) fail(t.slug, "Q-17", `manufacturer image "${m.src}" has no alt (R-07)`);
  }
  // Q-17, second data source: a figure's caption carries its meaning, and the
  // image is alt="" precisely because of that — an uncaptioned one says nothing.
  for (const f of t.figures ?? []) {
    if (!f.caption?.trim()) fail(t.slug, "Q-17", `figure "${f.src}" has no caption`);
  }

  // Q-22 — the exclusion is enforced, not remembered. These five have no media
  // to author (docs/13 §9); a field appearing on one is a mis-wire, not a gift.
  if (NO_MEDIA.has(t.slug) && treatmentMediaUrls(t).length) {
    fail(t.slug, "Q-22", `declares media but is HOLD/EXCLUDE in docs/13 §9`);
  }

  // Q-19 — the anti-upscaling guard on `steps`, the treatment twin of Q-16.
  // These are 156px icons; rendered wider they are visibly soft, so the source
  // must not claim to be something it is not and the cell is capped in the
  // component (StepsBlock renders w-[156px]).
  for (const s of t.steps ?? []) {
    if (!s.label?.trim() || !s.body?.trim()) {
      fail(t.slug, "Q-19", `step "${s.src}" needs both a label and a body`);
    }
    const width = treatmentMedia.live.get(s.src);
    if (width && width > STEP_MAX_WIDTH) {
      fail(t.slug, "Q-19", `step "${s.src}" is ${width}px — steps render at ${STEP_MAX_WIDTH}px`);
    }
  }

  // Q-20 — the `areas` union at the data layer. A mixed array is the failure
  // mode: the block renders zones OR chips, so mixing silently drops one shape.
  const areas = t.areas ?? [];
  const zones = areas.filter((a) => typeof a !== "string");
  if (zones.length && zones.length !== areas.length) {
    fail(t.slug, "Q-20", `areas mixes ${areas.length - zones.length} chips with ${zones.length} zones`);
  }
  for (const z of zones) {
    if (!z.label?.trim() || !z.src?.trim()) fail(t.slug, "Q-20", "an areas zone omits its label or src");
  }

  // Q-23 — Variant A places one figure per two prose sections and drops the
  // surplus. A figure nobody notices is missing is exactly what a gate is for.
  const maxFigures = Math.floor((t.sections?.length ?? 0) / 2);
  if ((t.figures?.length ?? 0) > maxFigures) {
    fail(
      t.slug,
      "Q-23",
      `${t.figures!.length} figures against ${t.sections?.length ?? 0} sections — at most ${maxFigures} are rendered`,
    );
  }

  // Q-24 — the treatment twin of concern Q-10. The rail is derived, so an entry
  // can only go dead by naming an anchor no block sets; the prototype shipped
  // exactly that (`devices`) and only a rendered page revealed it.
  const authored = new Set((t.sections ?? []).map((s) => headingAnchor(s.heading)));
  // Both relation flags are passed true on purpose: that is the maximal list
  // the rail can ever emit for this treatment, so every id it could produce is
  // checked, not just the ones today's relations happen to switch on. (The
  // relations module cannot be imported here — it uses extensionless imports
  // that node's type stripping will not resolve.)
  for (const h of treatmentToc(t, true, true)) {
    if (!RENDERED_ANCHORS.has(h.id) && !authored.has(h.id)) {
      fail(t.slug, "Q-24", `rail entry "${h.text}" → #${h.id}, which no rendered block owns`);
    }
  }
}

// Q-21 — R-07's four labelling places. Two are authored data (Q-17 above); the
// other two live in the renderer, so they are checked against its source rather
// than trusted to a comment. Checked once: the strings are deliberately outside
// the treatment data so they cannot be edited away one page at a time.
if (treatments.some((t) => t.manufacturerImages?.length)) {
  const src = readFileSync(join(import.meta.dirname, "..", "components/treatment-blocks.tsx"), "utf8");
  const from = src.indexOf("export function ManufacturerImages");
  // Bounded at the next export: a disclaimer three blocks further down the file
  // is not this block rendering one.
  const to = src.indexOf("\nexport function ", from + 1);
  const block = src.slice(from, to === -1 ? undefined : to);
  if (!/supplied by the device manufacturers/.test(block)) {
    fail("all", "Q-21", "manufacturer images render no heading paragraph naming the source (R-07)");
  }
  if (!/Images supplied by device manufacturers\. Not Kaiteki patients/.test(block)) {
    fail("all", "Q-21", "manufacturer images render no closing disclaimer (R-07)");
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

// Q-21 — liveness. Everything above proves the URLs are authored correctly;
// only a request proves the bytes were ever uploaded. Media is synced from a
// laptop, not CI (ADR-0001 §4), so nothing else notices a deploy that ships
// pages of broken images. Opt-in: it needs the network.
if (process.argv.includes("--live")) {
  const urls = [
    ...new Set([
      ...concerns.flatMap((c) => mediaUrls(c).map(([url]) => url)),
      ...treatments.flatMap((t) => treatmentMediaUrls(t).map(([url]) => url)),
    ]),
  ];
  const dead: string[] = [];
  let next = 0;
  await Promise.all(
    // ponytail: fixed fan-out of 12, plenty for ~160 HEADs against a CDN.
    Array.from({ length: 12 }, async () => {
      while (next < urls.length) {
        const url = urls[next++];
        const res = await fetch(url, { method: "HEAD" }).catch((e: Error) => e);
        if (res instanceof Error) dead.push(`${url} — ${res.message}`);
        else if (!res.ok) dead.push(`${url} — HTTP ${res.status}`);
      }
    }),
  );
  for (const d of dead) fail("live", "Q-21", `${d} (run pnpm sync:concern-media / sync:treatment-media)`);
  console.log(`Q-21: ${urls.length} media URLs checked · ${dead.length} unreachable`);
}

for (const w of warnings) console.warn(`  warn  ${w}`);
for (const e of errors) console.error(`  FAIL  ${e}`);
console.log(
  `\n${concerns.length} concerns + ${treatments.length} treatments checked · ${errors.length} failures · ${warnings.length} warnings`,
);
process.exit(errors.length ? 1 : 0);
