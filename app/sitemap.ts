import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { treatments, treatmentHref } from "@/content/data/treatments";
import { doctors } from "@/content/data/doctors";
import { concerns } from "@/content/data/concerns";
import { branches } from "@/content/data/branches";
import { technology } from "@/content/data/technology";
import { posts, activeCategories, categorySlug } from "@/content/data/blog";
import { localePath } from "@/lib/i18n";
import { hreflangFor, liveLocaleEntries } from "@/lib/locale-pages";

// Native Next.js sitemap — served at /sitemap.xml, regenerated on each build
// from the same data the pages render, so it never drifts out of sync.
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.url}${path}`;

  const staticPaths = [
    "/",
    "/doctors",
    "/treatments",
    "/technology",
    "/concerns",
    "/locations",
    "/products",
    "/our-story",
    "/anniversary/2026",
    "/blog",
    "/privacy",
  ];

  // lastModified only where the data carries a real review date — a faked
  // lastmod trains crawlers to distrust the field, so doctors/branches/static
  // (no date) are emitted without one.
  const dynamicEntries: { path: string; lastmod?: string }[] = [
    ...treatments.map((t) => ({ path: treatmentHref(t), lastmod: t.lastReviewed })),
    ...doctors.map((d) => ({ path: `/doctors/${d.slug}` })),
    ...concerns.map((c) => ({ path: `/concerns/${c.slug}`, lastmod: c.lastReviewed })),
    ...branches.map((b) => ({ path: `/locations/${b.slug}` })),
    ...technology.map((t) => ({ path: `/technology/${t.slug}`, lastmod: t.lastReviewed })),
    // Posts carry a real publish/review date, so they get a truthful lastmod.
    // Category archives don't — their contents change, the page itself doesn't.
    ...posts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.updatedAt ?? p.publishedAt })),
    ...activeCategories().map((c) => ({ path: `/blog/category/${categorySlug(c)}` })),
  ];

  const english = [
    ...staticPaths.map((path) => ({ path } as { path: string; lastmod?: string })),
    ...dynamicEntries,
  ];
  // Chinese and Malay pages exist only once signed (lib/locale-pages.ts). Each
  // member of a language set carries the full reciprocal hreflang set, the
  // sitemap form of the <link rel="alternate"> tags pageMeta() emits. Their
  // lastmod is the sign-off date: that is when the locale copy last changed.
  const localized = liveLocaleEntries().map(({ locale, path, signed }) => ({
    loc: localePath(locale, path),
    path,
    lastmod: signed,
  }));

  return [...english.map((e) => ({ ...e, loc: e.path })), ...localized].map(({ loc, path, lastmod }) => {
    const languages = hreflangFor(path);
    return {
      url: url(loc),
      ...(lastmod ? { lastModified: lastmod } : {}),
      ...(languages
        ? { alternates: { languages: Object.fromEntries(Object.entries(languages).map(([k, v]) => [k, url(v)])) } }
        : {}),
    };
  });
}
