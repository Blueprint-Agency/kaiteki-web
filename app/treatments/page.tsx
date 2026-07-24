import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { TreatmentCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { treatmentsByCategory } from "@/content/data/treatments";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ClosingCta } from "@/components/ClosingCta";
import type { NavCategory } from "@/lib/types";

export const metadata = pageMeta({
  title: "Skin & Aesthetic Treatments | Kaiteki Clinic Malaysia",
  description:
    "Laser, lifting, skin boosters and body treatments. Every option is doctor-assessed before it's recommended. Explore our full treatment menu.",
  path: "/treatments",
});

// Facials, Hair Removal, Regenerative and Eyes read as one small group on the
// hub, framed as "Specialist Treatments" rather than four near-empty sections.
const HUB_GROUPS: { label: string; categories: NavCategory[] }[] = [
  { label: "Lasers", categories: ["Lasers"] },
  { label: "Lifting & Tightening", categories: ["Lifting & Tightening"] },
  { label: "Body & Slimming", categories: ["Body & Slimming"] },
  { label: "Injectables", categories: ["Injectables"] },
  { label: "Specialist Treatments", categories: ["Facials", "Hair Removal", "Regenerative", "Eyes"] },
];

export default function TreatmentsHub() {
  return (
    <>
      <Container className="py-10 sm:py-12">
        <PageHeader
          crumbs={[{ label: "Treatments" }]}
          eyebrow="Doctor-led care"
          title="Treatments"
          description="Every treatment below is assessed and carried out by a registered doctor. Browse by category, or start from your concern if you're not sure which treatment you need."
        >
          <p className="mt-4 text-sm leading-relaxed text-ink-600">
            All treatments at Kaiteki are non-surgical. A doctor assesses your skin, concern and
            goals before recommending any option. The same treatments and protocols are available
            across all nine branches in Malaysia.
          </p>
        </PageHeader>

        <div className="mt-12 space-y-12">
          {HUB_GROUPS.map((group) => (
            <section key={group.label}>
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">
                {group.label}
              </h2>
              <CardRow>
                {group.categories
                  .flatMap((cat) => treatmentsByCategory(cat))
                  .map((t) => (
                    <TreatmentCard key={t.slug} t={t} />
                  ))}
              </CardRow>
            </section>
          ))}
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
