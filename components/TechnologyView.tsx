import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Ledger } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { SectionCard } from "@/components/SectionCard";
import { ArrowRight } from "@/components/icons";
import { ProductMotif } from "@/components/cards";
import { treatmentsOfTechnology, concernsOfTreatment } from "@/content/data/relations";
import { treatmentHref } from "@/content/data/treatments";
import { doctorBySlug } from "@/content/data/doctors";
import { waForTreatment } from "@/lib/wa";
import type { Concern, Technology } from "@/lib/types";

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

const TYPE_LABEL: Record<Technology["type"], string> = {
  device: "Device",
  injectable: "Injectable",
};

/** Concerns reachable from a technology item, unioned over the treatments it
 *  powers (deduped) — the derived "May help with" edge. */
function concernsOfTechnology(x: Technology): Concern[] {
  const seen = new Set<string>();
  const out: Concern[] = [];
  for (const treatmentSlug of x.treatments) {
    for (const c of concernsOfTreatment(treatmentSlug)) {
      if (!seen.has(c.slug)) {
        seen.add(c.slug);
        out.push(c);
      }
    }
  }
  return out;
}

export function TechnologyView({ x, trail }: { x: Technology; trail: Crumb[] }) {
  const powers = treatmentsOfTechnology(x.slug);
  const relatedConcerns = concernsOfTechnology(x);
  const doctor = x.reviewedBy ? doctorBySlug(x.reviewedBy) : undefined;
  const logo = x.device ? deviceLogo[x.device] : undefined;
  const reviewedDate = x.lastReviewed
    ? new Date(x.lastReviewed).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : undefined;

  return (
    <Container className="py-10 sm:py-12">
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs items={trail} />

        <div className="relative mt-6 aspect-[16/10] overflow-hidden rounded-2xl bg-tint sm:aspect-[21/9]">
          {x.image ? (
            <Image
              src={x.image}
              alt={x.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover"
            />
          ) : (
            <ProductMotif slug={x.slug} className="size-full" />
          )}
        </div>

        <div className="mt-8">
          <p className="text-sm font-medium text-accent">
            {x.group} · {TYPE_LABEL[x.type]}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-espresso sm:text-4xl">
            {x.name}
          </h1>
          <p className="prose mt-6 leading-relaxed text-ink-700">{x.summary}</p>
        </div>

        <div className="mt-10 space-y-6">
          {x.sections?.map((s) => (
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
          ))}

          {relatedConcerns.length > 0 && (
            <SectionCard title="May help with">
              <ul className="flex flex-wrap gap-2">
                {relatedConcerns.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/concerns/${c.slug}`}
                      className="rounded-full border border-hairline bg-tint px-3 py-1.5 text-sm text-ink-700 transition-colors hover:border-mocha"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionCard>
          )}

          {powers.length > 0 && (
            <SectionCard title="Used in this treatment at Kaiteki">
              <ul className="flex flex-wrap gap-3">
                {powers.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={treatmentHref(t)}
                      className="inline-flex items-center gap-1.5 rounded-full border border-hairline bg-tint px-4 py-2 text-sm font-medium text-ink-700 transition-colors hover:border-mocha"
                    >
                      {t.name} <ArrowRight size={14} className="text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </SectionCard>
          )}

          {logo && (
            <SectionCard eyebrow="Brand">
              <Image
                src={`/images/tech/${logo}`}
                alt={x.device!}
                width={140}
                height={44}
                className="h-8 w-auto object-contain opacity-80"
              />
            </SectionCard>
          )}

          {x.faqs && (
            <SectionCard title="Frequently asked questions">
              <Faq items={x.faqs} />
            </SectionCard>
          )}

          <SectionCard className="bg-tint">
            <h2 className="font-semibold text-espresso">Book a free consultation</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              A doctor will assess whether {x.name} is suitable for you.
            </p>
            <div className="mt-4">
              <WhatsAppButton href={waForTreatment(x.name)} label="Ask about this" />
            </div>
          </SectionCard>

          <div className="space-y-6 px-2">
            {doctor && reviewedDate && (
              <Ledger
                rows={[
                  { label: "Reviewed by", value: `${doctor.fullName}, ${doctor.mmc}` },
                  { label: "Last reviewed", value: reviewedDate },
                ]}
              />
            )}
            <Disclaimer />
          </div>
        </div>
      </div>
    </Container>
  );
}
