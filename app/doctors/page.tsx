import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DoctorCard } from "@/components/cards";
import { doctors } from "@/content/data/doctors";

export const metadata: Metadata = {
  title: "Our Doctors",
  description:
    "Kaiteki treatments are assessed and carried out by MMC-registered doctors. Meet the medical team.",
  alternates: { canonical: "/doctors" },
};

export default function DoctorsHub() {
  return (
    <Container className="py-10 sm:py-12">
      <Breadcrumbs items={[{ label: "Doctors" }]} />
      <div className="mt-8 max-w-2xl">
        <h1 className="text-3xl font-bold text-espresso sm:text-4xl">Our doctors</h1>
        <p className="prose mt-4 text-lg leading-relaxed text-ink-700">
          Every treatment at Kaiteki is assessed and carried out by an MMC-registered doctor,
          and every treatment guide names the doctor who reviewed it. It is the foundation of
          how we work — and why we don&rsquo;t rely on testimonials or before-and-after photos.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((d) => (
          // Square crop to match the homepage doctor strip (was a tall 2:3 portrait).
          <DoctorCard key={d.slug} d={d} mediaClassName="aspect-square" />
        ))}
      </div>
      <p className="mt-8 text-sm text-ink-500">
        MMC registration numbers are pending confirmation and will be added to each profile
        before launch.
      </p>
    </Container>
  );
}
