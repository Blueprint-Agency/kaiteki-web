import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { LeadAnswer } from "@/components/LeadAnswer";
import { Ledger } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { SectionCard } from "@/components/SectionCard";
import { TreatmentMotif } from "@/components/cards";
import { ArrowRight, Check, X } from "@/components/icons";
import { treatmentBySlug, treatmentHref } from "@/content/data/treatments";
import { technologyOfTreatment, concernsOfTreatment } from "@/content/data/relations";
import { doctorBySlug } from "@/content/data/doctors";
import { waForTreatment } from "@/lib/wa";
import type { Treatment } from "@/lib/types";

const deviceLogo: Record<string, string> = {
  PicoSure: "logob_picosure.png",
  Ultherapy: "logob_ultherapy.png",
  CoolSculpting: "logob_coolsculpting.png",
  Fotona: "logob_fotona.png",
  Onda: "logob_onda.png",
  Profhilo: "logob_profhilo.png",
  Sculptra: "logob_sculptra.png",
  Potenza: "logob_potenza.png",
};

export function TreatmentView({ t, trail }: { t: Treatment; trail: Crumb[] }) {
  const doctor = doctorBySlug(t.reviewedBy);
  const related = t.related.map((r) => treatmentBySlug(r)).filter(Boolean);
  const techItems = technologyOfTreatment(t.slug);
  const relatedConcerns = concernsOfTreatment(t.slug);
  const logo = t.device ? deviceLogo[t.device] : undefined;
  const reviewedDate = new Date(t.lastReviewed).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
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
              alt={t.name}
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

          {(sessionTime || t.typicalSessions || downtimeLabel) && (
            <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
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
          )}
        </div>

        <div className="mt-10 space-y-6">
          {relatedConcerns.length > 0 && (
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

          {t.sections?.map((s) => (
            <SectionCard key={s.heading} title={s.heading}>
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

          {hasSuitability && (
            <SectionCard title="Is this right for you?">
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
          )}

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

          {(doctor || techItems.length > 0) && (
            <SectionCard title="Your treatment team">
              <div className="grid gap-6 sm:grid-cols-2">
                {doctor && (
                  <div className="flex items-center gap-4">
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-tint">
                      <Image src={doctor.photo} alt={doctor.fullName} fill className="object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-espresso">{doctor.fullName}</p>
                      {doctor.mmc && <p className="text-sm text-ink-500">{doctor.mmc}</p>}
                    </div>
                  </div>
                )}
                {techItems.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-mocha">Devices &amp; platforms</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {techItems.map((x) => (
                        <li key={x.slug}>
                          <Link href={`/technology/${x.slug}`} className="inline-flex items-center rounded-full border border-hairline bg-tint px-3 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:border-mocha">
                            {x.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {logo && (
                      <Image src={`/images/tech/${logo}`} alt={t.device!} width={140} height={44} className="mt-3 h-7 w-auto object-contain opacity-80" />
                    )}
                  </div>
                )}
              </div>
            </SectionCard>
          )}

          {t.faqs && (
            <SectionCard title="Frequently asked questions">
              <Faq items={t.faqs} />
            </SectionCard>
          )}

          {related.length > 0 && (
            <SectionCard title="Where to go next">
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-mocha">Related treatments</p>
              <ul className="mt-2 space-y-1.5">
                {related.map((r) => (
                  <li key={r!.slug}>
                    <Link href={treatmentHref(r!)} className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 transition-colors hover:text-espresso">
                      {r!.name} <ArrowRight size={14} className="text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionCard>
          )}

          <SectionCard className="bg-tint text-center sm:text-left">
            <h2 className="text-xl font-bold text-espresso">Book a free consultation</h2>
            <p className="mx-auto mt-2 max-w-md text-ink-700 sm:mx-0">
              A doctor will assess whether {t.name} is suitable for you.
            </p>
            <div className="mt-5">
              <WhatsAppButton href={waForTreatment(t.name)} size="lg" label="Ask about this treatment" />
            </div>
          </SectionCard>

          <div className="space-y-6 px-2">
            <Ledger
              rows={[
                { label: "Reviewed by", value: doctor ? `${doctor.fullName}, ${doctor.mmc}` : "—" },
                { label: "Last reviewed", value: reviewedDate },
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
