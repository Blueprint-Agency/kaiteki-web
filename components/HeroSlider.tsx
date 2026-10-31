"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent,
} from "react";
import { ArrowLeft, ArrowRight } from "./icons";

export type HeroSlide = {
  /** Short label for the dot's accessible name, e.g. "Merdeka promotion". */
  label: string;
  content: ReactNode;
};

/** Homepage hero carousel. Slides are server-rendered children (the promo
 *  banner and the "warm sanctuary" fold), so every link and the <h1> are in the
 *  HTML whether or not this component ever hydrates.
 *
 *  Height: slides are stacked in one grid cell. From lg up the hero is as tall
 *  as the tallest slide and stays that height whichever slide is showing; each
 *  slide stretches to fill the cell (a slide is a flex column; its content
 *  decides how to sit in the spare room). Below lg the slides are too different
 *  for that (a 16:9 banner is ~225px tall on a phone, the fold ~1000px), so the
 *  hero follows the ACTIVE slide's height, measured after mount; until then
 *  `initialHeightClass` holds it at slide 0's height so nothing shifts.
 *
 *  Motion: changing slide slides the new one in from the side you're heading
 *  to and the old one out the other side (Web Animations, ~600ms). It isn't
 *  gated on reduced motion: it only runs when the visitor (or autoplay, which
 *  is gated) changes slide, and an instant swap reads as a glitch. A horizontal
 *  swipe changes slide on touch screens. */
export function HeroSlider({
  slides,
  interval = 5000,
  initialHeightClass = "",
}: {
  slides: HeroSlide[];
  /** ms per slide */
  interval?: number;
  /** `max-lg:` height utility matching slide 0's natural height below lg,
   *  used until the first measurement lands. */
  initialHeightClass?: string;
}) {
  const [active, setActive] = useState(0);
  // Below lg only: the active slide's measured height. null from lg up.
  const [height, setHeight] = useState<number | null>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [hovered, setHovered] = useState(false);
  const [onScreen, setOnScreen] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  // The slide being left and the direction of travel, read by the layout
  // effect below to run the transition for the change that just rendered.
  const leaving = useRef<number | null>(null);
  const dir = useRef<1 | -1>(1);
  const count = slides.length;

  const go = useCallback(
    (i: number, d?: 1 | -1) => {
      const next = (i + count) % count;
      if (next === active) return;
      leaving.current = active;
      dir.current = d ?? (next > active ? 1 : -1);
      setActive(next);
    },
    [active, count],
  );

  useLayoutEffect(() => {
    const from = leaving.current;
    leaving.current = null;
    const inEl = slideRefs.current[active];
    const outEl = from === null ? null : slideRefs.current[from];
    if (!inEl || !outEl) return;
    for (const el of slideRefs.current) el?.getAnimations().forEach((a) => a.cancel());
    const d = dir.current;
    const timing = { duration: 600, easing: "cubic-bezier(0.22, 1, 0.36, 1)" };
    inEl.animate([{ transform: `translateX(${d * 100}%)` }, { transform: "none" }], timing);
    // The outgoing slide is already `invisible` in the new render; holding
    // visibility in both keyframes keeps it on screen for the slide-out.
    outEl.animate(
      [
        { transform: "none", visibility: "visible" },
        { transform: `translateX(${-d * 100}%)`, visibility: "visible" },
      ],
      timing,
    );
  }, [active]);

  /* Below lg, track the active slide's height (and re-track on resize, font
     swap or image decode, which is what ResizeObserver on every slide buys). */
  useLayoutEffect(() => {
    const wide = matchMedia("(min-width: 1024px)");
    const measure = () => {
      const el = slideRefs.current[active];
      setHeight(wide.matches || !el ? null : el.offsetHeight);
    };
    measure();
    const ro = new ResizeObserver(measure);
    for (const el of slideRefs.current) if (el) ro.observe(el);
    wide.addEventListener("change", measure);
    return () => {
      ro.disconnect();
      wide.removeEventListener("change", measure);
    };
  }, [active]);

  /* Swipe: a mostly-horizontal touch drag of 40px+ changes slide. Vertical
     drags stay page scrolls (touch-action: pan-y on the track). */
  const onTouchEnd = (e: TouchEvent) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - start.x;
    const dy = t.clientY - start.y;
    if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    const d = dx < 0 ? 1 : -1;
    go(active + d, d);
  };

  /* Autoplay only runs while the hero is actually on screen: nobody needs it
     turning over while they read further down. The same observer also covers
     the "left the tab open for an hour" case. */
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
    const id = setInterval(() => go(active + 1, 1), interval);
    return () => clearInterval(id);
  }, [running, interval, active, go]);

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
        className={`grid touch-pan-y touch-pinch-zoom overflow-hidden transition-[height] duration-500 ease-out ${initialHeightClass}`}
        style={height === null ? undefined : { height }}
        onTouchStart={(e) => {
          const t = e.touches[0];
          touchStart.current = { x: t.clientX, y: t.clientY };
        }}
        onTouchEnd={onTouchEnd}
        onTouchCancel={() => {
          touchStart.current = null;
        }}
      >
        {slides.map((s, i) => (
          <div
            key={s.label}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
            // Every slide occupies the same cell; `invisible` hides the others.
            // Never `display:none`: every slide has to stay laid out (for the
            // shared height from lg up, and to be measured below it), and its
            // markup stays readable to crawlers. Below lg a slide keeps its
            // natural height (self-start) so it can be measured.
            className={`col-start-1 row-start-1 flex flex-col self-start lg:self-stretch ${i === active ? "" : "invisible"}`}
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
        // Below lg the bar sits under the slide rather than over it: on a phone
        // a banner is only ~225px tall and the bar would cover its bottom row.
        <div className="pointer-events-none z-30 flex justify-center py-3 lg:absolute lg:inset-x-0 lg:bottom-5 lg:py-0">
          <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-surface/80 px-1.5 py-1 shadow-sm ring-1 ring-espresso/10 backdrop-blur">
            {/* The carousel's only controls. Prev/next wrap around, so every
                slide is reachable without autoplay, which reduced-motion
                visitors never get. */}
            <button
              type="button"
              onClick={() => go(active - 1, -1)}
              aria-label="Previous slide"
              className="flex size-7 items-center justify-center rounded-full text-espresso/70 transition-colors hover:bg-espresso/10 hover:text-espresso"
            >
              <ArrowLeft size={14} />
            </button>
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
            <button
              type="button"
              onClick={() => go(active + 1, 1)}
              aria-label="Next slide"
              className="flex size-7 items-center justify-center rounded-full text-espresso/70 transition-colors hover:bg-espresso/10 hover:text-espresso"
            >
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
