import type { Concern } from "@/lib/types";
import type { Heading } from "@/lib/blog";

/**
 * The concern page's contents, derived from the authored data.
 *
 * One list, two consumers: `ConcernView` feeds it to the sticky rail, and
 * `scripts/validate-concerns.mts` (Q-10) checks the authored jump-nav anchors
 * against it. That is deliberate — an entry that scrolls to a section the page
 * does not render is the failure mode here, and it can only happen if the two
 * lists drift.
 *
 * **The order is the page's render order**, because the rail's scroll-spy walks
 * it top to bottom: list a section before one that renders above it and the
 * highlight jumps backwards mid-read. `text` is the rendered `h2`, verbatim,
 * for the same reason — a rail entry that paraphrases its heading is a second
 * name for one section.
 *
 * Every entry is level 2: concern sections are peers, and nesting them would
 * only give the rail an indent to render.
 */

/** Anchor id for an authored section heading — the same slug the h2 carries.
 *  `lib/treatment-toc.ts` carries its own copy: both modules are imported by
 *  `scripts/validate-concerns.mts` under bare node, which resolves neither the
 *  `@/` alias nor an extensionless path, so they can only share *types*. */
export const headingAnchor = (h: string) =>
  h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** The results section's h2. A section holding only illustrations must not be
 *  headed as patient results — that is the claim the illustration avoids. */
export const resultsHeading = (
  results: NonNullable<Concern["results"]>,
  labels: { illustrated: string; patients: string } = {
    illustrated: "How treatment works, illustrated",
    patients: "Results from Kaiteki patients",
  },
) => (results.every((r) => r.illustration) ? labels.illustrated : labels.patients);

/** The template's fixed section titles. English by default; a locale page
 *  passes its own (content/i18n/concern-ui.ts). */
export type TocLabels = {
  seeDoctor: string;
  treatments: string;
  compare: string;
  results: { illustrated: string; patients: string };
  technology: string;
  risks: string;
  firstVisit: string;
  cost: string;
  faq: string;
};

const EN_LABELS: TocLabels = {
  seeDoctor: "When to see a doctor",
  treatments: "Treatment options at Kaiteki",
  compare: "Which treatment suits which type?",
  results: { illustrated: "How treatment works, illustrated", patients: "Results from Kaiteki patients" },
  technology: "Technology used",
  risks: "Risks and what to expect",
  firstVisit: "What your first visit involves",
  cost: "What affects the cost",
  faq: "Common questions",
};

/**
 * Section anchors for `c`. Ids come from `anchorSource`'s headings: on a
 * locale page that is the English record, because headingAnchor keeps only
 * [a-z0-9] and a Chinese heading would slug to nothing. Same ids in every
 * language also keeps deep links stable across the switcher.
 */
export const sectionAnchors = (c: Concern, anchorSource: Concern = c) =>
  (c.sections ?? []).map((_, i) => headingAnchor(anchorSource.sections?.[i]?.heading ?? ""));

export function concernToc(
  c: Concern,
  hasTechnology: boolean,
  labels: TocLabels = EN_LABELS,
  anchorSource: Concern = c,
  /** What the results block shows: the page's own, or a related concern's. */
  results: Concern["results"] = c.results,
): Heading[] {
  const anchors = sectionAnchors(c, anchorSource);
  const entries: (Heading | false | undefined | 0)[] = [
    // Results render first, straight under the lead answer.
    !!results?.length && { id: "results", text: resultsHeading(results, labels.results), level: 2 as const },
    ...(c.sections ?? []).map((s, i) => ({ id: anchors[i], text: s.heading, level: 2 as const })),
    !!c.drivers?.items.length && { id: "causes", text: c.drivers.heading, level: 2 as const },
    !!c.variant && { id: "which-type", text: c.variant.heading, level: 2 as const },
    !!c.locationBlock?.cards.length && { id: "where", text: c.locationBlock.heading, level: 2 as const },
    !!c.seeDoctor?.triggers.length && {
      id: "see-a-doctor",
      text: c.seeDoctor.heading ?? labels.seeDoctor,
      level: 2 as const,
    },
    c.treatments.length > 0 && { id: "treatments", text: labels.treatments, level: 2 as const },
    !!c.compare?.rows.length && { id: "compare", text: labels.compare, level: 2 as const },
    hasTechnology && { id: "technology", text: labels.technology, level: 2 as const },
    !!c.risks?.items.length && { id: "risks", text: labels.risks, level: 2 as const },
    !!c.firstVisit?.steps.length && { id: "first-visit", text: labels.firstVisit, level: 2 as const },
    !!c.costFactors?.factors.length && { id: "cost", text: labels.cost, level: 2 as const },
    !!c.faqs?.length && { id: "faq", text: labels.faq, level: 2 as const },
  ];
  return entries.filter((e): e is Heading => Boolean(e));
}
