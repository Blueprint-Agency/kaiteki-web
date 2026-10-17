import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BranchPage, branchMeta } from "@/components/BranchPage";
import { branches, branchBySlug } from "@/content/data/branches";
import { isLive } from "@/lib/locale-pages";

// /ms/locations/<slug>: a branch page in this language. Resolves only while its
// ledger entry is live (content/i18n/pages.ts); unsigned ones prerender as 404.
export const dynamicParams = false;
export const generateStaticParams = () => branches.map((b) => ({ slug: b.slug }));

type Props = { params: Promise<{ slug: string }> };
const live = (slug: string) => isLive("ms", `/locations/${slug}`);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const b = branchBySlug((await params).slug);
  return b && live(b.slug) ? branchMeta("ms", b) : {};
}

export default async function Page({ params }: Props) {
  const b = branchBySlug((await params).slug);
  if (!b || !live(b.slug)) notFound();
  return <BranchPage locale="ms" b={b} />;
}
