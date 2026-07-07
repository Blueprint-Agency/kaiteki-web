// Preview for BranchCard — a locations-grid tile (photo + area name + city/state
// with a map pin, plus an arrow). Each export is one grid cell.
import { BranchCard } from "@/components/cards";
import type { Branch } from "@/lib/types";

// On-brand warm-gradient stand-in for the clinic photo (real /images/… paths
// aren't reachable in the design tool; the DS agent supplies its own URLs).
const photo = (from: string, to: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='320' height='200'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${from}'/><stop offset='1' stop-color='${to}'/></linearGradient></defs><rect width='320' height='200' fill='url(#g)'/></svg>`,
  )}`;

const montKiara: Branch = {
  slug: "mont-kiara",
  name: "Mont Kiara",
  city: "Kuala Lumpur",
  state: "WP Kuala Lumpur",
  region: "Klang Valley",
  photo: photo("#efe7df", "#d8c3b2"),
  treatments: ["pico-laser", "hifu", "ultherapy", "coolsculpting"],
};

const southkey: Branch = {
  slug: "southkey-johor-bahru",
  name: "Southkey, Johor Bahru",
  city: "Johor Bahru",
  state: "Johor",
  region: "Johor",
  photo: photo("#ece4e6", "#cbb3a6"),
  treatments: ["pico-laser", "hifu", "coolsculpting"],
};

const kotaKinabalu: Branch = {
  slug: "kota-kinabalu",
  name: "Kota Kinabalu",
  city: "Kota Kinabalu",
  state: "Sabah",
  region: "Sabah",
  photo: photo("#e9e2da", "#c9a98d"),
  treatments: ["pico-laser", "hifu", "fotona-4d"],
};

const cell: React.CSSProperties = { width: 340 };

export function MontKiara() {
  return (
    <div style={cell}>
      <BranchCard b={montKiara} />
    </div>
  );
}

export function SouthkeyJohorBahru() {
  return (
    <div style={cell}>
      <BranchCard b={southkey} />
    </div>
  );
}

export function KotaKinabalu() {
  return (
    <div style={cell}>
      <BranchCard b={kotaKinabalu} />
    </div>
  );
}
