import type { Award } from "@/lib/types";

// Device / treatment-partner performance awards — each substantiated by the
// naming manufacturer (Merz, Allergan, Neauvia, Galderma, Neoasia, Elogio),
// not a general "best clinic" superlative or a patient-outcome claim (the
// legacy site's "Multi-Awards Winning Clinic" framing was flagged to drop —
// docs/03 §"AVOID", docs/05 §112). Photos are of the physical plaques/trophies
// presented to Kaiteki, shot in-house (source: well-known/assets/images/awards).
// Titles read from the plaques themselves; re-confirm each is current with the
// client before this ships live.
export const awards: Award[] = [
  {
    title: "Ultherapy — Top 10 Authentic Transducer Sales",
    issuer: "Merz Aesthetics",
    period: "2023 / 2024",
    image: "/awards/merz-ultherapy-2024.jpg",
    alt: "Merz Aesthetics plaque naming Kaiteki a Top 10 clinic for authentic Ultherapy transducer sales, 2023/2024.",
  },
  {
    title: "Top Neauvia Users",
    issuer: "Neauvia",
    period: "2024",
    image: "/awards/neauvia-top-user-2024.jpg",
    alt: "Neauvia trophy presented to Kaiteki Clinic as a Top Neauvia User, 2024.",
  },
  {
    title: "Rejuran — Elite Platinum Award",
    issuer: "Elogio Asia · PharmaResearch",
    period: "2024",
    image: "/awards/elogio-elite-platinum-2024.jpg",
    alt: "Rejuran Elite Platinum crystal trophy presented to Kaiteki Clinic by Elogio Asia and PharmaResearch, 2024.",
  },
  {
    title: "Profhilo — Platinum Award",
    issuer: "Neoasia",
    period: "2023",
    image: "/awards/neoasia-profhilo-platinum-2023.jpg",
    alt: "Neoasia Profhilo Platinum award plaque presented to Kaiteki, 2023.",
  },
  {
    title: "Sylfirm X — Elite Partner",
    issuer: "Elogio Asia",
    period: "2024",
    image: "/awards/elogio-sylfirm-x-elite-partner-2024.jpg",
    alt: "Elogio Asia Sylfirm X Elite Partner award presented to Kaiteki, 2024.",
  },
  {
    title: "Restylane — Top 5 Provider",
    issuer: "Galderma",
    period: "2024",
    image: "/awards/galderma-restylane-top5-2024.jpg",
    alt: "Galderma Restylane Top 5 provider award presented to Kaiteki, 2024.",
  },
  {
    title: "Golden Portfolio Recognition",
    issuer: "Merz Aesthetics",
    period: "2024",
    image: "/awards/merz-golden-portfolio-2024.jpg",
    alt: "Merz Aesthetics Golden Portfolio recognition presented to Kaiteki, 2024.",
  },
  {
    title: "Facial Aesthetics Appreciation",
    issuer: "Allergan Aesthetics",
    period: "2024",
    image: "/awards/allergan-facial-aesthetics-2024.jpg",
    alt: "Allergan Aesthetics Facial Aesthetics Appreciation award presented to Kaiteki, 2024.",
  },
];
