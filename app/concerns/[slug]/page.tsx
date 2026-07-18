import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { LeadAnswer } from "@/components/LeadAnswer";
import { ReviewByline, Ledger } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { TreatmentCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { concerns, concernBySlug } from "@/content/data/concerns";
import { treatmentBySlug } from "@/content/data/treatments";
import { technologyOfConcern } from "@/content/data/relations";
import { doctorBySlug } from "@/content/data/doctors";
import { waForConcern } from "@/lib/wa";
import { medicalWebPageNode } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return concerns.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = concernBySlug(slug);
  if (!c) return {};
  return pageMeta({
    title: c.seoTitle ?? c.name,
    description: c.seoDescription ?? c.summary,
    path: `/concerns/${c.slug}`,
    image: c.image,
  });
}

export default async function ConcernPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = concernBySlug(slug);
  if (!c) notFound();

  const doctor = doctorBySlug(c.reviewedBy);
  const options = c.treatments.map((s) => treatmentBySlug(s)).filter(Boolean);
  const techItems = technologyOfConcern(c.slug);
  const reviewedDate = new Date(c.lastReviewed).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Container className="py-10 sm:py-12">
      <JsonLd
        data={medicalWebPageNode({
          path: `/concerns/${c.slug}`,
          name: c.seoTitle ?? c.name,
          description: c.seoDescription ?? c.summary,
          about: { type: "MedicalCondition", name: c.name },
          lastReviewed: c.lastReviewed,
          reviewer: doctor
            ? { name: doctor.fullName, slug: doctor.slug, credentials: doctor.credentials }
            : undefined,
        })}
      />
      <Breadcrumbs items={[{ label: "Concerns", href: "/concerns" }, { label: c.name }]} />

      <div className="mt-8 max-w-3xl">
        <p className="text-sm font-medium text-accent">Concern · {c.group}</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-espresso sm:text-5xl">
          {c.name}
        </h1>
        <div className="mt-6">
          <LeadAnswer>{c.leadAnswer}</LeadAnswer>
        </div>
        {doctor && (
          <div className="mt-6 max-w-md">
            <ReviewByline doctorName={doctor.fullName} mmc={doctor.mmc} date={reviewedDate} />
          </div>
        )}
      </div>

      <div className="mt-12 max-w-[68ch]">
        {c.sections ? (
          <div className="space-y-10">
            {c.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-xl font-bold text-espresso sm:text-2xl">{s.heading}</h2>
                <div className="prose mt-3 space-y-4 leading-relaxed text-ink-700">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
                {s.list && (
                  <ul className="mt-4 space-y-2">
                    {s.list.map((li) => (
                      <li key={li} className="flex gap-3 text-ink-700">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-mocha" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        ) : (
          <p className="prose leading-relaxed text-ink-700">
            {c.summary} A full, doctor-reviewed guide to {c.name.toLowerCase()} is being
            finalised for the new site. The options below may be considered depending on
            your individual assessment.
          </p>
        )}
      </div>

      {/* Treatment options — the hub role (docs/04 §6.1) */}
      {options.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-espresso sm:text-2xl">
            Treatment options at Kaiteki
          </h2>
          <p className="mt-2 max-w-[65ch] text-ink-700">
            These treatments may be considered for {c.name.toLowerCase()}-related concerns.
            Suitability is always assessed individually.
          </p>
          <CardRow className="mt-6">
            {options.map((t) => (
              <TreatmentCard key={t!.slug} t={t!} />
            ))}
          </CardRow>
        </section>
      )}

      {/* Technology used — derived from the concern's treatments */}
      {techItems.length > 0 && (
        <section className="mt-14">
          <h2 className="text-xl font-bold text-espresso sm:text-2xl">Technology used</h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {techItems.map((x) => (
              <li key={x.slug}>
                <Link href={`/technology/${x.slug}`} className="inline-flex items-center rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-mocha">
                  {x.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {c.faqs && (
        <section className="mt-14 max-w-[68ch]">
          <h2 className="mb-4 text-xl font-bold text-espresso sm:text-2xl">
            Frequently asked questions
          </h2>
          <Faq items={c.faqs} />
        </section>
      )}

      {/* Soft CTA */}
      <section className="mt-14 rounded-2xl border border-hairline bg-tint p-6 sm:p-8">
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-bold text-espresso">Not sure what&rsquo;s causing it?</h2>
            <p className="mt-1 max-w-md text-ink-700">
              Message us on WhatsApp for a free consultation — a doctor can assess your skin
              and talk you through the options.
            </p>
          </div>
          <WhatsAppButton href={waForConcern(c.name)} size="lg" label="Book a free consultation" />
        </div>
      </section>

      <div className="mt-12 max-w-[68ch] space-y-6">
        <Ledger
          rows={[
            { label: "Reviewed by", value: doctor ? `${doctor.fullName}, ${doctor.mmc}` : "—" },
            { label: "Last reviewed", value: reviewedDate },
          ]}
        />
        <Disclaimer />
      </div>
    </Container>
  );
}
