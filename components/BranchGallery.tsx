"use client";

import Image from "next/image";
import { useRef, useState } from "react";

/** Swipeable branch cover. Native scroll-snap does the swiping (touch, trackpad,
 *  arrow keys via focus); the dots are just an affordance + jump target.
 *  ponytail: no carousel library, scroll position is the only state. */
export function BranchGallery({ photos, alt }: { photos: string[]; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-hairline bg-tint">
      <div
        ref={ref}
        onScroll={(e) => {
          const el = e.currentTarget;
          setActive(Math.round(el.scrollLeft / el.clientWidth));
        }}
        className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {photos.map((src, i) => (
          <div key={src} className="relative h-full w-full shrink-0 snap-center">
            <Image
              src={src}
              alt={i === 0 ? alt : `${alt} — photo ${i + 1}`}
              fill
              priority={i === 0}
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {photos.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
          {photos.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show photo ${i + 1} of ${photos.length}`}
              aria-current={i === active}
              onClick={() =>
                ref.current?.scrollTo({ left: i * ref.current.clientWidth, behavior: "smooth" })
              }
              className={`h-2 rounded-full border border-white/50 transition-all ${
                i === active ? "w-6 bg-white" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
