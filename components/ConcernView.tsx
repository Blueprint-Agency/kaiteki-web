import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadAnswer } from "@/components/LeadAnswer";
import { Ledger, ReviewByline } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import {
  Block,
  Split,
  CLEAR_CHROME,
  FactRail,
  JumpNav,
  CtaMid,
  ManufacturerImages,
  LocationsBlock,
} from "@/components/treatment-blocks";
import {
  DriversBlock,
  VariantBlock,
  LocationBlock,
  SeeDoctorBlock,
  TreatmentsBlock,
  CompareBlock,
  FirstVisitBlock,
  ConcernRisksBlock,
  ConcernCostBlock,
  RelatedConcernsBlock,
} from "@/components/concern-blocks";
import { concernBySlug } from "@/content/data/concerns";
import { technologyOfConcern, treatmentsOfConcern } from "@/content/data/relations";
import { doctorBySlug, reviewerByline } from "@/content/data/doctors";
import { waForConcern } from "@/lib/wa";
import { site } from "@/lib/site";
import type { Concern } from "@/lib/types";

/**
 * Concern-page template v1 — the 18-block spine (config/concerns.json).
 *
 * The order never changes and there is no `if (archetype === …)` anywhere: a
 * block renders when its data exists and returns null when it does not, so
 * "lite depth omits block 10" is satisfied by `compare` being absent from the
 * data rather than by a branch here. `archetype` and `depth` are injected into
 * each concern from config/concerns.json (content/data/concerns.ts) and are
 * read here only for the schema and the QA-visible ledger.
 */

const dmy = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/** Rule R-08 — the next review is always 12 months on, so it is derived. */
function nextReview(iso: string) {
  const d = new Date(iso);
  d.setFullYear(d.getFullYear() + 1);
  return dmy(d.toISOString());
}

const slugifyHeading = (h: string) =>
  h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function ConcernView({ c }: { c: Concern }) {
  const doctor = doctorBySlug(c.reviewedBy);
  const options = treatmentsOfConcern(c.slug);
  const techItems = technologyOfConcern(c.slug);
  const wa = waForConcern(c.name);
  const reviewedDate = dmy(c.lastReviewed);

  const related = (c.relatedConcerns ?? [])
    .map((r) => {
      const target = concernBySlug(r.slug);
      return target ? { slug: r.slug, name: target.name, reason: r.reason } : null;
    })
    .filter((r): r is { slug: string; name: string; reason: string } => Boolean(r));

  return (
    <article>
      {/* ── 01 · Hero, in-brief and medical reviewer. The ghost CTA catches the
          visitor who arrives already decided, without opening a medical page
          as a sales page — it is the first of the three permitted CTAs. ──── */}
      <header>
        <Container className="pt-8 pb-14 sm:pb-16">
          <Breadcrumbs items={[{ label: "Concerns", href: "/concerns" }, { label: c.name }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:gap-16">
            <div>
              <p className="kicker flex items-center gap-3">
                <span aria-hidden className="h-px w-7 flex-none bg-sand" />
                Concern · {c.group}
              </p>
              <h1 className="h-hero mt-5">{c.name}</h1>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-700">{c.summary}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <WhatsAppButton
                  href={wa}
                  variant="outline"
                  position="hero"
                  label="Book a free consultation"
                />
                <p className="text-sm text-ink-500">
                  Free, about 20–30 minutes, no obligation to book treatment.
                </p>
              </div>
              {doctor && (
                <div className="mt-8 max-w-sm">
                  <ReviewByline
                    doctorName={doctor.fullName}
                    mmc={doctor.mmc}
                    date={reviewedDate}
                    photo={doctor.photo}
                    href={`/doctors/${doctor.slug}`}
                  />
                </div>
              )}
            </div>
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl rounded-t-[4rem] bg-tint ring-1 ring-hairline lg:aspect-[4/5]">
              <Image
                src={c.image}
                alt={`${c.name} — assessed and treated at Kaiteki Skin Aesthetic Clinic Malaysia`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </header>

      {/* 02 — three neutral process facts, never a time to a result (R-01). */}
      <FactRail facts={c.facts} />

      {/* The answer-first capsule, identical across the site so it stays
          recognisable and extractable by an assistant. */}
      <Container className="py-12 sm:py-14">
        <div className="mx-auto max-w-[68ch]">
          <LeadAnswer>{c.leadAnswer}</LeadAnswer>
        </div>
      </Container>

      {/* 02b */}
      <JumpNav items={c.jumpNav} />

      {/* 03 · What is X — the reading spine. Anchor ids derive from the heading
          so any section is addressable from the jump nav without a second field. */}
      <Block>
        <div className="mx-auto max-w-[68ch] space-y-14">
          {c.sections?.map((s) => (
            <section key={s.heading} id={slugifyHeading(s.heading)} className={CLEAR_CHROME}>
              <h2 className="h-section">{s.heading}</h2>
              <div className="prose mt-6 space-y-5 leading-[1.75] text-ink-700">
                {s.body.map((p, i) => (
                  <p key={i} className={i === 0 ? "text-lg text-ink-900" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
              {s.list && (
                <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                  {s.list.map((li) => (
                    <li key={li} className="py-3.5 leading-relaxed text-ink-700">
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          )) ?? (
            <p className="prose text-lg leading-relaxed text-ink-700">
              {c.summary} A full, doctor-reviewed guide to {c.name.toLowerCase()} is being
              finalised. Our doctors can talk you through the options at a free consultation.
            </p>
          )}
        </div>
      </Block>

      {/* 04 · 05 · 06 — the three archetype-variant blocks. */}
      <DriversBlock d={c.drivers} />
      <VariantBlock v={c.variant} />
      <LocationBlock l={c.locationBlock} />

      {/* 07 */}
      <SeeDoctorBlock s={c.seeDoctor} />

      {/* 08 — the primary CTA, placed where the visitor has a question they
          cannot answer alone. */}
      <CtaMid cta={c.ctaMid} href={wa} position="mid" />

      {/* 09 · 10 */}
      <TreatmentsBlock c={c} options={options} />
      <CompareBlock c={c.compare} />

      {/* 11 — manufacturer imagery only, labelled in four places (R-07). */}
      <ManufacturerImages images={c.manufacturerImages} />

      {/* 12 · 13 · 14 */}
      <FirstVisitBlock f={c.firstVisit} />
      <ConcernRisksBlock r={c.risks} />
      <ConcernCostBlock c={c.costFactors} href={wa} />

      {/* 15 — the lead sentence is the point: a bare logo wall says nothing,
          "the device is matched to you" is a reason to choose Kaiteki. */}
      {techItems.length > 0 && (
        <Block id="technology" tone="tint">
          <Split aside={<h2 className="h-section">Technology used</h2>}>
            <p className="max-w-[62ch] leading-relaxed text-ink-700">
              {c.technologyIntro ??
                "Having more than one platform means the doctor can match the device to your skin type and to what is being treated, rather than fitting your skin to a single machine."}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {techItems.map((x) => (
                <li key={x.slug}>
                  <Link
                    href={`/technology/${x.slug}`}
                    className="inline-flex rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-sm text-ink-700 transition-colors hover:border-mocha hover:text-espresso"
                  >
                    {x.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Split>
        </Block>
      )}

      {/* 16 — native <details>, answers always in the DOM (R-10). */}
      {c.faqs && c.faqs.length > 0 && (
        <Block id="faq">
          <Split aside={<h2 className="h-section">Common questions</h2>}>
            <Faq items={c.faqs} />
          </Split>
        </Block>
      )}

      {/* 17 */}
      <RelatedConcernsBlock items={related} />

      {/* 18 — bottom CTA. Heading and body are per-concern strings (spec bugs
          B-03/B-04): "what's causing it" is nonsense on a tattoo, and "your
          skin" is wrong for a scalp or a palm. */}
      <Block tone="tint">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="h-section max-w-[18ch]">
              {c.ctaHeading ?? "Have a doctor look at it"}
            </h2>
            <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-700">
              The consultation is free, takes about 20–30 minutes, and there is no obligation to
              book treatment afterwards. A doctor will examine {c.ctaAssesses ?? "your skin"} and
              talk you through what is, and is not, worth doing.
            </p>
            <WhatsAppButton
              href={wa}
              size="lg"
              position="bottom"
              label="Book a free consultation"
              className="mt-8"
            />
            {/* All 9 branches, every one an internal link — never "+6 more" (R-12). */}
            <LocationsBlock />
          </div>
        </div>
      </Block>

      {/* 18 · ledger — reviewer, review date, derived next-review date (R-08). */}
      <Container className="py-12 sm:py-14">
        <div className="max-w-[62ch] space-y-8">
          <Ledger
            rows={[
              { label: "Reviewed by", value: reviewerByline(doctor) },
              { label: "Last reviewed", value: reviewedDate },
              { label: "Next review due", value: nextReview(c.lastReviewed) },
              { label: "Advertisement ref", value: site.kkliu },
            ]}
          />
          <Disclaimer />
        </div>
      </Container>
    </article>
  );
}
