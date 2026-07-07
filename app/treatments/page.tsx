import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TreatmentCard } from "@/components/cards";
import { treatmentCategories, treatmentsByCategory } from "@/content/data/treatments";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Non-surgical, doctor-led skin, aesthetic and laser treatments at Kaiteki, across 9 branches in Malaysia.",
  alternates: { canonical: "/treatments" },
};

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
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {treatmentsByCategory(cat).map((t) => (
                <TreatmentCard key={t.slug} t={t} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
