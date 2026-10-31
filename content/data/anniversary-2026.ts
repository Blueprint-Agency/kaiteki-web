// 7th Anniversary campaign, "The Positive Face Project" (1–30 Nov 2026).
// Rendered at /anniversary/2026 by components/anniversary/Anniversary2026.tsx.
//
// Source: the designer's concept page and posters (Kaiteki_7th_Anniversary_Share,
// 2026-10-31). Sections, order and copy follow that page; only the shell
// (header, footer, type, colour) is the site's own. The five posters are hosted
// on R2 at images/promos/anniversary-2026/.
//
// ⚠️ Two posters (Happy Face Reset, Clear Skin Glow) contain before/after photos,
// and the master poster names Botox. ADR-0001 permits before/after on concern
// pages only — confirm with the client before this page ships.
//
// English only for now. Takedown: after 30 Nov the countdown shows the ended
// message on its own; retire or archive the route in December.

export const CAMPAIGN = {
  /** Exclusive end: midnight after 30 November, Malaysia time. */
  endsAt: "2026-12-01T00:00:00+08:00",
} as const;

const POSTER_BASE = "https://cdn.kaiteki.my/images/promos/anniversary-2026";

export type Poster = { src: string; label: string; alt: string; featured?: boolean };

export const posters: Poster[] = [
  {
    src: `${POSTER_BASE}/happy-face-reset-bye-bye-angry-face.jpg`,
    label: "Happy Face Reset & Bye Bye Angry Face",
    alt: "Kaiteki 7th anniversary promotion: Happy Face Reset & Bye Bye Angry Face",
  },
  {
    src: `${POSTER_BASE}/dull-out-glow-on-bb-face-lift.jpg`,
    label: "Dull Out Glow On & BB Face Lift",
    alt: "Kaiteki 7th anniversary promotion: Dull Out Glow On & BB Face Lift",
  },
  {
    src: `${POSTER_BASE}/tired-face-quickfix-face-sculpt-slim.jpg`,
    label: "Tired Face Quickfix & Face Sculpt",
    alt: "Kaiteki 7th anniversary promotion: Tired Face Quickfix & Face Sculpt",
  },
  {
    src: `${POSTER_BASE}/clear-skin-glow-blooming-scalp.jpg`,
    label: "Clear Skin Glow & Blooming Scalp",
    alt: "Kaiteki 7th anniversary promotion: Clear Skin Glow & Blooming Scalp",
  },
  {
    src: `${POSTER_BASE}/positive-face-project-offers.jpg`,
    label: "Buy More Save More · Additional PWP Packages",
    alt: "Kaiteki Positive Face Project anniversary additional packages: Buy More Save More, ONDA, lasers, slimming and Botox offers",
    featured: true,
  },
];
