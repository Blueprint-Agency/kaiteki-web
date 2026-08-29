"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/blog";
import { TOC_MIN_HEADINGS } from "@/lib/toc";

/**
 * In-article contents. Anchor links plus a scroll-spy that highlights the
 * section currently under the header — orientation while reading, and
 * deep-linkable sections (an AEO win, since answer engines cite anchors).
 *
 * Hidden entirely below 3 headings, where it would just be furniture.
 * `variant="sidebar"` drops the card chrome for the sticky rail on wide
 * screens; the inline card stays for narrow ones.
 */
export function ArticleToc({
  headings,
  variant = "inline",
}: {
  headings: Heading[];
  variant?: "inline" | "sidebar";
}) {
  // On a long article, listing every H3 (each FAQ question, each ingredient)
  // turns the contents into a wall taller than the opening section and pushes
  // the article itself below the fold. Past the threshold, show top-level
  // sections only — the H3s still carry their own anchors for deep links.
  const topLevel = headings.filter((h) => h.level === 2);
  const list = headings.length > 12 && topLevel.length >= 4 ? topLevel : headings;
  const ids = list.map((h) => h.id).join(",");
  const active = useActiveHeading(ids);

  if (headings.length < TOC_MIN_HEADINGS) return null;

  const sidebar = variant === "sidebar";

  return (
    <nav
      aria-label="On this page"
      className={sidebar ? "" : "rounded-2xl border border-hairline bg-tint/70 p-5 sm:p-6"}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mocha">On this page</p>
      <ol className={sidebar ? "mt-4 border-t border-hairline pt-4" : "mt-4 space-y-2.5"}>
        {list.map((h) => (
          <li key={h.id} className={sidebar ? "" : h.level === 3 ? "pl-4" : ""}>
            <a
              href={`#${h.id}`}
              aria-current={active === h.id ? "location" : undefined}
              className={[
                "block text-sm leading-snug transition-colors",
                sidebar
                  ? `border-l-2 py-1.5 ${h.level === 3 ? "pl-6" : "pl-3"} ${
                      active === h.id
                        ? "border-mocha font-medium text-espresso"
                        : "border-transparent text-ink-700 hover:text-espresso"
                    }`
                  : `py-0.5 underline decoration-transparent underline-offset-[3px] hover:decoration-mocha ${
                      active === h.id ? "font-medium text-espresso" : "text-ink-700 hover:text-espresso"
                    }`,
              ].join(" ")}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Last heading whose top has passed under the sticky header. */
function useActiveHeading(ids: string) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = ids
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      // ponytail: linear scan on scroll — fine for the tens of headings a post
      // has; switch to IntersectionObserver if a page ever has hundreds.
      const passed = els.filter((el) => el.getBoundingClientRect().top <= 120);
      setActive((passed.at(-1) ?? els[0]).id);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [ids]);

  return active;
}
