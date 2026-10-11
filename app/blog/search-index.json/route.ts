import { cardAuthor } from "@/components/blog/BlogCard";
import type { IndexedPost } from "@/components/blog/PostCard";
import { postsNewestFirst } from "@/content/data/blog";

/**
 * Everything the blog search needs, built once at build time. The hub pages
 * ship 12 cards each; BlogExplorer fetches this (~20 KB gzipped) only when a
 * visitor searches, filters or sorts, so the listing HTML stays small and the
 * search still covers every post.
 */
export const dynamic = "force-static";

export function GET() {
  const index: IndexedPost[] = postsNewestFirst().map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    category: p.category,
    image: p.image,
    imageAlt: p.imageAlt,
    publishedAt: p.publishedAt,
    readingMinutes: p.readingMinutes,
    author: cardAuthor(p),
    authorKey: p.author || p.authorName,
    tags: p.tags ?? [],
  }));
  return Response.json(index);
}
