// Preview for WhatsAppButton — the site's single conversion CTA, the one
// saturated (green) element on any surface. Each export is one cell, showing
// the size axis (md / lg) plus label + on-dark-surface variants.
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { waForTreatment } from "@/lib/wa";

const stage: React.CSSProperties = { width: 420 };

export function DefaultMedium() {
  return (
    <div style={stage} className="rounded-[10px] bg-surface p-8 ring-1 ring-hairline">
      <p className="mb-4 text-sm text-ink-500">Default size (md)</p>
      <WhatsAppButton />
    </div>
  );
}

export function Large() {
  return (
    <div style={stage} className="rounded-[10px] bg-tint p-8">
      <p className="mb-4 text-sm text-ink-500">Hero size (lg)</p>
      <WhatsAppButton size="lg" label="Book a free consultation" />
    </div>
  );
}

export function TreatmentEnquiry() {
  return (
    <div style={stage} className="rounded-[10px] bg-surface p-8 ring-1 ring-hairline">
      <p className="mb-4 text-sm text-ink-500">Treatment-aware label</p>
      <WhatsAppButton href={waForTreatment("Pico Laser")} label="Ask about Pico Laser" />
    </div>
  );
}

export function OnEspresso() {
  return (
    <div style={stage} className="rounded-[10px] bg-espresso p-8">
      <p className="mb-4 text-sm text-ink-on-dark/80">On the footer surface</p>
      <WhatsAppButton size="lg" label="Chat with us on WhatsApp" />
    </div>
  );
}
