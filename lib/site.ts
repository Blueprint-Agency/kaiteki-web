// Brand constants + primary navigation (docs/04 §4). SAMPLE compliance values
// (KKLIU/registration) are placeholders pending real MAB approvals (docs/05 §8).

export const site = {
  name: "Kaiteki Skin Aesthetic Clinic",
  shortName: "Kaiteki",
  tagline: "Skin · Aesthetic · Laser",
  url: "https://kaiteki.my",
  positioning: "MOH-licensed skin & aesthetic clinic, 9 branches across Malaysia.",
  instagram: "https://instagram.com/kaiteki.my",
  facebook: "https://facebook.com/mykaiteki",
  // Placeholders pending client data (docs/05 §9).
  entity: "Kaiteki Clinic Sdn Bhd (Co. No. — pending)",
  kkliu: "KKLIU 0000/2026 (sample)",
  mmcNote: "All treatments are performed by MMC-registered doctors.",
} as const;

/** Primary header links (mega-menus are built from the treatments/concerns data). */
export const primaryNav = [
  { label: "Treatments", href: "/treatments", mega: "treatments" as const },
  { label: "Concerns", href: "/concerns", mega: "concerns" as const },
  { label: "Skincare", href: "/skincare" },
  { label: "Locations", href: "/locations" },
  { label: "Doctors", href: "/doctors" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];
