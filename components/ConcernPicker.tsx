"use client";

import { useState } from "react";
import { WhatsApp, Check } from "./icons";
import { concerns } from "@/content/data/concerns";
import { waForConcerns } from "@/lib/wa";

/** "What's your top concern?" CTA — pick one or more concerns, then Continue
 *  opens WhatsApp with those concerns already written into the message. */
export function ConcernPicker() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(name: string) {
    setSelected((prev) => (prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]));
  }

  return (
    <div className="rounded-2xl border border-hairline bg-surface p-6 sm:p-8">
      <h3 className="font-serif text-xl font-semibold text-espresso sm:text-2xl">
        What&rsquo;s your top skin concern?
      </h3>
      <p className="mt-1.5 text-sm text-ink-700">
        Pick as many as apply. We&rsquo;ll carry them straight into your WhatsApp message.
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
        href={waForConcerns(selected)}
        className="mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-cta px-6 py-3 text-sm font-semibold text-white shadow-sm transition-[transform,background-color] duration-150 hover:bg-cta-hover active:scale-[0.98]"
      >
        <WhatsApp size={18} />
        Continue on WhatsApp
      </a>
    </div>
  );
}
