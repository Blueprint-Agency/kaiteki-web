import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Ledger } from "@/components/Ledger";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ConcernPicker } from "@/components/ConcernPicker";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { branches, branchBySlug } from "@/content/data/branches";
import { doctors } from "@/content/data/doctors";
import {
  treatmentCategories,
  treatmentsByCategory,
  treatmentHref,
} from "@/content/data/treatments";
import { waForBranch } from "@/lib/wa";
import { pageMeta } from "@/lib/seo";
import { medicalClinicNode } from "@/lib/schema";
import type { Branch, Faq as FaqItem } from "@/lib/types";

export const dynamicParams = false;

/**
 * Branch FAQ built from this branch's own fields, so the answers differ across
 * the nine pages instead of repeating one template. Only facts already in
 * `branches.ts` are used — nothing here is inferred beyond what that file
 * already flags as client-verifiable.
 */
function branchFaqs(b: Branch): FaqItem[] {
  const items: FaqItem[] = [
    {
      q: `Where is Kaiteki ${b.name}?`,
      a: `Kaiteki ${b.name} is at ${b.address}.${b.gettingHere ? ` ${b.gettingHere}` : ""}`,
    },
    {
      q: `What are Kaiteki ${b.name}'s opening hours?`,
      a: `${b.hours.join(". ")}. Hours can change on public holidays, so message us on WhatsApp to confirm before travelling.`,
    },
  ];
  if (b.parking) {
    items.push({
      q: `Is there parking at Kaiteki ${b.name}?`,
      a: `${b.parking} If you are unsure where to enter, message us on WhatsApp and we will send directions.`,
    });
  }
  if (b.serves?.length) {
    items.push({
      q: `Which areas does Kaiteki ${b.name} serve?`,
      a: `Kaiteki ${b.name} is convenient for ${b.serves.join(", ")}, and for anyone travelling within ${b.city}. Kaiteki has nine branches across Malaysia, so if another is closer to you we will say so.`,
    });
  }
  items.push({
    q: `How do I book an appointment at Kaiteki ${b.name}?`,
    a: `Booking is by WhatsApp on ${b.phone} or through the button on this page. Your first visit is a free consultation with a doctor rather than a treatment: the doctor assesses your skin and explains what is appropriate, and sometimes the honest answer is to wait or to do something else.`,
  });
  return items;
}

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
  const nearby = branches.filter((n) => n.region === b.region && n.slug !== b.slug);

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
            alt={`Kaiteki Skin Aesthetic Clinic ${b.name} — aesthetic clinic in ${b.city}, ${b.state}`}
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
                <Link href={`/doctors/${d.slug}`} className="font-medium hover:text-espresso">
                  {d.fullName}
                </Link>{" "}
                — <span className="ledger !text-ink-500">{d.credentials}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Treatments offered — the topical-relevance and internal-linking layer a
          NAP-only branch page has none of. Availability is stated as chain-wide
          rather than per-branch until the clinic supplies a per-branch service
          list; see the note below the grid. */}
      <section className="mt-14">
        <SectionHeading
          eyebrow="Treatments"
          title={
            <>
              What you can be treated for{" "}
              <span className="font-serif font-normal italic text-mocha">at {b.name}</span>
            </>
          }
          intro={`Kaiteki ${b.name} is a doctor-led clinic. Every plan starts with a consultation and an assessment, and the treatment is chosen from your concern rather than from a menu.`}
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {treatmentCategories.map((cat) => (
            <div key={cat} className="rounded-2xl border border-hairline bg-surface p-5">
              <h3 className="font-semibold text-espresso">{cat}</h3>
              <ul className="mt-3 space-y-1.5">
                {treatmentsByCategory(cat).map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={treatmentHref(t)}
                      className="text-sm text-ink-700 transition-colors hover:text-espresso"
                    >
                      {t.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-5 text-sm text-ink-500">
          Not every device is present at every branch. Message us and we&rsquo;ll confirm what is
          available at {b.name}, or point you to the nearest branch that has it.
        </p>
      </section>

      {/* Concern-first entry point — the same picker the /concerns hub uses,
          with the branch carried into the prefilled WhatsApp message. */}
      <section className="mt-14">
        <ConcernPicker branch={b.name} />
      </section>

      {/* Branch FAQ. Every answer is drawn from this branch's own data, so the
          nine pages differ rather than repeating one template — which is the
          actual local-SEO risk, not word count. No FAQPage JSON-LD, per the
          schema rule in lib/schema.ts. */}
      <section className="mt-14">
        <h2 className="text-xl font-bold text-espresso sm:text-2xl">
          Kaiteki {b.name} — common questions
        </h2>
        <div className="mt-5">
          <Faq items={branchFaqs(b)} />
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="mt-14">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">
            Other Kaiteki branches in {b.region}
          </h2>
          <ul className="flex flex-wrap gap-2">
            {nearby.map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/locations/${n.slug}`}
                  className="inline-flex rounded-full border border-hairline bg-surface px-4 py-2 text-sm text-ink-700 transition-colors hover:border-mocha hover:text-espresso"
                >
                  {n.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/locations"
                className="inline-flex rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-mocha"
              >
                All 9 branches
              </Link>
            </li>
          </ul>
        </section>
      )}
    </Container>
  );
}
