import { notFound } from "next/navigation";
import { ConcernLocalePage, concernLocaleMeta, concernLocaleParams } from "@/components/ConcernLocalePage";

// /zh/concerns/<slug>: a concern page in this language. A URL exists only for
// pages with a translation file AND a ledger entry that is live (content/i18n/pages.ts).
export const dynamicParams = false;
export const generateStaticParams = () => concernLocaleParams("zh");

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  return concernLocaleMeta("zh", (await params).slug);
}

export default async function Page({ params }: Props) {
  const page = await ConcernLocalePage({ locale: "zh", slug: (await params).slug });
  return page ?? notFound();
}
