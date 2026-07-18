import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Native Next.js robots — served at /robots.txt. Points crawlers at the sitemap
// (a core sitemap best practice) on the canonical non-www host.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
