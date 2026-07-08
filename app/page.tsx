import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ConcernCard, TreatmentCard, SeeAllCard } from "@/components/cards";
import { BranchesExplorer } from "@/components/BranchesExplorer";
import { HeroFace } from "@/components/HeroFace";
import { DoctorsSlider } from "@/components/DoctorsSlider";
import { ArrowRight, MapPin, ShieldCheck, BadgeCheck, WhatsApp } from "@/components/icons";
import { site } from "@/lib/site";
import { concerns } from "@/content/data/concerns";
import { treatments } from "@/content/data/treatments";
import { awards } from "@/content/data/awards";

export const metadata: Metadata = {
  description:
    "Kaiteki Skin Aesthetic Clinic — an MOH-licensed skin & aesthetic clinic with 9 branches across Malaysia. Doctor-led care for skin, ageing and body concerns. Book a free consultation on WhatsApp.",
};

// stagger index helper (typed CSS custom property)
const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

function TrustItem({ icon, title, sub }: { icon: ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-start gap-3.5 lg:border-l lg:border-hairline lg:pl-6 lg:first:border-l-0 lg:first:pl-0">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface">
        {icon}
      </span>
      <div>
        <p className="font-semibold text-espresso">{title}</p>
        <p className="mt-0.5 text-sm text-ink-500">{sub}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const topTreatments = treatments.slice(0, 8);

  return (
    <>
      {/* HERO — warm-sanctuary fold: subject photo with interactive concern
          hotspots (see HeroFace). Pulled under the transparent header. */}
      <section className="hero-warm relative -mt-[68px] overflow-hidden">
        <Container className="relative">
          {/* min-h-[100svh] + the -mt on the section = the fold always fills
              the viewport exactly (svh so mobile URL bars don't cause jump). */}
          <div className="grid min-h-[100svh] items-end gap-x-10 pt-[68px] lg:grid-cols-[minmax(0,1fr)_minmax(0,46%)]">
            {/* Copy column */}
            <div className="pb-10 pt-10 sm:pt-14 lg:self-center lg:pb-24 lg:pt-16">
              <p className="rise text-xs font-semibold uppercase tracking-[0.14em] text-accent" style={si(0)}>
                {site.tagline}
              </p>
              <h1
                className="mask-clip mt-3 block text-4xl font-bold leading-[1.08] text-espresso sm:text-5xl lg:text-[3.5rem]"
                style={{ letterSpacing: "-0.02em" }}
              >
                <span className="mask-line text-balance" style={si(0)}>
                  Considered skin &amp; aesthetic care, across Malaysia.
                </span>
              </h1>
              <p className="rise prose mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-700" style={si(1)}>
                Nine branches nationwide. Every treatment is assessed and carried out
                by registered doctors — a calm, informed decision about your skin.
              </p>
              <div className="rise mt-7 flex flex-col items-start gap-5" style={si(2)}>
                <WhatsAppButton size="lg" label="Book a Free Consultation" />
                <Link
                  href="/treatments"
                  className="group inline-flex items-center gap-1.5 text-base font-medium text-espresso"
                >
                  <span className="border-b border-espresso/30 pb-0.5 transition-colors group-hover:border-espresso">
                    Explore treatments
                  </span>
                  <ArrowRight size={18} className="text-accent transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* One quiet trust line — no card chrome, keeps the fold calm */}
              <p className="rise mt-10 hidden items-center gap-2.5 text-sm text-ink-500 sm:flex" style={si(3)}>
                <MapPin size={16} className="shrink-0 text-accent" />
                <span>
                  9 branches across KL, Selangor, Johor &amp; Sabah —{" "}
                  <Link
                    href="/locations"
                    className="font-medium text-accent underline decoration-mocha/50 underline-offset-4 transition-colors hover:text-espresso"
                  >
                    find your nearest
                  </Link>
                </span>
              </p>
            </div>

            {/* Subject column — bottom-flush, hotspots on the face */}
            <HeroFace />
          </div>
        </Container>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-hairline bg-tint">
        <Container className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-4 lg:py-8">
          <TrustItem
            icon={<MapPin size={20} className="text-mocha" />}
            title="9 branches nationwide"
            sub="KL · Selangor · Johor · Sabah"
          />
          <TrustItem
            icon={<ShieldCheck size={20} className="text-mocha" />}
            title="Doctor-led care"
            sub="Assessed by MMC-registered doctors"
          />
          <TrustItem
            icon={<BadgeCheck size={20} className="text-mocha" />}
            title="KKLIU-compliant"
            sub="Information reviewed for advertising"
          />
          <TrustItem
            icon={<WhatsApp size={18} className="text-cta" />}
            title="Free consultation"
            sub="On WhatsApp · no obligation"
          />
        </Container>
      </section>

      {/* CONCERNS */}
      <section className="bg-page">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            title="What brings you in?"
            intro="Start with the concern, not the machine. Each guide explains the options a doctor may consider — and what to realistically expect."
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {concerns.map((c, i) => (
              <ConcernCard key={c.slug} c={c} className="reveal" style={si(i)} />
            ))}
            {/* Closes the trailing row (10 concerns leave a lone cell on the 3-col
                grid) and carries the section's "view all" link. */}
            <SeeAllCard
              href="/concerns"
              label="Explore all concerns"
              className="reveal sm:col-span-2 lg:col-span-2"
            />
          </div>
        </Container>
      </section>

      {/* TREATMENTS */}
      <section className="border-y border-hairline bg-tint">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              title="Evidence-informed treatments"
              intro="Non-surgical, established platforms for skin, ageing and body concerns."
            />
            <Link href="/treatments" className="inline-flex items-center gap-1.5 py-1.5 -my-1.5 text-sm font-medium text-accent hover:text-espresso">
              View all treatments <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topTreatments.map((t, i) => (
              <TreatmentCard key={t.slug} t={t} className="reveal" style={si(i)} />
            ))}
          </div>
        </Container>
      </section>

      {/* DOCTORS */}
      <section className="bg-page">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              title="Care led by registered doctors"
              intro="Every treatment page names the doctor who reviewed it, with their MMC registration and review date. It is the same standard we hold ourselves to in the clinic — and the reason we don't rely on testimonials or before-and-after photos."
            />
            <Link href="/doctors" className="inline-flex items-center gap-1.5 py-1.5 -my-1.5 whitespace-nowrap text-sm font-medium text-accent hover:text-espresso">
              Meet the full medical team <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10">
            <DoctorsSlider />
          </div>
        </Container>
      </section>

      {/* RECOGNITION */}
      <section className="border-y border-hairline bg-tint">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            align="center"
            title="Recognised by our treatment partners"
            intro="Performance awards from the device and treatment brands used in our clinics — a record of standing with the manufacturers, not a patient-facing claim."
          />
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((a, i) => (
              <div
                key={a.title}
                style={si(i)}
                className="reveal flex items-center justify-between gap-4 rounded-xl border border-hairline bg-surface px-5 py-4"
              >
                <span className="text-sm font-semibold text-espresso">{a.title}</span>
                {a.period && <span className="ledger shrink-0 !text-ink-500">{a.period}</span>}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* BRANCHES */}
      <section className="bg-page">
        <Container className="py-16 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading title="Nine branches across Malaysia" intro="Klang Valley, Johor and Sabah — with full address, hours and directions on each branch page." />
            <Link href="/locations" className="inline-flex items-center gap-1.5 py-1.5 -my-1.5 text-sm font-medium text-accent hover:text-espresso">
              All locations <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10">
            <BranchesExplorer />
          </div>
        </Container>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-espresso">
        <Container className="flex flex-col items-center gap-6 py-16 text-center sm:py-20">
          <h2 className="text-balance text-3xl font-bold text-ink-on-dark sm:text-4xl">
            Talk to a doctor before you decide.
          </h2>
          <p className="max-w-xl text-lg leading-relaxed text-ink-on-dark/75">
            Consultations are free and there is no obligation. Message us on WhatsApp and
            we&rsquo;ll help you find the right branch and the right starting point.
          </p>
          <WhatsAppButton size="lg" />
        </Container>
      </section>
    </>
  );
}
