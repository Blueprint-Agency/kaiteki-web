import { notFound } from "next/navigation";
import {
  TreatmentLocalePage,
  treatmentLocaleMeta,
  treatmentLocaleParams,
} from "@/components/TreatmentLocalePage";

// /ms/treatments/<slug>: a treatment page in this language. Resolves only for a
// translation whose ledger entry is live (content/i18n/pages.ts).
export const dynamicParams = false;
export const generateStaticParams = () => treatmentLocaleParams("ms");

type Props = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Props) {
  return treatmentLocaleMeta("ms", (await params).category);
}

export default async function Page({ params }: Props) {
  const page = await TreatmentLocalePage({ locale: "ms", slug: (await params).category });
  return page ?? notFound();
}
