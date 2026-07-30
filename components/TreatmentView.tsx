import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { LeadAnswer } from "@/components/LeadAnswer";
import { Ledger, ReviewByline } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { SectionCard } from "@/components/SectionCard";
import { TreatmentMotif, TechnologyCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { ArrowRight, Check, X } from "@/components/icons";
import {
  FactStrip,
  JumpNav,
  RoutingModule,
  VariantModule,
  CtaMid,
  AvoidList,
  SessionSteps,
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

export function TreatmentView({ t, trail }: { t: Treatment; trail: Crumb[] }) {
  const doctor = doctorBySlug(t.reviewedBy);
  const related = t.related.map((r) => treatmentBySlug(r)).filter(Boolean);
  const techItems = technologyOfTreatment(t.slug);
  const relatedConcerns = concernsOfTreatment(t.slug);
  const wa = waForTreatment(t.name);
  const reviewedDate = dmy(t.lastReviewed);
  const [sessionTime, downtimeLabel] = (t.durationDowntime ?? "").split("·").map((s) => s.trim());
  const hasSuitability = (t.suitableFor?.length ?? 0) > 0 || (t.notSuitableFor?.length ?? 0) > 0;

  return (
    <Container className="py-10 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={trail} />

        {t.image && (
          <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl bg-tint sm:aspect-[21/9]">
            <Image
              src={t.image}
              alt={`${t.name} treatment at Kaiteki Skin Aesthetic Clinic Malaysia`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          </div>
        )}

        <div className="mt-8">
          <p className="text-sm font-medium text-accent">{t.category}</p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-espresso sm:text-4xl">
            {t.name}
          </h1>
          <div className="mt-6">
            <LeadAnswer>{t.leadAnswer}</LeadAnswer>
          </div>

          {doctor && (
            <div className="mt-6 max-w-md">
              <ReviewByline
                doctorName={doctor.fullName}
                mmc={doctor.mmc}
                date={reviewedDate}
                photo={doctor.photo}
                href={`/doctors/${doctor.slug}`}
              />
            </div>
          )}

          {/* T-01 · Ghost CTA only. A ready-to-book visitor shouldn't have to
              scroll ~750 words to the mid-page prompt, but the top of a medical
              page must not read as a sales page (spec rule R-06). */}
          <div className="mt-6">
            <WhatsAppButton
              href={wa}
              variant="outline"
              label="Ask a doctor whether it suits your skin"
            />
            <p className="mt-2 text-sm text-ink-500">Free consultation, no obligation.</p>
          </div>

          {/* T-02 · Authored process facts, else the derived session/downtime tags. */}
          {t.facts?.length ? (
            <FactStrip facts={t.facts} />
          ) : (
            (sessionTime || t.typicalSessions || downtimeLabel) && (
              <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {[
                  sessionTime && ["Session time", sessionTime],
                  t.typicalSessions && ["Typical sessions", t.typicalSessions],
                  downtimeLabel && ["Downtime", downtimeLabel],
                ]
                  .filter((row): row is [string, string] => Boolean(row))
                  .map(([label, value]) => (
                    <div key={label} className="rounded-lg bg-tint p-3 text-center">
                      <dd className="text-sm font-semibold text-espresso">{value}</dd>
                      <dt className="mt-0.5 text-[0.6875rem] text-ink-500">{label}</dt>
                    </div>
                  ))}
              </dl>
            )
          )}

          {/* T-03 */}
          <JumpNav items={t.jumpNav} />
        </div>

        <div className="mt-10 space-y-6">
          {/* T-06 falls back to a plain chip row until routing cards are authored. */}
          {!t.routes && relatedConcerns.length > 0 && (
            <SectionCard eyebrow="Concerns this treatment addresses">
              <ul className="flex flex-wrap gap-2">
                {relatedConcerns.map((concern) => (
                  <li key={concern.slug}>
                    <Link href={`/concerns/${concern.slug}`} className="rounded-full border border-hairline bg-tint px-3 py-1.5 text-sm text-ink-700 transition-colors hover:border-mocha">
                      {concern.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionCard>
          )}

          {/* T-04 · T-05 — anchor id derived from the heading so any section is
              addressable from the jump nav without a second data field. */}
          {t.sections?.map((s) => (
            <SectionCard key={s.heading} id={slugifyHeading(s.heading)} title={s.heading}>
              <div className="prose space-y-4 leading-relaxed text-ink-700">
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
            </SectionCard>
          )) ?? (
            <SectionCard>
              <p className="prose leading-relaxed text-ink-700">
                {t.summary} A full, doctor-reviewed guide to {t.name} is being finalised for
                the new site. In the meantime, the summary above outlines what the treatment
                involves, and our doctors can explain whether it is suitable for you at a free
                consultation.
              </p>
            </SectionCard>
          )}

          {/* Visual break — on-brand generated motif standing in for commissioned
              device/mechanism photography (docs/06 "Imagery"; no B/A or stock). */}
          <TreatmentMotif t={t} seed="mechanism" className="aspect-[16/9] rounded-2xl" />

          {/* T-06 */}
          <RoutingModule
            title={`What ${t.name} is used for at Kaiteki`}
            routes={t.routes}
            note={t.routesNote}
          />

          {/* T-07 — Full depth only; omitted when there's nothing to compare. */}
          <VariantModule m={t.variantModule} />

          {/* T-08 */}
          <CtaMid cta={t.ctaMid} href={wa} />

          {/* T-09 */}
          {t.avoidIf?.length ? (
            <SectionCard id="suitability" title="Suitability, and who should avoid it">
              <p className="leading-relaxed text-ink-700">
                Suitability is assessed individually, but there are situations where {t.name} is
                usually postponed or ruled out. Tell your doctor at consultation if any of the
                following apply to you:
              </p>
              <AvoidList items={t.avoidIf} bring={t.bringToConsult} />
            </SectionCard>
          ) : (
            hasSuitability && (
            <SectionCard id="suitability" title="Is this right for you?">
              <div className="grid gap-6 sm:grid-cols-2">
                {t.suitableFor && t.suitableFor.length > 0 && (
                  <ul className="space-y-2.5">
                    {t.suitableFor.map((li) => (
                      <li key={li} className="flex gap-2.5 text-sm text-ink-700">
                        <Check size={18} className="mt-0.5 shrink-0 text-success" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {t.notSuitableFor && t.notSuitableFor.length > 0 && (
                  <ul className="space-y-2.5">
                    {t.notSuitableFor.map((li) => (
                      <li key={li} className="flex gap-2.5 text-sm text-ink-700">
                        <X size={18} className="mt-0.5 shrink-0 text-warn" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <p className="mt-4 text-sm text-ink-500">
                Not exhaustive — share your full medical history at consultation so the
                doctor can assess suitability for you specifically.
              </p>
            </SectionCard>
            )
          )}

          {/* T-10 */}
          {t.sessionSteps?.length ? (
            <SectionCard id="your-session" title={`What a session at Kaiteki involves`}>
              <SessionSteps steps={t.sessionSteps} />
            </SectionCard>
          ) : null}

          {/* T-11 */}
          <AfterSession a={t.afterSession} />

          {/* T-12 */}
          <RisksBlock r={t.risks} name={t.name} />

          {/* T-13 */}
          <CostFactors c={t.costFactors} href={wa} />

          {/* T-14 — Full depth only, and only once imagery is cleared and
              labelled in all four required places. */}
          <ManufacturerImages images={t.manufacturerImages} />

          {t.areas && t.areas.length > 0 && (
            <SectionCard eyebrow="Treatment areas">
              <ul className="flex flex-wrap gap-2">
                {t.areas.map((area) => (
                  <li key={area} className="rounded-full border border-hairline bg-tint px-3 py-1.5 text-sm text-ink-700">
                    {area}
                  </li>
                ))}
              </ul>
            </SectionCard>
          )}

          {t.comparisons && t.comparisons.length > 0 && (
            <SectionCard title={`${t.name} vs other options`}>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      <th className="border-b border-hairline py-2 pr-4 text-left font-semibold text-espresso">Treatment</th>
                      <th className="border-b border-hairline py-2 pr-4 text-left font-semibold text-espresso">Best for</th>
                      <th className="border-b border-hairline py-2 text-left font-semibold text-espresso">Downtime</th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.comparisons.map((row) => (
                      <tr key={row.name}>
                        <td className="border-b border-hairline py-2 pr-4 font-medium text-espresso">{row.name}</td>
                        <td className="border-b border-hairline py-2 pr-4 text-ink-700">{row.bestFor}</td>
                        <td className="border-b border-hairline py-2 text-ink-700">{row.downtime}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionCard>
          )}

          {(t.preCare?.length || t.postCare?.length) && (
            <SectionCard title="Pre and post treatment care">
              <div className="grid gap-4 sm:grid-cols-2">
                {t.preCare && t.preCare.length > 0 && (
                  <div className="rounded-xl bg-tint p-4">
                    <h3 className="text-sm font-semibold text-espresso">Before treatment</h3>
                    <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
                      {t.preCare.map((li) => (
                        <li key={li} className="flex gap-2">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-mocha" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {t.postCare && t.postCare.length > 0 && (
                  <div className="rounded-xl bg-tint p-4">
                    <h3 className="text-sm font-semibold text-espresso">After treatment</h3>
                    <ul className="mt-2 space-y-1.5 text-sm text-ink-700">
                      {t.postCare.map((li) => (
                        <li key={li} className="flex gap-2">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-mocha" />
                          <span>{li}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </SectionCard>
          )}

          {/* Technology used — the authored technology→treatment edge, read back
              through relations.ts. Uncapped: every device/injectable that powers
              this treatment gets a card and an internal link. */}
          {techItems.length > 0 && (
            <SectionCard id="devices" title="Devices used at Kaiteki">
              <p className="text-ink-700">
                {t.name} at Kaiteki is delivered on the following{" "}
                {techItems.length === 1 ? "platform" : "platforms"}. Which one is used depends
                on your individual assessment.
              </p>
              <CardRow className="mt-6">
                {techItems.map((x) => (
                  <TechnologyCard key={x.slug} x={x} showUsedIn={false} />
                ))}
              </CardRow>
            </SectionCard>
          )}

          {/* T-16 */}
          {t.faqs && (
            <SectionCard id="faq" title="Frequently asked questions">
              <Faq items={t.faqs} />
            </SectionCard>
          )}

          {/* T-17 — each related treatment carries a one-line reason, framed
              around what THIS treatment does not do, so the link is useful
              rather than decorative. */}
          {(related.length > 0 || relatedConcerns.length > 0) && (
            <SectionCard title="Where to go next">
              {related.length > 0 && (
                <>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-mocha">
                    Related treatments
                  </p>
                  <ul className="mt-3 space-y-4">
                    {related.map((r) => (
                      <li key={r!.slug}>
                        <Link
                          href={treatmentHref(r!)}
                          className="inline-flex items-center gap-1.5 font-medium text-espresso transition-colors hover:text-accent"
                        >
                          {r!.name} <ArrowRight size={14} className="text-accent" />
                        </Link>
                        {t.relatedReasons?.[r!.slug] && (
                          <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-700">
                            {t.relatedReasons[r!.slug]}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {relatedConcerns.length > 0 && (
                <>
                  <p className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-mocha">
                    Related concerns
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {relatedConcerns.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/concerns/${c.slug}`}
                          className="inline-flex rounded-full border border-hairline bg-tint px-3 py-1.5 text-sm text-ink-700 transition-colors hover:border-mocha hover:text-espresso"
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/treatments"
                        className="inline-flex rounded-full border border-hairline bg-tint px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:border-mocha"
                      >
                        All treatments
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </SectionCard>
          )}

          {/* T-18 */}
          <SectionCard className="bg-tint">
            <h2 className="text-xl font-bold text-espresso">Book a free consultation</h2>
            <p className="mt-2 max-w-xl leading-relaxed text-ink-700">
              A doctor will examine your skin and tell you whether {t.name} is appropriate, and if
              it isn&rsquo;t, what would be. No obligation.
            </p>
            <div className="mt-5">
              <WhatsAppButton href={wa} size="lg" label="Ask about this treatment" />
            </div>
            <LocationsBlock availableAt={t.availableAt} />
          </SectionCard>

          {/* T-19 */}
          <div className="space-y-6 px-2">
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
        </div>
      </div>
    </Container>
  );
}
