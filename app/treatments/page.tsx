import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { TreatmentsExplorer } from "@/components/TreatmentsExplorer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ClosingCta } from "@/components/ClosingCta";

export const metadata = pageMeta({
  title: "Skin & Aesthetic Treatments | Kaiteki Clinic Malaysia",
  description:
    "Laser, lifting, skin boosters and body treatments. Every option is doctor-assessed before it's recommended. Explore our full treatment menu.",
  path: "/treatments",
});

export default function TreatmentsHub() {
  return (
    <>
      <Container className="py-10 sm:py-12">
        <PageHeader
          crumbs={[{ label: "Treatments" }]}
          eyebrow="Doctor-led care"
          title="Treatments"
          description="Every treatment below is assessed and carried out by a registered doctor. Browse by category, or start from your concern if you're not sure which treatment you need."
        />

        <div className="mt-12">
          <TreatmentsExplorer />
        </div>

        <p className="mt-8 text-xs text-ink-500">
          Duration and downtime are general estimates. Your doctor will advise based on your
          specific treatment plan.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-tint px-6 py-5 sm:px-8">
          <p className="max-w-xl text-sm leading-relaxed text-ink-700 sm:text-base">
            Not sure which treatment fits your concern? That&rsquo;s what consultations are for.
            A doctor will assess your skin and recommend the right option.
          </p>
          <WhatsAppButton label="Book a free consultation" />
        </div>
      </Container>

      <ClosingCta />
    </>
  );
}
