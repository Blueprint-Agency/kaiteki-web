// Preview for Faq — a native <details> accordion (crawlable, keyboard-safe,
// zero-JS). Shown with realistic, MAB-compliant clinic Q&A.
import { useEffect, useRef } from "react";
import { Faq } from "@/components/Faq";
import type { Faq as FaqItem } from "@/lib/types";

const items: FaqItem[] = [
  {
    q: "Is Pico laser suitable for my skin?",
    a: "Suitability depends on your skin type, the concern being treated and your medical history. A consultation is required so a doctor can assess whether the treatment is appropriate for you.",
  },
  {
    q: "How many sessions will I need?",
    a: "The number of sessions varies between individuals and concerns. Your doctor will discuss a suggested plan during your consultation.",
  },
  {
    q: "Is there any downtime?",
    a: "Any downtime varies with the treatment and the individual. Your doctor will explain what to expect and how to care for your skin afterwards.",
  },
  {
    q: "Who performs the treatment?",
    a: "All treatments are carried out by MMC-registered doctors at our licensed clinics.",
  },
];

export function Default() {
  return (
    <div style={{ maxWidth: 640 }}>
      <Faq items={items} />
    </div>
  );
}

// Presentation-only: open the first <details> so the card also shows the
// answer prose (the component doesn't expose an `open` prop — this just
// toggles the native element as a user would).
export function Expanded() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const first = ref.current?.querySelector("details");
    if (first) first.open = true;
  }, []);
  return (
    <div ref={ref} style={{ maxWidth: 640 }}>
      <Faq items={items} />
    </div>
  );
}
