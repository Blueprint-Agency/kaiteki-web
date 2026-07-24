import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { TechnologyExplorer } from "@/components/TechnologyExplorer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Technology Behind Our Treatments | Kaiteki Malaysia",
  description:
    "We work with established brands and clinically proven platforms. Every device and product is selected by our doctors for safety, efficacy and suitability.",
  path: "/technology",
});

export default function TechnologyHub() {
  return (
    <Container className="py-10 sm:py-12">
      <PageHeader
        crumbs={[{ label: "Products & Technology" }]}
        eyebrow="In active use"
        title="Products & Technology"
        description="Every device and injectable below is in active clinical use at Kaiteki, chosen for clinical evidence and matched to each patient rather than one default machine."
      />

      <div className="mt-10">
        <TechnologyExplorer />
      </div>

      <section className="mt-16 max-w-3xl border-t border-hairline pt-10">
        <h2 className="text-xl font-bold text-espresso sm:text-2xl">
          Why multiple devices for the same treatment?
        </h2>
        <p className="mt-3 leading-relaxed text-ink-700">
          Different skin types, concerns and treatment depths respond better to different
          platforms. Having more than one device in a category gives our doctors the flexibility
          to match the technology to your specific needs rather than fitting every patient to a
          single machine.
        </p>
      </section>

      <section className="mt-12 max-w-3xl border-t border-hairline pt-10">
        <h2 className="text-xl font-bold text-espresso sm:text-2xl">
          Not sure which device or product applies to your concern?
        </h2>
        <p className="mt-3 leading-relaxed text-ink-700">
          You don&rsquo;t need to choose the technology. Tell us the concern, and a doctor will
          recommend the right device or product during consultation.
        </p>
        <div className="mt-5">
          <WhatsAppButton />
        </div>
      </section>
    </Container>
  );
}
