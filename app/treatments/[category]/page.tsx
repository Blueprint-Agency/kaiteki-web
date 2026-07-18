import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TreatmentView } from "@/components/TreatmentView";
import { categoryTreatments, treatmentBySlug } from "@/content/data/treatments";

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
  return {
    title: `${t.name} in Malaysia — What It Involves, Suitability & Branches`,
    description: t.summary,
    alternates: { canonical: `/treatments/${t.slug}` },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const t = treatmentBySlug(category);
  if (!t) notFound();
  return (
    <TreatmentView
      t={t}
      trail={[{ label: "Treatments", href: "/treatments" }, { label: t.name }]}
    />
  );
}
