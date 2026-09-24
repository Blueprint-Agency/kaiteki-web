import { BlogCard } from "@/components/blog/BlogCard";
import { CardRow } from "@/components/CardRow";
import type { Post } from "@/lib/types";

/**
 * The blog → page edge read back the other way (`docs/15` item 1.3). Posts
 * already link to the treatments, concerns and devices they tag; this row lets
 * those pages link back, so the guides stop being dead ends for crawl equity.
 *
 * Shared by all three templates and placed directly after the FAQ on each, so
 * the row sits in the same place whichever page a reader lands on. Renders
 * nothing without a post: `postsFor` never pads with unrelated ones.
 *
 * Deliberately not in the contents rail and carries no id — it is a way off
 * the page, not a section of it, the same call "Where to go next" makes.
 */
export function ReadNext({ posts }: { posts: Post[] }) {
  if (!posts.length) return null;
  return (
    <section className="py-12 sm:py-14">
      <h2 className="h-section">Read next</h2>
      <CardRow className="mt-10">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </CardRow>
    </section>
  );
}
