/**
 * PROTOTYPE — throwaway. Delete with the rest of components/proto-tx/.
 *
 * Hardcoded treatment media manifest so the variants render against real assets
 * without waiting on the R2 upload or a `Treatment` type change. Files were
 * copied to public/proto/tx/<slug>/ from `kaiteki new/` (mapping in docs/13 §3).
 * In the real build these become authored fields served from
 * https://cdn.kaiteki.my/treatments/<slug>/…
 *
 * Two hosts, one from each GO tier (docs/13 §9):
 *   microwave-contouring — GO substantive, 16 explainers, the zone gallery
 *   skin-booster         — GO thin-ish, 5 figures + the manufacturerImages question
 */

export type TxFigure = { src: string; caption: string };
/** Die-cut zone photo. Transparent PNG — page ground only, never a tint band. */
export type TxZone = { label: string; src: string };
/** Manufacturer asset. `contain` is mandatory: logos are 1.25:1 transparent PNGs
 *  and the shipped T-14 container crops them with aspect-[4/3] object-cover. */
export type TxManufacturer = { src: string; alt: string; caption: string; kind: "logo" | "product" | "device" };

export type TxMedia = {
  banner?: { src: string; sm: string; alt: string };
  figures?: TxFigure[];
  zones?: TxZone[];
  manufacturer?: TxManufacturer[];
};

const MC = "/proto/tx/microwave-contouring";
const SB = "/proto/tx/skin-booster";

export const protoTxMedia: Record<string, TxMedia> = {
  "microwave-contouring": {
    banner: {
      src: `${MC}/banner.jpg`,
      sm: `${MC}/banner-sm.jpg`,
      alt: "",
    },
    figures: [
      {
        src: `${MC}/fig-session.png`,
        caption:
          "A session is delivered with a handpiece moved across the treatment area. Nothing is injected and nothing is removed.",
      },
    ],
    // 15 die-cut zones. The shipped `areas` block renders these as text chips today,
    // and microwave-contouring does not author `areas` at all.
    zones: [
      { label: "Double chin", src: `${MC}/zone-doublechin.png` },
      { label: "Heavy jowl", src: `${MC}/zone-heavyjowl.png` },
      { label: "Sagging jawline", src: `${MC}/zone-saggingjawline.png` },
      { label: "Nasolabial folds", src: `${MC}/zone-nasolabial.png` },
      { label: "Skin laxity", src: `${MC}/zone-skinlaxity.png` },
      { label: "Dull skin", src: `${MC}/zone-dullskin.png` },
      { label: "Bra fat", src: `${MC}/zone-brafat.png` },
      { label: "Back and bra line", src: `${MC}/zone-brafat2.png` },
      { label: "Love handles", src: `${MC}/zone-lovehandles.png` },
      { label: "Abdomen", src: `${MC}/zone-lovehandles2.png` },
      { label: "Upper arms", src: `${MC}/zone-upperarms.png` },
      { label: "Arm laxity", src: `${MC}/zone-upperarms2.png` },
      { label: "Outer thigh", src: `${MC}/zone-thigh.png` },
      { label: "Inner thigh", src: `${MC}/zone-thigh2.png` },
      { label: "Above the knee", src: `${MC}/zone-knees.png` },
    ],
    manufacturer: [
      {
        src: `${MC}/device-onda.png`,
        alt: "The Onda Coolwaves device, supplied by the manufacturer",
        caption: "Onda Coolwaves — manufacturer image of the device used at Kaiteki",
        kind: "device",
      },
      {
        src: `${MC}/logo-onda.png`,
        alt: "Onda manufacturer logo",
        caption: "Onda — manufacturer mark",
        kind: "logo",
      },
    ],
  },

  "skin-booster": {
    figures: [
      {
        src: `${SB}/fig-skinbooster.jpg`,
        caption:
          "Skin boosters are delivered as a series of small injections across the treatment area rather than in a single site.",
      },
      {
        src: `${SB}/fig-profhilo.jpg`,
        caption:
          "Profhilo is placed at five fixed points per side, chosen so the product spreads across the face from a small number of entries.",
      },
      {
        src: `${SB}/fig-rejuran.jpg`,
        caption:
          "Rejuran is injected more densely and more superficially, which is why it is usually considered for skin quality rather than volume.",
      },
      {
        src: `${SB}/fig-rejuran-session.jpg`,
        caption: "A typical session takes 20–30 minutes, most of which is numbing.",
      },
      {
        src: `${SB}/fig-explainer.jpg`,
        caption: "Boosters act on hydration and skin quality — they are not fillers and do not add contour.",
      },
    ],
    manufacturer: [
      { src: `${SB}/product-profhilo.jpg`, alt: "Profhilo packaging, supplied by the manufacturer", caption: "Profhilo — manufacturer product image", kind: "product" },
      { src: `${SB}/product-plinest.jpg`, alt: "Plinest packaging, supplied by the manufacturer", caption: "Plinest — manufacturer product image", kind: "product" },
      { src: `${SB}/product-juvelook.jpg`, alt: "Juvelook packaging, supplied by the manufacturer", caption: "Juvelook — manufacturer product image", kind: "product" },
      { src: `${SB}/logo-profhilo.png`, alt: "Profhilo manufacturer logo", caption: "Profhilo", kind: "logo" },
      { src: `${SB}/logo-rejuran.png`, alt: "Rejuran manufacturer logo", caption: "Rejuran", kind: "logo" },
      { src: `${SB}/logo-plinest.png`, alt: "Plinest manufacturer logo", caption: "Plinest", kind: "logo" },
    ],
  },
};

/** The disclaimer T-14 already renders. One source, same wording in every variant. */
export const MANUFACTURER_NOTE =
  "The images above are supplied by the device manufacturers. They are not Kaiteki patients and they do not depict Kaiteki results.";
