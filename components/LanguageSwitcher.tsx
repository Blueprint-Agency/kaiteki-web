"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "./icons";
import {
  defaultLocale,
  localeMeta,
  localePath,
  locales,
  splitLocale,
  type Locale,
  type NonDefaultLocale,
} from "@/lib/i18n";

/**
 * EN · 中文 · BM — the header language switch.
 *
 * A segmented control: equal segments and one thumb that slides to the chosen
 * language. The thumb moves on click, before the next page loads (each locale
 * is its own root layout, so the switch is a full navigation), so the tap
 * answers at once. `compact` is the header pill (short codes); `full` is the
 * mobile menu row (full names).
 *
 * Plain <a> links (crawlable, each with hreflang + lang), never a redirect or a
 * cookie-driven auto-switch: Google crawls without cookies from US IPs, so any
 * automatic language redirect would hide the locale pages from it.
 *
 * Each option goes to the same page in that language when it is live, else to
 * that language's home page. A language with no live pages at all is not shown;
 * with only English live, the switch renders nothing (production, until the
 * first translation is signed: content/i18n/pages.ts).
 */
export function LanguageSwitcher({
  locale,
  live,
  label,
  variant = "compact",
  className = "",
}: {
  locale: Locale;
  live: Record<NonDefaultLocale, string[]>;
  label: string;
  variant?: "compact" | "full";
  className?: string;
}) {
  const { path } = splitLocale(usePathname() ?? "/");

  const options = locales.flatMap((l): { l: Locale; href: string }[] => {
    if (l === defaultLocale) return [{ l, href: path }];
    const paths = live[l];
    if (paths.includes(path)) return [{ l, href: localePath(l, path) }];
    if (paths.includes("/")) return [{ l, href: localePath(l, "/") }];
    return [];
  });
  const current = Math.max(0, options.findIndex((o) => o.l === locale));
  const [picked, setPicked] = useState<number | null>(null);
  if (options.length < 2) return null;

  const at = picked ?? current;
  const full = variant === "full";

  return (
    <nav aria-label={label} className={`${full ? "w-full" : "shrink-0"} ${className}`}>
      {full && (
        <p className="mb-2.5 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-mocha">{label}</p>
      )}
      <div
        className={`flex items-center rounded-full border border-hairline bg-surface/80 p-[3px] shadow-[inset_0_1px_2px_rgb(73_54_40/0.06)] backdrop-blur ${
          full ? "w-full" : ""
        }`}
      >
        {!full && <Globe size={15} className="ml-2 mr-1 shrink-0 text-mocha" />}
        <ul
          className="relative grid flex-1"
          style={{ gridTemplateColumns: `repeat(${options.length}, minmax(0, 1fr))` }}
        >
          {/* The thumb: one segment wide, slid by whole segments. */}
          <li
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 rounded-full bg-espresso shadow-[0_2px_8px_-2px_rgb(73_54_40/0.45)] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            style={{ width: `${100 / options.length}%`, transform: `translateX(${at * 100}%)` }}
          />
          {options.map(({ l, href }, i) => {
            const on = i === at;
            return (
              <li key={l} className="relative">
                <Link
                  href={href}
                  hrefLang={localeMeta[l].hreflang}
                  lang={localeMeta[l].htmlLang}
                  title={localeMeta[l].name}
                  aria-current={l === locale ? "true" : undefined}
                  onClick={() => setPicked(i)}
                  className={`flex items-center justify-center whitespace-nowrap rounded-full font-semibold leading-none transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    full ? "px-2 py-2.5 text-sm" : "min-w-9 px-2.5 py-1.5 text-xs"
                  } ${on ? "text-ink-on-dark" : "text-ink-700 hover:text-espresso"}`}
                >
                  {full ? localeMeta[l].name : localeMeta[l].short}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
