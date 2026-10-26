"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Concern } from "@/lib/types";
import { ArrowRight } from "@/components/icons";

type Item = NonNullable<Concern["results"]>[number];

/**
 * The results row, with a fullscreen viewer. The section sits near the top of
 * the page, so it is one swipeable row of fixed height rather than a grid: a
 * 17-image grid there would push everything else a dozen screens down. The
 * composited before/after pair is the thing a visitor actually wants to look at
 * closely, so each one opens in a native <dialog> with left/right paging.
 * Keyboard: arrows page, Escape closes (free with <dialog>).
 */
export function ResultsGallery({
  items,
  labels = {
    prev: "Previous image",
    next: "Next image",
    larger: "View larger: {caption}",
    hint: "{n} photos · tap one to enlarge",
    close: "Close",
  },
}: {
  items: Item[];
  labels?: { prev: string; next: string; larger: string; hint: string; close: string };
}) {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDialogElement>(null);
  const row = useRef<HTMLUListElement>(null);
  const scroll = (d: number) =>
    row.current?.scrollBy({ left: d * row.current.clientWidth * 0.8, behavior: "smooth" });

  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open === null) el.close();
    else if (!el.open) el.showModal();
  }, [open]);

  const current = open === null ? null : items[open];

  return (
    <>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-ink-500">{labels.hint.replace("{n}", String(items.length))}</p>
        {/* Arrows for a mouse, which has no sideways swipe. Hidden when one
            image fits, as there is nothing to page to. */}
        {items.length > 1 && (
          <div className="hidden gap-2 sm:flex">
            <RowPager label={labels.prev} onClick={() => scroll(-1)} back />
            <RowPager label={labels.next} onClick={() => scroll(1)} />
          </div>
        )}
      </div>
      {/* Fixed height, width from each pair's ratio. 200px on a phone and 288px
          from sm are both under every source's native height, so nothing here
          is upscaled (ADR-0001 §5); the cap on width holds that for the
          narrowest phones too. */}
      <ul
        ref={row}
        className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:gap-5"
      >
        {items.map((r, i) => (
          <li key={r.src} className="shrink-0 snap-start">
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={labels.larger.replace("{caption}", r.caption)}
              className="group block cursor-zoom-in"
            >
              <div
                className="relative h-[12.5rem] max-w-[85vw] overflow-hidden rounded-lg bg-tint ring-1 ring-hairline transition-colors group-hover:ring-mocha sm:h-72"
                style={{ aspectRatio: r.ratio }}
              >
                {/* `object-contain`, not cover: the file is a composited pair,
                    and any drift between the declared ratio and the source
                    would crop one half of it. The caption carries the meaning,
                    so the image is decorative to a screen reader. */}
                <Image
                  src={r.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 85vw, 500px"
                  className="object-contain"
                />
              </div>
            </button>
            {/* Every result carries its caption (ADR-0001 §3.1). `w-0
                min-w-full` wraps it to the image's width instead of letting
                it widen the card. */}
            <p className="mt-2.5 w-0 min-w-full text-sm leading-snug text-ink-500">{r.caption}</p>
          </li>
        ))}
      </ul>

      <dialog
        ref={ref}
        onClose={() => setOpen(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => {
          if (e.target === ref.current) setOpen(null);
        }}
        className="m-auto max-h-[92vh] w-[min(96vw,1100px)] bg-transparent p-0 backdrop:bg-espresso/85"
      >
        {current && (
          <div className="flex flex-col items-center gap-4 p-3 sm:p-6">
            <div className="relative w-full" style={{ aspectRatio: current.ratio }}>
              <Image
                src={current.src}
                alt={current.caption}
                fill
                sizes="96vw"
                className="object-contain"
              />
            </div>
            <p className="max-w-[70ch] text-center text-sm leading-snug text-ink-on-dark/80">
              {current.caption}
            </p>
            <div className="flex items-center gap-4">
              <Pager label={labels.prev} onClick={() => step(-1)} back />
              <span className="ledger text-sm !text-ink-on-dark/70">
                {open! + 1} / {items.length}
              </span>
              <Pager label={labels.next} onClick={() => step(1)} />
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="ml-2 rounded-full border border-ink-on-dark/40 px-4 py-2 text-sm text-ink-on-dark hover:border-ink-on-dark"
              >
                {labels.close}
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

/** The row's arrows, on page ground — `Pager` is the viewer's, on espresso. */
function RowPager({
  label,
  onClick,
  back = false,
}: {
  label: string;
  onClick: () => void;
  back?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-10 items-center justify-center rounded-full border border-hairline text-ink-700 transition-colors hover:border-mocha hover:text-espresso"
    >
      <ArrowRight size={16} className={back ? "rotate-180" : undefined} />
    </button>
  );
}

function Pager({
  label,
  onClick,
  back = false,
}: {
  label: string;
  onClick: () => void;
  back?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-11 items-center justify-center rounded-full border border-ink-on-dark/40 text-ink-on-dark transition-colors hover:border-ink-on-dark"
    >
      <ArrowRight size={18} className={back ? "rotate-180" : undefined} />
    </button>
  );
}
