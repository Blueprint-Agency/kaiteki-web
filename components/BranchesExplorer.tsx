"use client";

import { useState, type CSSProperties } from "react";
import { BranchCard } from "./cards";
import { branches, regionOrder } from "@/content/data/branches";
import type { Region } from "@/lib/types";

type Filter = "All" | Region;

const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

/** Region-filtered branch grid (docs/06 homepage refresh). Renders all
 *  branches server-side by default (Filter = "All") so crawlers and no-JS
 *  visitors see the full list; the tabs are a progressive-enhancement filter. */
export function BranchesExplorer() {
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
              {tab === "All" ? "All branches" : tab}
              <span className={active ? "opacity-60" : "text-ink-500"}>{count}</span>
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((b, i) => (
          <BranchCard key={b.slug} b={b} className="reveal" style={si(i)} />
        ))}
      </div>
    </div>
  );
}
