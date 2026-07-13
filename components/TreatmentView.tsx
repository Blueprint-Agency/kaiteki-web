import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { LeadAnswer } from "@/components/LeadAnswer";
import { ReviewByline, Ledger } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArrowRight } from "@/components/icons";
import { treatmentBySlug, machinesOf, treatmentHref } from "@/content/data/treatments";
import { concernBySlug } from "@/content/data/concerns";
import { branches } from "@/content/data/branches";
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
  const offering = branches.filter((b) => b.treatments.includes(t.slug));
  const related = t.related.map((r) => treatmentBySlug(r)).filter(Boolean);
  const machines = machinesOf(t.slug);
  const logo = t.device ? deviceLogo[t.device] : undefined;
  const reviewedDate = new Date(t.lastReviewed).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <Container className="py-10 sm:py-12">
      <Breadcrumbs items={trail} />

      <div className="mt-8 max-w-3xl">
        <p className="text-sm font-medium text-accent">{t.category}</p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-espresso sm:text-4xl">
          {t.name}
        </h1>
        <div className="mt-6">
          <LeadAnswer>{t.leadAnswer}</LeadAnswer>
        </div>
        {doctor && (
          <div className="mt-6 max-w-md">
            <ReviewByline doctorName={doctor.fullName} mmc={doctor.mmc} date={reviewedDate} />
          </div>
        )}
        {t.machineNames && t.machineNames.length > 0 && (
          <div className="mt-6">
            <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-mocha">
              Platforms &amp; devices
            </p>
            <p className="mt-1.5 text-sm text-ink-700">{t.machineNames.join(" · ")}</p>
          </div>
        )}
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        {/* Body */}
        <div className="min-w-0">
          {t.sections ? (
            <div className="space-y-10">
              {t.sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="text-xl font-bold text-espresso sm:text-2xl">{s.heading}</h2>
                  <div className="prose mt-3 max-w-[65ch] space-y-4 leading-relaxed text-ink-700">
                    {s.body.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                  {s.list && (
                    <ul className="mt-4 max-w-[65ch] space-y-2">
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
            <div className="space-y-6">
              <p className="prose max-w-[65ch] leading-relaxed text-ink-700">
                {t.summary} A full, doctor-reviewed guide to {t.name} is being finalised for
                the new site. In the meantime, the summary above outlines what the treatment
                involves, and our doctors can explain whether it is suitable for you at a free
                consultation.
              </p>
              {t.concerns.length > 0 && (
                <div>
                  <h2 className="text-lg font-semibold text-espresso">What it may help address</h2>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {t.concerns.map((c) => {
                      const concern = concernBySlug(c);
                      return concern ? (
                        <li key={c}>
                          <Link href={`/concerns/${c}`} className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-sm text-ink-700 transition-colors hover:border-mocha">
                            {concern.name}
                          </Link>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              )}
            </div>
          )}

          {machines.length > 0 && (
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold text-espresso sm:text-2xl">Devices &amp; platforms</h2>
              <ul className="flex flex-wrap gap-3">
                {machines.map((m) => (
                  <li key={m.slug}>
                    <Link
                      href={treatmentHref(m)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-mocha hover:text-espresso"
                    >
                      {m.name} <ArrowRight size={14} className="text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {t.faqs && (
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold text-espresso sm:text-2xl">Frequently asked questions</h2>
              <Faq items={t.faqs} />
            </section>
          )}

          <div className="mt-12 space-y-6">
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

        {/* Rail */}
        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-hairline bg-tint p-5">
            <h2 className="font-semibold text-espresso">Book a free consultation</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              A doctor will assess whether {t.name} is suitable for you.
            </p>
            <div className="mt-4">
              <WhatsAppButton href={waForTreatment(t.name)} label="Ask about this treatment" />
            </div>
          </div>

          {offering.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">Available at</h2>
              <ul className="space-y-1.5">
                {offering.map((b) => (
                  <li key={b.slug}>
                    <Link href={`/locations/${b.slug}`} className="text-sm text-ink-700 transition-colors hover:text-espresso">
                      {b.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {logo && (
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">Technology</h2>
              <Image src={`/images/tech/${logo}`} alt={t.device!} width={140} height={44} className="h-8 w-auto object-contain opacity-80" />
            </div>
          )}

          {related.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">Related treatments</h2>
              <ul className="space-y-1.5">
                {related.map((r) => (
                  <li key={r!.slug}>
                    <Link href={treatmentHref(r!)} className="inline-flex items-center gap-1.5 text-sm text-ink-700 transition-colors hover:text-espresso">
                      {r!.name} <ArrowRight size={14} className="text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </Container>
  );
}
