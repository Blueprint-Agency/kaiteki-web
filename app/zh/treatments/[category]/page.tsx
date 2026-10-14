import { notFound } from "next/navigation";
import {
  TreatmentLocalePage,
  treatmentLocaleMeta,
  treatmentLocaleParams,
} from "@/components/TreatmentLocalePage";

// /zh/treatments/<slug>: a treatment page in this language. Resolves only for a
// translation whose ledger entry is live (content/i18n/pages.ts).
export const dynamicParams = false;
export const generateStaticParams = () => treatmentLocaleParams("zh");

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props) {
  return treatmentLocaleMeta("zh", (await params).category);
}

export default async function Page({ params }: Props) {
  const page = await TreatmentLocalePage({ locale: "zh", slug: (await params).category });
  return page ?? notFound();
}
