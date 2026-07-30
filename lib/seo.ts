import type { Metadata } from "next";

// Brand OG fallback. ponytail: reusing the hero photo; swap for a purpose-built
// 1200×630 branded share card (e.g. public/brand/og-default.jpg) before launch.
const DEFAULT_OG_IMAGE = "/images/hero/hero-subject.png";

/**
 * Set NEXT_PUBLIC_NOINDEX=1 on staging. A canonical to production does NOT stop
 * Google indexing a staging host (spec bugs B-08 / TB-14) — this forces
 * `noindex, nofollow` site-wide and flips /robots.txt to Disallow: /.
 */
export const NOINDEX_SITE = process.env.NEXT_PUBLIC_NOINDEX === "1";

export interface PageMetaInput {
  /** Full <title> (50–60 chars, brand already baked in). Set as-is via title.absolute
   *  so the root layout's "%s | Kaiteki…" template does NOT double-append the brand. */
  title: string;
  /** Meta description, 140–160 chars. */
  description: string;
  /** Absolute path from the site root, e.g. "/concerns/acne". Drives canonical + og:url. */
  path: string;
  /** Page-specific share image (falls back to the brand default). */
  image?: string;
  /** Utility/thin pages: noindex but still follow. */
  noindex?: boolean;
}

/** Single source of truth for per-page metadata. Guarantees a self-referencing
 *  canonical + Open Graph + Twitter card on every page that uses it. */
export function pageMeta({ title, description, path, image, noindex }: PageMetaInput): Metadata {
  const ogImage = image ?? DEFAULT_OG_IMAGE;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    ...(NOINDEX_SITE
      ? { robots: { index: false, follow: false } }
      : noindex
        ? { robots: { index: false, follow: true } }
        : {}),
  };
}
