"use client";

import { useRef, type CSSProperties } from "react";
import { DoctorCard } from "./cards";
import { ArrowRight } from "./icons";
import { doctors } from "@/content/data/doctors";

/** Horizontal, scroll-snapped doctor roster (~3 cards visible on desktop).
 *  Renders the full list server-side (native overflow-x scroll — no JS
 *  required to read every card); the arrow buttons are progressive
 *  enhancement over that scroll. */
export function DoctorsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.9 * dir, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="scrollbar-none flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2"
      >
        {doctors.map((d, i) => (
          <DoctorCard
            key={d.slug}
            d={d}
            style={si(i)}
            // Square crop + compact copy (drops the special-interests line) so the
            // whole card — photo through CTA — clears one viewport on the homepage
            // strip; the arrows below stay reachable without the face scrolling off.
            // The taller half-body portrait + full detail live on the /doctors hub.
            mediaClassName="aspect-square"
            compact
            className="reveal w-[82%] shrink-0 snap-start sm:w-[47%] lg:w-[calc((100%-2rem)/3)]"
          />
        ))}
      </div>
      <div className="mt-5 flex items-center justify-end gap-2">
        <button
          type="button"
          aria-label="Previous doctors"
          onClick={() => scroll(-1)}
          className="flex size-10 items-center justify-center rounded-full border border-hairline bg-surface text-espresso transition-colors hover:border-mocha"
        >
          <ArrowRight size={18} className="rotate-180" />
        </button>
        <button
          type="button"
          aria-label="Next doctors"
          onClick={() => scroll(1)}
          className="flex size-10 items-center justify-center rounded-full border border-hairline bg-surface text-espresso transition-colors hover:border-mocha"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

function si(i: number) {
  return { "--i": Math.min(i, 8) } as CSSProperties;
}
