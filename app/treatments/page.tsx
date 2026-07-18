import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { TreatmentCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { treatmentCategories, treatmentsByCategory } from "@/content/data/treatments";

export const metadata = pageMeta({
  title: "Non-Surgical Aesthetic Treatments Malaysia | Kaiteki",
  description:
    "Browse non-surgical, doctor-led aesthetic treatments at Kaiteki Clinic, across 9 branches in Malaysia. Book a free consultation on WhatsApp to get started.",
  path: "/treatments",
});

export default function TreatmentsHub() {
  return (
    <Container className="py-10 sm:py-12">
      <PageHeader
        crumbs={[{ label: "Treatments" }]}
        eyebrow="Doctor-led care"
        title="Treatments"
        description="Every treatment is assessed and carried out by registered doctors. Explore by category, or start from your concern."
      />
      <div className="mt-12 space-y-12">
        {treatmentCategories.map((cat) => (
          <section key={cat}>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">{cat}</h2>
            <CardRow>
              {treatmentsByCategory(cat).map((t) => (
                <TreatmentCard key={t.slug} t={t} />
              ))}
            </CardRow>
          </section>
        ))}
      </div>
    </Container>
  );
}
