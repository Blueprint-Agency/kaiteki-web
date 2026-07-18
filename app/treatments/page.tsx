import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
      <Breadcrumbs items={[{ label: "Treatments" }]} />
      <div className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-espresso sm:text-4xl">Treatments</h1>
        <p className="prose mt-4 text-lg leading-relaxed text-ink-700">
          Every treatment is assessed and carried out by registered doctors. Explore by
          category, or start from your concern.
        </p>
      </div>
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
