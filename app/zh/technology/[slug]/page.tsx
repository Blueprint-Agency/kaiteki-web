import { notFound } from "next/navigation";
import {
  TechnologyLocalePage,
  technologyLocaleMeta,
  technologyLocaleParams,
} from "@/components/TechnologyLocalePage";

// /zh/technology/<slug>: a device or injectable page in this language. Resolves
// only for a translation whose ledger entry is live (content/i18n/pages.ts).
export const dynamicParams = false;
export const generateStaticParams = () => technologyLocaleParams("zh");

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  return technologyLocaleMeta("zh", (await params).slug);
}

export default async function Page({ params }: Props) {
  const page = await TechnologyLocalePage({ locale: "zh", slug: (await params).slug });
  return page ?? notFound();
}
