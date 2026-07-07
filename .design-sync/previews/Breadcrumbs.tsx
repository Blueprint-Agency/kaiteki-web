// Preview for Breadcrumbs — the visible trail (+ BreadcrumbList JSON-LD) at the
// top of interior pages. A "Home" crumb is prepended by the component, so each
// cell supplies only the trail after Home. The last crumb has no href.
import { Breadcrumbs } from "@/components/Breadcrumbs";

const wrap: React.CSSProperties = { maxWidth: 680 };

export function TreatmentTrail() {
  return (
    <div style={wrap}>
      <Breadcrumbs
        items={[
          { label: "Treatments", href: "/treatments" },
          { label: "Pico Laser" },
        ]}
      />
    </div>
  );
}

export function LocationTrail() {
  return (
    <div style={wrap}>
      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          { label: "Kuala Lumpur" },
        ]}
      />
    </div>
  );
}

export function BlogTrail() {
  return (
    <div style={wrap}>
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: "Understanding pigmentation and uneven skin tone" },
        ]}
      />
    </div>
  );
}
