import Image from "next/image";
import type { CSSProperties } from "react";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { waLink } from "@/lib/wa";

/**
 * Blocks an author can drop straight into a post body. They are registered
 * globally in mdx-components.tsx, so an .mdx file uses them with no import
 * line: `<Figure src="..." alt="..." caption="..." />`.
 *
 * Keep this set small. Anything plain markdown already does well (headings,
 * lists, tables, blockquotes, inline links) is styled in mdx-components.tsx and
 * does not need a component.
 */

/**
 * In-body image with a caption. Use this instead of markdown `![]()`: it routes
 * through next/image (AVIF/WebP, lazy, no layout shift) where the markdown form
 * emits a raw <img>.
 *
 * `ratio` is a CSS aspect-ratio string, so any crop works without a Tailwind
 * class having to exist for it.
 */
export function Figure({
  src,
  alt,
  caption,
  ratio = "16/9",
  labels,
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
  /** Text labels laid over the picture at x/y percentages (centre of the
   *  label). Real HTML, so search engines read them: words never go inside
   *  the image file itself (AUTHORING §3). */
  labels?: { text: string; x: number; y: number }[];
}) {
  return (
    <figure className="mt-8">
      <div
        className="relative overflow-hidden rounded-2xl bg-tint ring-1 ring-hairline"
        style={{ aspectRatio: ratio }}
      >
        <Image src={src} alt={alt} fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
        {labels?.map((l) => (
          <span
            key={l.text}
            className="absolute max-w-[30%] -translate-x-1/2 -translate-y-1/2 text-center font-sans text-[0.5625rem] font-semibold uppercase leading-tight tracking-[0.08em] text-accent sm:text-[0.6875rem] sm:tracking-[0.12em]"
            style={{ left: `${l.x}%`, top: `${l.y}%` }}
          >
            {l.text}
          </span>
        ))}
      </div>
      {caption && (
        <figcaption className="mt-3 text-[0.8125rem] leading-snug text-ink-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}

/**
 * Mid-article WhatsApp CTA, for long posts where the closing CTA is a long
 * scroll away. `topic` only shapes the pre-filled message; keep it short and
 * factual. Position is reported to GA4 as "mid" (rule R-14).
 */
export function AskCta({
  heading,
  body,
  topic,
  label = "Ask a doctor on WhatsApp",
}: {
  heading: string;
  body: string;
  topic?: string;
  label?: string;
}) {
  return (
    <aside className="mt-10 rounded-2xl border border-hairline bg-tint p-6 sm:p-7">
      <p className="font-display text-xl font-medium text-espresso">{heading}</p>
      <p className="mt-2 leading-relaxed text-ink-700">{body}</p>
      <div className="mt-5">
        <WhatsAppButton
          href={waLink(
            topic
              ? `Hi Kaiteki, I'd like a free consultation about ${topic}.`
              : undefined,
          )}
          label={label}
          position="mid"
        />
      </div>
    </aside>
  );
}

/**
 * A staged timeline (recovery, a course of sessions). Rendered as a real <ol>
 * so every stage is crawlable text, never baked into an image: Google and
 * answer engines cannot read words inside a picture. Stacks vertically on
 * mobile and runs across on wider screens. `mark` fills a stage's dot to flag
 * the milestones worth noticing.
 */
export function Timeline({
  steps,
  caption,
}: {
  steps: { when: string; label: string; body: string; mark?: boolean }[];
  caption?: string;
}) {
  return (
    <figure className="mt-8 rounded-2xl bg-tint p-6 ring-1 ring-hairline sm:p-8">
      <ol
        className="grid gap-7 md:grid-cols-[repeat(var(--steps),minmax(0,1fr))] md:gap-5"
        style={{ "--steps": steps.length } as CSSProperties}
      >
        {steps.map((s, i) => (
          <li key={s.when} className="relative pl-8 md:pl-0 md:pt-9">
            <span
              aria-hidden
              className={`absolute left-0 top-1 size-4 rounded-full border-2 border-mocha md:top-0 ${s.mark ? "bg-mocha" : "bg-page"}`}
            />
            {i < steps.length - 1 && (
              <span
                aria-hidden
                className="absolute bottom-[-1.75rem] left-[7px] top-6 w-px bg-sand md:bottom-auto md:left-6 md:right-[-1.25rem] md:top-[7px] md:h-px md:w-auto"
              />
            )}
            <p className="font-display text-lg font-medium leading-tight text-espresso">{s.when}</p>
            <p className="mt-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-accent">
              {s.label}
            </p>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-700">{s.body}</p>
          </li>
        ))}
      </ol>
      {caption && (
        <figcaption className="mt-6 border-t border-hairline pt-4 text-[0.8125rem] leading-snug text-ink-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
