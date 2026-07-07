// Preview for DoctorCard — a team-grid tile (round avatar + name + credentials,
// with an optional role line and "Special interests" list). Each export is one
// grid cell. Names/credentials/roles ported from content/data/doctors.ts.
import { DoctorCard } from "@/components/cards";
import type { Doctor } from "@/lib/types";

// Warm-gradient stand-in for the doctor avatar (real /images/… paths aren't
// reachable in the design tool; the DS agent supplies its own URLs).
const avatar = (from: string, to: string) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='${from}'/><stop offset='1' stop-color='${to}'/></linearGradient></defs><rect width='160' height='160' fill='url(#g)'/></svg>`,
  )}`;

// Founder role + two special interests.
const jessie: Doctor = {
  slug: "dr-jessie-lim",
  fullName: "Dr Jessie Lim Jia Min",
  credentials: "MD, LCP Board Certified, MAC, AAAM",
  role: "Founder & CEO, Aesthetic Physician",
  photo: avatar("#e9e2da", "#c9a98d"),
  branches: [],
  interests: ["Injectables", "Laser treatments"],
};

// Partner role + several special interests (tests a longer interests line).
const jeremy: Doctor = {
  slug: "dr-jeremy-low",
  fullName: "Dr Jeremy Low Jia Wei",
  credentials: "MBBS, MAC, LCP Board Certified",
  role: "Partner, Aesthetic Physician",
  photo: avatar("#efe7df", "#d8c3b2"),
  branches: [],
  interests: ["Acne", "Rosacea", "Pigmentation"],
};

// Role only, no listed interests (tests the role-only layout branch).
const yeong: Doctor = {
  slug: "dr-yeong-bin",
  fullName: "Dr Yeong Bin",
  credentials: "MBBS, LCP Board Certified, MAC, MSAM",
  role: "Co-Founder & Senior Medical Director",
  photo: avatar("#ece4e6", "#cbb3a6"),
  branches: [],
  interests: [],
};

const cell: React.CSSProperties = { width: 340 };

export function FounderWithInterests() {
  return (
    <div style={cell}>
      <DoctorCard d={jessie} />
    </div>
  );
}

export function PartnerManyInterests() {
  return (
    <div style={cell}>
      <DoctorCard d={jeremy} />
    </div>
  );
}

export function RoleOnly() {
  return (
    <div style={cell}>
      <DoctorCard d={yeong} />
    </div>
  );
}
