import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConcernCard } from "@/components/cards";
import { concernsByGroup } from "@/content/data/concerns";

export const metadata: Metadata = {
  title: "Skin Concerns",
  description:
    "Doctor-reviewed guides to common skin concerns — acne, pigmentation, pores, fine lines and dark eye circles.",
  alternates: { canonical: "/concerns/skin" },
};

export default function SkinCategory() {
  return (
    <Container className="py-10 sm:py-12">
      <Breadcrumbs items={[{ label: "Concerns", href: "/concerns" }, { label: "Skin" }]} />
      <div className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-espresso sm:text-4xl">Skin concerns</h1>
        <p className="prose mt-4 text-lg leading-relaxed text-ink-700">
          Understanding what you&rsquo;re seeing — and its likely cause — is the first step.
          These guides explain the options a doctor may consider.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {concernsByGroup("Skin").map((c) => (
          <ConcernCard key={c.slug} c={c} />
        ))}
      </div>
    </Container>
  );
}
