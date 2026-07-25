"use client";

import { useState } from "react";
import { BranchCard } from "./cards";
import { CardRow } from "./CardRow";
import { FilterTabs } from "./FilterTabs";
import { branches, regionOrder } from "@/content/data/branches";
import type { Branch } from "@/lib/types";

type Filter = "All" | Branch["region"];

// One map per region, never one national map: Kota Kinabalu is ~1,600km from the
// Klang Valley, so a frame that fits Sabah collapses the six KL/Selangor pins
// into a single dot and a frame that reads in KL cuts Johor and Sabah off
// entirely. Region-scoped brand queries keep every branch on screen with no
// Maps API key.
// ponytail: region-query embeds; swap for one plotted map once the clinic
// supplies verified lat/lng for all nine branches.
const REGION_ZOOM: Record<Branch["region"], number> = {
  "Kuala Lumpur": 11,
  Selangor: 10,
  Johor: 12,
  Sabah: 13,
};

/** Filterable branch directory for the /locations hub — mirrors ConcernsExplorer.
 *  Defaults to "All", which renders every region section (each with its own map)
 *  so crawlers and no-JS visitors get all nine branches. */
export function LocationsExplorer() {
  const [filter, setFilter] = useState<Filter>("All");
  const tabs: Filter[] = ["All", ...regionOrder];
  const shownRegions = filter === "All" ? regionOrder : [filter];

  return (
    <div>
      <FilterTabs
        active={filter}
        onSelect={setFilter}
        tabs={tabs.map((value) => ({
          value,
          label: value === "All" ? "All branches" : value,
          count:
            value === "All"
              ? branches.length
              : branches.filter((b) => b.region === value).length,
        }))}
      />

      <div className="mt-10 space-y-16">
        {shownRegions.map((region) => {
          const inRegion = branches.filter((b) => b.region === region);
          return (
            <section key={region}>
              <div className="mb-5 flex items-baseline justify-between gap-4">
                <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-mocha">
                  {region}
                </h2>
                <p className="text-sm text-ink-500">
                  {inRegion.length} {inRegion.length === 1 ? "branch" : "branches"}
                </p>
              </div>
              <div className="relative min-h-[280px] overflow-hidden rounded-2xl border border-hairline bg-tint">
                <iframe
                  title={`Map of Kaiteki Skin Aesthetic Clinic branches in ${region}`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    `Kaiteki Skin Aesthetic Clinic, ${region}, Malaysia`,
                  )}&z=${REGION_ZOOM[region]}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 size-full border-0"
                />
              </div>
              <CardRow className="mt-6">
                {inRegion.map((b) => (
                  <BranchCard key={b.slug} b={b} />
                ))}
              </CardRow>
            </section>
          );
        })}
      </div>
    </div>
  );
}
