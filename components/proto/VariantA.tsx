/**
 * PROTOTYPE — throwaway. Variant A · "Editorial banner".
 *
 * The Round-5 proposal. Full-bleed 2.88:1 banner with the H1 set into the empty
 * right half the asset was cut for, then a single measured content column with a
 * sticky TOC rail on lg+. Split/sticky-aside is gone. Media interrupts the prose
 * at full column width.
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

/* ── the two figure components docs/11 §1.1 argues for ──────────────────── */

/** 2:1 photo, subject left, caption in the void on the right. */
function Figure({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="my-10 grid gap-5 sm:grid-cols-[1.4fr_1fr] sm:items-center sm:gap-8">
      <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-tint">
        <Image src={src} alt="" fill sizes="(max-width:640px) 100vw, 480px" className="object-cover object-left" />
      </div>
      <figcaption className="text-sm leading-relaxed text-ink-500">{caption}</figcaption>
    </figure>
  );
}

/** 2:1 designed slide — headline and body already in the artwork, so no caption. */
function Slide({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative my-6 aspect-[2/1] overflow-hidden rounded-xl bg-tint ring-1 ring-hairline">
      <Image src={src} alt={alt} fill sizes="(max-width:1024px) 100vw, 760px" className="object-contain" />
    </div>
  );
}

function Section({ id, children, tone }: { id?: string; children: React.ReactNode; tone?: "tint" | "porcelain" | "espresso" }) {
  const t = tone === "tint" ? "border-y border-hairline bg-tint"
    : tone === "porcelain" ? "border-y border-hairline bg-porcelain"
    : tone === "espresso" ? "on-dark bg-espresso text-ink-on-dark" : "";
  return <section id={id} className={`scroll-mt-24 py-12 sm:py-16 ${t}`}>{children}</section>;
}

export function VariantA({ c }: { c: Concern }) {
  const doctor = doctorBySlug(c.reviewedBy);
  const wa = waForConcern(c.name);
  const options = treatmentsOfConcern(c.slug);
  const headings = (c.jumpNav ?? []).map((j) => ({ id: j.id, text: j.label, level: 2 as const }));

  return (
    <article>
      {/* 01 · banner hero. object-left because every pbanner puts the subject
          hard-left and leaves the right half empty for exactly this copy. */}
      <header className="relative border-b border-hairline bg-tint">
        <div className="relative aspect-[16/9] w-full sm:aspect-[2.88/1]">
          <Image
            src={m.banner.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white/95 sm:via-white/10 sm:to-white/90" />
          <Container className="absolute inset-0 flex items-center">
            <div className="ml-auto w-full max-w-[46ch] sm:w-1/2">
              <p className="kicker">Concern · {c.group}</p>
              <h1 className="h-hero mt-3">{c.name}</h1>
              <p className="mt-4 hidden text-lg leading-relaxed text-ink-700 sm:block">{c.summary}</p>
            </div>
          </Container>
        </div>
        <Container className="py-6">
          <Breadcrumbs items={[{ label: "Concerns", href: "/concerns" }, { label: c.name }]} />
          <p className="mt-5 max-w-[52ch] text-lg leading-relaxed text-ink-700 sm:hidden">{c.summary}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
            <WhatsAppButton href={wa} variant="outline" position="hero" label="Book a free consultation" />
            <p className="text-sm text-ink-500">Free, about 20–30 minutes, no obligation.</p>
          </div>
          {doctor && (
            <div className="mt-5">
              <ReviewByline doctorName={doctor.fullName} mmc={doctor.mmc} date={dmy(c.lastReviewed)} photo={doctor.photo} href={`/doctors/${doctor.slug}`} />
            </div>
          )}
        </Container>
      </header>

      {/* 02 · fact rail */}
      {c.facts && (
        <div className="border-b border-hairline">
          <Container>
            <dl className="grid divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {c.facts.slice(0, 3).map((f) => (
                <div key={f.label} className="py-6 sm:px-9 sm:py-7 sm:first:pl-0 sm:last:pr-0">
                  <dt className="h-sub">{f.value}</dt>
                  <dd className="mt-2 max-w-[34ch] text-sm leading-snug text-ink-500">{f.label}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </div>
      )}

      <Container>
        <div className="grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
          {/* sticky TOC rail — the blog's, reused wholesale */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <ArticleToc headings={headings} variant="sidebar" />
            </div>
          </aside>

          <div className="min-w-0 max-w-[70ch]">
            {/* below lg the rail becomes the inline card */}
            <div className="pt-10 lg:hidden">
              <ArticleToc headings={headings} />
            </div>

            <Section>
              <p className="border-l-2 border-mocha pl-5 text-xl leading-relaxed text-ink-900">{c.leadAnswer}</p>
            </Section>

            {/* 04 · what it is, with figures interleaved */}
            {c.sections?.map((s, si) => (
              <Section key={s.heading} id={si === 0 ? "what-is-it" : undefined}>
                <h2 className="h-section">{s.heading}</h2>
                <div className="prose mt-5 space-y-5 leading-[1.75] text-ink-700">
                  {s.body.map((p, i) => (
                    <p key={i} className={i === 0 ? "text-lg text-ink-900" : undefined}>{p}</p>
                  ))}
                </div>
                {si === 0 && <Figure {...m.figures[0]} />}
                {si === 1 && <Figure {...m.figures[1]} />}
              </Section>
            ))}

            {/* 05 · which type — the scalloped die-cuts, on page ground */}
            <Section id="which-type">
              <h2 className="h-section">Which type do I have?</h2>
              <p className="mt-4 max-w-[62ch] leading-relaxed text-ink-700">
                Acne is not one condition. The type decides the approach, and active
                breakouts are treated differently from the marks and scarring left behind.
              </p>
              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
                {m.illus.map((x) => (
                  <li key={x.src}>
                    <div className="relative aspect-square">
                      <Image src={x.src} alt={x.label} fill sizes="180px" className="object-contain" />
                    </div>
                    <p className="mt-3 font-display text-base text-espresso">{x.label}</p>
                    <p className="mt-1 text-sm leading-snug text-ink-500">{x.sub}</p>
                  </li>
                ))}
              </ul>

              <h3 className="h-sub mt-14">How it progresses</h3>
              {m.slides.map((s) => <Slide key={s.src} {...s} />)}
            </Section>

            {/* 06 · drivers, one figure per driver */}
            {c.drivers && (
              <Section id="causes">
                <h2 className="h-section">{c.drivers.heading}</h2>
                {c.drivers.intro && <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-900">{c.drivers.intro}</p>}
                <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
                  {c.drivers.items.map((i, n) => (
                    <li key={i.lead} className="py-5">
                      <p className="leading-relaxed text-ink-700">
                        <strong className="font-semibold text-espresso">{i.lead}</strong> {i.body}
                      </p>
                      {m.figures[n + 2] && <Figure {...m.figures[n + 2]} />}
                    </li>
                  ))}
                </ul>
                {c.drivers.outro && <p className="mt-6 max-w-[62ch] leading-relaxed text-ink-700">{c.drivers.outro}</p>}
              </Section>
            )}
          </div>
        </div>
      </Container>

      {/* 07 · mid CTA */}
      {c.ctaMid && (
        <Section tone="espresso">
          <Container>
            <div className="max-w-[46ch]">
              <h2 className="h-section">{c.ctaMid.heading}</h2>
              <p className="mt-4 leading-relaxed opacity-90">{c.ctaMid.body}</p>
              <div className="mt-7"><WhatsAppButton href={wa} position="mid" label="Book a free consultation" /></div>
            </div>
          </Container>
        </Section>
      )}

      {/* 08 · results — full bleed out of the reading column */}
      <Section id="results">
        <Container>
          <h2 className="h-section">Results from Kaiteki patients</h2>
          <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {m.results.map((r) => (
              <li key={r.src}>
                <div
                  className="relative overflow-hidden rounded-lg bg-tint ring-1 ring-hairline"
                  style={{ aspectRatio: r.ratio, maxWidth: r.w }}
                >
                  <Image src={r.src} alt={r.caption} fill sizes="(max-width:640px) 50vw, 280px" className="object-cover" />
                </div>
                <p className="mt-2.5 text-sm leading-snug text-ink-500">{r.caption}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-[70ch] text-sm leading-relaxed text-ink-500">{RESULTS_DISCLAIMER}</p>
        </Container>
      </Section>

      <Container>
        <div className="grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-16">
          <div className="hidden lg:block" />
          <div className="min-w-0 max-w-[70ch]">
            {/* 09 · treatments */}
            <Section id="treatments">
              <h2 className="h-section">Treatment options at Kaiteki</h2>
              {c.treatmentsIntro && <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-900">{c.treatmentsIntro}</p>}
              <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
                {options.map((t) => {
                  const w = c.treatmentWhy?.[t.slug];
                  return (
                    <li key={t.slug} className="py-6">
                      <Link href={treatmentHref(t)} className="font-display text-xl text-espresso underline-offset-4 hover:underline">{t.name}</Link>
                      {w && <><p className="mt-2 text-sm font-medium text-mocha">Why for {c.name.toLowerCase()}: {w.why}</p>
                        <p className="mt-2 leading-relaxed text-ink-700">{w.body}</p></>}
                    </li>
                  );
                })}
              </ul>
              {c.treatmentsNote && <p className="mt-6 max-w-[62ch] leading-relaxed text-ink-700">{c.treatmentsNote}</p>}
            </Section>

            {/* 11 · first visit, with the treatment-in-progress shots */}
            {c.firstVisit && (
              <Section id="first-visit">
                <h2 className="h-section">Your first visit</h2>
                <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-900">{c.firstVisit.intro}</p>
                <ol className="mt-8 space-y-6">
                  {c.firstVisit.steps.map((s, i) => (
                    <li key={s.title} className="flex gap-5">
                      <span className="mt-0.5 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-hairline font-mono text-sm text-mocha">{i + 1}</span>
                      <div>
                        <p className="font-display text-lg text-espresso">{s.title}</p>
                        <p className="mt-1.5 leading-relaxed text-ink-700">{s.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <ul className="mt-10 grid gap-5 sm:grid-cols-3">
                  {m.visit.map((v) => (
                    <li key={v.src}>
                      <div className="relative aspect-square overflow-hidden rounded-lg bg-tint">
                        <Image src={v.src} alt="" fill sizes="240px" className="object-cover" />
                      </div>
                      <p className="mt-2.5 text-sm leading-snug text-ink-500">{v.caption}</p>
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* 12 · risks */}
            {c.risks && (
              <Section id="risks">
                <h2 className="h-section">Risks and realistic limits</h2>
                {c.risks.intro && <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-900">{c.risks.intro}</p>}
                <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
                  {c.risks.items.map((i) => (
                    <li key={i.lead} className="py-4 leading-relaxed text-ink-700">
                      <strong className="font-semibold text-espresso">{i.lead}</strong> {i.body}
                    </li>
                  ))}
                </ul>
              </Section>
            )}

            {/* 13 · cost */}
            {c.costFactors && (
              <Section id="cost">
                <h2 className="h-section">What affects the cost</h2>
                <p className="mt-4 max-w-[62ch] text-lg leading-relaxed text-ink-900">{c.costFactors.intro}</p>
                <ul className="mt-6 space-y-2.5">
                  {c.costFactors.factors.map((f) => (
                    <li key={f} className="flex gap-3 leading-relaxed text-ink-700"><span className="text-mocha">·</span>{f}</li>
                  ))}
                </ul>
              </Section>
            )}

            {/* 14 · FAQ */}
            {c.faqs && (
              <Section id="faq">
                <h2 className="h-section">Common questions</h2>
                <div className="mt-6"><Faq items={c.faqs} /></div>
              </Section>
            )}

            <Section><Disclaimer /></Section>
          </div>
        </div>
      </Container>
    </article>
  );
}
