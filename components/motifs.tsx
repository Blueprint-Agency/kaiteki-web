import { useId } from "react";
import type { ReactNode } from "react";

/**
 * Japanese-craft decorative vocabulary — replaces the generic SaaS devices
 * (icon-in-filled-circle badges, gradient "blob" backdrops, radial-glow CTAs,
 * concentric-ring placeholder art) with restrained motifs from Japanese
 * architecture and craft: kumiko woodwork corner joints, an engawa threshold
 * frame, seigaiha wave tiling, and an enso brushstroke. All render in the
 * existing Warm Sanctuary tokens (currentColor) — no new colours. Decorative
 * only; every use is `aria-hidden`.
 */

/** L-shaped corner bracket, echoing a kakejiku (hanging-scroll) mount or a
 *  kumiko joint. Place one per corner inside a `relative` wrapper. */
export function KumikoCorner({
  corner,
  className = "",
}: {
  corner: "tl" | "tr" | "bl" | "br";
  className?: string;
}) {
  const pos: Record<typeof corner, string> = {
    tl: "left-0 top-0",
    tr: "right-0 top-0 scale-x-[-1]",
    bl: "left-0 bottom-0 scale-y-[-1]",
    br: "right-0 bottom-0 scale-x-[-1] scale-y-[-1]",
  };
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      className={`pointer-events-none absolute size-5 sm:size-7 ${pos[corner]} ${className}`}
    >
      <path d="M1.5 1.5v13M1.5 1.5h13" fill="none" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  );
}

/** A hairline threshold frame with kumiko corners — the square, straight-edged
 *  alternative to a rounded gradient "blob" behind a subject photo. */
export function EngawaFrame({
  children,
  inset = "inset-3 sm:inset-5",
  className = "",
}: {
  children: ReactNode;
  inset?: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <span aria-hidden className={`pointer-events-none absolute ${inset} border border-mocha/25`} />
      <KumikoCorner corner="tl" className="text-mocha/60" />
      <KumikoCorner corner="tr" className="text-mocha/60" />
      <KumikoCorner corner="bl" className="text-mocha/60" />
      <KumikoCorner corner="br" className="text-mocha/60" />
      {children}
    </div>
  );
}

/** Seigaiha (overlapping-wave) tiling — a calm textile/ceramic pattern, used
 *  as a low-opacity band or field fill. Colour comes from `currentColor`. */
export function Seigaiha({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <svg aria-hidden className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id={id} width="34" height="17" patternUnits="userSpaceOnUse">
          <path d="M-1 17a18 18 0 0 1 18-17 18 18 0 0 1 18 17" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M-1 12.5a18 18 0 0 1 18-12.5 18 18 0 0 1 18 12.5" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.55" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/** A single, slightly imperfect brushstroke circle — the enso, standing in for
 *  the "radial glow" cliché behind a closing invitation. Never fully closes. */
export function Enso({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 200 200" className={className}>
      <path
        d="M101 24c42 0 76 32.5 76 75.5S147 174 101 174c-33 0-62-18-71-45"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Square seal badge (hanko) with a double hairline ring — the seal-stamp
 *  alternative to a filled icon-in-circle. Text colour sets the ring/icon. */
export function Hanko({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`relative inline-flex size-12 shrink-0 items-center justify-center rounded-[3px] ${className}`}>
      <span aria-hidden className="absolute inset-0 rounded-[3px] border border-current opacity-60" />
      <span aria-hidden className="absolute inset-[3px] rounded-[2px] border border-current opacity-30" />
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </span>
  );
}
