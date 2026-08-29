"use client";

/**
 * PROTOTYPE — throwaway. Variant C · "Guided path".
 *
 * The structural bet: a concern page is a decision, not an article. Instead of
 * one long scroll it is a sequence of steps — Is this me? → Which type →
 * What causes it → Options → Your visit → Results — driven by a sticky stepper.
 * Media is the dominant element in each step and the prose is secondary.
 * No TOC rail; the stepper *is* the navigation, and it shows progress.
 *
 * Client component because the step state is real interaction, not decoration.
 */

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReviewByline } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { doctorBySlug } from "@/content/data/doctors";
import { treatmentsOfConcern } from "@/content/data/relations";
import { treatmentHref } from "@/content/data/treatments";
import { waForConcern } from "@/lib/wa";
import type { Concern, Treatment } from "@/lib/types";
import { protoMedia as m, RESULTS_DISCLAIMER } from "./media";

const dmy = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

const STEPS = [
  { key: "is-this-me", label: "Is this me?" },
  { key: "which-type", label: "Which type" },
  { key: "causes", label: "What causes it" },
  { key: "treatments", label: "Options" },
  { key: "first-visit", label: "Your visit" },
  { key: "results", label: "Results" },
] as const;

export function VariantC({ c }: { c: Concern }) {
  const [step, setStep] = useState(0);
  const doctor = doctorBySlug(c.reviewedBy);
  const wa = waForConcern(c.name);
  const options = treatmentsOfConcern(c.slug);
  const active = STEPS[step].key;

  return (
    <article>
      {/* hero — banner as a wide strip, copy in the void */}
      <header className="relative border-b border-hairline">
        <div className="relative aspect-[16/9] w-full sm:aspect-[2.88/1]">
          <Image src={m.banner.src} alt="" fill priority sizes="100vw" className="object-cover object-left" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-white/95 sm:via-white/20" />
          <Container className="absolute inset-0 flex items-center">
            <div className="ml-auto w-full sm:w-1/2">
              <Breadcrumbs items={[{ label: "Concerns", href: "/concerns" }, { label: c.name }]} />
              <h1 className="h-hero mt-4">{c.name}</h1>
              <p className="mt-4 max-w-[42ch] text-lg leading-relaxed text-ink-700">{c.summary}</p>
              <div className="mt-6"><WhatsAppButton href={wa} variant="outline" position="hero" label="Book a free consultation" /></div>
            </div>
          </Container>
        </div>
      </header>

      {/* sticky stepper — the whole navigation model */}
      <nav className="sticky top-[68px] z-30 border-b border-hairline bg-surface/95 backdrop-blur">
        <Container>
          <ol className="-mx-1 flex gap-1 overflow-x-auto py-3">
            {STEPS.map((s, i) => (
              <li key={s.key}>
                <button
                  onClick={() => setStep(i)}
                  aria-current={i === step ? "step" : undefined}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors ${
                    i === step ? "bg-espresso text-ink-on-dark" : "text-ink-700 hover:bg-tint"
                  }`}
                >
                  <span className={`font-mono text-xs ${i === step ? "opacity-70" : "text-mocha"}`}>{i + 1}</span>
                  {s.label}
                </button>
              </li>
            ))}
          </ol>
        </Container>
        <div className="h-0.5 bg-hairline">
          <div className="h-full bg-mocha transition-all duration-300" style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
        </div>
      </nav>

      <Container className="py-12 sm:py-16">
        {/* ── step 1 · is this me ─────────────────────────────────────────── */}
        {active === "is-this-me" && (
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div>
              <h2 className="h-section">Is this what you&rsquo;re seeing?</h2>
              <p className="mt-5 text-xl leading-relaxed text-ink-900">{c.leadAnswer}</p>
              {c.sections?.[0] && (
                <div className="prose mt-8 space-y-5 leading-[1.75] text-ink-700">
                  {c.sections[0].body.map((p, i) => <p key={i}>{p}</p>)}
                </div>
              )}
              {doctor && (
                <div className="mt-8 border-t border-hairline pt-6">
                  <ReviewByline doctorName={doctor.fullName} mmc={doctor.mmc} date={dmy(c.lastReviewed)} photo={doctor.photo} href={`/doctors/${doctor.slug}`} />
                </div>
              )}
            </div>
            <div className="space-y-8">
              {m.figures.slice(0, 2).map((f) => (
                <figure key={f.src}>
                  <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-tint">
                    <Image src={f.src} alt="" fill sizes="(max-width:1024px) 100vw, 520px" className="object-cover object-left" />
                  </div>
                  <figcaption className="mt-3 text-sm leading-relaxed text-ink-500">{f.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        )}

        {/* ── step 2 · which type — media is the whole step ────────────────── */}
        {active === "which-type" && (
          <div>
            <div className="max-w-[62ch]">
              <h2 className="h-section">Which type do I have?</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                Acne is not one condition. The type decides the approach — active
                breakouts and the marks left behind are treated differently.
              </p>
            </div>
            <ul className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
              {m.illus.map((x) => (
                <li key={x.src} className="text-center">
                  <div className="relative mx-auto aspect-square w-full max-w-[220px]">
                    <Image src={x.src} alt={x.label} fill sizes="220px" className="object-contain" />
                  </div>
                  <p className="mt-4 font-display text-lg text-espresso">{x.label}</p>
                  <p className="mt-1 text-sm leading-snug text-ink-500">{x.sub}</p>
                </li>
              ))}
            </ul>
            <h3 className="h-sub mt-16">How it progresses</h3>
            <div className="mt-6 grid gap-6 lg:grid-cols-3">
              {m.slides.map((s) => (
                <div key={s.src} className="relative aspect-[2/1] overflow-hidden rounded-xl bg-tint ring-1 ring-hairline">
                  <Image src={s.src} alt={s.alt} fill sizes="(max-width:1024px) 100vw, 380px" className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── step 3 · causes ─────────────────────────────────────────────── */}
        {active === "causes" && c.drivers && (
          <div>
            <div className="max-w-[62ch]">
              <h2 className="h-section">{c.drivers.heading}</h2>
              {c.drivers.intro && <p className="mt-5 text-lg leading-relaxed text-ink-900">{c.drivers.intro}</p>}
            </div>
            <ul className="mt-12 space-y-12">
              {c.drivers.items.map((i, n) => {
                const fig = m.figures[n + 2];
                return (
                  <li key={i.lead} className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
                    <div className={n % 2 ? "lg:order-2" : ""}>
                      <p className="font-display text-2xl text-espresso">{i.lead}</p>
                      <p className="mt-4 leading-relaxed text-ink-700">{i.body}</p>
                    </div>
                    {fig && (
                      <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-tint">
                        <Image src={fig.src} alt="" fill sizes="(max-width:1024px) 100vw, 560px" className="object-cover object-left" />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
            {c.drivers.outro && <p className="mt-12 max-w-[62ch] leading-relaxed text-ink-700">{c.drivers.outro}</p>}
          </div>
        )}

        {/* ── step 4 · treatments ─────────────────────────────────────────── */}
        {active === "treatments" && (
          <div>
            <div className="max-w-[62ch]">
              <h2 className="h-section">What can help</h2>
              {c.treatmentsIntro && <p className="mt-5 text-lg leading-relaxed text-ink-900">{c.treatmentsIntro}</p>}
            </div>
            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              {options.map((t: Treatment) => {
                const w = c.treatmentWhy?.[t.slug];
                return (
                  <li key={t.slug} className="rounded-xl border border-hairline p-6">
                    <Link href={treatmentHref(t)} className="font-display text-xl text-espresso underline-offset-4 hover:underline">{t.name}</Link>
                    {w && <><p className="mt-2.5 text-sm font-medium text-mocha">Why for {c.name.toLowerCase()}: {w.why}</p>
                      <p className="mt-2.5 leading-relaxed text-ink-700">{w.body}</p></>}
                  </li>
                );
              })}
            </ul>
            {c.treatmentsNote && <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{c.treatmentsNote}</p>}
            {c.costFactors && (
              <div className="mt-14 border-t border-hairline pt-10">
                <h3 className="h-sub">What affects the cost</h3>
                <p className="mt-4 max-w-[62ch] leading-relaxed text-ink-700">{c.costFactors.intro}</p>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {c.costFactors.factors.map((f) => (
                    <li key={f} className="flex gap-3 leading-relaxed text-ink-700"><span className="text-mocha">·</span>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* ── step 5 · your visit ─────────────────────────────────────────── */}
        {active === "first-visit" && (
          <div>
            <div className="max-w-[62ch]">
              <h2 className="h-section">Your first visit</h2>
              {c.firstVisit && <p className="mt-5 text-lg leading-relaxed text-ink-900">{c.firstVisit.intro}</p>}
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {m.visit.map((v) => (
                <figure key={v.src}>
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-tint">
                    <Image src={v.src} alt="" fill sizes="(max-width:640px) 100vw, 340px" className="object-cover" />
                  </div>
                  <figcaption className="mt-3 text-sm leading-relaxed text-ink-500">{v.caption}</figcaption>
                </figure>
              ))}
            </div>
            {c.firstVisit && (
              <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {c.firstVisit.steps.map((s, i) => (
                  <li key={s.title} className="border-t-2 border-mocha pt-4">
                    <span className="font-mono text-sm text-mocha">{String(i + 1).padStart(2, "0")}</span>
                    <p className="mt-2 font-display text-lg text-espresso">{s.title}</p>
                    <p className="mt-2 leading-relaxed text-ink-700">{s.body}</p>
                  </li>
                ))}
              </ol>
            )}
            {c.risks && (
              <div className="mt-14 border-t border-hairline pt-10">
                <h3 className="h-sub">Risks and realistic limits</h3>
                <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                  {c.risks.items.map((i) => (
                    <li key={i.lead} className="max-w-[70ch] py-4 leading-relaxed text-ink-700">
                      <strong className="font-semibold text-espresso">{i.lead}</strong> {i.body}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* ── step 6 · results ────────────────────────────────────────────── */}
        {active === "results" && (
          <div>
            <div className="max-w-[62ch]">
              <h2 className="h-section">Results from Kaiteki patients</h2>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">
                Every case is different. These show what treatment has achieved for
                people with similar skin — not what it will achieve for you.
              </p>
            </div>
            <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {m.results.map((r) => (
                <li key={r.src}>
                  <div className="relative overflow-hidden rounded-xl bg-tint ring-1 ring-hairline" style={{ aspectRatio: r.ratio }}>
                    <Image src={r.src} alt={r.caption} fill sizes="(max-width:640px) 50vw, 300px" className="object-cover" />
                  </div>
                  <p className="mt-3 text-sm leading-snug text-ink-500">{r.caption}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[70ch] text-sm leading-relaxed text-ink-500">{RESULTS_DISCLAIMER}</p>
          </div>
        )}

        {/* step pager */}
        <div className="mt-16 flex items-center justify-between border-t border-hairline pt-8">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="text-sm text-ink-700 underline-offset-4 hover:underline disabled:opacity-30"
          >
            ← {step > 0 ? STEPS[step - 1].label : ""}
          </button>
          {step < STEPS.length - 1 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              className="rounded-full bg-espresso px-6 py-3 text-sm text-ink-on-dark"
            >
              Next: {STEPS[step + 1].label} →
            </button>
          ) : (
            <WhatsAppButton href={wa} position="mid" label="Book a free consultation" />
          )}
        </div>
      </Container>

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

      {c.faqs && (
        <Container className="py-14">
          <h2 className="h-section">Common questions</h2>
          <div className="mt-6 max-w-[70ch]"><Faq items={c.faqs} /></div>
          <div className="mt-12"><Disclaimer /></div>
        </Container>
      )}
    </article>
  );
}
