import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@/components/icons";

/** Page numbers to show: first, last, and one either side of the current page,
 *  with null for each gap ("1 … 4 5 6 … 14"). */
export function pageWindow(page: number, total: number): (number | null)[] {
  const keep = new Set([1, total, page - 1, page, page + 1]);
  const out: (number | null)[] = [];
  for (let n = 1; n <= total; n += 1) {
    if (keep.has(n)) out.push(n);
    else if (out.at(-1) !== null) out.push(null);
  }
  return out;
}

const cell =
  "inline-flex h-10 min-w-10 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors";
const idle = "border border-hairline bg-surface text-ink-700 hover:border-mocha";
const current = "border border-espresso bg-espresso text-ink-on-dark";
const disabled = "border border-hairline text-ink-500 opacity-50";

/**
 * Numbered pagination for blog listings. Two modes, one look:
 *
 * - `hrefFor` (server pages): real links, so every page of the archive is a
 *   crawlable URL with `rel="prev"`/`"next"` on its neighbours.
 * - `onSelect` (the client search results): buttons, because a filtered result
 *   set is a view of the index, not a page anyone should land on from Google.
 */
export function BlogPagination({
  page,
  total,
  hrefFor,
  onSelect,
  label = "Blog pages",
}: {
  page: number;
  total: number;
  hrefFor?: (n: number) => string;
  onSelect?: (n: number) => void;
  label?: string;
}) {
  if (total <= 1) return null;

  const item = (
    n: number,
    body: React.ReactNode,
    cls: string,
    { rel, ...aria }: { rel?: string; "aria-label"?: string } = {},
  ) =>
    hrefFor ? (
      <Link href={hrefFor(n)} rel={rel} className={cls} {...aria}>
        {body}
      </Link>
    ) : (
      <button type="button" onClick={() => onSelect?.(n)} className={cls} {...aria}>
        {body}
      </button>
    );

  return (
    <nav aria-label={label} className="mt-12 flex flex-wrap items-center justify-center gap-2">
      {page > 1 ? (
        item(page - 1, <><ArrowLeft size={16} /> <span className="ml-1.5 hidden sm:inline">Previous</span></>, `${cell} ${idle}`, {
          rel: "prev",
          "aria-label": "Previous page",
        })
      ) : (
        <span className={`${cell} ${disabled}`} aria-hidden>
          <ArrowLeft size={16} /> <span className="ml-1.5 hidden sm:inline">Previous</span>
        </span>
      )}

      <ol className="flex flex-wrap items-center gap-2">
        {pageWindow(page, total).map((n, i) =>
          n === null ? (
            <li key={`gap-${i}`} aria-hidden className="px-1 text-ink-500">
              …
            </li>
          ) : (
            <li key={n}>
              {n === page ? (
                <span aria-current="page" className={`${cell} ${current}`}>
                  {n}
                </span>
              ) : (
                item(n, n, `${cell} ${idle}`, { "aria-label": `Page ${n}` })
              )}
            </li>
          ),
        )}
      </ol>

      {page < total ? (
        item(page + 1, <><span className="mr-1.5 hidden sm:inline">Next</span> <ArrowRight size={16} /></>, `${cell} ${idle}`, {
          rel: "next",
          "aria-label": "Next page",
        })
      ) : (
        <span className={`${cell} ${disabled}`} aria-hidden>
          <span className="mr-1.5 hidden sm:inline">Next</span> <ArrowRight size={16} />
        </span>
      )}
    </nav>
  );
}
