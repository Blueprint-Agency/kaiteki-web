import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { cardAuthor, BlogCard, FeaturedPostCard } from "@/components/blog/BlogCard";
import { BlogCategoryNav } from "@/components/blog/BlogCategoryNav";
import { BlogExplorer, type FilterOption } from "@/components/blog/BlogExplorer";
import { BlogPagination } from "@/components/blog/BlogPagination";
import { activeCategories, pageCount, pageOf } from "@/content/data/blog";
import type { Post } from "@/lib/types";

/*
 * The listing half of /blog and /blog/category/<slug>, shared by page 1 and
 * every /page/<n>: the category rail, the search/filter/sort bar and, under it,
 * one server-rendered page of cards with numbered links to the rest.
 */

/** Parse a /page/[page] segment. Page 1 lives at the base URL, so "1" (and
 *  anything past the end, or not a number) is a 404, never a duplicate. */
export function pageParam(raw: string, total: number): number {
  const n = Number(raw);
  if (!Number.isInteger(n) || n < 2 || n > pageCount(total) || String(n) !== raw) notFound();
  return n;
}

/** " (Page 3 of 14)" for titles and descriptions; nothing on page 1. */
export function pageSuffix(page: number, total: number): string {
  return page > 1 ? ` (Page ${page} of ${pageCount(total)})` : "";
}

const count = <K extends string>(keys: K[]) => {
  const m = new Map<K, number>();
  keys.forEach((k) => m.set(k, (m.get(k) ?? 0) + 1));
  return m;
};

/** Filter menus for a set of posts, each with how many posts it would leave. */
function filterOptions(list: Post[]) {
  const topics: FilterOption[] = [...count(list.flatMap((p) => p.tags ?? []))]
    // A topic on one post is a search, not a filter.
    .filter(([, n]) => n > 1)
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([value, n]) => ({ value, label: value, count: n }));

  const names = new Map<string, string>();
  const keys: string[] = [];
  for (const p of list) {
    const key = p.author || p.authorName;
    const name = cardAuthor(p)?.name;
    if (!key || !name) continue;
    names.set(key, name);
    keys.push(key);
  }
  const authors: FilterOption[] = [...count(keys)]
    .map(([value, n]) => ({ value, label: names.get(value)!, count: n }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return { topics, authors };
}

export function BlogListing({
  all,
  page,
  basePath,
  scope,
  featured,
}: {
  /** Every post this listing covers, newest first (excluding `featured`). */
  all: Post[];
  page: number;
  /** "/blog" or "/blog/category/<slug>"; page n is `${basePath}/page/${n}`. */
  basePath: string;
  scope?: Post["category"];
  /** Lead card above page 1 of the hub. */
  featured?: Post;
}) {
  const everything = featured ? [featured, ...all] : all;
  const { topics, authors } = filterOptions(everything);
  const categories: FilterOption[] | undefined = scope
    ? undefined
    : activeCategories().map((c) => ({
        value: c,
        label: c,
        count: everything.filter((p) => p.category === c).length,
      }));

  const list = pageOf(all, page);
  const total = pageCount(all.length);

  let grid: ReactNode = (
    <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((p, i) => (
        <BlogCard key={p.slug} post={p} priority={!featured && page === 1 && i === 0} />
      ))}
    </div>
  );
  if (featured && page === 1) {
    grid = (
      <>
        <div className="mt-8">
          <FeaturedPostCard post={featured} />
        </div>
        <section className="mt-14">
          <h2 className="h-section !text-[1.75rem] sm:!text-[2rem]">More reading</h2>
          {grid}
        </section>
      </>
    );
  }

  return (
    <>
      <div className="mt-8">
        <BlogCategoryNav active={scope} />
      </div>

      <div className="mt-6">
        <BlogExplorer scope={scope} categories={categories} topics={topics} authors={authors}>
          {grid}
          <BlogPagination
            page={page}
            total={total}
            hrefFor={(n) => (n === 1 ? basePath : `${basePath}/page/${n}`)}
          />
        </BlogExplorer>
      </div>
    </>
  );
}
