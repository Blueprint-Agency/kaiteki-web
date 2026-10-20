import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DoctorProfile, doctorMeta } from "@/components/DoctorPages";
import { doctors, doctorBySlug } from "@/content/data/doctors";
import { isLive } from "@/lib/locale-pages";

// /ms/doctors/<slug>: a doctor's profile in this language. Resolves only while
// its ledger entry is live (content/i18n/pages.ts); unsigned ones prerender as 404.
export const dynamicParams = false;
export const generateStaticParams = () => doctors.map((d) => ({ slug: d.slug }));

type Props = { params: Promise<{ slug: string }> };
const live = (slug: string) => isLive("ms", `/doctors/${slug}`);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = doctorBySlug((await params).slug);
  return d && live(d.slug) ? doctorMeta("ms", d) : {};
}

export default async function Page({ params }: Props) {
  const d = doctorBySlug((await params).slug);
  if (!d || !live(d.slug)) notFound();
  return <DoctorProfile locale="ms" d={d} />;
}
