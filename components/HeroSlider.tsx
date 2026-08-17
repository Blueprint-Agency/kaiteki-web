"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type HeroSlide = {
  /** Short label for the dot's accessible name, e.g. "Merdeka promotion". */
  label: string;
  content: ReactNode;
};

/** Homepage hero carousel. Slides are server-rendered children (the promo
 *  banner and the "warm sanctuary" fold), so every link and the <h1> are in the
 *  HTML whether or not this component ever hydrates.
 *
 *  Height: slides are stacked in one grid cell, so the box would otherwise size
 *  to the tallest of them (the banner is ~16:9, the fold is roughly a screen
 *  tall — very different on a phone). Instead the container's height follows the
 *  ACTIVE slide, measured after mount. The pre-hydration height is set in CSS by
 *  `initialHeightClass` so it already matches slide 0 and nothing shifts. */
export function HeroSlider({
  slides,
  interval = 5000,
  initialHeightClass = "",
}: {
  slides: HeroSlide[];
  /** ms per slide */
  interval?: number;
  /** Tailwind height utility matching slide 0's natural height, used until the
   *  first measurement lands (prevents a hydration jump / CLS). */
  initialHeightClass?: string;
}) {
  const [active, setActive] = useState(0);
  const [height, setHeight] = useState<number | null>(null);
  const [hovered, setHovered] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const count = slides.length;

  const go = useCallback((i: number) => setActive((i + count) % count), [count]);

  /* Track the active slide's height (and re-track on resize / font swap /
     image decode, which is what ResizeObserver on every slide buys us). */
  useLayoutEffect(() => {
    const measure = () => {
      const el = slideRefs.current[active];
      if (el) setHeight(el.offsetHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    for (const el of slideRefs.current) if (el) ro.observe(el);
    return () => ro.disconnect();
  }, [active]);

  /* Advancing changes the hero's height, which moves everything below it. Doing
     that while someone is reading the section under the fold is the classic
     carousel annoyance, so autoplay only runs while the hero is actually on
     screen. Same observer also covers the "left the tab open for an hour" case. */
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setOnScreen(e.isIntersecting), {
      threshold: 0.3,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onChange = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onChange);
    return () => document.removeEventListener("visibilitychange", onChange);
  }, []);

  /* Autoplay. Skipped entirely under prefers-reduced-motion (docs/06 §3).
     `active` in the deps is deliberate: picking a dot restarts the full
     interval rather than cutting the chosen slide short. */
  const running = count > 1 && !hovered && onScreen && tabVisible;
  useEffect(() => {
    if (!running) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % count), interval);
    return () => clearInterval(id);
  }, [running, count, interval, active]);

  return (
    <div
      ref={rootRef}
      className="relative"
      role="group"
      aria-roledescription="carousel"
      aria-label="Kaiteki highlights"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
    >
      <div
        // `initialHeightClass` is derived from vw, so on a desktop with a
        // classic scrollbar it over-states slide 0 by ~0.56 × scrollbar width.
        // The first measurement corrects that ~9px through the same transition;
        // on touch (overlay scrollbars) the two agree exactly.
        className={`grid overflow-hidden transition-[height] duration-500 ease-out motion-reduce:transition-none ${
          height === null ? initialHeightClass : ""
        }`}
        style={height === null ? undefined : { height }}
      >
        {slides.map((s, i) => (
          <div
            key={s.label}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            // Every slide occupies the same cell; only opacity separates them.
            // Never `display:none` — the inactive slide has to stay laid out so
            // it can be measured, and its markup stays readable to crawlers.
            className={`col-start-1 row-start-1 self-start transition-opacity duration-500 ease-out motion-reduce:transition-none ${
              i === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}: ${s.label}`}
            // Keeps the off-screen slide out of the tab order and off the a11y
            // tree (an invisible slide must not be focusable).
            inert={i !== active}
          >
            {s.content}
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-4 z-30 flex justify-center sm:bottom-5">
          <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-surface/80 px-3 py-2 shadow-sm ring-1 ring-espresso/10 backdrop-blur">
            {slides.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => go(i)}
                aria-label={`Show ${s.label}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
                  i === active ? "w-7 bg-accent" : "w-2 bg-espresso/25 hover:bg-espresso/45"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
