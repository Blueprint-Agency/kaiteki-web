import Link from "next/link";
import { activeCategories, categorySlug } from "@/content/data/blog";
import type { PostCategory } from "@/lib/types";

/**
 * Category rail for /blog and its archives. Server-rendered links (not a client
 * filter) so every archive is a real, crawlable URL — the legacy WordPress blog
 * put its categories behind JS-driven menus and none of them earned rankings.
 */
export function BlogCategoryNav({ active }: { active?: PostCategory }) {
  const categories = activeCategories();
  const base =
    "rounded-full border px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap";

  return (
    <nav aria-label="Blog categories" className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
      <ul className="flex gap-2">
        <li>
          <Link
            href="/blog"
            aria-current={active ? undefined : "page"}
            className={`${base} ${
              active
                ? "border-hairline bg-surface text-ink-700 hover:border-mocha"
                : "border-espresso bg-espresso text-ink-on-dark"
            }`}
          >
            All articles
          </Link>
        </li>
        {categories.map((c) => {
          const current = c === active;
          return (
            <li key={c}>
              <Link
                href={`/blog/category/${categorySlug(c)}`}
                aria-current={current ? "page" : undefined}
                className={`${base} ${
                  current
                    ? "border-espresso bg-espresso text-ink-on-dark"
                    : "border-hairline bg-surface text-ink-700 hover:border-mocha"
                }`}
              >
                {c}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
