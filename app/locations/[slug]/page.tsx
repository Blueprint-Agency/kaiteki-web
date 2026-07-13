import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Ledger } from "@/components/Ledger";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { branches, branchBySlug } from "@/content/data/branches";
import { treatmentBySlug, treatmentHref } from "@/content/data/treatments";
import { doctors } from "@/content/data/doctors";
import { waForBranch } from "@/lib/wa";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const b = branchBySlug(slug);
  if (!b) return {};
  return {
    title: `Aesthetic Clinic in ${b.name} — Kaiteki ${b.name}`,
    description: `Kaiteki ${b.name} skin & aesthetic clinic in ${b.city}, ${b.state}. Doctor-led treatments; book a free consultation on WhatsApp.`,
    alternates: { canonical: `/locations/${b.slug}` },
  };
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = branchBySlug(slug);
  if (!b) notFound();

  const offered = b.treatments.map((s) => treatmentBySlug(s)).filter(Boolean);
  const here = doctors.filter((d) => d.branches.includes(b.slug));

  // LocalBusiness (MedicalClinic) schema — the primary local-SEO signal for a
  // branch page. NAP + map come from branch data; geo/openingHoursSpecification
  // are omitted until we store lat/lng and structured hours (docs/02 local-SEO).
  // ponytail: no openingHoursSpecification — hours are free-text in 3 formats; add
  // when hours become structured data.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: `Kaiteki ${b.name}`,
    image: `${site.url}${b.photo}`,
    url: `${site.url}/locations/${b.slug}`,
    telephone: b.phone,
    hasMap: b.mapUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: b.address,
      addressLocality: b.city,
      addressRegion: b.state,
      addressCountry: "MY",
    },
    ...(b.lat != null && b.lng != null
      ? { geo: { "@type": "GeoCoordinates", latitude: b.lat, longitude: b.lng } }
      : {}),
    ...(b.hoursSpec
      ? {
          openingHoursSpecification: b.hoursSpec.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
    ...(b.serves ? { areaServed: b.serves } : {}),
    parentOrganization: {
      "@type": "MedicalClinic",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <Container className="py-10 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: b.name }]} />

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <p className="text-sm font-medium text-accent">{b.region}</p>
          <h1 className="mt-2 text-3xl font-bold text-espresso sm:text-4xl">Kaiteki {b.name}</h1>
          <p className="prose mt-4 max-w-[60ch] text-lg leading-relaxed text-ink-700">
            {b.gettingHere ??
              `Our ${b.name} branch offers doctor-led skin, aesthetic and laser treatments in ${b.city}, ${b.state}.`}{" "}
            Message us on WhatsApp to book a free consultation or ask about directions and parking.
          </p>

          {b.serves && (
            <p className="mt-3 text-sm text-ink-500">
              Serving {b.serves.join(", ")}.
            </p>
          )}

          <div className="mt-8 max-w-md rounded-xl border border-hairline bg-surface p-5">
            <Ledger
              rows={[
                { label: "Address", value: b.address },
                { label: "Phone", value: b.phone },
                { label: "Hours", value: b.hours.join(" · ") },
                ...(b.parking ? [{ label: "Parking", value: b.parking }] : []),
              ]}
            />
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <WhatsAppButton href={waForBranch(b.name)} label={`Contact ${b.name}`} />
              <a href={`tel:${b.phone.replace(/[^\d+]/g, "")}`} className="text-sm font-medium text-mocha hover:text-espresso">
                Call {b.phone}
              </a>
              <a href={b.mapUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-mocha hover:text-espresso">
                Get directions →
              </a>
            </div>
          </div>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-hairline bg-tint">
          <Image
            src={b.photo}
            alt={`Kaiteki ${b.name} clinic`}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </div>

      {offered.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">
            Treatments offered here
          </h2>
          <ul className="flex flex-wrap gap-2">
            {offered.map((t) => (
              <li key={t!.slug}>
                <Link href={treatmentHref(t!)} className="rounded-full border border-hairline bg-surface px-4 py-2 text-sm text-ink-700 transition-colors hover:border-mocha">
                  {t!.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {here.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">
            Doctors at this branch
          </h2>
          <ul className="space-y-1.5">
            {here.map((d) => (
              <li key={d.slug} className="text-ink-700">
                {d.fullName} — <span className="ledger !text-ink-500">{d.credentials}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Container>
  );
}
