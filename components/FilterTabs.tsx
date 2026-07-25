"use client";

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
  return (
    <div className={`flex flex-wrap gap-2.5 ${className}`}>
      {tabs.map(({ value, label, count }) => {
        const isActive = active === value;
        return (
          <button
            key={value}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(value)}
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
  );
}
