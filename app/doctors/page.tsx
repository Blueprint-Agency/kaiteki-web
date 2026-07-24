import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { DoctorCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { doctors } from "@/content/data/doctors";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Meet Our Doctors | Kaiteki Aesthetic Clinic",
  description:
    "20 LCP board-certified, MMC-registered aesthetic doctors across 9 branches. Every treatment plan is assessed and carried out by a registered physician.",
  path: "/doctors",
});

export default function DoctorsHub() {
  return (
    <Container className="py-10 sm:py-12">
      <PageHeader
        crumbs={[{ label: "Doctors" }]}
        eyebrow="MMC-registered"
        title="Our doctors"
        description={
          <>
            Every treatment at Kaiteki is assessed and carried out by an MMC-registered doctor,
            and every treatment guide names the doctor who reviewed it. It is the foundation of
            how we work — and why we don&rsquo;t rely on testimonials or before-and-after photos.
          </>
        }
      />
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
