// Brand constants + primary navigation (docs/04 §4). SAMPLE compliance values
// (KKLIU/registration) are placeholders pending real MAB approvals (docs/05 §8).
import { branches } from "@/content/data/branches";

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
export type NavItem = {
  label: string;
  href: string;
  mega?: "treatments" | "concerns";
  /** Compact dropdown links (a small panel, not a full-width mega menu). */
  dropdown?: { href: string; label: string }[];
  /** Absolute URL opened in a new tab (e.g. the blog on its own subdomain). */
  external?: boolean;
};

export const primaryNav: NavItem[] = [
  { label: "Concerns", href: "/concerns", mega: "concerns" },
  { label: "Treatments", href: "/treatments", mega: "treatments" },
  { label: "Products & Technology", href: "/technology" },
  { label: "Skincare", href: "/skincare" },
  {
    label: "Locations",
    href: "/locations",
    dropdown: [
      ...branches.map((b) => ({ href: `/locations/${b.slug}`, label: b.name })),
      { href: "/locations", label: "All locations" },
    ],
  },
  {
    label: "About",
    href: "/our-story",
    dropdown: [
      { href: "/our-story", label: "Our story" },
      { href: "/doctors", label: "Our doctors" },
    ],
  },
  // Blog still lives on blog.kaiteki.my — link out (new tab) until it migrates to /blog.
  { label: "Blog", href: "https://blog.kaiteki.my", external: true },
];
