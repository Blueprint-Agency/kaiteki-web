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
import { GoogleReviews } from "@/components/GoogleReviews";
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
    <>
      <Container className="py-10 sm:py-12">
      <JsonLd data={medicalClinicNode(b)} />
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: b.name }]} />

      {/* Intro + storefront, vertically centred so neither column orphans whitespace. */}
      <div className="mt-8 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-sm font-medium text-accent">{b.region}</p>
          <h1 className="h-hero mt-2">Kaiteki {b.name}</h1>
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
          <h2 className="h-sub mb-4">
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

      {/* Concern-first entry point, placed ahead of the treatment index: a
          visitor who knows their concern but not the treatment can convert
          without reading the list. Same picker the /concerns hub uses, with the
          branch carried into the prefilled WhatsApp message. Rendered as a warm
          band rather than a bordered card so the page stops reading as one box
          after another. */}
      <div className="mt-16 sm:mt-20">
        <ConcernPicker
          branch={b.name}
          className="-mx-5 rounded-none border-x-0 bg-tint px-5 sm:mx-0 sm:rounded-2xl sm:border-x sm:px-8"
        />
      </div>

      {/* Treatments offered — the topical-relevance and internal-linking layer a
          NAP-only branch page has none of. Availability is stated as chain-wide
          rather than per-branch until the clinic supplies a per-branch service
          list; see the note below the index. */}
      <section className="mt-16 sm:mt-20">
        <SectionHeading
          title={`Treatments at Kaiteki ${b.name}`}
          intro="Every plan starts with a doctor's assessment, so the treatment follows your concern rather than a menu."
        />
        {/* An index, not a card grid: rows size to their own content, so a
            single-treatment category costs one line instead of a box padded
            out to match a four-item neighbour. Hairlines do the separating
            (DESIGN.md "hairline-first"). */}
        <dl className="mt-10 border-t border-hairline">
          {treatmentCategories.map((cat) => (
            <div
              key={cat}
              className="grid gap-x-10 gap-y-1 border-b border-hairline py-5 sm:grid-cols-[minmax(0,12rem)_1fr] sm:py-6"
            >
              <dt className="h-sub">{cat}</dt>
              {/* Negative y-margin cancels the links' touch-target padding so the
                  first link's text aligns to the label's cap line instead of
                  sitting ~8px below it; the row's own py keeps the rhythm. */}
              <dd className="-my-1.5 flex flex-wrap gap-x-6">
                {treatmentsByCategory(cat).map((t) => (
                  <Link
                    key={t.slug}
                    href={treatmentHref(t)}
                    className="py-1.5 text-[0.9375rem] text-ink-700 underline-offset-4 transition-colors hover:text-espresso hover:underline"
                  >
                    {t.name}
                  </Link>
                ))}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 max-w-[62ch] text-sm leading-relaxed text-ink-500">
          Not every device is present at every branch. Message us and we&rsquo;ll confirm what is
          available at {b.name}, or point you to the nearest branch that has it.
        </p>
      </section>

      {/* Branch FAQ. Every answer is drawn from this branch's own data, so the
          nine pages differ rather than repeating one template — which is the
          actual local-SEO risk, not word count. No FAQPage JSON-LD, per the
          schema rule in lib/schema.ts. */}
      <section className="mt-14">
        <h2 className="h-section">
          Kaiteki {b.name} — common questions
        </h2>
        <div className="mt-5">
          <Faq items={branchFaqs(b)} />
        </div>
      </section>

      {nearby.length > 0 && (
        <section className="mt-14">
          <h2 className="h-sub mb-4">
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

      {/* Full-bleed band, so it sits outside the page Container rather than
          nesting a second one. See the compliance note in GoogleReviews.tsx. */}
      <GoogleReviews branch={b} className="bg-tint" />
    </>
  );
}
