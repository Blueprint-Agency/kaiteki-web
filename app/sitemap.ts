import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { treatments, treatmentHref } from "@/content/data/treatments";
import { doctors } from "@/content/data/doctors";
import { concerns } from "@/content/data/concerns";
import { branches } from "@/content/data/branches";
import { technology } from "@/content/data/technology";

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
    "/skincare",
    "/our-story",
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
  ];

  return [
    ...staticPaths.map((path) => ({ path } as { path: string; lastmod?: string })),
    ...dynamicEntries,
  ].map(({ path, lastmod }) => ({
    url: url(path),
    ...(lastmod ? { lastModified: lastmod } : {}),
  }));
}
