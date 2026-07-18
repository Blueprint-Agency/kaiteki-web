import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { medicalWebPageNode } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { TreatmentView } from "@/components/TreatmentView";
import { categoryTreatments, treatmentBySlug } from "@/content/data/treatments";
import { doctorBySlug } from "@/content/data/doctors";

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryTreatments().map((t) => ({ category: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const t = treatmentBySlug(category);
  if (!t) return {};
  return pageMeta({
    title: t.seoTitle ?? t.name,
    description: t.seoDescription ?? t.summary,
    path: `/treatments/${t.slug}`,
    image: t.image,
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const t = treatmentBySlug(category);
  if (!t) notFound();
  const reviewer = doctorBySlug(t.reviewedBy);
  return (
    <>
      <JsonLd
        data={medicalWebPageNode({
          path: `/treatments/${t.slug}`,
          name: t.seoTitle ?? t.name,
          description: t.seoDescription ?? t.summary,
          about: { type: "MedicalProcedure", name: t.name },
          lastReviewed: t.lastReviewed,
          reviewer: reviewer
            ? { name: reviewer.fullName, slug: reviewer.slug, credentials: reviewer.credentials }
            : undefined,
        })}
      />
      <TreatmentView
        t={t}
        trail={[{ label: "Treatments", href: "/treatments" }, { label: t.name }]}
      />
    </>
  );
}
