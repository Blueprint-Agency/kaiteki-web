"use client";

import { useEffect } from "react";
import { sendGTMEvent } from "@next/third-parties/google";

/** Push a GA4 event into the GTM container. Safe before GTM loads — the
 *  dataLayer queue is replayed once the container initialises. */
export function track(event: string, params: Record<string, string> = {}) {
  sendGTMEvent({ event, ...params });
}

/**
 * The five events the concern/treatment templates are measured by (rule R-14):
 * jump_nav_click, cta_click, scroll_depth, faq_open, variant_tab_open.
 *
 * They are pushed to the existing GTM container (GTM-M42CTGL, wired in
 * app/layout.tsx) rather than loading a second gtag — each needs a GA4 Event
 * tag in GTM, and `cta_click` must be marked a key event in the GA4 admin UI.
 * That part cannot be set from code.
 *
 * Everything except scroll depth and the variant tabs is captured by ONE
 * delegated listener reading `data-ga` / `data-ga-*` off the clicked element,
 * so adding an event to a block is an attribute, not a client component.
 */
export function Analytics() {
  useEffect(() => {
    // One delegated click listener for every data-ga element on the page.
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-ga]");
      if (!el) return;
      const { ga, ...rest } = el.dataset;
      // `data-ga-cta_position` arrives in dataset as `gaCta_position` — strip the
      // `ga` prefix and restore the leading lowercase so GTM sees `cta_position`.
      // Also drops any unrelated data-* attribute on the same element.
      const params: Record<string, string> = {};
      for (const [k, v] of Object.entries(rest)) {
        if (v === undefined || !k.startsWith("ga")) continue;
        params[k[2].toLowerCase() + k.slice(3)] = v;
      }
      track(ga!, params);
    };

    // `toggle` does not bubble, so capture it.
    const onToggle = (e: Event) => {
      const el = e.target as HTMLDetailsElement;
      if (el.tagName !== "DETAILS" || !el.open) return;
      track("faq_open", { question: el.querySelector("summary")?.textContent?.trim() ?? "" });
    };

    // Scroll depth: one passive listener, each threshold fired at most once.
    const pending = new Set([25, 50, 75, 100]);
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 100;
      for (const t of [...pending]) {
        if (pct >= t) {
          pending.delete(t);
          track("scroll_depth", { percent: String(t) });
        }
      }
      if (!pending.size) window.removeEventListener("scroll", onScroll);
    };

    document.addEventListener("click", onClick);
    document.addEventListener("toggle", onToggle, true);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("toggle", onToggle, true);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
