"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
 * EN · 中文 · BM — the header language toggle.
 *
 * Plain <a> links (crawlable, each with hreflang + lang), never a redirect or a
 * cookie-driven auto-switch: Google crawls without cookies from US IPs, so any
 * automatic language redirect would hide the locale pages from it.
 *
 * Each option goes to the same page in that language when it is live, else to
 * that language's home page. A language with no live pages at all is not shown;
 * with only English live, the switcher renders nothing.
 */
export function LanguageSwitcher({
  locale,
  live,
  label,
  className = "",
}: {
  locale: Locale;
  live: Record<NonDefaultLocale, string[]>;
  label: string;
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
  if (options.length < 2) return null;

  return (
    <nav aria-label={label} className={`shrink-0 ${className}`}>
      <ul className="flex items-center rounded-full border border-hairline bg-surface/80 p-0.5 text-xs font-semibold">
        {options.map(({ l, href }) => {
          const current = l === locale;
          return (
            <li key={l}>
              <Link
                href={href}
                hrefLang={localeMeta[l].hreflang}
                lang={localeMeta[l].htmlLang}
                title={localeMeta[l].name}
                aria-current={current ? "true" : undefined}
                className={`block whitespace-nowrap rounded-full px-2.5 py-1.5 leading-none transition-colors ${
                  current ? "bg-espresso text-ink-on-dark" : "text-ink-700 hover:text-espresso"
                }`}
              >
                {localeMeta[l].short}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
