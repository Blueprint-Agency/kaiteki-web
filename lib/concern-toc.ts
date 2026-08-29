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

export function concernToc(c: Concern, hasTechnology: boolean): Heading[] {
  const entries: (Heading | false | undefined | 0)[] = [
    ...(c.sections ?? []).map((s) => ({ id: headingAnchor(s.heading), text: s.heading, level: 2 as const })),
    !!c.drivers?.items.length && { id: "causes", text: c.drivers.heading, level: 2 as const },
    !!c.variant && { id: "which-type", text: c.variant.heading, level: 2 as const },
    !!c.locationBlock?.cards.length && { id: "where", text: c.locationBlock.heading, level: 2 as const },
    !!c.seeDoctor?.triggers.length && {
      id: "see-a-doctor",
      text: c.seeDoctor.heading ?? "When to see a doctor",
      level: 2 as const,
    },
    c.treatments.length > 0 && { id: "treatments", text: "Treatment options at Kaiteki", level: 2 as const },
    !!c.compare?.rows.length && { id: "compare", text: "Which treatment suits which type?", level: 2 as const },
    !!c.results?.length && { id: "results", text: "Results from Kaiteki patients", level: 2 as const },
    hasTechnology && { id: "technology", text: "Technology used", level: 2 as const },
    !!c.risks?.items.length && { id: "risks", text: "Risks and what to expect", level: 2 as const },
    !!c.firstVisit?.steps.length && { id: "first-visit", text: "What your first visit involves", level: 2 as const },
    !!c.costFactors?.factors.length && { id: "cost", text: "What affects the cost", level: 2 as const },
    !!c.faqs?.length && { id: "faq", text: "Common questions", level: 2 as const },
  ];
  return entries.filter((e): e is Heading => Boolean(e));
}
