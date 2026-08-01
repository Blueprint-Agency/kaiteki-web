// Brand constants + primary navigation (docs/04 §4).
import { branches } from "@/content/data/branches";

/**
 * Spec bug B-02 — the footer shipped `KKLIU 0000/2026 (sample)` and
 * `Co. No. — pending`, which legally blocks public indexing (website content
 * for aesthetic services is advertising in Malaysia and needs MAB approval).
 *
 * Both now come from the environment, and their absence is what forces the
 * whole site `noindex` (see lib/seo.ts) — so the placeholder can never be
 * indexed by anyone forgetting a flag. Set both in .env to go live.
 */
const KKLIU = process.env.NEXT_PUBLIC_KKLIU?.trim();
const COMPANY_NO = process.env.NEXT_PUBLIC_COMPANY_NO?.trim();

/** False until the real MAB advertisement ref and company number are supplied. */
export const COMPLIANCE_READY = Boolean(KKLIU && COMPANY_NO);

export const site = {
  name: "Kaiteki Skin Aesthetic Clinic",
  shortName: "Kaiteki",
  tagline: "Skin · Aesthetic · Laser",
  url: "https://kaiteki.my",
  positioning: "MOH-licensed skin & aesthetic clinic, 9 branches across Malaysia.",
  instagram: "https://instagram.com/kaiteki.my",
  facebook: "https://facebook.com/mykaiteki",
  entity: COMPANY_NO ? `Kaiteki Clinic Sdn Bhd (${COMPANY_NO})` : "Kaiteki Clinic Sdn Bhd",
  kkliu: KKLIU ?? "Advertisement approval pending",
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
  // Blog still lives on blog.kaiteki.my — link out (new tab) until it migrates to /blog.
  { label: "Blog", href: "https://blog.kaiteki.my", external: true },
];
