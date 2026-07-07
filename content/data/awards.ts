import type { Award } from "@/lib/types";

// Device/brand-partner performance awards — substantiated, verifiable claims
// from the manufacturers named, not general "best clinic" superlatives (the
// legacy site's "Multi-Awards Winning Clinic" framing was flagged to drop —
// docs/03 §"AVOID", docs/05 §112). Sourced from the legacy homepage
// (well-known/index.html) pending re-confirmation with the client that each
// is still current before this ships live.
export const awards: Award[] = [
  { title: "Plinest Top User Award", period: "2023–2024" },
  { title: "NEAUVIA Top User Award", period: "2024" },
  { title: "Top 10 Merz Portfolio", period: "2023/2024" },
  { title: "Top 10 Authentic Ultherapy Transducers Sales", period: "2023/2024" },
  { title: "Top 10 Authentic Radiesse Treatment Provider", period: "2022–2024" },
  { title: "1st Runner-Up, Radiesse Highest Achievement (APAC)", period: "" },
  { title: "Sylfirm X — Achiever Award", period: "" },
  { title: "Sylfirm X — Xpert Achiever Award", period: "" },
  { title: "Rejuran Elite Platinum Award", period: "2024" },
  { title: "Profhilo Platinum Award", period: "2021–2023" },
  { title: "Authentic Ultherapy & Ultherapy Prime Provider", period: "" },
];
