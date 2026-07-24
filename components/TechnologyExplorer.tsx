"use client";

import { useMemo, useState } from "react";
import { TechnologyCard } from "./cards";
import { CardRow } from "./CardRow";
import { Search, X } from "./icons";
import { technology } from "@/content/data/technology";
import type { Technology, TechType } from "@/lib/types";

const TYPE_LABEL: Record<TechType, string> = { device: "Devices", injectable: "Injectables" };

// Injectables share one NavCategory group but are three distinct product types
// (docs/05) — split for display only, so the shared taxonomy stays untouched.
const INJECTABLE_SECTION: Record<string, string> = {
  "skin-booster": "Injectables — Skin Boosters",
  "bio-stimulator": "Injectables — Bio-stimulators",
  "dermal-fillers": "Injectables — Dermal Fillers",
};

/** Display-only section for a catalog item — sub-splits Injectables and merges
 *  Facials/Hair Removal into one section, without changing the underlying
 *  NavCategory taxonomy shared with treatments. */
function sectionOf(x: Technology): string {
  if (x.group === "Injectables") {
    return x.treatments.map((t) => INJECTABLE_SECTION[t]).find(Boolean) ?? "Injectables";
  }
  if (x.group === "Facials" || x.group === "Hair Removal") return "Facials & Hair Removal";
  return x.group;
}

const SECTION_ORDER = [
  "Lasers",
  "Lifting & Tightening",
  "Body & Slimming",
  "Injectables — Skin Boosters",
  "Injectables — Bio-stimulators",
  "Injectables — Dermal Fillers",
  "Facials & Hair Removal",
];

const types: TechType[] = ["device", "injectable"];

/** Search + filter over the Products & Technology catalog, grouped under
 *  visible section headings so the page carries real H2 structure for crawlers
 *  even though the filters can hide/show individual sections. */
export function TechnologyExplorer() {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState<string | "All">("All");
  const [type, setType] = useState<TechType | "All">("All");

  // Category chips follow the type filter — a "Devices" filter only offers
  // device categories, so the two levels never contradict each other.
  const sections = useMemo(
    () =>
      SECTION_ORDER.filter((s) =>
        technology.some((x) => sectionOf(x) === s && (type === "All" || x.type === type)),
      ),
    [type],
  );

  const selectType = (t: TechType | "All") => {
    setType(t);
    setSection("All");
  };

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return technology.filter(
      (x) =>
        (section === "All" || sectionOf(x) === section) &&
        (type === "All" || x.type === type) &&
        (q === "" || x.name.toLowerCase().includes(q)),
    );
  }, [query, section, type]);

  const grouped = useMemo(() => {
    const bySection = new Map<string, Technology[]>();
    for (const x of shown) {
      const s = sectionOf(x);
      bySection.set(s, [...(bySection.get(s) ?? []), x]);
    }
    return SECTION_ORDER.filter((s) => bySection.has(s)).map((s) => [s, bySection.get(s)!] as const);
  }, [shown]);

  const categoryChip = (active: boolean) =>
    `flex-none rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
      active
        ? "border-espresso bg-espresso text-ink-on-dark"
        : "border-hairline bg-surface text-ink-700 hover:border-mocha"
    }`;

  const segment = (active: boolean) =>
    `flex-1 rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors sm:flex-none ${
      active ? "bg-espresso text-ink-on-dark" : "text-ink-700 hover:text-espresso"
    }`;

  return (
    <div>
      <div className="sticky top-[68px] z-30 -mx-5 border-b border-hairline bg-page px-5 pb-4 pt-2 sm:mx-0 sm:px-0">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-500" size={18} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search devices & injectables…"
              aria-label="Search technology by name"
              className="w-full rounded-full border border-hairline bg-surface py-2.5 pl-11 pr-10 text-sm text-espresso outline-none transition-colors placeholder:text-ink-500 focus:border-mocha"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-500 hover:text-espresso"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex w-full gap-1 rounded-full border border-hairline bg-surface p-1 sm:w-auto">
            <button type="button" onClick={() => selectType("All")} className={segment(type === "All")}>
              All
            </button>
            {types.map((t) => (
              <button key={t} type="button" onClick={() => selectType(t)} className={segment(type === t)}>
                {TYPE_LABEL[t]}
              </button>
            ))}
          </div>
        </div>

        <div className="scrollbar-none mt-3 flex gap-2 overflow-x-auto">
          <button
            type="button"
            onClick={() => setSection("All")}
            className={categoryChip(section === "All")}
          >
            All categories
          </button>
          {sections.map((s) => (
            <button key={s} type="button" onClick={() => setSection(s)} className={categoryChip(section === s)}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {grouped.length > 0 ? (
        <div className="mt-10 space-y-12">
          {grouped.map(([s, items]) => (
            <section key={s}>
              <h2 className="font-serif text-2xl font-semibold text-espresso">{s}</h2>
              <CardRow className="mt-5">
                {items.map((x) => (
                  <TechnologyCard key={x.slug} x={x} />
                ))}
              </CardRow>
            </section>
          ))}
        </div>
      ) : (
        <p className="mt-10 text-ink-500">No matching devices or injectables.</p>
      )}
    </div>
  );
}
