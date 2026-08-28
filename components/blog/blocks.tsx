import Image from "next/image";
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
}: {
  src: string;
  alt: string;
  caption?: string;
  ratio?: string;
}) {
  return (
    <figure className="mt-8">
      <div
        className="relative overflow-hidden rounded-2xl bg-tint ring-1 ring-hairline"
        style={{ aspectRatio: ratio }}
      >
        <Image src={src} alt={alt} fill loading="lazy" sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
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
