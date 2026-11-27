"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Sectional horizontal scroll (see .hscroll in globals.css). Expects one
 *  `.hscroll-stage` child holding the heading and an `.hscroll-track` list.
 *
 *  While the block is pinned, vertical scroll moves the track sideways 1:1:
 *  the block is made exactly one screen plus the track's overflow tall, and
 *  scroll progress through it sets translateX. It only pins when the stage's
 *  content fits the window — otherwise (short windows, no JS) the track stays
 *  a native swipe/drag scroller, so nothing is ever clipped.
 *
 *  Not gated on prefers-reduced-motion: nothing here animates on its own. The
 *  track moves 1:1 with the visitor's own scroll, no easing, no inertia, which
 *  is the same as scrolling a list. Windows sets reduce whenever "Animation
 *  effects" is off, and gating on it left the section unscrollable by mouse. */
export function HScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    const stage = root?.querySelector<HTMLElement>(".hscroll-stage");
    const track = root?.querySelector<HTMLElement>(".hscroll-track");
    if (!root || !stage || !track) return;
    let distance = 0;
    let span = 0;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (!root.classList.contains("is-pinned")) return;
      const p = Math.min(1, Math.max(0, -root.getBoundingClientRect().top / span));
      track.style.transform = `translate3d(${-p * distance}px,0,0)`;
    };

    // Reads layout that is identical pinned or not (offsets ignore transforms
    // and scrollLeft), so re-measuring never has to un-pin and jump the page.
    const measure = () => {
      const last = track.lastElementChild as HTMLElement | null;
      if (!last) return;
      const padEnd = parseFloat(getComputedStyle(track).paddingRight) || 0;
      distance = Math.max(0, last.offsetLeft + last.offsetWidth + padEnd - track.clientWidth);
      const kids = Array.from(stage.children) as HTMLElement[];
      const gap = parseFloat(getComputedStyle(stage).rowGap) || 0;
      const content = kids.reduce((h, el) => h + el.offsetHeight, 0) + gap * (kids.length - 1);
      const pin = distance > 0 && content + 48 <= window.innerHeight;
      root.classList.toggle("is-pinned", pin);
      root.style.height = pin ? `calc(100svh + ${distance}px)` : "";
      if (!pin) {
        track.style.transform = "";
        return;
      }
      span = Math.max(1, root.offsetHeight - stage.offsetHeight);
      update();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(stage);
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div ref={ref} className="hscroll">
      {children}
    </div>
  );
}
