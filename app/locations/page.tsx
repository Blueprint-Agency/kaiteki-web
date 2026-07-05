import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BranchCard } from "@/components/cards";
import { branches, regionOrder } from "@/content/data/branches";

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Kaiteki has 9 branches across Malaysia — Klang Valley, Johor and Sabah. Find your nearest clinic.",
  alternates: { canonical: "/locations" },
};

export default function LocationsHub() {
  return (
    <Container className="py-10 sm:py-12">
      <Breadcrumbs items={[{ label: "Locations" }]} />
      <div className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-espresso sm:text-4xl">Our locations</h1>
        <p className="prose mt-4 text-lg leading-relaxed text-ink-700">
          Nine branches across Klang Valley, Johor and Sabah. Each branch page has full
          address, opening hours and directions.
        </p>
      </div>
      <div className="mt-12 space-y-12">
        {regionOrder.map((region) => (
          <section key={region}>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">{region}</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {branches.filter((b) => b.region === region).map((b) => (
                <BranchCard key={b.slug} b={b} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
