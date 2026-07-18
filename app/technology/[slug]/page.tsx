import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TechnologyView } from "@/components/TechnologyView";
import { technology, technologyBySlug } from "@/content/data/technology";

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
  return {
    title: `${x.name} — Technology at Kaiteki`,
    description: x.summary,
    alternates: { canonical: `/technology/${x.slug}` },
  };
}

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const x = technologyBySlug(slug);
  if (!x) notFound();
  return (
    <TechnologyView
      x={x}
      trail={[{ label: "Products & Technology", href: "/technology" }, { label: x.name }]}
    />
  );
}
