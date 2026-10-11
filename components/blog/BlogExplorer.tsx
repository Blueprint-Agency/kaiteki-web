"use client";

import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { alignFilterRow } from "@/components/FilterTabs";
import { ChevronDown, Search, X } from "@/components/icons";
import type { PostCategory } from "@/lib/types";
import { BlogPagination } from "./BlogPagination";
import { PostCard, type IndexedPost } from "./PostCard";

/*
 * Search, filters and sort for /blog and its category archives.
 *
 * Progressive enhancement over a server-rendered listing. With every control at
 * its default, this renders `children`: the static, paginated, crawlable page
 * the server built. The moment a visitor types, filters or re-sorts, it fetches
 * /blog/search-index.json once and renders the matching cards itself. The state
 * lives in the query string (?q=&topic=&author=&category=&sort=&p=), so a
 * search is shareable and survives Back; those URLs canonicalise to the
 * listing, so they never compete with it in search results.
 */

type Sort = "relevance" | "newest" | "oldest" | "az" | "quickest";

const SORT_LABEL: Record<Sort, string> = {
  relevance: "Best match",
  newest: "Newest first",
  oldest: "Oldest first",
  az: "Title A–Z",
  quickest: "Quickest read",
};

const PAGE_SIZE = 12;

export interface FilterOption {
  value: string;
  label: string;
  count: number;
}

interface State {
  q: string;
  topic: string;
  author: string;
  category: string;
  sort: Sort | "";
  page: number;
}

const EMPTY: State = { q: "", topic: "", author: "", category: "", sort: "", page: 1 };

function readUrl(): State {
  const p = new URLSearchParams(window.location.search);
  const sort = p.get("sort") ?? "";
  return {
    q: p.get("q") ?? "",
    topic: p.get("topic") ?? "",
    author: p.get("author") ?? "",
    category: p.get("category") ?? "",
    sort: sort in SORT_LABEL ? (sort as Sort) : "",
    page: Math.max(1, Number.parseInt(p.get("p") ?? "1", 10) || 1),
  };
}

function writeUrl(s: State, push: boolean) {
  const p = new URLSearchParams();
  if (s.q) p.set("q", s.q);
  if (s.topic) p.set("topic", s.topic);
  if (s.author) p.set("author", s.author);
  if (s.category) p.set("category", s.category);
  if (s.sort) p.set("sort", s.sort);
  if (s.page > 1) p.set("p", String(s.page));
  const qs = p.toString();
  const url = `${window.location.pathname}${qs ? `?${qs}` : ""}`;
  if (push) window.history.pushState(null, "", url);
  else window.history.replaceState(null, "", url);
}

// One fetch per page view, shared by every render.
let indexPromise: Promise<IndexedPost[]> | null = null;
function loadIndex() {
  indexPromise ??= fetch("/blog/search-index.json")
    .then((r) => {
      if (!r.ok) throw new Error(`search index ${r.status}`);
      return r.json() as Promise<IndexedPost[]>;
    })
    .catch((e) => {
      indexPromise = null; // let the next attempt retry
      throw e;
    });
  return indexPromise;
}

const fold = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "");

/** Every word of the query has to appear somewhere; where it appears ranks it.
 *  A title hit outweighs a topic or category hit, which outweighs the summary. */
function score(post: IndexedPost, words: string[]): number {
  const title = fold(post.title);
  const meta = fold([post.category, ...post.tags].join(" "));
  const rest = fold(`${post.description} ${post.author?.name ?? ""} ${post.slug.replace(/-/g, " ")}`);
  let total = 0;
  for (const w of words) {
    const s = (title.includes(w) ? 3 : 0) + (meta.includes(w) ? 2 : 0) + (rest.includes(w) ? 1 : 0);
    if (s === 0) return 0;
    total += s;
  }
  return total;
}

const newest = (a: IndexedPost, b: IndexedPost) => (a.publishedAt < b.publishedAt ? 1 : -1);

const control =
  "w-full appearance-none rounded-full border border-hairline bg-surface py-2.5 text-sm text-espresso outline-none transition-colors focus:border-mocha";

function Select({
  label,
  value,
  onChange,
  options,
  all,
  changed = value !== "",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  all?: string;
  /** Outline the control when it is off its default. */
  changed?: boolean;
}) {
  return (
    <label className="relative block min-w-0 lg:w-44">
      <span className="sr-only">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${control} cursor-pointer truncate pl-4 pr-10 ${changed ? "border-mocha" : ""}`}
      >
        {all !== undefined && <option value="">{all}</option>}
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        size={16}
        className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-500"
      />
    </label>
  );
}

export function BlogExplorer({
  scope,
  categories,
  topics,
  authors,
  children,
}: {
  /** Set on a category archive: results never leave that category. */
  scope?: PostCategory;
  /** Category filter, offered on the hub only (an archive is already one). */
  categories?: FilterOption[];
  topics: FilterOption[];
  authors: FilterOption[];
  /** The server-rendered listing, shown whenever every control is at its default. */
  children: ReactNode;
}) {
  const [state, setState] = useState<State>(EMPTY);
  const [index, setIndex] = useState<IndexedPost[] | null>(null);
  const [failed, setFailed] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  // The URL is the source of truth on arrival and on Back/Forward.
  useEffect(() => {
    const sync = () => setState(readUrl());
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  const active =
    state.q.trim() !== "" ||
    state.topic !== "" ||
    state.author !== "" ||
    state.category !== "" ||
    (state.sort !== "" && state.sort !== "newest");

  const fetchIndex = useCallback(() => {
    loadIndex()
      .then((data) => {
        setIndex(data);
        setFailed(false);
      })
      .catch(() => setFailed(true));
  }, []);

  useEffect(() => {
    if (active && !index) fetchIndex();
  }, [active, index, fetchIndex]);

  /** Any filter change resets to page 1; only paging itself adds a history entry. */
  const update = (patch: Partial<State>) => {
    const next = { ...state, page: 1, ...patch };
    setState(next);
    writeUrl(next, "page" in patch);
  };

  const words = useMemo(() => fold(state.q).split(/[^a-z0-9]+/).filter(Boolean), [state.q]);
  const sort: Sort =
    state.sort && !(state.sort === "relevance" && words.length === 0)
      ? state.sort
      : words.length
        ? "relevance"
        : "newest";

  const results = useMemo(() => {
    if (!index) return [];
    const ranked = index
      .filter(
        (p) =>
          (!scope || p.category === scope) &&
          (!state.category || p.category === state.category) &&
          (!state.topic || p.tags.includes(state.topic)) &&
          (!state.author || p.authorKey === state.author),
      )
      .map((p) => ({ p, s: words.length ? score(p, words) : 1 }))
      .filter((r) => r.s > 0);

    ranked.sort((a, b) => {
      switch (sort) {
        case "relevance":
          return b.s - a.s || newest(a.p, b.p);
        case "oldest":
          return -newest(a.p, b.p);
        case "az":
          return a.p.title.localeCompare(b.p.title);
        case "quickest":
          return a.p.readingMinutes - b.p.readingMinutes || newest(a.p, b.p);
        default:
          return newest(a.p, b.p);
      }
    });
    return ranked.map((r) => r.p);
  }, [index, scope, state.category, state.topic, state.author, words, sort]);

  const pages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const page = Math.min(state.page, pages);
  const shown = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const sortOptions = (Object.keys(SORT_LABEL) as Sort[])
    .filter((s) => s !== "relevance" || words.length > 0)
    .map((s) => ({ value: s, label: SORT_LABEL[s] }));

  const withCount = (o: FilterOption) => ({ value: o.value, label: `${o.label} (${o.count})` });

  const summary = !index
    ? failed
      ? "Search could not load."
      : "Searching…"
    : `${results.length} article${results.length === 1 ? "" : "s"}${
        words.length ? ` matching “${state.q.trim()}”` : ""
      }`;

  return (
    <div>
      <div
        ref={rowRef}
        // Sticky from sm only: on a phone the search plus a 2×2 of menus would
        // hold a fifth of the screen for the whole scroll.
        className="z-30 -mx-5 border-b border-hairline bg-page px-5 pb-4 pt-3 sm:sticky sm:top-[68px] sm:mx-0 sm:px-0"
      >
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-500"
              size={18}
            />
            <input
              type="search"
              value={state.q}
              onChange={(e) => update({ q: e.target.value })}
              onFocus={() => !index && loadIndex().catch(() => {})}
              placeholder={scope ? `Search ${scope.toLowerCase()}…` : "Search articles, treatments, concerns…"}
              aria-label="Search the blog"
              className={`${control} pl-11 pr-10 placeholder:text-ink-500 [&::-webkit-search-cancel-button]:hidden`}
            />
            {state.q && (
              <button
                type="button"
                onClick={() => update({ q: "" })}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-500 hover:text-espresso"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* 2×2 on phones so every label stays readable; one row from lg. */}
          <div className="grid grid-cols-2 gap-2 sm:grid-flow-col sm:grid-cols-none sm:auto-cols-fr lg:flex lg:flex-none">
            {categories && (
              <Select
                label="Filter by category"
                value={state.category}
                onChange={(category) => update({ category })}
                all="All categories"
                options={categories.map(withCount)}
              />
            )}
            {topics.length > 0 && (
              <Select
                label="Filter by topic"
                value={state.topic}
                onChange={(topic) => update({ topic })}
                all="All topics"
                options={topics.map(withCount)}
              />
            )}
            <Select
              label="Filter by author"
              value={state.author}
              onChange={(author) => update({ author })}
              all="All authors"
              options={authors.map(withCount)}
            />
            <Select
              label="Sort articles"
              value={sort}
              changed={state.sort !== ""}
              onChange={(v) => update({ sort: v as Sort })}
              options={sortOptions}
            />
          </div>
        </div>

        {active && (
          <div className="mt-3 flex items-center justify-between gap-3 text-sm">
            <p aria-live="polite" className="text-ink-700">
              {summary}
            </p>
            <button
              type="button"
              onClick={() => update({ ...EMPTY })}
              className="font-medium text-accent underline decoration-mocha/40 underline-offset-[3px] hover:text-espresso"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {!active ? (
        children
      ) : !index ? (
        <div className="py-16 text-center text-ink-700">
          {failed ? (
            <button type="button" onClick={fetchIndex} className="font-medium text-accent underline">
              Search could not load. Try again
            </button>
          ) : (
            "Loading articles…"
          )}
        </div>
      ) : results.length === 0 ? (
        <div className="py-16 text-center">
          <p className="font-display text-xl text-espresso">No articles match.</p>
          <p className="mt-2 text-ink-700">Try fewer or different words, or clear a filter.</p>
        </div>
      ) : (
        <>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p) => (
              <PostCard key={p.slug} post={p} author={p.author} />
            ))}
          </div>
          <BlogPagination
            page={page}
            total={pages}
            label="Search result pages"
            onSelect={(n) => {
              update({ page: n });
              alignFilterRow(rowRef.current);
            }}
          />
        </>
      )}
    </div>
  );
}
