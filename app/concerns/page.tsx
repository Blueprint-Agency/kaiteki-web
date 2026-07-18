import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConcernCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { concernGroups, concernsByGroup } from "@/content/data/concerns";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Skin, Ageing & Body Concerns Guide | Kaiteki Clinic",
  description:
    "Explore skin, ageing and body concerns with doctor-reviewed guides from Kaiteki Clinic. Understand your options first — book a free consultation on WhatsApp.",
  path: "/concerns",
});

export default function ConcernsHub() {
  return (
    <Container className="py-10 sm:py-12">
      <Breadcrumbs items={[{ label: "Concerns" }]} />
      <div className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-espresso sm:text-4xl">What brings you in?</h1>
        <p className="prose mt-4 text-lg leading-relaxed text-ink-700">
          Start with the concern, not the machine. Each guide is written in plain language
          and reviewed by a doctor.
        </p>
      </div>
      <div className="mt-12 space-y-12">
        {concernGroups.map((g, gi) => (
          <section key={g}>
            <div className="mb-5">
              <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-mocha">{g}</h2>
            </div>
            <CardRow>
              {concernsByGroup(g).map((c, i) => (
                // First row of the first group is above the fold → eager-load (LCP).
                <ConcernCard key={c.slug} c={c} priority={gi === 0 && i < 3} />
              ))}
            </CardRow>
          </section>
        ))}
      </div>
    </Container>
  );
}
