import type { Metadata } from "next";

// Brand OG fallback. ponytail: reusing the hero photo; swap for a purpose-built
// 1200×630 branded share card (e.g. public/brand/og-default.jpg) before launch.
const DEFAULT_OG_IMAGE = "/images/hero/hero-subject.png";

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
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
