import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { LeadAnswer } from "@/components/LeadAnswer";
import { Ledger, ReviewByline } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { TreatmentMotif, TechnologyCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { ArrowRight } from "@/components/icons";
import {
  Block,
  Split,
  Rows,
  Row,
  CLEAR_CHROME,
  FactRail,
  JumpNav,
  RoutingModule,
  VariantModule,
  CtaMid,
  SuitabilityBlock,
  SessionBlock,
  AfterSession,
  RisksBlock,
  CostFactors,
  ManufacturerImages,
  LocationsBlock,
} from "@/components/treatment-blocks";
import { treatmentBySlug, treatmentHref } from "@/content/data/treatments";
import { technologyOfTreatment, concernsOfTreatment } from "@/content/data/relations";
import { doctorBySlug, reviewerByline } from "@/content/data/doctors";
import { waForTreatment } from "@/lib/wa";
import type { Treatment } from "@/lib/types";

const dmy = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/** Stable anchor id for a section heading, so T-03 can target it. */
const slugifyHeading = (h: string) =>
  h
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

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
function ChipList({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <ul className={`flex flex-wrap gap-2 ${className}`}>{children}</ul>;
}

const chip =
  "inline-flex rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-sm text-ink-700 transition-colors hover:border-mocha hover:text-espresso";

export function TreatmentView({ t, trail }: { t: Treatment; trail: Crumb[] }) {
  const doctor = doctorBySlug(t.reviewedBy);
  const related = t.related.map((r) => treatmentBySlug(r)).filter(Boolean);
  const techItems = technologyOfTreatment(t.slug);
  const relatedConcerns = concernsOfTreatment(t.slug);
  const wa = waForTreatment(t.name);
  const reviewedDate = dmy(t.lastReviewed);

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

      {/* T-03 */}
      <JumpNav items={t.jumpNav} />

      {/* T-04 · T-05 — the reading spine. Prose holds a 68ch measure and sits
          on the page ground; anchor ids derive from the heading so any section
          is addressable from the jump nav without a second data field. */}
      <Block>
        <div className="mx-auto max-w-[68ch] space-y-14">
          {t.sections?.map((s) => (
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
              {t.summary} A full, doctor-reviewed guide to {t.name} is being finalised. Our doctors
              can explain whether it is suitable for you at a free consultation.
            </p>
          )}
        </div>
      </Block>

      {/* T-06 — falls back to a plain chip row until routing cards are authored. */}
      {t.routes ? (
        <RoutingModule
          title={`What ${t.name} is used for at Kaiteki`}
          routes={t.routes}
          note={t.routesNote}
        />
      ) : (
        relatedConcerns.length > 0 && (
          <Block>
            <Split aside={<h2 className="h-section">Concerns this treatment addresses</h2>}>
              <ChipList>
                {relatedConcerns.map((concern) => (
                  <li key={concern.slug}>
                    <Link href={`/concerns/${concern.slug}`} className={chip}>
                      {concern.name}
                    </Link>
                  </li>
                ))}
              </ChipList>
            </Split>
          </Block>
        )
      )}

      {/* T-07 */}
      <VariantModule t={t} m={t.variantModule} />

      {/* T-08 */}
      <CtaMid cta={t.ctaMid} href={wa} />

      {/* T-09 */}
      <SuitabilityBlock t={t} />

      {/* T-10 */}
      <SessionBlock t={t} />

      {/* T-11 */}
      <AfterSession a={t.afterSession} />

      {/* T-12 */}
      <RisksBlock r={t.risks} name={t.name} />

      {/* T-13 */}
      <CostFactors c={t.costFactors} href={wa} />

      {/* T-14 */}
      <ManufacturerImages images={t.manufacturerImages} />

      {t.areas && t.areas.length > 0 && (
        <Block>
          <Split aside={<h2 className="h-section">Treatment areas</h2>}>
            <ChipList>
              {t.areas.map((area) => (
                <li
                  key={area}
                  className="inline-flex rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-sm text-ink-700"
                >
                  {area}
                </li>
              ))}
            </ChipList>
          </Split>
        </Block>
      )}

      {t.comparisons && t.comparisons.length > 0 && (
        <Block>
          <Split aside={<h2 className="h-section">{t.name} vs other options</h2>}>
            <div className="overflow-x-auto">
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
          </Split>
        </Block>
      )}

      {(t.preCare?.length || t.postCare?.length) && (
        <Block>
          <Split aside={<h2 className="h-section">Pre and post treatment care</h2>}>
            <Rows>
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
          </Split>
        </Block>
      )}

      {/* Technology used — the authored technology→treatment edge, read back
          through relations.ts. Uncapped: every device/injectable that powers
          this treatment gets a card and an internal link. */}
      {techItems.length > 0 && (
        <Block id="devices" tone="tint">
          <h2 className="h-section max-w-[20ch]">
            Devices used at Kaiteki
          </h2>
          <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-700">
            Which platform is used depends on your individual assessment.
          </p>
          <CardRow className="mt-10">
            {techItems.map((x) => (
              <TechnologyCard key={x.slug} x={x} showUsedIn={false} />
            ))}
          </CardRow>
        </Block>
      )}

      {/* T-16 */}
      {t.faqs && (
        <Block id="faq">
          <Split aside={<h2 className="h-section">Common questions</h2>}>
            <Faq items={t.faqs} />
          </Split>
        </Block>
      )}

      {/* T-17 — each related treatment carries a one-line reason, framed
          around what THIS treatment does not do, so the link is useful
          rather than decorative. */}
      {(related.length > 0 || relatedConcerns.length > 0) && (
        <Block>
          <Split aside={<h2 className="h-section">Where to go next</h2>}>
            {related.length > 0 && (
              <ul className="divide-y divide-hairline border-y border-hairline">
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
          </Split>
        </Block>
      )}

      {/* T-18 */}
      <Block tone="tint">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:gap-16">
          <div>
            <h2 className="h-section max-w-[16ch]">Book a free consultation</h2>
            <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-700">
              A doctor will examine your skin and tell you whether {t.name} is appropriate, and if
              it isn&rsquo;t, what would be. No obligation.
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
      </Block>

      {/* T-19 */}
      <Container className="py-12 sm:py-14">
        <div className="max-w-[62ch] space-y-8">
          <Ledger
            rows={[
              { label: "Reviewed by", value: reviewerByline(doctor) },
              { label: "Last reviewed", value: reviewedDate },
              { label: "Next review due", value: nextReview(t.lastReviewed) },
              { label: "Advertisement ref", value: `${t.kkliu}` },
            ]}
          />
          <Disclaimer />
        </div>
      </Container>
    </article>
  );
}
