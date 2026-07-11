import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

/**
 * A tile that flips on hover / keyboard-focus to reveal a description, then
 * links through. Both faces are server-rendered so the copy stays crawlable
 * (the flip is CSS-only — see .flip in globals.css). Used by the concern and
 * treatment grids.
 */
export function FlipCard({
  href,
  ariaLabel,
  front,
  back,
  className = "",
  style,
}: {
  href: string;
  ariaLabel: string;
  front: ReactNode;
  back: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      style={style}
      className={`flip group relative block aspect-[5/6] rounded-[1.75rem] focus:outline-none focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 ${className}`}
    >
      <div className="flip-inner">
        <div className="flip-face rounded-[1.75rem] ring-1 ring-hairline">{front}</div>
        <div className="flip-face flip-back rounded-[1.75rem] bg-gradient-to-br from-tint to-porcelain ring-1 ring-hairline">
          {back}
        </div>
      </div>
    </Link>
  );
}
