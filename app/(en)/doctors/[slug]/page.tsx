import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DoctorProfile, doctorMeta } from "@/components/DoctorPages";
import { doctors, doctorBySlug } from "@/content/data/doctors";

export const dynamicParams = false;

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const d = doctorBySlug((await params).slug);
  return d ? doctorMeta("en", d) : {};
}

export default async function Page({ params }: Props) {
  const d = doctorBySlug((await params).slug);
  if (!d) notFound();
  return <DoctorProfile locale="en" d={d} />;
}
