/**
 * PROTOTYPE — throwaway. Delete with the rest of components/proto/.
 *
 * Hardcoded acne media manifest so the variants render against real assets
 * without waiting on the R2 upload or a `Concern` type change. Files were copied
 * to public/proto/acne/ from `kaiteki new/` (see docs/11 §3 for the mapping).
 * In the real build these become authored fields served from
 * https://cdn.kaiteki.my/concerns/acne/…
 */

const P = "/proto/acne";

export const protoMedia = {
  banner: { src: `${P}/banner.jpg`, sm: `${P}/banner-sm.jpg` },

  /** 2:1 photo, subject hard-left, right half empty — caption sits beside it. */
  figures: [
    { src: `${P}/fig-sebum.jpg`, caption: "Oil and dead skin cells collect in the follicle. That blockage is where every type of acne starts." },
    { src: `${P}/fig-inflammation.jpg`, caption: "When a blocked follicle becomes inflamed, the spot turns red and tender." },
    { src: `${P}/fig-hormonal.jpg`, caption: "Hormonal shifts change how much oil the skin produces — which is why adult acne often sits along the jaw." },
    { src: `${P}/fig-skincare.jpg`, caption: "Heavy or occlusive products can make blockage worse on skin already prone to it." },
    { src: `${P}/fig-post-acne.jpg`, caption: "Marks left after a spot settles are not the same as scarring, and they are not treated the same way." },
    { src: `${P}/fig-scar-refinement.jpg`, caption: "Textural scarring sits in the skin's structure rather than its colour." },
  ],

  /** 2:1 finished infographic — headline and body already burned in. No caption. */
  slides: [
    { src: `${P}/slide-stage-1.jpg`, alt: "Stage 1 acne: comedones, non-inflammatory. Blackheads and whiteheads form when follicles clog with oil and dead skin cells." },
    { src: `${P}/slide-stage-2.jpg`, alt: "Stage 2 acne: inflammatory papules and pustules develop as blocked follicles become inflamed." },
    { src: `${P}/slide-stage-3.jpg`, alt: "Stage 3 acne: nodules and cysts form deeper in the skin and carry the highest risk of scarring." },
  ],

  /** 1:1 transparent PNG, scalloped die-cut. Page ground only, never a tint band. */
  illus: [
    { src: `${P}/illus-comedonal-acne.png`, label: "Comedonal", sub: "Blackheads and whiteheads" },
    { src: `${P}/illus-inflammatory-acne.png`, label: "Inflammatory", sub: "Red, raised, tender" },
    { src: `${P}/illus-cystic-acne.png`, label: "Cystic", sub: "Deep, painful, scars easily" },
    { src: `${P}/illus-hormonal-acne.png`, label: "Hormonal", sub: "Jaw and lower face" },
    { src: `${P}/illus-ice-pick-scars.png`, label: "Ice pick scars", sub: "Narrow and deep" },
    { src: `${P}/illus-boxcar-scars.png`, label: "Boxcar scars", sub: "Wide with sharp edges" },
    { src: `${P}/illus-rolling-scars.png`, label: "Rolling scars", sub: "Broad, soft-edged dips" },
    { src: `${P}/illus-hypertrophic-and-keloid-scars.png`, label: "Raised scars", sub: "Hypertrophic and keloid" },
  ],

  /**
   * Pre-composited before+after in a single file — not a two-panel comparator.
   * `w` is the native width; cells must not exceed it (docs/11 §1.2).
   */
  results: [
    { src: `${P}/result-lg-1.jpg`, w: 1415, ratio: "1/1", caption: "Acne scarring · 6 sessions" },
    { src: `${P}/result-lg-2.jpg`, w: 1735, ratio: "5/4", caption: "Acne scarring · course of treatment" },
    { src: `${P}/result-lg-3.jpg`, w: 1415, ratio: "1/1", caption: "Acne scarring · 4 sessions" },
    { src: `${P}/result-sq-1.jpg`, w: 600, ratio: "1/1", caption: "Active acne · 3 sessions" },
    { src: `${P}/result-sq-2.jpg`, w: 600, ratio: "1/1", caption: "Active acne · 4 sessions" },
    { src: `${P}/result-sq-3.jpg`, w: 600, ratio: "1/1", caption: "Post-acne marks · 5 sessions" },
    { src: `${P}/result-sq-4.jpg`, w: 600, ratio: "1/1", caption: "Post-acne marks · 4 sessions" },
    { src: `${P}/result-sq-5.jpg`, w: 600, ratio: "1/1", caption: "Texture and tone · 6 sessions" },
    { src: `${P}/result-sq-6.jpg`, w: 564, ratio: "1/1", caption: "Acne scarring · course of treatment" },
    { src: `${P}/result-sq-7.jpg`, w: 600, ratio: "1/1", caption: "Skin texture · 4 sessions" },
    { src: `${P}/result-sq-8.jpg`, w: 600, ratio: "1/1", caption: "Acne scarring · 5 sessions" },
    { src: `${P}/result-wide-1.jpg`, w: 564, ratio: "1.71/1", caption: "Active acne · 3 sessions" },
    { src: `${P}/result-wide-2.jpg`, w: 564, ratio: "1.71/1", caption: "Active acne · 4 sessions" },
    { src: `${P}/result-wide-3.jpg`, w: 564, ratio: "1.71/1", caption: "Post-acne marks · 5 sessions" },
  ],

  /** Treatment-in-progress shots, reassigned out of results (docs/11 §3). */
  visit: [
    { src: `${P}/visit-1.jpg`, caption: "The doctor examines the skin under magnification before anything is recommended." },
    { src: `${P}/visit-2.jpg`, caption: "Settings are matched to your skin type, not to a fixed protocol." },
    { src: `${P}/visit-3.jpg`, caption: "Most sessions are short; the plan is reviewed as your skin responds." },
  ],
};

/** Shown under every results grid in all three variants. */
export const RESULTS_DISCLAIMER =
  "Photographs of Kaiteki patients, published with consent. Individual results vary and are not guaranteed. These images are not a promise of outcome — a doctor will assess whether any treatment is suitable for you.";
