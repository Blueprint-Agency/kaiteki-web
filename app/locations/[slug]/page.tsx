import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Ledger } from "@/components/Ledger";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { JsonLd } from "@/components/JsonLd";
import { branches, branchBySlug } from "@/content/data/branches";
import { doctors } from "@/content/data/doctors";
import { waForBranch } from "@/lib/wa";
import { pageMeta } from "@/lib/seo";
import { medicalClinicNode } from "@/lib/schema";

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
  return pageMeta({
    title: b.seoTitle ?? b.name,
    description:
      b.seoDescription ??
      `Kaiteki ${b.name} skin & aesthetic clinic in ${b.city}, ${b.state}. Doctor-led treatments; book a free consultation on WhatsApp.`,
    path: `/locations/${b.slug}`,
    image: b.photo,
  });
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const b = branchBySlug(slug);
  if (!b) notFound();

  const here = doctors.filter((d) => d.branches.includes(b.slug));

  // LocalBusiness (MedicalClinic) schema — the primary local-SEO signal for a
  // Per-branch MedicalClinic node (NAP, geo, hours) wired to the site graph by
  // @id — built in lib/schema.ts so all branches stay consistent.
  return (
    <Container className="py-10 sm:py-12">
      <JsonLd data={medicalClinicNode(b)} />
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: b.name }]} />

      {/* Intro + storefront, vertically centred so neither column orphans whitespace. */}
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-sm font-medium text-accent">{b.region}</p>
          <h1 className="mt-2 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-espresso sm:text-5xl">
            Kaiteki {b.name}
          </h1>
          {b.alsoKnownAs && (
            <p className="mt-2 text-sm text-ink-500">
              Also known as <span className="font-medium text-ink-700">{b.alsoKnownAs}</span>
            </p>
          )}
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

      {/* "Find us" — the contact details paired with their map at matched height,
          so the address sits beside the pin it describes rather than floating apart. */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
        <div className="flex flex-col rounded-2xl border border-hairline bg-surface p-6">
          <Ledger
            rows={[
              { label: "Address", value: b.address },
              { label: "Phone", value: b.phone },
              { label: "Hours", value: b.hours.join(" · ") },
              ...(b.parking ? [{ label: "Parking", value: b.parking }] : []),
            ]}
          />
          <div className="mt-auto pt-6">
            <WhatsAppButton href={waForBranch(b.name)} label={`Contact ${b.name}`} />
          </div>
        </div>

        {/* The stored mapUrl is a maps.app.goo.gl short link, which can't be iframed;
            the no-key `output=embed` endpoint geocodes a query instead. The query is
            biased with the business name so it pins the clinic, not a neighbouring
            shop in the same plaza. Prefer stored lat/lng once the clinic supplies them.
            ponytail: name+address query embed, no Maps API key needed. */}
        <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-hairline bg-tint">
          <iframe
            title={`Map of Kaiteki ${b.name}`}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              b.lat != null && b.lng != null
                ? `${b.lat},${b.lng}`
                : `Kaiteki ${b.name}, ${b.address}`,
            )}&z=16&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 size-full border-0"
          />
        </div>
      </div>

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
