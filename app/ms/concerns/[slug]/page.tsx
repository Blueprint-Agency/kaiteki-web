import { notFound } from "next/navigation";
import { ConcernLocalePage, concernLocaleMeta, concernLocaleParams } from "@/components/ConcernLocalePage";

// /ms/concerns/<slug>: a concern page in this language. A URL exists only for
// pages with a translation file AND a ledger entry that is live (content/i18n/pages.ts).
export const dynamicParams = false;
export const generateStaticParams = () => concernLocaleParams("ms");

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  return concernLocaleMeta("ms", (await params).slug);
}

export default async function Page({ params }: Props) {
  const page = await ConcernLocalePage({ locale: "ms", slug: (await params).slug });
  return page ?? notFound();
}
