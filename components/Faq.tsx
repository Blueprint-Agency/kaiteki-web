import { ChevronDown } from "./icons";
import type { Faq as FaqItem } from "@/lib/types";

/** A stable, readable anchor for one question — the same slug rule the section
 *  headings use, capped so a long question does not become a long URL. */
const faqAnchor = (q: string) =>
  "faq-" +
  q
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .split("-")
    .slice(0, 8)
    .join("-");

/**
 * FAQ accordion built on native <details> — content is always in the server DOM
 * (crawlable + AEO-extractable, docs/06 §4.11), keyboard-accessible, zero JS.
 *
 * Each item carries its own anchor id (added 2026-09-21, `docs/17` finding 4).
 * Without one the page was the smallest citable unit on a surface where a
 * single answer is what an answer engine wants to quote; with one, a specific
 * question is linkable and `scroll-mt` clears the sticky header.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item, i) => (
        // First item open so the section doesn't read as an empty list (T-16).
        <details key={item.q} id={faqAnchor(item.q)} open={i === 0} className="group scroll-mt-24">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-medium text-espresso [&::-webkit-details-marker]:hidden">
            <h3 className="text-base">{item.q}</h3>
            <ChevronDown
              size={20}
              className="shrink-0 text-accent transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p className="prose max-w-[65ch] pb-5 leading-relaxed text-ink-700">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
