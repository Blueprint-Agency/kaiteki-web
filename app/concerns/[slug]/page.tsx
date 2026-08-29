import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { ConcernView } from "@/components/ConcernView";
import { concerns, concernBySlug } from "@/content/data/concerns";
import { treatmentsOfConcern } from "@/content/data/relations";
import { medicalWebPageNode } from "@/lib/schema";
import { concernReviewer } from "@/lib/signoff";

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

  // Only a signed-off page may assert a reviewer or a review date in schema.
  // `c.reviewedBy` is an intended reviewer, not a claim that the doctor read
  // the page — the claim lives in config/concern-signoff.json. `dateModified`
  // is a different fact (when the copy last changed) and is emitted either way.
  const review = concernReviewer(c.slug);

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
          lastReviewed: review?.date,
          dateModified: c.lastReviewed,
          image: c.image,
          reviewer: review
            ? {
                name: review.doctor.fullName,
                slug: review.doctor.slug,
                credentials: review.doctor.credentials,
              }
            : undefined,
        })}
      />
      <ConcernView c={c} />
    </>
  );
}
