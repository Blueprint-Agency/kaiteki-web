import { WhatsApp } from "./icons";
import { waGeneric } from "@/lib/wa";

type Size = "md" | "lg";

/**
 * Inline WhatsApp CTA — a server-rendered <a>, the one saturated element
 * (docs/06 §4.5). Solid owns the brightest pixel on the surface.
 *
 * `outline` is the ghost variant the treatment template requires for the hero
 * and cost-section CTAs: a medical page must not open as a sales page, and the
 * cost CTA is a secondary variant of the same destination rather than a fourth
 * CTA (spec rule R-06).
 */
export function WhatsAppButton({
  href = waGeneric,
  label = "Book a free consultation on WhatsApp",
  size = "md",
  variant = "solid",
  className = "",
}: {
  href?: string;
  label?: string;
  size?: Size;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const sizing = size === "lg" ? "px-7 py-3.5 text-base" : "px-5 py-3 text-sm";
  const skin =
    variant === "outline"
      ? "border border-cta bg-transparent text-cta hover:bg-cta/5"
      : "bg-cta text-white shadow-sm hover:bg-cta-hover";
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-[transform,background-color] duration-150 active:scale-[0.98] ${skin} ${sizing} ${className}`}
    >
      <WhatsApp size={size === "lg" ? 20 : 18} />
      <span>{label}</span>
    </a>
  );
}

/** Persistent conversion CTA — desktop floating pill, mobile full-width bar (docs/06 §4.5). */
export function StickyWhatsApp({ href = waGeneric }: { href?: string }) {
  return (
    <>
      {/* Desktop floating FAB — icon at rest, expands on hover (no rail collision) */}
      <a
        href={href}
        aria-label="Book a free consultation on WhatsApp"
        className="cta-glow group fixed bottom-6 right-6 z-40 hidden items-center rounded-full bg-cta p-3.5 font-semibold text-white ring-1 ring-black/5 transition-colors hover:bg-cta-hover md:inline-flex"
      >
        <WhatsApp size={24} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm opacity-0 transition-all duration-200 group-hover:ml-2.5 group-hover:max-w-[14rem] group-hover:opacity-100">
          Free consultation
        </span>
      </a>
      {/* Mobile bottom bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-page/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <a
          href={href}
          className="flex w-full items-center justify-center gap-2.5 rounded-full bg-cta px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-cta-hover"
        >
          <WhatsApp size={20} />
          <span>Book a free consultation</span>
        </a>
      </div>
    </>
  );
}
