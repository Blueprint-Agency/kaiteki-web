import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConcernCard } from "@/components/cards";
import { concernsByGroup } from "@/content/data/concerns";

export const metadata: Metadata = {
  title: "Eye Concerns",
  description: "Doctor-reviewed guides to concerns around the eyes, such as dark eye circles.",
  alternates: { canonical: "/concerns/eyes" },
};

export default function EyesCategory() {
  return (
    <Container className="py-10 sm:py-12">
      <Breadcrumbs items={[{ label: "Concerns", href: "/concerns" }, { label: "Eyes" }]} />
      <div className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-espresso sm:text-4xl">Eye concerns</h1>
        <p className="prose mt-4 text-lg leading-relaxed text-ink-700">
          Concerns around the delicate eye area, explained in plain language and reviewed by a doctor.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {concernsByGroup("Eyes").map((c) => (
          <ConcernCard key={c.slug} c={c} />
        ))}
      </div>
    </Container>
  );
}
