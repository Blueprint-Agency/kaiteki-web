import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BranchPage, branchMeta } from "@/components/BranchPage";
import { branches, branchBySlug } from "@/content/data/branches";

export const dynamicParams = false;

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const b = branchBySlug((await params).slug);
  return b ? branchMeta("en", b) : {};
}

export default async function Page({ params }: Props) {
  const b = branchBySlug((await params).slug);
  if (!b) notFound();
  return <BranchPage locale="en" b={b} />;
}
