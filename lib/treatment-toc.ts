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

/** Anchor id for an authored section heading — the same slug the h2 carries.
 *  Duplicated from `lib/concern-toc.ts` deliberately: both are imported by
 *  `scripts/validate-concerns.mts` under bare node, which resolves neither the
 *  `@/` alias nor an extensionless path, so they can only share *types*. */
export const headingAnchor = (h: string) =>
  h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/** The template's fixed section titles; "{name}" is the treatment name. English
 *  by default, a locale page passes its own (content/i18n/treatment-ui.ts). */
export type TreatmentTocLabels = {
  routesTitle: string;
  concernsHeading: string;
  avoidHeading: string;
  suitableHeading: string;
  sessionHeading: string;
  stepsHeading: string;
  roomHeading: string;
  afterHeading: string;
  risksHeading: string;
  costHeading: string;
  manufacturerHeading: string;
  areasHeading: string;
  comparisonsHeading: string;
  careHeading: string;
  devicesHeading: string;
  faqHeading: string;
};

const EN_LABELS: TreatmentTocLabels = {
  routesTitle: "What {name} is used for at Kaiteki",
  concernsHeading: "Concerns this treatment addresses",
  avoidHeading: "Who should postpone or avoid it",
  suitableHeading: "Is this right for you?",
  sessionHeading: "What a session involves",
  stepsHeading: "The procedure, step by step",
  roomHeading: "In the treatment room",
  afterHeading: "After a session",
  risksHeading: "Risks, side effects, and what {name} cannot do",
  costHeading: "What affects the number of sessions, and the cost",
  manufacturerHeading: "What these treatments do",
  areasHeading: "Treatment areas",
  comparisonsHeading: "{name} vs other options",
  careHeading: "Pre and post treatment care",
  devicesHeading: "Devices used at Kaiteki",
  faqHeading: "Common questions",
};

/** Section anchors from the English headings (anchorSource), so a translated
 *  page keeps the English ids: headingAnchor keeps only [a-z0-9]. */
export const treatmentSectionAnchors = (t: Treatment, anchorSource: Treatment = t) =>
  (t.sections ?? []).map((_, i) => headingAnchor(anchorSource.sections?.[i]?.heading ?? ""));

export function treatmentToc(
  t: Treatment,
  hasTechnology: boolean,
  hasRelatedConcerns = false,
  labels: TreatmentTocLabels = EN_LABELS,
  anchorSource: Treatment = t,
): Heading[] {
  const h = (id: string, text: string): Heading => ({ id, text, level: 2 });
  const L = labels;
  const n = (s: string) => s.replace("{name}", t.name);
  const anchors = treatmentSectionAnchors(t, anchorSource);

  const entries: (Heading | false | undefined | 0)[] = [
    ...(t.sections ?? []).map((s, i) => h(anchors[i], s.heading)),
    t.routes?.length
      ? h("what-it-treats", n(L.routesTitle))
      : hasRelatedConcerns && h("concerns-addressed", L.concernsHeading),
    !!t.variantModule && h("which-device", t.variantModule.heading),
    !!t.avoidIf?.length
      ? h("suitability", L.avoidHeading)
      : !!(t.suitableFor?.length || t.notSuitableFor?.length) && h("suitability", L.suitableHeading),
    !!t.sessionSteps?.length && h("your-session", L.sessionHeading),
    !!t.steps?.length && h("steps", L.stepsHeading),
    !!t.procedureImages?.length && h("in-the-treatment-room", L.roomHeading),
    !!t.afterSession && h("after-a-session", L.afterHeading),
    !!t.risks && h("risks", n(L.risksHeading)),
    !!t.costFactors && h("sessions-cost", L.costHeading),
    !!t.manufacturerImages?.length && h("manufacturer", L.manufacturerHeading),
    !!t.areas?.length && h("treatment-areas", L.areasHeading),
    !!t.comparisons?.length && h("comparisons", n(L.comparisonsHeading)),
    !!(t.preCare?.length || t.postCare?.length) && h("care", L.careHeading),
    hasTechnology && h("devices", L.devicesHeading),
    !!t.faqs?.length && h("faq", L.faqHeading),
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
