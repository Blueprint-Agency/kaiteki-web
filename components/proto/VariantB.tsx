/**
 * PROTOTYPE — throwaway. Variant B · "Clinical dossier".
 *
 * No banner. A compact typographic masthead, like a medical reference entry.
 * The structural bet: media never interrupts the prose — it docks into a
 * persistent right-hand evidence column that runs the length of the article, so
 * reading is uninterrupted and looking is always available. TOC rail on the left.
 * Three columns on xl, two on lg, stacked below.
 */

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReviewByline } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { doctorBySlug } from "@/content/data/doctors";
import { treatmentsOfConcern } from "@/content/data/relations";
import { treatmentHref } from "@/content/data/treatments";
import { waForConcern } from "@/lib/wa";
import type { Concern } from "@/lib/types";
import { protoMedia as m, RESULTS_DISCLAIMER } from "./media";

const dmy = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/** An entry in the right-hand evidence column. */
function Plate({ src, caption, ratio = "2/1", contain = false, alt = "" }:
  { src: string; caption?: string; ratio?: string; contain?: boolean; alt?: string }) {
  return (
    <figure className="mb-8">
      <div className="relative overflow-hidden rounded-lg bg-tint ring-1 ring-hairline" style={{ aspectRatio: ratio }}>
        <Image src={src} alt={alt} fill sizes="(max-width:1280px) 100vw, 340px"
          className={contain ? "object-contain" : "object-cover object-left"} />
      </div>
      {caption && <figcaption className="mt-2.5 text-[13px] leading-snug text-ink-500">{caption}</figcaption>}
    </figure>
  );
}

function Entry({ id, n, title, children }: { id?: string; n: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-hairline py-10 first:border-t-0">
      <p className="font-mono text-xs tracking-widest text-mocha">{n}</p>
      <h2 className="h-section mt-2">{title}</h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function VariantB({ c }: { c: Concern }) {
  const doctor = doctorBySlug(c.reviewedBy);
  const wa = waForConcern(c.name);
  const options = treatmentsOfConcern(c.slug);
  const headings = (c.jumpNav ?? []).map((j) => ({ id: j.id, text: j.label, level: 2 as const }));

  return (
    <article>
      {/* masthead — record, not campaign */}
      <header className="border-b border-hairline bg-porcelain">
        <Container className="pt-8 pb-10">
          <Breadcrumbs items={[{ label: "Concerns", href: "/concerns" }, { label: c.name }]} />
          <div className="mt-7 flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
            <div>
              <p className="kicker">Concern record · {c.group}</p>
              <h1 className="h-hero mt-3">{c.name}</h1>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <WhatsAppButton href={wa} variant="outline" position="hero" label="Book a free consultation" />
              {doctor && (
                <ReviewByline doctorName={doctor.fullName} mmc={doctor.mmc} date={dmy(c.lastReviewed)} photo={doctor.photo} href={`/doctors/${doctor.slug}`} />
              )}
            </div>
          </div>
          <p className="mt-8 max-w-[68ch] text-xl leading-relaxed text-ink-900">{c.leadAnswer}</p>
          {c.facts && (
            <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-hairline pt-6">
              {c.facts.slice(0, 3).map((f) => (
                <div key={f.label} className="max-w-[28ch]">
                  <dt className="font-display text-base text-espresso">{f.value}</dt>
                  <dd className="mt-1 text-sm leading-snug text-ink-500">{f.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </Container>
      </header>

      <Container>
        <div className="grid gap-10 lg:grid-cols-[13rem_1fr] xl:grid-cols-[13rem_minmax(0,62ch)_22rem] xl:gap-14">
          {/* left · contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 pt-10"><ArticleToc headings={headings} variant="sidebar" /></div>
          </aside>

          {/* centre · uninterrupted prose */}
          <div className="min-w-0">
            <div className="pt-8 lg:hidden"><ArticleToc headings={headings} /></div>

            {c.sections?.map((s, i) => (
              <Entry key={s.heading} id={i === 0 ? "what-is-it" : undefined} n={`0${i + 1}`} title={s.heading}>
                <div className="prose space-y-5 leading-[1.75] text-ink-700">
                  {s.body.map((p, k) => <p key={k} className={k === 0 ? "text-lg text-ink-900" : undefined}>{p}</p>)}
                </div>
              </Entry>
            ))}

            <Entry id="which-type" n="03" title="Which type do I have?">
              <p className="leading-relaxed text-ink-700">
                Acne is not one condition. The type decides the approach, and active
                breakouts are treated differently from the marks left behind.
              </p>
              <dl className="mt-6 divide-y divide-hairline border-y border-hairline">
                {m.illus.map((x) => (
                  <div key={x.src} className="flex items-center gap-4 py-3">
                    <div className="relative h-14 w-14 flex-none">
                      <Image src={x.src} alt="" fill sizes="56px" className="object-contain" />
                    </div>
                    <div>
                      <dt className="font-display text-base text-espresso">{x.label}</dt>
                      <dd className="text-sm text-ink-500">{x.sub}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            </Entry>

            {c.drivers && (
              <Entry id="causes" n="04" title={c.drivers.heading}>
                {c.drivers.intro && <p className="text-lg leading-relaxed text-ink-900">{c.drivers.intro}</p>}
                <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                  {c.drivers.items.map((i) => (
                    <li key={i.lead} className="py-4 leading-relaxed text-ink-700">
                      <strong className="font-semibold text-espresso">{i.lead}</strong> {i.body}
                    </li>
                  ))}
                </ul>
                {c.drivers.outro && <p className="mt-6 leading-relaxed text-ink-700">{c.drivers.outro}</p>}
              </Entry>
            )}

            <Entry id="treatments" n="05" title="Treatment options at Kaiteki">
              {c.treatmentsIntro && <p className="text-lg leading-relaxed text-ink-900">{c.treatmentsIntro}</p>}
              <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                {options.map((t) => {
                  const w = c.treatmentWhy?.[t.slug];
                  return (
                    <li key={t.slug} className="py-5">
                      <Link href={treatmentHref(t)} className="font-display text-lg text-espresso underline-offset-4 hover:underline">{t.name}</Link>
                      {w && <><p className="mt-1.5 text-sm font-medium text-mocha">Why for {c.name.toLowerCase()}: {w.why}</p>
                        <p className="mt-1.5 leading-relaxed text-ink-700">{w.body}</p></>}
                    </li>
                  );
                })}
              </ul>
              {c.treatmentsNote && <p className="mt-5 leading-relaxed text-ink-700">{c.treatmentsNote}</p>}
            </Entry>

            {c.firstVisit && (
              <Entry id="first-visit" n="06" title="Your first visit">
                <p className="text-lg leading-relaxed text-ink-900">{c.firstVisit.intro}</p>
                <ol className="mt-6 space-y-5">
                  {c.firstVisit.steps.map((s, i) => (
                    <li key={s.title} className="flex gap-4">
                      <span className="mt-0.5 font-mono text-sm text-mocha">{String(i + 1).padStart(2, "0")}</span>
                      <div>
                        <p className="font-display text-base text-espresso">{s.title}</p>
                        <p className="mt-1 leading-relaxed text-ink-700">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </Entry>
            )}

            {c.risks && (
              <Entry id="risks" n="07" title="Risks and realistic limits">
                {c.risks.intro && <p className="text-lg leading-relaxed text-ink-900">{c.risks.intro}</p>}
                <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                  {c.risks.items.map((i) => (
                    <li key={i.lead} className="py-4 leading-relaxed text-ink-700">
                      <strong className="font-semibold text-espresso">{i.lead}</strong> {i.body}
                    </li>
                  ))}
                </ul>
              </Entry>
            )}

            {c.costFactors && (
              <Entry id="cost" n="08" title="What affects the cost">
                <p className="text-lg leading-relaxed text-ink-900">{c.costFactors.intro}</p>
                <ul className="mt-5 space-y-2.5">
                  {c.costFactors.factors.map((f) => (
                    <li key={f} className="flex gap-3 leading-relaxed text-ink-700"><span className="text-mocha">·</span>{f}</li>
                  ))}
                </ul>
              </Entry>
            )}

            {c.faqs && <Entry id="faq" n="09" title="Common questions"><Faq items={c.faqs} /></Entry>}

            <div className="border-t border-hairline py-10"><Disclaimer /></div>
          </div>

          {/* right · the evidence column. Everything visual lives here. */}
          <aside className="hidden xl:block">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pt-10 pb-10">
              <p className="mb-5 font-mono text-xs tracking-widest text-mocha">EVIDENCE</p>

              <p className="mb-3 text-xs uppercase tracking-wider text-ink-500">How it forms</p>
              {m.figures.slice(0, 2).map((f) => <Plate key={f.src} {...f} />)}

              <p className="mb-3 text-xs uppercase tracking-wider text-ink-500">Stages</p>
              {m.slides.map((s) => <Plate key={s.src} src={s.src} alt={s.alt} contain />)}

              <p className="mb-3 text-xs uppercase tracking-wider text-ink-500">What drives it</p>
              {m.figures.slice(2).map((f) => <Plate key={f.src} {...f} />)}

              <p className="mb-3 text-xs uppercase tracking-wider text-ink-500">In clinic</p>
              {m.visit.map((v) => <Plate key={v.src} src={v.src} caption={v.caption} ratio="1/1" />)}
            </div>
          </aside>
        </div>
      </Container>

      {/* results — full width, because 14 images never fit a 22rem rail */}
      <section id="results" className="scroll-mt-24 border-y border-hairline bg-tint py-14">
        <Container>
          <h2 className="h-section">Results from Kaiteki patients</h2>
          <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-7">
            {m.results.map((r) => (
              <li key={r.src}>
                <div className="relative overflow-hidden rounded bg-surface ring-1 ring-hairline" style={{ aspectRatio: r.ratio }}>
                  <Image src={r.src} alt={r.caption} fill sizes="(max-width:640px) 50vw, 160px" className="object-cover" />
                </div>
                <p className="mt-2 text-[13px] leading-snug text-ink-500">{r.caption}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[70ch] text-sm leading-relaxed text-ink-500">{RESULTS_DISCLAIMER}</p>
        </Container>
      </section>

      {c.ctaMid && (
        <section className="on-dark bg-espresso py-14 text-ink-on-dark">
          <Container>
            <div className="max-w-[46ch]">
              <h2 className="h-section">{c.ctaMid.heading}</h2>
              <p className="mt-4 leading-relaxed opacity-90">{c.ctaMid.body}</p>
              <div className="mt-7"><WhatsAppButton href={wa} position="mid" label="Book a free consultation" /></div>
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
