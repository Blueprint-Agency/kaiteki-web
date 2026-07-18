import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { BranchCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { branches, regionOrder } from "@/content/data/branches";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Kaiteki Aesthetic Clinic Locations Across Malaysia",
  description:
    "Find your nearest Kaiteki aesthetic clinic across Klang Valley, Johor & Sabah. Compare branches, hours & treatments. Book a free consultation on WhatsApp.",
  path: "/locations",
});

export default function LocationsHub() {
  return (
    <Container className="py-10 sm:py-12">
      <PageHeader
        crumbs={[{ label: "Locations" }]}
        eyebrow="Nine branches"
        title="Our locations"
        description="Nine branches across Klang Valley, Johor and Sabah. Each branch page has full address, opening hours and directions."
      />
      <div className="mt-12 space-y-12">
        {regionOrder.map((region) => (
          <section key={region}>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">{region}</h2>
            <CardRow>
              {branches.filter((b) => b.region === region).map((b) => (
                <BranchCard key={b.slug} b={b} />
              ))}
            </CardRow>
          </section>
        ))}
      </div>
    </Container>
  );
}
