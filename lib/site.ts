// Brand constants + primary navigation (docs/04 §4).
import { branches } from "@/content/data/branches";

export const site = {
  name: "Kaiteki Skin Aesthetic Clinic",
  shortName: "Kaiteki",
  tagline: "Skin · Aesthetic · Laser",
  url: "https://kaiteki.my",
  positioning: "MOH-licensed skin & aesthetic clinic, 9 branches across Malaysia.",
  instagram: "https://instagram.com/kaiteki.my",
  facebook: "https://facebook.com/mykaiteki",
  // Company number as printed on the legacy site's own footer. No KKLIU line:
  // none was ever issued, and the legacy site carried none either — displaying
  // a placeholder would be worse than displaying nothing (spec bug B-02).
  entity: "Kaiteki Clinic Sdn Bhd (1334975-M)",
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
  { label: "Device & Injectables", href: "/technology" },
  { label: "Products", href: "/products" },
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
  { label: "Journal", href: "/blog" },
];
