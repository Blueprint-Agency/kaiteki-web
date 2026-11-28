import type { ImageLoaderProps } from "next/image";

/**
 * next/image loader that resizes through Cloudflare Image Transformations on
 * cdn.kaiteki.my instead of Vercel's /_next/image.
 *
 * Our images already live in R2 behind cdn.kaiteki.my, so routing them through
 * Vercel's optimizer meant paying Vercel to fetch, re-encode and cache images that
 * Cloudflare can serve at the edge. That was the largest metered line on the Vercel
 * bill (Nov 2026: transformations + cache writes + reads ≈ $12/month).
 *
 * Billing: Cloudflare counts one unique transformation per (source, width) per
 * calendar month. format and quality are ignored, so AVIF and WebP for the same
 * width count once. The zone is on the free Images plan: 5,000/month. Past that,
 * new transformations fail with 9422, and `onerror=redirect` sends the browser to
 * the original image instead (it works because the source and the transformation
 * share the cdn.kaiteki.my host). That keeps `deviceSizes` in next.config.ts short.
 *
 * The zone setting is "on" (same-zone sources only): cdn.kaiteki.my and kaiteki.my.
 */
const CDN = "https://cdn.kaiteki.my";
// The few images still in public/ (logo, homepage hero) are SEO-pinned there.
// Cloudflare fetches them from the live site, so a change to one shows up on
// preview deployments only after it reaches production.
const SITE = "https://kaiteki.my";

export default function cloudflareImageLoader({ src, width, quality }: ImageLoaderProps): string {
  const options = `width=${width},quality=${quality ?? 75},format=auto,fit=scale-down`;

  if (src.startsWith(`${CDN}/`)) {
    return `${CDN}/cdn-cgi/image/${options},onerror=redirect/${src.slice(CDN.length + 1)}`;
  }

  if (src.startsWith("/")) {
    // Dev serves public/ itself; `w` keeps each srcset entry distinct.
    if (process.env.NODE_ENV !== "production") return `${src}?w=${width}`;
    return `${CDN}/cdn-cgi/image/${options}/${SITE}${src}`;
  }

  // Anything else is outside the remotePatterns fence; serve it untouched.
  return src;
}
