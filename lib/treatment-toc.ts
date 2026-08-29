import type { Treatment } from "@/lib/types";
import type { Heading } from "@/lib/blog";

/**
 * The treatment page's contents, derived from the authored data — the sibling
 * of `lib/concern-toc.ts`, not a copy of it: the two page types render
 * different blocks and only share the `Heading` shape and the `ArticleToc` they
 * feed.
 *
 * One list, two consumers: `TreatmentView` feeds it to the sticky rail, and
 * `scripts/validate-concerns.mts` (Q-24) checks every id against the anchors
 * the page actually sets. An entry that scrolls to a section the page does not
 * render is the failure mode here — the prototype shipped exactly that, a dead
 * `devices` anchor, and only a rendered page revealed it.
 *
 * **The order is the page's render order**, because the rail's scroll-spy walks
 * it top to bottom, and `text` is the rendered `h2` verbatim — a rail entry
 * that paraphrases its heading is a second name for one section.
 *
 * Every entry is level 2: treatment sections are peers.
 */

/** Anchor id for an authored section heading — the same slug the h2 carries. */
export const headingAnchor = (h: string) =>
  h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function treatmentToc(
  t: Treatment,
  hasTechnology: boolean,
  hasRelatedConcerns = false,
): Heading[] {
  const h = (id: string, text: string): Heading => ({ id, text, level: 2 });

  const entries: (Heading | false | undefined | 0)[] = [
    ...(t.sections ?? []).map((s) => h(headingAnchor(s.heading), s.heading)),
    t.routes?.length
      ? h("what-it-treats", `What ${t.name} is used for at Kaiteki`)
      : hasRelatedConcerns && h("concerns-addressed", "Concerns this treatment addresses"),
    !!t.variantModule && h("which-device", t.variantModule.heading),
    !!t.avoidIf?.length
      ? h("suitability", "Who should postpone or avoid it")
      : !!(t.suitableFor?.length || t.notSuitableFor?.length) &&
        h("suitability", "Is this right for you?"),
    !!t.sessionSteps?.length && h("your-session", "What a session involves"),
    !!t.steps?.length && h("steps", "The procedure, step by step"),
    !!t.afterSession && h("after-a-session", "After a session"),
    !!t.risks && h("risks", `Risks, side effects, and what ${t.name} cannot do`),
    !!t.costFactors && h("sessions-cost", "What affects the number of sessions, and the cost"),
    !!t.manufacturerImages?.length && h("manufacturer", "What these treatments do"),
    !!t.areas?.length && h("treatment-areas", "Treatment areas"),
    !!t.comparisons?.length && h("comparisons", `${t.name} vs other options`),
    !!(t.preCare?.length || t.postCare?.length) && h("care", "Pre and post treatment care"),
    hasTechnology && h("devices", "Devices used at Kaiteki"),
    !!t.faqs?.length && h("faq", "Common questions"),
  ];

  // An authored section can already carry one of the derived headings, and the
  // rail must not list the same anchor twice.
  const seen = new Set<string>();
  return entries.filter((e): e is Heading => {
    if (!e || seen.has(e.id)) return false;
    seen.add(e.id);
    return true;
  });
}
