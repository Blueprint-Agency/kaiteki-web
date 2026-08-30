import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { LeadAnswer } from "@/components/LeadAnswer";
import { Ledger, ReviewByline } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { ConcernCard, TreatmentCard, TechnologyCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import {
  Section,
  Rows,
  Row,
  FactRail,
  RoutingModule,
  VariantModule,
  CtaMid,
  SuitabilityBlock,
  SessionBlock,
  StepsBlock,
  AfterSession,
  RisksBlock,
  CostFactors,
  ManufacturerImages,
  AreasBlock,
} from "@/components/treatment-blocks";
import { treatmentBySlug } from "@/content/data/treatments";
import { technologyOfTreatment, concernsOfTreatment } from "@/content/data/relations";
import { doctorBySlug, reviewerByline } from "@/content/data/doctors";
import { waForTreatment } from "@/lib/wa";
import { treatmentToc, headingAnchor } from "@/lib/treatment-toc";
import { TOC_MIN_HEADINGS } from "@/lib/toc";
import type { Treatment } from "@/lib/types";

/**
 * Treatment-page template v2 (docs/14).
 *
 * One sticky contents rail (`ArticleToc` at `variant="sidebar"`) runs beside the
 * *whole* scrollable body, so `Split`'s 21rem heading gutter is gone and every
 * block flows its heading inline. Media enters the reading column — Variant A
 * "Inline", chosen from the prototype on 2026-08-29.
 *
 * **2026-08 · aligned with the concern template.** A visitor moves between
 * `/concerns/[slug]` and `/treatments/[category]` constantly — they are the two
 * halves of one decision — and the two pages were furnished differently enough
 * to read as two sites. Four things changed, all of them adopting what
 * `ConcernView` already does:
 *
 *   · **no section backgrounds.** The tint device-comparison panel and the
 *     porcelain safety notice are gone; every section sits on page ground. The
 *     one surviving surface is the mid-page espresso CTA, which now bleeds full
 *     width here exactly as it does on a concern page;
 *   · **the reviewer byline** sits in its own band under the hero rather than
 *     stacked inside the hero's left column, and the page closes with the
 *     blog's `AuthorCard` above the review ledger;
 *   · **the closing CTA** is the concern page's centred block on page ground —
 *     no tint band, no generated motif beside it;
 *   · **no generated motifs anywhere.** They were decoration standing in for
 *     photography, which is the placeholder furniture `/concerns` refuses. A
 *     treatment with no media renders as clean text instead.
 */

const dmy = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/** T-19 — next review is always 12 months after the last one, so it's derived. */
function nextReview(iso: string) {
  const d = new Date(iso);
  d.setFullYear(d.getFullYear() + 1);
  return dmy(d.toISOString());
}

/** T-02 fallback for treatments whose fact strip has not been authored yet. */
function derivedFacts(t: Treatment) {
  const [sessionTime, downtime] = (t.durationDowntime ?? "").split("·").map((s) => s.trim());
  return [
    sessionTime && { value: sessionTime, label: "Typical session time" },
    t.typicalSessions && { value: t.typicalSessions, label: "Typical sessions" },
    downtime && { value: downtime, label: "Downtime" },
  ].filter(Boolean) as { value: string; label: string }[];
}

/* The chip row retired with the tail's concern list (2026-08). Every "browse
 * sideways" list on this page is now a card shelf; `AreasBlock` keeps its own
 * chips for treatment areas, which are labels rather than links. */

/**
 * The reading column, with the sticky contents rail beside it on wide screens.
 * One grid wraps the entire body — a sticky element only sticks while its own
 * parent is on screen, and the prototype's first pass proved what happens when
 * the rail owns only the top half. Below the heading threshold there is no rail
 * and no reserved gutter: an empty 15rem column is what this layout removes.
 */
function Reading({ rail, children }: { rail?: ReactNode; children: ReactNode }) {
  return (
    <Container>
      <div className={rail ? "lg:grid lg:grid-cols-[15rem_1fr] lg:items-start lg:gap-16" : ""}>
        {rail && <aside className="hidden lg:sticky lg:top-24 lg:block">{rail}</aside>}
        <div className="min-w-0">{children}</div>
      </div>
    </Container>
  );
}

/**
 * A band inside the reading column, as `ConcernView` renders one. Bands carry
 * their own full-width section and Container, so below lg — where there is no
 * rail and the column is the page — the wrapper cancels the column's gutter and
 * the band bleeds to the screen edge. From lg the band stops at the column,
 * leaving the contents rail an unbroken gutter all the way down.
 */
function Bleed({ children }: { children: ReactNode }) {
  return <div className="-mx-5 sm:-mx-6 lg:mx-0">{children}</div>;
}

/**
 * A photograph inside the reading column, at the width of the prose it belongs
 * to. The caption carries the meaning, so the image is `alt=""` — a screen
 * reader that heard both would hear the same thing twice.
 */
function Figure({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="max-w-[68ch] pb-4">
      <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-tint ring-1 ring-hairline">
        <Image
          src={src}
          alt=""
          fill
          loading="lazy"
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover object-left"
        />
      </div>
      <figcaption className="mt-3 text-[0.8125rem] leading-snug text-ink-500">{caption}</figcaption>
    </figure>
  );
}

export function TreatmentView({ t, trail }: { t: Treatment; trail: Crumb[] }) {
  const doctor = doctorBySlug(t.reviewedBy);
  const related = t.related.map((r) => treatmentBySlug(r)).filter(Boolean);
  const techItems = technologyOfTreatment(t.slug);
  const relatedConcerns = concernsOfTreatment(t.slug);
  const wa = waForTreatment(t.name);
  const reviewedDate = dmy(t.lastReviewed);
  const sections = t.sections ?? [];

  // The rail reads the same derived list Q-24 checks against the page's own
  // anchors, so a rail entry can never point at a section that is not rendered.
  const headings = treatmentToc(t, techItems.length > 0, relatedConcerns.length > 0);
  const rail =
    headings.length >= TOC_MIN_HEADINGS ? (
      <ArticleToc headings={headings} variant="sidebar" />
    ) : undefined;

  return (
    <article>
      {/* ── Fold. Asymmetric: the title claims the left two-thirds, the
          photograph is an arched object on the right rather than a banner
          strip above the text. ─────────────────────────────────────────── */}
      <header className="border-b border-hairline">
        <Container className="pt-8 pb-12 sm:pb-14">
          <Breadcrumbs items={trail} />
          <div
            className={`mt-8 grid gap-10 lg:gap-16 ${t.image ? "lg:grid-cols-[1fr_0.78fr] lg:items-center" : ""}`}
          >
            <div>
              <p className="kicker flex items-center gap-3">
                <span aria-hidden className="h-px w-7 flex-none bg-sand" />
                {t.category}
              </p>
              <h1 className="h-hero mt-5">{t.name}</h1>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-700">{t.summary}</p>
              {/* Ghost CTA, as the concern hero renders it: the visitor who
                  arrives already decided gets a route out without the page
                  opening as a sales page. First of the three permitted CTAs. */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <WhatsAppButton
                  href={wa}
                  variant="outline"
                  position="hero"
                  label="Ask if it suits your skin"
                />
                <p className="text-sm text-ink-500">Free consultation, no obligation.</p>
              </div>
            </div>
            {/* No frame without a photograph: all 19 treatments carry a hero
                today, and the day one does not, the headline takes the width
                rather than a generated motif taking the space. */}
            {t.image && (
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl rounded-t-[4rem] bg-tint ring-1 ring-hairline lg:aspect-[4/5]">
                <Image
                  src={t.image}
                  alt={`${t.name} treatment at Kaiteki Skin Aesthetic Clinic Malaysia`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </Container>

        {/* The reviewer byline in its own band under the hero — where a concern
            page puts it — rather than stacked under the hero CTA. */}
        {doctor && (
          <Container className="py-8 sm:py-10">
            <div className="max-w-sm">
              <ReviewByline
                doctorName={doctor.fullName}
                mmc={doctor.mmc}
                date={reviewedDate}
                photo={doctor.photo}
                href={`/doctors/${doctor.slug}`}
              />
            </div>
          </Container>
        )}
      </header>

      {/* T-02 — authored process facts, else the derived session/downtime tags. */}
      <FactRail facts={t.facts ?? derivedFacts(t)} />

      {/* T-01 · The answer-first capsule, identical across the site so it stays
          recognisable and extractable. */}
      <Container className="py-12 sm:py-14">
        <div className="mx-auto max-w-[68ch]">
          <LeadAnswer>{t.leadAnswer}</LeadAnswer>
        </div>
      </Container>

      <Reading rail={rail}>
        {rail && (
          <div className="pt-4 lg:hidden">
            <ArticleToc headings={headings} />
          </div>
        )}

        {/* T-04 · T-05 — the reading spine. Prose holds a 68ch measure; anchor
            ids derive from the heading so any section is addressable without a
            second data field. Figures land one per two sections (Variant A),
            which is why a treatment must not author more than
            floor(sections / 2) of them — the surplus would be dropped (Q-23). */}
        {sections.map((s, i) => {
          const figure = i % 2 === 1 ? t.figures?.[Math.floor(i / 2)] : undefined;
          return (
            <Section key={s.heading} id={headingAnchor(s.heading)}>
              <h2 className="h-section">{s.heading}</h2>
              <div className="prose mt-6 max-w-[68ch] space-y-5 leading-[1.75] text-ink-700">
                {s.body.map((p, j) => (
                  <p key={j} className={j === 0 ? "text-lg text-ink-900" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
              {s.list && (
                <ul className="mt-6 max-w-[68ch] divide-y divide-hairline border-y border-hairline">
                  {s.list.map((li) => (
                    <li key={li} className="py-3.5 leading-relaxed text-ink-700">
                      {li}
                    </li>
                  ))}
                </ul>
              )}
              {figure && (
                <div className="mt-10">
                  <Figure src={figure.src} caption={figure.caption} />
                </div>
              )}
            </Section>
          );
        })}
        {sections.length === 0 && (
          <Section>
            <p className="prose max-w-[68ch] text-lg leading-relaxed text-ink-700">
              {t.summary} A full, doctor-reviewed guide to {t.name} is being finalised. Our doctors
              can explain whether it is suitable for you at a free consultation.
            </p>
          </Section>
        )}

        {/* T-06 — falls back to a plain chip row until routing cards are authored. */}
        {t.routes ? (
          <RoutingModule
            title={`What ${t.name} is used for at Kaiteki`}
            routes={t.routes}
            note={t.routesNote}
          />
        ) : (
          relatedConcerns.length > 0 && (
            /* Photo cards, not chips. This is the block that routes a visitor
               who arrived on a device name to the page that actually answers
               their question, and two bare pills gave it none of that weight —
               the same shelf the devices section below it uses. `routes`, where
               a treatment authors one, is still the better version of this
               block, because it explains *why* each concern is on the list. */
            <Section id="concerns-addressed">
              <h2 className="h-section">Concerns this treatment addresses</h2>
              <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-700">
                Each of these pages covers what the concern is and every option considered for
                it, not only {t.name}.
              </p>
              <CardRow className="mt-10">
                {relatedConcerns.map((concern) => (
                  <ConcernCard key={concern.slug} c={concern} />
                ))}
              </CardRow>
            </Section>
          )
        )}

        {/* T-07 — the device comparison, on page ground like every section. */}
        <VariantModule m={t.variantModule} />

        {/* T-08 — the one surfaced band on the page: the conversion moment,
            placed where the visitor has just read the device comparison and
            cannot pick between the options alone. Same espresso bleed the
            concern page uses. */}
        <Bleed>
          <CtaMid cta={t.ctaMid} href={wa} />
        </Bleed>

        {/* T-09 */}
        <SuitabilityBlock t={t} />

        {/* T-10 */}
        <SessionBlock t={t} />

        {/* The illustrated procedure sequence, where one is authored. */}
        <StepsBlock steps={t.steps} />

        {/* T-11 */}
        <AfterSession a={t.afterSession} />

        {/* T-12 — the safety notice, on page ground. */}
        <RisksBlock r={t.risks} name={t.name} />

        {/* T-13 */}
        <CostFactors c={t.costFactors} href={wa} />

        {/* T-14 */}
        <ManufacturerImages images={t.manufacturerImages} />

        {/* T-15 — chips, or die-cut zone photographs where they are authored. */}
        <AreasBlock t={t} />

        {t.comparisons && t.comparisons.length > 0 && (
          <Section id="comparisons">
            <h2 className="h-section">{t.name} vs other options</h2>
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-espresso/25">
                    {["Treatment", "Best for", "Downtime"].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="pb-3 pr-6 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  {t.comparisons.map((row) => (
                    <tr key={row.name}>
                      <td className="py-4 pr-6 font-medium text-espresso">{row.name}</td>
                      <td className="py-4 pr-6 text-[0.9375rem] text-ink-700">{row.bestFor}</td>
                      <td className="py-4 text-[0.9375rem] text-ink-700">{row.downtime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        )}

        {(t.preCare?.length || t.postCare?.length) && (
          <Section id="care">
            <h2 className="h-section">Pre and post treatment care</h2>
            <Rows className="mt-8">
              {t.preCare && t.preCare.length > 0 && (
                <Row title="Before treatment">
                  <ul className="space-y-2">
                    {t.preCare.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                </Row>
              )}
              {t.postCare && t.postCare.length > 0 && (
                <Row title="After treatment">
                  <ul className="space-y-2">
                    {t.postCare.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                </Row>
              )}
            </Rows>
          </Section>
        )}

        {/* Technology used — the authored technology→treatment edge, read back
            through relations.ts. Uncapped: every device/injectable that powers
            this treatment gets a card and an internal link. */}
        {techItems.length > 0 && (
          <Section id="devices">
            <h2 className="h-section">Devices used at Kaiteki</h2>
            <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-700">
              Which platform is used depends on your individual assessment.
            </p>
            <CardRow className="mt-10">
              {techItems.map((x) => (
                <TechnologyCard key={x.slug} x={x} showUsedIn={false} />
              ))}
            </CardRow>
          </Section>
        )}

        {/* T-16 — native <details>, answers always in the DOM. */}
        {t.faqs && (
          <Section id="faq">
            <h2 className="h-section">Common questions</h2>
            <div className="mt-8 max-w-[68ch]">
              <Faq items={t.faqs} />
            </div>
          </Section>
        )}

        {/* T-17 — photo cards, matching `concerns-addressed` above and the
            device shelf between them, so the page's three "go here next"
            blocks are one shape rather than three. Each card carries the
            authored reason for the link where there is one, framed around what
            THIS treatment does not do; without one it falls back to the
            treatment's own summary, which still beats a bare name. */}
        {related.length > 0 && (
          <Section>
            <h2 className="h-section">Where to go next</h2>
            <CardRow className="mt-10">
              {related.map((r) => (
                <TreatmentCard key={r!.slug} t={r!} reason={t.relatedReasons?.[r!.slug]} />
              ))}
            </CardRow>
            {/* Treatments only. The concern chips that used to sit under this
                row are gone: a `routes` page already routes to its concerns in
                prose, with a reason per group, and every other page renders
                them as cards further up. A pill row repeating either was a
                third presentation of a list the page had already made. */}
            <Link
              href="/treatments"
              className="mt-9 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
            >
              Back to all treatments
            </Link>
          </Section>
        )}
      </Reading>

      {/* T-18 — the closing CTA, on page ground: the one surfaced band is spent
          on the mid-page CTA. Centred, as the concern page closes. */}
      <Container className="border-t border-hairline py-14 sm:py-20">
        <div className="mx-auto max-w-[62ch] text-center">
          <h2 className="h-section mx-auto max-w-[18ch]">Book a free consultation</h2>
          <p className="mx-auto mt-5 max-w-[52ch] leading-relaxed text-ink-700">
            The consultation is free, takes about 20 to 30 minutes, and there is no obligation to
            book treatment afterwards. A doctor will examine your skin and tell you whether{" "}
            {t.name} is appropriate, and if it isn&rsquo;t, what would be.
          </p>
          <WhatsAppButton
            href={wa}
            size="lg"
            position="bottom"
            label="Ask about this treatment"
            className="mt-8"
          />
        </div>
      </Container>

      {/* T-19 — the reviewer as the blog and the concern page render one: a
          named, MMC-registered doctor with a photo and a link to the profile
          (docs/02 §5), above the ledger's review dates. */}
      {doctor && (
        <Container className="py-12 sm:py-14">
          <div className="max-w-[62ch] space-y-8">
            <AuthorCard doctor={doctor} label="Medically reviewed by" />
            <Ledger
              rows={[
                { label: "Reviewed by", value: reviewerByline(doctor) },
                { label: "Last reviewed", value: reviewedDate },
                { label: "Next review due", value: nextReview(t.lastReviewed) },
              ]}
            />
          </div>
        </Container>
      )}
    </article>
  );
}
