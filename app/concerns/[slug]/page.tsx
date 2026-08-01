import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ConcernView } from "@/components/ConcernView";
import { concerns, concernBySlug } from "@/content/data/concerns";
import { treatmentsOfConcern } from "@/content/data/relations";
import { doctorBySlug } from "@/content/data/doctors";
import { medicalWebPageNode } from "@/lib/schema";

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
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = concernBySlug(slug);
  if (!c) notFound();

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
      <ConcernView c={c} />
    </>
  );
}
