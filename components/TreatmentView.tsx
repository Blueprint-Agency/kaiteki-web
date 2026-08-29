import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { LeadAnswer } from "@/components/LeadAnswer";
import { Ledger, ReviewByline } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { TreatmentMotif, TechnologyCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { ArrowRight } from "@/components/icons";
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
  LocationsBlock,
} from "@/components/treatment-blocks";
import { treatmentBySlug, treatmentHref } from "@/content/data/treatments";
import { technologyOfTreatment, concernsOfTreatment } from "@/content/data/relations";
import { doctorBySlug, reviewerByline } from "@/content/data/doctors";
import { waForTreatment } from "@/lib/wa";
import { treatmentToc, headingAnchor } from "@/lib/treatment-toc";
import { TOC_MIN_HEADINGS } from "@/lib/toc";
import type { Treatment } from "@/lib/types";

/**
 * Treatment-page template v2 (docs/14).
 *
 * The 2026-07 editorial spine is unchanged — same hero, same block order, same
 * three meanings for the three tone surfaces. What docs/14 changed is the frame:
 * one sticky contents rail (`ArticleToc` at `variant="sidebar"`) runs beside the
 * *whole* scrollable body, so `Split`'s 21rem heading gutter is gone and every
 * block flows its heading inline. Media enters the reading column — Variant A
 * "Inline", chosen from the prototype on 2026-08-29.
 *
 * A treatment with no media renders the same page as clean text: there is no
 * placeholder furniture advertising what is missing.
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

/** Chip row — the one shape used for every "browse sideways" list on the page. */
function ChipList({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <ul className={`flex flex-wrap gap-2 ${className}`}>{children}</ul>;
}

const chip =
  "inline-flex rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-sm text-ink-700 transition-colors hover:border-mocha hover:text-espresso";

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
      <header>
        <Container className="pt-8 pb-14 sm:pb-16">
          <Breadcrumbs items={trail} />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.78fr] lg:items-center lg:gap-16">
            <div>
              <p className="kicker flex items-center gap-3">
                <span aria-hidden className="h-px w-7 flex-none bg-sand" />
                {t.category}
              </p>
              <h1 className="h-hero mt-5">{t.name}</h1>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-700">{t.summary}</p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <WhatsAppButton
                  href={wa}
                  variant="outline"
                  position="hero"
                  label="Ask if it suits your skin"
                />
                <p className="text-sm text-ink-500">Free consultation, no obligation.</p>
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
              {t.image ? (
                <Image
                  src={t.image}
                  alt={`${t.name} treatment at Kaiteki Skin Aesthetic Clinic Malaysia`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              ) : (
                <TreatmentMotif t={t} seed="hero" className="size-full" />
              )}
            </div>
          </div>
        </Container>
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
            <Section id="concerns-addressed">
              <h2 className="h-section">Concerns this treatment addresses</h2>
              <ChipList className="mt-8">
                {relatedConcerns.map((concern) => (
                  <li key={concern.slug}>
                    <Link href={`/concerns/${concern.slug}`} className={chip}>
                      {concern.name}
                    </Link>
                  </li>
                ))}
              </ChipList>
            </Section>
          )
        )}

        {/* T-07 — surface 1 of 3, tint: the device comparison. */}
        <VariantModule t={t} m={t.variantModule} />

        {/* T-08 — surface 2 of 3, espresso: the conversion moment. */}
        <CtaMid cta={t.ctaMid} href={wa} variant="panel" />

        {/* T-09 */}
        <SuitabilityBlock t={t} />

        {/* T-10 */}
        <SessionBlock t={t} />

        {/* The illustrated procedure sequence, where one is authored. */}
        <StepsBlock steps={t.steps} />

        {/* T-11 */}
        <AfterSession a={t.afterSession} />

        {/* T-12 — surface 3 of 3, porcelain: the safety notice. */}
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

        {/* T-17 — each related treatment carries a one-line reason, framed
            around what THIS treatment does not do, so the link is useful
            rather than decorative. */}
        {(related.length > 0 || relatedConcerns.length > 0) && (
          <Section>
            <h2 className="h-section">Where to go next</h2>
            {related.length > 0 && (
              <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
                {related.map((r) => (
                  <li key={r!.slug} className="py-5">
                    <Link
                      href={treatmentHref(r!)}
                      className="group inline-flex items-center gap-1.5 font-display text-lg font-medium text-espresso decoration-mocha/50 underline-offset-4 hover:underline"
                    >
                      {r!.name}
                      <ArrowRight
                        size={15}
                        className="text-accent transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                    {t.relatedReasons?.[r!.slug] && (
                      <p className="mt-1.5 max-w-[58ch] leading-relaxed text-ink-700">
                        {t.relatedReasons[r!.slug]}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            )}
            {relatedConcerns.length > 0 && (
              <>
                <h3 className="mt-9 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
                  Related concerns
                </h3>
                <ChipList className="mt-4">
                  {relatedConcerns.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/concerns/${c.slug}`} className={chip}>
                        {c.name}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/treatments" className={`${chip} font-medium text-accent`}>
                      All treatments
                    </Link>
                  </li>
                </ChipList>
              </>
            )}
          </Section>
        )}
      </Reading>

      {/* T-18 — the closing CTA. Past the reading column, so it keeps the tint
          bleed it has always had: the rail has ended and there is nothing left
          for a full-width band to float over. */}
      <section className="border-y border-hairline bg-tint py-14 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:gap-16">
            <div>
              <h2 className="h-section max-w-[16ch]">Book a free consultation</h2>
              <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-700">
                A doctor will examine your skin and tell you whether {t.name} is appropriate, and
                if it isn&rsquo;t, what would be. No obligation.
              </p>
              <WhatsAppButton
                href={wa}
                size="lg"
                position="bottom"
                label="Ask about this treatment"
                className="mt-8"
              />
              <LocationsBlock availableAt={t.availableAt} />
            </div>
            <TreatmentMotif
              t={t}
              seed="consult"
              className="hidden aspect-[4/3] rounded-2xl rounded-t-[3rem] ring-1 ring-hairline lg:block"
            />
          </div>
        </Container>
      </section>

      {/* T-19 */}
      <Container className="py-12 sm:py-14">
        <div className="max-w-[62ch] space-y-8">
          <Ledger
            rows={[
              { label: "Reviewed by", value: reviewerByline(doctor) },
              { label: "Last reviewed", value: reviewedDate },
              { label: "Next review due", value: nextReview(t.lastReviewed) },
            ]}
          />
          <Disclaimer />
        </div>
      </Container>
    </article>
  );
}
