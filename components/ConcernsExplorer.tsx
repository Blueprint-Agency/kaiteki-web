"use client";

import { useState } from "react";
import { ConcernCard } from "./cards";
import { CardRow } from "./CardRow";
import { FilterTabs } from "./FilterTabs";
import { concerns } from "@/content/data/concerns";
import type { Concern } from "@/lib/types";

type Filter = "All" | "Skin" | "Face & Eyes" | "Hair & Body";

const FILTER_GROUPS: Record<Exclude<Filter, "All">, Concern["group"][]> = {
  Skin: ["Skin"],
  "Face & Eyes": ["Face", "Eyes"],
  "Hair & Body": ["Hair & Body"],
};

const inFilter = (c: Concern, f: Filter) =>
  f === "All" || FILTER_GROUPS[f].includes(c.group);

/** Filterable concern grid for the /concerns hub — renders every concern
 *  server-side by default (Filter = "All") so crawlers/no-JS visitors see the
 *  full set; the tabs are a progressive-enhancement filter. */
export type ConcernCardOverride = {
  href: string;
  name: string;
  summary: string | null;
  alt: string;
};

export function ConcernsExplorer({
  labels,
  cards,
}: {
  /** Localized tab labels and card link text; English by default. */
  labels?: { all: string; tabs: Record<Exclude<Filter, "All">, string>; explore: string };
  /** Localized card fields per concern slug, resolved on the server. */
  cards?: Record<string, ConcernCardOverride>;
} = {}) {
  const [filter, setFilter] = useState<Filter>("All");
  const tabs: Filter[] = ["All", "Skin", "Face & Eyes", "Hair & Body"];

  return (
    <div>
      <FilterTabs
        className="mb-8"
        active={filter}
        onSelect={setFilter}
        tabs={tabs.map((value) => ({
          value,
          label: value === "All" ? (labels?.all ?? "All concerns") : (labels?.tabs[value] ?? value),
          count: concerns.filter((c) => inFilter(c, value)).length,
        }))}
      />
      <CardRow>
        {concerns
          .filter((c) => inFilter(c, filter))
          .map((c, i) => (
            <ConcernCard
              key={c.slug}
              c={c}
              priority={i < 3}
              {...(cards?.[c.slug] ?? {})}
              {...(labels ? { explore: labels.explore } : {})}
            />
          ))}
      </CardRow>
    </div>
  );
}
