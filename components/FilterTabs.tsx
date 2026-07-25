"use client";

import { useRef } from "react";

/** Height of the sticky site header (SiteHeader's h-[68px]). */
const HEADER_H = 68;

/**
 * Re-align a sticky filter row to just under the site header, so switching
 * filters always lands at the top of the new results instead of leaving you
 * mid-list at whatever offset the previous (longer) list had.
 *
 * Pass the sticky row itself: its own rect is useless while it's stuck (it
 * always reports top: 68px), so we measure its parent — the explorer wrapper
 * whose first child it is. Only pulls the page back up; if you haven't scrolled
 * past the row yet, nothing moves.
 */
export function alignFilterRow(row: HTMLElement | null) {
  const root = row?.parentElement;
  if (!root) return;
  const top = root.getBoundingClientRect().top + window.scrollY - HEADER_H;
  if (window.scrollY <= top) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
}

/**
 * The shared hub filter row — pill tabs with a count, used by the concerns,
 * treatments and skincare explorers so all three filter identically. Purely
 * presentational: each explorer owns its own filter state and grouping.
 */
export function FilterTabs<T extends string>({
  tabs,
  active,
  onSelect,
  className = "",
}: {
  tabs: { value: T; label: string; count: number }[];
  active: T;
  onSelect: (value: T) => void;
  className?: string;
}) {
  const rowRef = useRef<HTMLDivElement>(null);

  /* Sticks under the 68px site header so the filter stays reachable while the
     results scroll. Same treatment as the technology explorer's own filter row
     (opaque bg-page, hairline underline, gutter bleed on mobile) so every hub
     filter behaves and reads identically. */
  return (
    <div
      ref={rowRef}
      className={`sticky top-[68px] z-30 -mx-5 border-b border-hairline bg-page px-5 pb-4 pt-2 sm:mx-0 sm:px-0 ${className}`}
    >
      <div className="flex flex-wrap gap-2.5">
        {tabs.map(({ value, label, count }) => {
          const isActive = active === value;
          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              onClick={() => {
                onSelect(value);
                alignFilterRow(rowRef.current);
              }}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-espresso bg-espresso text-ink-on-dark"
                  : "border-hairline bg-surface text-ink-700 hover:border-mocha"
              }`}
            >
              {label}
              <span className={isActive ? "opacity-60" : "text-ink-500"}>{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
