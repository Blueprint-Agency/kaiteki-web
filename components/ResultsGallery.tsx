"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Concern } from "@/lib/types";
import { ArrowRight } from "@/components/icons";

type Item = NonNullable<Concern["results"]>[number];

/**
 * The results grid, with a fullscreen viewer. Thumbnails are capped at the
 * column width, and the composited before/after pair is the thing a visitor
 * actually wants to look at closely, so each one opens in a native <dialog>
 * with left/right paging. Keyboard: arrows page, Escape closes (free with
 * <dialog>).
 */
export function ResultsGallery({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLDialogElement>(null);

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
      <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((r, i) => (
          <li key={r.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-label={`View larger: ${r.caption}`}
              className="group block w-full cursor-zoom-in"
            >
              <div
                className="relative overflow-hidden rounded-lg bg-tint ring-1 ring-hairline transition-colors group-hover:ring-mocha"
                style={{ aspectRatio: r.ratio, maxWidth: r.nativeWidth }}
              >
                {/* `object-contain`, not cover: the file is a composited pair,
                    and any drift between the declared ratio and the source
                    would crop one half of it. The caption carries the meaning,
                    so the image is decorative to a screen reader. */}
                <Image
                  src={r.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
                  className="object-contain"
                />
              </div>
            </button>
            <p className="mt-2.5 max-w-[34ch] text-sm leading-snug text-ink-500">{r.caption}</p>
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
              <Pager label="Previous image" onClick={() => step(-1)} back />
              <span className="ledger text-sm !text-ink-on-dark/70">
                {open! + 1} / {items.length}
              </span>
              <Pager label="Next image" onClick={() => step(1)} />
              <button
                type="button"
                onClick={() => setOpen(null)}
                className="ml-2 rounded-full border border-ink-on-dark/40 px-4 py-2 text-sm text-ink-on-dark hover:border-ink-on-dark"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </dialog>
    </>
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
