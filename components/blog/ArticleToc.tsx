import type { Heading } from "@/lib/blog";

/**
 * In-article contents. Plain anchor links — no client JS, no scroll-spy: the
 * value is orientation and deep-linkable sections (both a UX and an AEO win,
 * since answer engines cite section anchors), not a highlighted active state.
 *
 * Hidden entirely below 3 headings, where it would just be furniture.
 */
export function ArticleToc({ headings }: { headings: Heading[] }) {
  if (headings.length < 3) return null;

  // On a long article, listing every H3 (each FAQ question, each ingredient)
  // turns the contents into a wall taller than the opening section and pushes
  // the article itself below the fold. Past the threshold, show top-level
  // sections only — the H3s still carry their own anchors for deep links.
  const topLevel = headings.filter((h) => h.level === 2);
  const list = headings.length > 12 && topLevel.length >= 4 ? topLevel : headings;

  return (
    <nav
      aria-label="On this page"
      className="rounded-2xl border border-hairline bg-tint/70 p-5 sm:p-6"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mocha">On this page</p>
      <ol className="mt-4 space-y-2.5">
        {list.map((h) => (
          <li key={h.id} className={h.level === 3 ? "pl-4" : ""}>
            <a
              href={`#${h.id}`}
              className="text-sm leading-snug text-ink-700 underline decoration-transparent underline-offset-[3px] transition-colors hover:text-espresso hover:decoration-mocha"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
