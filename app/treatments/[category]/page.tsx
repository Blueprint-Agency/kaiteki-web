import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { medicalWebPageNode } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";
import { TreatmentView } from "@/components/TreatmentView";
import { categoryTreatments, treatmentBySlug } from "@/content/data/treatments";
import { doctorBySlug } from "@/content/data/doctors";

// PROTOTYPE — throwaway, remove with components/proto-tx/ and public/proto/tx/.
import { VariantA } from "@/components/proto-tx/VariantA";
import { VariantB } from "@/components/proto-tx/VariantB";
import { VariantC } from "@/components/proto-tx/VariantC";
import { PrototypeSwitcher } from "@/components/proto-tx/PrototypeSwitcher";

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
  searchParams,
}: {
  params: Promise<{ category: string }>;
  // PROTOTYPE — remove with components/proto-tx/. `?variant=A|B|C` swaps the
  // rendering only; data fetching, metadata and schema below are untouched.
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { category } = await params;
  const t = treatmentBySlug(category);
  if (!t) notFound();
  const reviewer = doctorBySlug(t.reviewedBy);

  const variant = (await searchParams).variant;
  const v = typeof variant === "string" ? variant.toUpperCase() : null;
  const trail = [{ label: "Treatments", href: "/treatments" }, { label: t.name }];

  return (
    <>
      <JsonLd
        data={medicalWebPageNode({
          path: `/treatments/${t.slug}`,
          name: t.seoTitle ?? t.name,
          description: t.seoDescription ?? t.summary,
          about: { type: "MedicalProcedure", name: t.name },
          lastReviewed: t.lastReviewed,
          image: t.image,
          reviewer: reviewer
            ? { name: reviewer.fullName, slug: reviewer.slug, credentials: reviewer.credentials }
            : undefined,
        })}
      />
      {/* PROTOTYPE — the three branches below are throwaway; the default is real. */}
      {v === "A" ? (
        <VariantA t={t} trail={trail} />
      ) : v === "B" ? (
        <VariantB t={t} trail={trail} />
      ) : v === "C" ? (
        <VariantC t={t} trail={trail} />
      ) : (
        <TreatmentView t={t} trail={trail} />
      )}
      {v && <PrototypeSwitcher current={v} />}
    </>
  );
}
