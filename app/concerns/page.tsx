import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConcernCard } from "@/components/cards";
import { concernGroups, concernsByGroup } from "@/content/data/concerns";

export const metadata: Metadata = {
  title: "Concerns",
  description:
    "Understand your skin, ageing and body concerns first — plain-language, doctor-reviewed guides to the options that may help.",
  alternates: { canonical: "/concerns" },
};

const groupHref: Record<string, string> = {
  Skin: "/concerns/skin",
  Face: "/concerns/face",
  Eyes: "/concerns/eyes",
  "Hair & Body": "/concerns/hair-body",
};

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
        {concernGroups.map((g) => (
          <section key={g}>
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-mocha">{g}</h2>
              <Link href={groupHref[g]} className="text-sm font-medium text-accent hover:text-espresso">
                View {g} overview →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {concernsByGroup(g).map((c) => (
                <ConcernCard key={c.slug} c={c} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
