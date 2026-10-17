"use client";

import { useState } from "react";
import { BranchCard } from "./cards";
import { CardRow } from "./CardRow";
import { branches, regionOrder } from "@/content/data/branches";
import type { Region } from "@/lib/types";

type Filter = "All" | Region;

/** Region-filtered branch grid (docs/06 homepage refresh). Renders all
 *  branches server-side by default (Filter = "All") so crawlers and no-JS
 *  visitors see the full list; the tabs are a progressive-enhancement filter. */
export function BranchesExplorer({
  allLabel = "All branches",
  regionLabels,
  cards,
}: {
  allLabel?: string;
  /** Localized region tab labels, keyed by the English region. */
  regionLabels?: Partial<Record<Region, string>>;
  /** Localized href + name per branch slug (the locale page when live). */
  cards?: Record<string, { href: string; name: string; place?: string; alt?: string }>;
}) {
  const [region, setRegion] = useState<Filter>("All");
  const tabs: Filter[] = ["All", ...regionOrder];
  const shown = region === "All" ? branches : branches.filter((b) => b.region === region);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2.5">
        {tabs.map((tab) => {
          const count = tab === "All" ? branches.length : branches.filter((b) => b.region === tab).length;
          const active = region === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setRegion(tab)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? "border-espresso bg-espresso text-ink-on-dark"
                  : "border-hairline bg-surface text-ink-700 hover:border-mocha"
              }`}
            >
              {tab === "All" ? allLabel : (regionLabels?.[tab] ?? tab)}
              <span className={active ? "opacity-60" : "text-ink-500"}>{count}</span>
            </button>
          );
        })}
      </div>
      <CardRow>
        {shown.map((b) => (
          <BranchCard key={b.slug} b={b} {...cards?.[b.slug]} />
        ))}
      </CardRow>
    </div>
  );
}
