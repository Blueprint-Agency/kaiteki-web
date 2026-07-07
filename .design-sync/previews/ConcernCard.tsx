// Preview for ConcernCard — a concern-hub grid tile (image + name + one
// compliant summary sentence + "Explore options"). Each export is one grid cell.
import { ConcernCard } from "@/components/cards";
import type { Concern } from "@/lib/types";

// On-brand warm-gradient stand-in for the concern photo (real /images/… paths
// aren't reachable in the design tool; the DS agent supplies its own URLs).
const photo = (from: string, to: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='200'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${from}'/><stop offset='1' stop-color='${to}'/></linearGradient></defs><rect width='320' height='200' fill='url(#g)'/></svg>`,
  )}`;

const base = {
  treatments: [],
  reviewedBy: "dr-yeong-bin",
  lastReviewed: "2026-06-22",
} as const;

const acne: Concern = {
  ...base,
  slug: "acne",
  name: "Acne",
  group: "Skin",
  image: photo("#efe7df", "#d8c3b2"),
  summary:
    "Acne and acne scarring have several causes and types — assessment guides which treatments may help.",
  leadAnswer: "",
};

const pigmentation: Concern = {
  ...base,
  slug: "pigmentation",
  name: "Pigmentation",
  group: "Skin",
  image: photo("#ece4e6", "#cbb3a6"),
  summary:
    "Uneven pigmentation such as melasma, sun spots and post-inflammatory marks are assessed individually.",
  leadAnswer: "",
};

const bodySlimming: Concern = {
  ...base,
  slug: "body-slimming",
  name: "Body Slimming",
  group: "Face & Body",
  image: photo("#e9e2da", "#c9a98d"),
  summary:
    "Localised fat concerns are assessed individually; these are not weight-loss treatments.",
  leadAnswer: "",
};

const cell: React.CSSProperties = { width: 340 };

export function Acne() {
  return (
    <div style={cell}>
      <ConcernCard c={acne} />
    </div>
  );
}

export function Pigmentation() {
  return (
    <div style={cell}>
      <ConcernCard c={pigmentation} />
    </div>
  );
}

export function BodySlimming() {
  return (
    <div style={cell}>
      <ConcernCard c={bodySlimming} />
    </div>
  );
}
