"use client";

import { useState, type CSSProperties } from "react";
import { ConcernCard } from "./cards";
import { CardRow } from "./CardRow";
import { concerns } from "@/content/data/concerns";
import type { Concern } from "@/lib/types";

type Filter = "All" | "Skin" | "Face & Eyes" | "Hair & Body";

const FILTER_GROUPS: Record<Exclude<Filter, "All">, Concern["group"][]> = {
  Skin: ["Skin"],
  "Face & Eyes": ["Face", "Eyes"],
  "Hair & Body": ["Hair & Body"],
};

const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

/** Filterable concern grid for the /concerns hub — renders every concern
 *  server-side by default (Filter = "All") so crawlers/no-JS visitors see the
 *  full set; the tabs are a progressive-enhancement filter. */
export function ConcernsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const tabs: Filter[] = ["All", "Skin", "Face & Eyes", "Hair & Body"];
  const shown =
    filter === "All" ? concerns : concerns.filter((c) => FILTER_GROUPS[filter].includes(c.group));

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2.5">
        {tabs.map((tab) => {
          const count = tab === "All" ? concerns.length : concerns.filter((c) => FILTER_GROUPS[tab].includes(c.group)).length;
          const active = filter === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setFilter(tab)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active
                  ? "border-espresso bg-espresso text-ink-on-dark"
                  : "border-hairline bg-surface text-ink-700 hover:border-mocha"
              }`}
            >
              {tab === "All" ? "All concerns" : tab}
              <span className={active ? "opacity-60" : "text-ink-500"}>{count}</span>
            </button>
          );
        })}
      </div>
      <CardRow>
        {shown.map((c, i) => (
          <ConcernCard key={c.slug} c={c} priority={i < 3} className="reveal" style={si(i)} />
        ))}
      </CardRow>
    </div>
  );
}
