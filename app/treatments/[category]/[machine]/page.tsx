import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TreatmentView } from "@/components/TreatmentView";
import { treatments, treatmentByPath, treatmentBySlug } from "@/content/data/treatments";

export const dynamicParams = false;

export function generateStaticParams() {
  return treatments
    .filter((t) => t.parent)
    .map((t) => ({ category: t.parent!, machine: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; machine: string }>;
}): Promise<Metadata> {
  const { category, machine } = await params;
  const t = treatmentByPath(category, machine);
  if (!t) return {};
  return {
    title: `${t.name} in Malaysia — What It Involves, Suitability & Branches`,
    description: t.summary,
    alternates: { canonical: `/treatments/${category}/${t.slug}` },
  };
}

export default async function MachinePage({
  params,
}: {
  params: Promise<{ category: string; machine: string }>;
}) {
  const { category, machine } = await params;
  const t = treatmentByPath(category, machine);
  if (!t) notFound();
  const parent = treatmentBySlug(category)!;
  return (
    <TreatmentView
      t={t}
      trail={[
        { label: "Treatments", href: "/treatments" },
        { label: parent.name, href: `/treatments/${parent.slug}` },
        { label: t.name },
      ]}
    />
  );
}
