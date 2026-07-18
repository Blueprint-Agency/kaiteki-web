import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Ledger } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
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
      <Breadcrumbs items={trail} />

      <div className="relative mt-6 aspect-[21/9] overflow-hidden rounded-2xl bg-tint sm:aspect-[3/1]">
        {x.image ? (
          <Image
            src={x.image}
            alt={x.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        ) : (
          <ProductMotif slug={x.slug} className="size-full" />
        )}
      </div>

      <div className="mt-8 max-w-3xl">
        <p className="text-sm font-medium text-accent">
          {x.group} · {TYPE_LABEL[x.type]}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight text-espresso sm:text-4xl">
          {x.name}
        </h1>
        <p className="prose mt-6 max-w-[65ch] text-lg leading-relaxed text-ink-700">{x.summary}</p>
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
        {/* Body */}
        <div className="min-w-0">
          {x.sections && (
            <div className="space-y-10">
              {x.sections.map((s) => (
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
          )}

          {relatedConcerns.length > 0 && (
            <section className={x.sections ? "mt-12" : ""}>
              <h2 className="mb-4 text-xl font-bold text-espresso sm:text-2xl">May help with</h2>
              <ul className="flex flex-wrap gap-2">
                {relatedConcerns.map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/concerns/${c.slug}`}
                      className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-sm text-ink-700 transition-colors hover:border-mocha"
                    >
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {x.faqs && (
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-bold text-espresso sm:text-2xl">Frequently asked questions</h2>
              <Faq items={x.faqs} />
            </section>
          )}

          <div className="mt-12 space-y-6">
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

        {/* Rail */}
        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-xl border border-hairline bg-tint p-5">
            <h2 className="font-semibold text-espresso">Book a free consultation</h2>
            <p className="mt-2 text-sm leading-relaxed text-ink-700">
              A doctor will assess whether {x.name} is suitable for you.
            </p>
            <div className="mt-4">
              <WhatsAppButton href={waForTreatment(x.name)} label="Ask about this" />
            </div>
          </div>

          {powers.length > 0 && (
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">Used in</h2>
              <ul className="space-y-1.5">
                {powers.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={treatmentHref(t)}
                      className="inline-flex items-center gap-1.5 text-sm text-ink-700 transition-colors hover:text-espresso"
                    >
                      {t.name} <ArrowRight size={14} className="text-accent" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {logo && (
            <div>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.1em] text-mocha">Brand</h2>
              <Image
                src={`/images/tech/${logo}`}
                alt={x.device!}
                width={140}
                height={44}
                className="h-8 w-auto object-contain opacity-80"
              />
            </div>
          )}
        </aside>
      </div>
    </Container>
  );
}
