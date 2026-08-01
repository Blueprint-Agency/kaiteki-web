"use client";

import { useState } from "react";
import { WhatsApp, Check } from "./icons";
import { concerns } from "@/content/data/concerns";
import { waForConcerns, waLink } from "@/lib/wa";

/** "What's your top concern?" CTA — pick one or more concerns, then Continue
 *  opens WhatsApp with those concerns already written into the message.
 *
 *  Pass `branch` on a location page so the prefilled message names the branch
 *  the visitor is actually looking at. */
export function ConcernPicker({
  branch,
  className = "",
}: { branch?: string; className?: string } = {}) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(name: string) {
    setSelected((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));
  }

  const href =
    selected.length === 0
      ? branch
        ? waLink(`Hi Kaiteki ${branch}, I'd like to book a free consultation.`)
        : waForConcerns([])
      : branch
        ? waLink(
            `Hi Kaiteki ${branch}, I'd like a free consultation about: ${selected.join(", ")}.`,
          )
        : waForConcerns(selected);

  return (
    <div
      className={`rounded-2xl border border-hairline bg-surface p-6 sm:p-8 ${className}`}
    >
      <h3 className="h-sub sm:text-2xl">What&rsquo;s your top skin concern?</h3>
      <p className="mt-1.5 text-sm text-ink-700">
        Pick as many as apply. We&rsquo;ll carry them straight into your WhatsApp message
        {branch ? ` to Kaiteki ${branch}` : ""}.
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {concerns.map((c) => {
          const active = selected.includes(c.name);
          return (
            <button
              key={c.slug}
              type="button"
              aria-pressed={active}
              onClick={() => toggle(c.name)}
              className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-espresso bg-espresso text-ink-on-dark"
                  : "border-hairline bg-page text-ink-700 hover:border-mocha"
              }`}
            >
              {active && <Check size={14} />}
              {c.name}
            </button>
          );
        })}
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener"
        data-ga="cta_click"
        data-ga-cta_position="concern-picker"
        className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-sm transition-[transform,background-color] duration-150 hover:bg-cta-hover active:scale-[0.98]"
      >
        <WhatsApp size={18} />
        Continue on WhatsApp
      </a>
    </div>
  );
}
