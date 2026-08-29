import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ConcernView } from "@/components/ConcernView";
import { concerns, concernBySlug } from "@/content/data/concerns";
import { treatmentsOfConcern } from "@/content/data/relations";
import { doctorBySlug } from "@/content/data/doctors";
import { medicalWebPageNode } from "@/lib/schema";
// PROTOTYPE — throwaway, remove with components/proto/.
import { Suspense } from "react";
import { VariantA } from "@/components/proto/VariantA";
import { VariantB } from "@/components/proto/VariantB";
import { VariantC } from "@/components/proto/VariantC";
import { PrototypeSwitcher } from "@/components/proto/PrototypeSwitcher";

export const dynamicParams = false;

export function generateStaticParams() {
  return concerns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = concernBySlug(slug);
  if (!c) return {};
  return pageMeta({
    title: c.seoTitle ?? c.name,
    description: c.seoDescription ?? c.summary,
    path: `/concerns/${c.slug}`,
    image: c.image,
  });
}

export default async function ConcernPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  // PROTOTYPE — remove with components/proto/. `?variant=A|B|C` swaps the
  // rendering only; data fetching, metadata and schema below are untouched.
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { slug } = await params;
  const c = concernBySlug(slug);
  if (!c) notFound();

  const variant = (await searchParams).variant;
  const v = typeof variant === "string" ? variant.toUpperCase() : null;

  const doctor = doctorBySlug(c.reviewedBy);

  return (
    <>
      <JsonLd
        data={medicalWebPageNode({
          path: `/concerns/${c.slug}`,
          name: c.seoTitle ?? c.name,
          description: c.seoDescription ?? c.summary,
          about: {
            type: "MedicalCondition",
            name: c.name,
            possibleTreatment: treatmentsOfConcern(c.slug).map((t) => t.name),
          },
          lastReviewed: c.lastReviewed,
          image: c.image,
          reviewer: doctor
            ? { name: doctor.fullName, slug: doctor.slug, credentials: doctor.credentials }
            : undefined,
        })}
      />
      {/* PROTOTYPE — delete this block and the import to restore the real page. */}
      {v === "A" ? <VariantA c={c} /> : v === "B" ? <VariantB c={c} /> : v === "C" ? <VariantC c={c} /> : <ConcernView c={c} />}
      {v && (
        <Suspense fallback={null}>
          <PrototypeSwitcher current={v} />
        </Suspense>
      )}
    </>
  );
}
