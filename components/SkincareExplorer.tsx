"use client";

import { useState } from "react";
import { ProductCard } from "./cards";
import { CardRow } from "./CardRow";
import { FilterTabs } from "./FilterTabs";
import { products, productGroups } from "@/content/data/products";
import type { ProductGroup } from "@/lib/types";

type Filter = "All" | ProductGroup;

// Kept with the explorer so the copy travels with the tab that reveals it.
const GROUP_INTRO: Record<ProductGroup, string> = {
  "Kaiteki® Cosmeceuticals":
    "Kaiteki Cosmeceuticals is our own skincare range, formulated with medical-grade ingredients for everyday use. Each product is designed to complement your treatment plan or work as a standalone daily routine.",
  "Partner Brands":
    "These are the partner products our doctors recommend alongside clinic treatments. Each one is selected for clinical evidence and suitability for the concerns we treat.",
};

/** Filterable product grid for the /skincare hub — mirrors ConcernsExplorer.
 *  Defaults to "All" so crawlers and no-JS visitors get the whole catalogue.
 *  Picking a group also surfaces that group's intro copy. */
export function SkincareExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const tabs: Filter[] = ["All", ...productGroups];
  const shown = filter === "All" ? products : products.filter((p) => p.group === filter);

  return (
    <div>
      <FilterTabs
        active={filter}
        onSelect={setFilter}
        tabs={tabs.map((value) => ({
          value,
          label: value === "All" ? "All products" : value,
          count: value === "All" ? products.length : products.filter((p) => p.group === value).length,
        }))}
      />
      {filter !== "All" && (
        <p className="mt-6 max-w-2xl leading-relaxed text-ink-700">{GROUP_INTRO[filter]}</p>
      )}
      <CardRow className="mt-8">
        {shown.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </CardRow>
    </div>
  );
}
