import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { NOINDEX_SITE } from "@/lib/seo";

// Native Next.js robots — served at /robots.txt. Points crawlers at the sitemap
// (a core sitemap best practice) on the canonical non-www host.
export default function robots(): MetadataRoute.Robots {
  if (NOINDEX_SITE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
