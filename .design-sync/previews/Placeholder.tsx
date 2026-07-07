// Preview for Placeholder — the honest interim page for routes not yet built
// (breadcrumb + title + framing copy + WhatsApp CTA), so no nav link 404s.
import { Placeholder } from "@/components/Placeholder";

export function Default() {
  return (
    <Placeholder
      title="Promotions"
      crumbLabel="Promotions"
      description="Current offers across our clinics will be listed here. Any promotion is subject to a consultation and the doctor's assessment of suitability."
    />
  );
}

export function AboutRoute() {
  return (
    <Placeholder
      title="About Kaiteki"
      crumbLabel="About"
      description="More about our clinics, our doctors and how we work is on the way. Kaiteki is an MOH-licensed skin and aesthetic clinic with nine branches across Malaysia."
    />
  );
}
