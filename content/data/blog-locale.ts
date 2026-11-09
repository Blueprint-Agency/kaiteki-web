import type { NonDefaultLocale } from "@/lib/i18n";
import type { Post } from "@/lib/types";

/**
 * Chinese and Malay blog posts (/zh/blog/<slug>, /ms/blog/<slug>). Unblocked
 * 2026-11-09 by the owner, replacing the 3 Nov "English only" call.
 *
 * - Same slug as the English twin (locale-neutral URLs, docs/04 §8). Every post
 *   here needs that twin in content/data/blog.ts, or hreflang would point at a
 *   page that does not exist (`pnpm check:blog` enforces it).
 * - Written on the locale's own keyword (docs/18), never a line-by-line
 *   translation of the English.
 * - Body at content/blog/<locale>/<slug>.mdx.
 * - A URL exists only once content/i18n/pages.ts has a live entry for
 *   "/blog/<slug>" in that locale (drafts render in dev and on staging only).
 *   `/blog` itself needs an entry too before the locale hub resolves.
 */
export const localePosts: Record<NonDefaultLocale, Post[]> = {
  zh: [],
  ms: [],
};

export function localePostBySlug(locale: NonDefaultLocale, slug: string): Post | undefined {
  return localePosts[locale].find((p) => p.slug === slug);
}
