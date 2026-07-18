import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TechnologyView } from "@/components/TechnologyView";
import { technology, technologyBySlug } from "@/content/data/technology";
import { doctorBySlug } from "@/content/data/doctors";
import { pageMeta } from "@/lib/seo";
import { medicalWebPageNode } from "@/lib/schema";
import { JsonLd } from "@/components/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return technology.map((x) => ({ slug: x.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const x = technologyBySlug(slug);
  if (!x) return {};
  return pageMeta({
    title: x.seoTitle ?? x.name,
    description: x.seoDescription ?? x.summary,
    path: `/technology/${x.slug}`,
    image: x.image,
  });
}

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const x = technologyBySlug(slug);
  if (!x) notFound();
  const reviewer = x.reviewedBy ? doctorBySlug(x.reviewedBy) : undefined;
  return (
    <>
      <JsonLd
        data={medicalWebPageNode({
          path: `/technology/${x.slug}`,
          name: x.seoTitle ?? x.name,
          description: x.seoDescription ?? x.summary,
          // A machine → MedicalDevice; an injectable is administered via a procedure.
          about: { type: x.type === "device" ? "MedicalDevice" : "MedicalProcedure", name: x.name },
          lastReviewed: x.lastReviewed,
          reviewer: reviewer
            ? { name: reviewer.fullName, slug: reviewer.slug, credentials: reviewer.credentials }
            : undefined,
        })}
      />
      <TechnologyView
        x={x}
        trail={[{ label: "Products & Technology", href: "/technology" }, { label: x.name }]}
      />
    </>
  );
}
