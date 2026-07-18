"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { TechnologyCard } from "./cards";
import { technology } from "@/content/data/technology";
import type { NavCategory, TechType } from "@/lib/types";

const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

const TYPE_LABEL: Record<TechType, string> = { device: "Devices", injectable: "Injectables" };

// Groups present in the catalog, in first-seen (source) order.
const groups: NavCategory[] = [...new Set(technology.map((x) => x.group))];
const types: TechType[] = ["device", "injectable"];

/** Search + filter over the Products & Technology catalog. Renders every item
 *  by default so crawlers/no-JS visitors see the full grid; search and the
 *  group/type filters are a progressive-enhancement layer. */
export function TechnologyExplorer() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<NavCategory | "All">("All");
  const [type, setType] = useState<TechType | "All">("All");

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return technology.filter(
      (x) =>
        (group === "All" || x.group === group) &&
        (type === "All" || x.type === type) &&
        (q === "" || x.name.toLowerCase().includes(q)),
    );
  }, [query, group, type]);

  const chip = (active: boolean) =>
    `inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
      active
        ? "border-espresso bg-espresso text-ink-on-dark"
        : "border-hairline bg-surface text-ink-700 hover:border-mocha"
    }`;

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search devices &amp; injectables…"
        aria-label="Search technology by name"
        className="w-full rounded-full border border-hairline bg-surface px-5 py-3 text-sm text-espresso outline-none transition-colors placeholder:text-ink-500 focus:border-mocha"
      />

      <div className="mt-5 flex flex-wrap gap-2.5">
        <button type="button" onClick={() => setType("All")} className={chip(type === "All")}>
          All types
        </button>
        {types.map((t) => (
          <button key={t} type="button" onClick={() => setType(t)} className={chip(type === t)}>
            {TYPE_LABEL[t]}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap gap-2.5">
        <button type="button" onClick={() => setGroup("All")} className={chip(group === "All")}>
          All groups
        </button>
        {groups.map((g) => (
          <button key={g} type="button" onClick={() => setGroup(g)} className={chip(group === g)}>
            {g}
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((x, i) => (
            <TechnologyCard key={x.slug} x={x} className="reveal" style={si(i)} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-ink-500">No matching devices or injectables.</p>
      )}
    </div>
  );
}
