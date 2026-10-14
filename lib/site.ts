// Brand constants + primary navigation (docs/04 §4).
import { branches } from "@/content/data/branches";
import { treatmentCategories, treatmentsByCategory, treatmentHref } from "@/content/data/treatments";
import { concernGroups, concernsByGroup } from "@/content/data/concerns";
import { chrome } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { lhref } from "@/lib/locale-pages";
import type { Locale } from "@/lib/i18n";

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

export type MenuColumn = { title: string; links: { href: string; label: string }[] };

/** Everything the header renders, resolved for one locale on the server: labels
 *  from the chrome dictionary, names from the terms map, and every href pointing
 *  at the locale page when it is live, else the English one. */
export function headerModel(locale: Locale) {
  const n = chrome[locale].nav;
  const href = (path: string) => lhref(locale, path);
  const nav: NavItem[] = [
    { label: n.concerns, href: href("/concerns"), mega: "concerns" },
    { label: n.treatments, href: href("/treatments"), mega: "treatments" },
    { label: n.technology, href: href("/technology") },
    { label: n.products, href: href("/products") },
    {
      label: n.locations,
      href: href("/locations"),
      dropdown: [
        ...branches.map((b) => ({
          href: href(`/locations/${b.slug}`),
          label: term(locale, "branch", b.slug, b.name),
        })),
        { href: href("/locations"), label: n.allLocations },
      ],
    },
    {
      label: n.about,
      href: href("/our-story"),
      dropdown: [
        { href: href("/our-story"), label: n.ourStory },
        { href: href("/doctors"), label: n.ourDoctors },
      ],
    },
    { label: n.blog, href: href("/blog") },
  ];
  const treatments: MenuColumn[] = treatmentCategories.map((cat) => ({
    title: term(locale, "category", cat, cat),
    links: treatmentsByCategory(cat).map((t) => ({
      href: href(treatmentHref(t)),
      label: term(locale, "treatment", t.slug, t.name),
    })),
  }));
  const concerns: MenuColumn[] = concernGroups.map((g) => ({
    title: term(locale, "group", g, g),
    links: concernsByGroup(g).map((c) => ({
      href: href(`/concerns/${c.slug}`),
      label: term(locale, "concern", c.slug, c.name),
    })),
  }));
  return {
    nav,
    mega: { treatments, concerns },
    allHref: { treatments: href("/treatments"), concerns: href("/concerns") },
    homeHref: href("/"),
  };
}

export type HeaderModel = ReturnType<typeof headerModel>;
