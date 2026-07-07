// Preview for StickyWhatsApp — the persistent conversion CTA: a floating pill
// on desktop (icon at rest, label on hover) and a full-width bar on mobile.
// It renders position:fixed nodes, so each cell's stage sets a containing block
// (transform + overflow:hidden) to keep the CTA inside the card, and simulates a
// page corner behind it. The capture viewport is 900px (desktop), so the mobile
// bar is media-hidden by default — the MobileBar cell reveals it structurally.
import { StickyWhatsApp } from "@/components/WhatsAppCTA";

const mockContent = (
  <div className="p-6" aria-hidden>
    <div className="mb-3 h-3 w-40 rounded-full bg-hairline" />
    <div className="mb-2 h-2.5 w-full rounded-full bg-hairline/70" />
    <div className="mb-2 h-2.5 w-11/12 rounded-full bg-hairline/70" />
    <div className="h-2.5 w-3/4 rounded-full bg-hairline/70" />
  </div>
);

const stageBase: React.CSSProperties = {
  position: "relative",
  overflow: "hidden",
  transform: "translateZ(0)", // establishes the containing block for position:fixed
};

export function DesktopFloating() {
  return (
    <div style={{ ...stageBase, width: 480, height: 220 }} className="rounded-[10px] bg-page ring-1 ring-hairline">
      {mockContent}
      <StickyWhatsApp />
    </div>
  );
}

export function DesktopExpanded() {
  return (
    <div
      style={{ ...stageBase, width: 480, height: 220 }}
      className="sticky-expanded rounded-[10px] bg-page ring-1 ring-hairline"
    >
      {/* Force the on-hover expansion so the labelled pill is visible statically. */}
      <style>{`.sticky-expanded > a > span{max-width:14rem!important;opacity:1!important;margin-left:.625rem!important}`}</style>
      {mockContent}
      <StickyWhatsApp />
    </div>
  );
}

export function MobileBar() {
  return (
    <div
      style={{ ...stageBase, width: 390, height: 220 }}
      className="sticky-mobile rounded-[10px] bg-page ring-1 ring-hairline"
    >
      {/* Reveal the md:hidden mobile bar and hide the desktop pill for this cell. */}
      <style>{`.sticky-mobile > a[aria-label]{display:none!important}.sticky-mobile > div{display:block!important}`}</style>
      {mockContent}
      <StickyWhatsApp />
    </div>
  );
}
