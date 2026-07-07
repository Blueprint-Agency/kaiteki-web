// Preview for SectionHeading — the section title primitive. Variant axes:
// eyebrow present/absent, alignment, heading level. Eyebrow is used sparingly.
import { SectionHeading } from "@/components/SectionHeading";

export function TitleAndIntro() {
  return (
    <div style={{ maxWidth: 680 }}>
      <SectionHeading
        title="Treatments guided by qualified doctors"
        intro="Every plan begins with a consultation, so care is matched to your skin and your goals."
      />
    </div>
  );
}

export function WithEyebrow() {
  return (
    <div style={{ maxWidth: 680 }}>
      <SectionHeading
        eyebrow="Pigment & Resurfacing"
        title="Pico Laser"
        intro="A picosecond laser used for pigmentation, dull skin tone and tattoo removal."
      />
    </div>
  );
}

export function Centered() {
  return (
    <div style={{ maxWidth: 680 }}>
      <SectionHeading
        align="center"
        title="Nine branches across Malaysia"
        intro="Find the Kaiteki clinic nearest you across the Klang Valley, Johor and Sabah."
      />
    </div>
  );
}

export function TitleOnly() {
  return (
    <div style={{ maxWidth: 680 }}>
      <SectionHeading as="h3" title="Frequently asked questions" />
    </div>
  );
}
