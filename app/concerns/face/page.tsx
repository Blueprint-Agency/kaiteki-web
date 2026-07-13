import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConcernCard } from "@/components/cards";
import { concernsByGroup } from "@/content/data/concerns";

export const metadata: Metadata = {
  title: "Face Concerns",
  description:
    "Doctor-reviewed guides to face concerns — contouring, lifting and ageing.",
  alternates: { canonical: "/concerns/face" },
};

export default function FaceCategory() {
  return (
    <Container className="py-10 sm:py-12">
      <Breadcrumbs items={[{ label: "Concerns", href: "/concerns" }, { label: "Face" }]} />
      <div className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-espresso sm:text-4xl">Face concerns</h1>
        <p className="prose mt-4 text-lg leading-relaxed text-ink-700">
          Firmness, contour and ageing concerns are assessed individually. These guides
          explain the non-surgical options a doctor may consider.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {concernsByGroup("Face").map((c) => (
          <ConcernCard key={c.slug} c={c} />
        ))}
      </div>
    </Container>
  );
}
