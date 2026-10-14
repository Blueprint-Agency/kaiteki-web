import Image from "next/image";
import type { ReactNode } from "react";

/**
 * The shared section kit for concern and treatment pages (2026-10).
 *
 * Both pages used to furnish the same jobs a dozen different ways — six list
 * styles, three step styles, image-beside-caption, die-cut grids, tinted note
 * boxes. They now draw from these few patterns, so a visitor moving between
 * `/concerns/[slug]` and `/treatments/[category]` reads one layout:
 *
 *   · `Section` + `SectionHead` — an H2 and an optional intro
 *   · `List` / `Item`          — every list: hairline rows, title stacked above
 *                                text, or a bold inline lead-in
 *   · `Steps`                  — the only numbered style, for real sequences
 *   · `Figure` / `PhotoGrid`   — clinical photography, shown large
 *   · `IconGrid`               — small die-cut illustrations and zone cut-outs
 *
 * Sections render inside the page's reading column and carry no Container.
 */

/** Clearance for the 68px sticky site header. */
export const CLEAR_HEADER = "scroll-mt-24";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-12 sm:py-14 ${id ? CLEAR_HEADER : ""} ${className}`}>
      {children}
    </section>
  );
}

export function SectionHead({ heading, intro }: { heading: ReactNode; intro?: ReactNode }) {
  return (
    <>
      <h2 className="h-section max-w-[24ch]">{heading}</h2>
      {intro && <p className="mt-5 max-w-[65ch] leading-relaxed text-ink-700">{intro}</p>}
    </>
  );
}

/** A closing or explanatory paragraph under a block. */
export function Note({ children }: { children: ReactNode }) {
  return <p className="mt-8 max-w-[65ch] leading-relaxed text-ink-700">{children}</p>;
}

export function List({ children, className = "mt-8" }: { children: ReactNode; className?: string }) {
  return (
    <ul className={`divide-y divide-hairline border-y border-hairline ${className}`}>{children}</ul>
  );
}

/**
 * One list row. `title` stacks a short heading above the text; `lead` is the
 * bold inline lead-in authored as "Lead: body". Either, both or neither.
 */
export function Item({
  title,
  lead,
  children,
}: {
  title?: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <li className="max-w-[65ch] py-5">
      {title && <h3 className="text-[1.0625rem] font-semibold leading-snug text-espresso">{title}</h3>}
      {(lead || children) && (
        <div className={`leading-relaxed text-ink-700 ${title ? "mt-1.5" : ""}`}>
          {lead && <strong className="font-semibold text-espresso">{lead}</strong>} {children}
        </div>
      )}
    </li>
  );
}

/** Numbered timeline. Only for content that really is a sequence. */
export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="mt-8 space-y-8 border-l border-hairline pl-8">
      {steps.map((s, i) => (
        <li key={s.title} className="relative">
          <span
            aria-hidden
            className="absolute -left-[2.0625rem] top-0.5 flex size-[2.125rem] items-center justify-center rounded-full border border-hairline bg-page text-[0.8125rem] font-semibold text-accent"
          >
            {i + 1}
          </span>
          <h3 className="h-sub">{s.title}</h3>
          <p className="mt-2 max-w-[60ch] leading-relaxed text-ink-700">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

/**
 * A comparison table. The comparison IS the value, so on a phone it scrolls
 * sideways rather than collapsing into stacked cards, with a hint that it does.
 */
export function ScrollTable({
  columns,
  rows,
  minWidth = "42rem",
  className = "mt-8",
  swipeHint = "Swipe the table sideways to see every column.",
}: {
  columns: string[];
  rows: string[][];
  minWidth?: string;
  className?: string;
  /** Phone-only hint above the scrolling table; localized by the caller. */
  swipeHint?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-3 text-sm text-ink-500 sm:hidden" aria-hidden>
        {swipeHint}
      </p>
      <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <table className="w-full border-collapse text-left" style={{ minWidth }}>
          <thead>
            <tr className="border-b border-espresso/25">
              {columns.map((h) => (
                <th key={h} scope="col" className="pb-3 pr-6 text-sm font-semibold text-espresso">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-hairline">
            {rows.map((r) => (
              <tr key={r[0]} className="align-top">
                {r.map((cell, i) => (
                  <td
                    key={i}
                    className={
                      i === 0
                        ? "py-4 pr-6 font-medium text-espresso"
                        : "py-4 pr-6 text-[0.9375rem] leading-relaxed text-ink-700"
                    }
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/**
 * A 2:1 photograph at the full width of the reading column, caption below.
 * The sources place their subject hard left with the right half empty, so on
 * a phone the frame crops to 4:3 from the left — the subject fills the width
 * instead of sitting small in half of it. The caption carries the meaning, so
 * the image is `alt=""` — a screen reader would otherwise hear it twice.
 */
export function Figure({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="mt-6 max-w-[46rem]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-tint ring-1 ring-hairline sm:aspect-[2/1]">
        <Image
          src={src}
          alt=""
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 736px"
          className="object-cover object-left"
        />
      </div>
      <figcaption className="mt-3 max-w-[65ch] text-sm leading-relaxed text-ink-500">
        {caption}
      </figcaption>
    </figure>
  );
}

/**
 * Clinical photography — Kaiteki's own procedure and consultation photos.
 * Full width on a phone, two-up from sm, so each photo is large enough to
 * actually see what is happening in it.
 */
export function PhotoGrid({ images }: { images: { src: string; caption: string }[] }) {
  return (
    <ul className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2">
      {images.map((v) => (
        <li key={v.src}>
          <div className="relative aspect-square overflow-hidden rounded-xl bg-tint">
            <Image
              src={v.src}
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, 380px"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-sm leading-snug text-ink-500">{v.caption}</p>
        </li>
      ))}
    </ul>
  );
}

/**
 * Small transparent die-cut illustrations on page ground: two-up on a phone,
 * four-up from sm. The label is the accessible text, so the image is decorative.
 */
export function IconGrid({
  items,
  className = "mt-8",
}: {
  items: { src: string; label: string; sub?: string }[];
  className?: string;
}) {
  return (
    <ul className={`grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 ${className}`}>
      {items.map((i) => (
        <li key={i.src}>
          <div className="relative aspect-square">
            <Image
              src={i.src}
              alt=""
              fill
              loading="lazy"
              sizes="(max-width: 640px) 45vw, 180px"
              className="object-contain"
            />
          </div>
          <p className="mt-3 font-medium text-espresso">{i.label}</p>
          {i.sub && <p className="mt-1 text-sm leading-snug text-ink-500">{i.sub}</p>}
        </li>
      ))}
    </ul>
  );
}
