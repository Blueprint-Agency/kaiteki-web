import { ChevronDown } from "./icons";
import type { Faq as FaqItem } from "@/lib/types";

/**
 * FAQ accordion built on native <details> — content is always in the server DOM
 * (crawlable + AEO-extractable, docs/06 §4.11), keyboard-accessible, zero JS.
 */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {items.map((item) => (
        <details key={item.q} className="group">
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
