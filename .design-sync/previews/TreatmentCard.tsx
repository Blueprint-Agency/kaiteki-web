// Preview for TreatmentCard — a treatment hub/grid tile (image + name + one
// compliant summary sentence + "Learn more"). Each export is one grid cell.
import { TreatmentCard } from "@/components/cards";
import type { Treatment } from "@/lib/types";

// On-brand warm-gradient stand-in for the treatment photo (real /images/… paths
// aren't reachable in the design tool; the DS agent supplies its own URLs).
const photo = (from: string, to: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='200'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${from}'/><stop offset='1' stop-color='${to}'/></linearGradient></defs><rect width='320' height='200' fill='url(#g)'/></svg>`,
  )}`;

const base = {
  category: "Pigment & Resurfacing",
  concerns: [],
  related: [],
  reviewedBy: "dr-chew-yuhhui",
  lastReviewed: "2026-06-20",
  kkliu: "KKLIU 0000/2026 (sample)",
  kkliuExpiry: "2026-12-31",
} as const;

const pico: Treatment = {
  ...base,
  slug: "pico-laser",
  name: "Pico Laser",
  image: photo("#efe7df", "#d8c3b2"),
  summary:
    "A picosecond laser used for pigmentation, dull skin tone and tattoo removal, suited to a range of Asian skin tones.",
  leadAnswer: "",
};

const hifu: Treatment = {
  ...base,
  category: "Lifting & Tightening",
  slug: "hifu",
  name: "HIFU Lifting",
  image: photo("#ece4e6", "#cbb3a6"),
  summary: "Focused ultrasound that targets deeper layers to support lifting along the jaw and brow.",
  leadAnswer: "",
};

const booster: Treatment = {
  ...base,
  category: "Regenerative & Injectables",
  slug: "skin-booster",
  name: "Skin Booster",
  image: photo("#e9e2da", "#c9a98d"),
  summary:
    "Micro-injections of hydrating ingredients used to improve skin quality, texture and hydration over a course of sessions.",
  leadAnswer: "",
};

const cell: React.CSSProperties = { width: 340 };

export function PicoLaser() {
  return (
    <div style={cell}>
      <TreatmentCard t={pico} />
    </div>
  );
}

export function HifuLifting() {
  return (
    <div style={cell}>
      <TreatmentCard t={hifu} />
    </div>
  );
}

export function SkinBooster() {
  return (
    <div style={cell}>
      <TreatmentCard t={booster} />
    </div>
  );
}
