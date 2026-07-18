import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { DoctorCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { doctors } from "@/content/data/doctors";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Meet Our Aesthetic Doctors Across Malaysia | Kaiteki",
  description:
    "Meet Kaiteki's aesthetic physicians across Malaysia, their credentials and focus areas. Book a free WhatsApp consultation with a doctor near you.",
  path: "/doctors",
});

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
      <CardRow className="mt-10">
        {doctors.map((d) => (
          // Portraits are shot 2:3 — render at their native ratio so no face is cropped.
          <DoctorCard key={d.slug} d={d} />
        ))}
      </CardRow>
      <p className="mt-8 text-sm text-ink-500">
        MMC registration numbers are pending confirmation and will be added to each profile
        before launch.
      </p>
    </Container>
  );
}
