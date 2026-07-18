import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { TechnologyExplorer } from "@/components/TechnologyExplorer";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Devices & Technology Behind Our Treatments | Kaiteki",
  description:
    "See the devices and injectables behind Kaiteki's doctor-led treatments, by category and type. Ask about any platform — book a free consultation on WhatsApp.",
  path: "/technology",
});

export default function TechnologyHub() {
  return (
    <Container className="py-10 sm:py-12">
      <PageHeader
        crumbs={[{ label: "Products & Technology" }]}
        eyebrow="In active use"
        title="Products & Technology"
        description={
          <>
            Everything listed here is <strong>available at Kaiteki</strong> and in active use across
            our clinics — each labelled as a <strong>device</strong> (the machines) or an{" "}
            <strong>injectable</strong> (the products). Search by name, or filter by category and type.
          </>
        }
      >
        <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-tint px-3.5 py-1.5 text-sm font-medium text-espresso">
          <span aria-hidden className="text-accent">✓</span>
          Every device &amp; product below is offered at Kaiteki
        </p>
      </PageHeader>
      <div className="mt-12">
        <TechnologyExplorer />
      </div>
    </Container>
  );
}
