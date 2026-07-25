"use client";

import { useState } from "react";
import { TreatmentCard } from "./cards";
import { CardRow } from "./CardRow";
import { FilterTabs } from "./FilterTabs";
import { treatments } from "@/content/data/treatments";
import type { NavCategory, Treatment } from "@/lib/types";

// Facials, Hair Removal, Regenerative and Eyes read as one small group here
// rather than four near-empty tabs.
const FILTER_GROUPS: Record<string, NavCategory[]> = {
  Lasers: ["Lasers"],
  "Lifting & Tightening": ["Lifting & Tightening"],
  "Body & Slimming": ["Body & Slimming"],
  Injectables: ["Injectables"],
  Specialist: ["Facials", "Hair Removal", "Regenerative", "Eyes"],
};

type Filter = "All" | keyof typeof FILTER_GROUPS;

const inFilter = (t: Treatment, f: Filter) =>
  f === "All" || FILTER_GROUPS[f].includes(t.category);

/** Filterable treatment grid for the /treatments hub — mirrors ConcernsExplorer.
 *  Defaults to "All" so crawlers and no-JS visitors get the whole menu; the tabs
 *  are a progressive-enhancement filter. */
export function TreatmentsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const tabs: Filter[] = ["All", ...(Object.keys(FILTER_GROUPS) as (keyof typeof FILTER_GROUPS)[])];

  return (
    <div>
      <FilterTabs
        className="mb-8"
        active={filter}
        onSelect={setFilter}
        tabs={tabs.map((value) => ({
          value,
          label: value === "All" ? "All treatments" : value,
          count: treatments.filter((t) => inFilter(t, value)).length,
        }))}
      />
      <CardRow>
        {treatments
          .filter((t) => inFilter(t, filter))
          .map((t) => (
            <TreatmentCard key={t.slug} t={t} />
          ))}
      </CardRow>
    </div>
  );
}
