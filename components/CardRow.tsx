import { Children } from "react";
import type { ReactNode } from "react";

/**
 * Card shelf: horizontal snap-scroll on mobile (so cards sit side-by-side
 * instead of stacking into a long vertical scroll), reverting to the standard
 * 2/3-up grid at sm+. Reuses the DoctorsSlider snap pattern + `.scrollbar-none`.
 * The negative margin lets the row bleed to the screen edge for a peek of the
 * next card. Wrapper `[&>*]:h-full` keeps cards equal height in both modes.
 */
export function CardRow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`scrollbar-none -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 ${className}`}
    >
      {Children.map(children, (child) =>
        child == null ? null : (
          <div className="w-[80%] shrink-0 snap-start [&>*]:h-full sm:w-auto">{child}</div>
        ),
      )}
    </div>
  );
}
