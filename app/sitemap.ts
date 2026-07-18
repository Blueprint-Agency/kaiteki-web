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
    "/concerns/skin",
    "/concerns/face",
    "/concerns/eyes",
    "/concerns/hair-body",
    "/locations",
    "/skincare",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const dynamicPaths = [
    ...treatments.map(treatmentHref),
    ...doctors.map((d) => `/doctors/${d.slug}`),
    ...concerns.map((c) => `/concerns/${c.slug}`),
    ...branches.map((b) => `/locations/${b.slug}`),
    ...technology.map((t) => `/technology/${t.slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({ url: url(path) }));
}
