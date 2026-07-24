import type { CSSProperties } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { HeroFace } from "@/components/HeroFace";
import { WhyKaiteki } from "@/components/WhyKaiteki";
import { RecognitionCabinet } from "@/components/RecognitionCabinet";
import { ConcernsMosaic } from "@/components/ConcernsMosaic";
import { TreatmentsMenu } from "@/components/TreatmentsMenu";
import { HowItWorks } from "@/components/HowItWorks";
import { DoctorsFeature } from "@/components/DoctorsFeature";
import { BranchStrip } from "@/components/BranchStrip";
import { ClosingCta } from "@/components/ClosingCta";
import { HomeFaq } from "@/components/HomeFaq";
import { ArrowRight, MapPin } from "@/components/icons";
import { site } from "@/lib/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Kaiteki — Japanese-Inspired Aesthetic Clinic in Malaysia",
  description:
    "9 branches, 20 doctors, one standard of aesthetic care across KL, Selangor, Johor and Sabah. Your concern is assessed first, then the right treatment follows.",
  path: "/",
});

// stagger index helper (typed CSS custom property)
const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

export default function Home() {
  return (
    <>
      {/* HERO — warm-sanctuary fold: subject photo with interactive concern
          hotspots (see HeroFace). Pulled under the transparent header. */}
      <section className="hero-warm relative -mt-[68px] overflow-hidden">
        <Container className="relative">
          {/* pt-[68px] offsets the -mt on the section so content clears the
              transparent header; the fold sizes to its content, not the viewport. */}
          <div className="grid items-end gap-x-10 pt-[68px] lg:grid-cols-[minmax(0,1fr)_minmax(0,50%)]">
            {/* Copy column — centred on mobile, left-aligned from lg up */}
            <div className="pb-10 pt-10 text-center sm:pt-14 lg:self-center lg:pb-24 lg:pt-16 lg:text-left">
              <p className="rise text-xs font-semibold uppercase tracking-[0.14em] text-accent" style={si(0)}>
                {site.tagline}
              </p>
              <h1
                className="mask-clip mt-3 block text-4xl font-bold leading-[1.08] text-espresso sm:text-5xl lg:text-[3.5rem]"
                style={{ letterSpacing: "-0.02em" }}
              >
                <span className="mask-line text-balance" style={si(0)}>
                  Japanese-inspired skin &amp; aesthetic care, across Malaysia.
                </span>
              </h1>
              <p className="rise prose mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-700 mx-auto lg:mx-0" style={si(1)}>
                A calm, considered approach to your skin. Nine branches, 20 doctors,
                and every treatment starts with an assessment.
              </p>
              <div className="rise mt-7 flex flex-col items-center gap-5 lg:items-start" style={si(2)}>
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
              <p className="rise mt-10 hidden items-center justify-center gap-2.5 text-sm text-ink-500 sm:flex lg:justify-start" style={si(3)}>
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

      {/* Post-hero narrative: concerns → treatments → the doctors who stand
          behind them → why (E-E-A-T) → recognition → branches → invitation. */}
      <ConcernsMosaic />
      <TreatmentsMenu />
      <HowItWorks />
      <DoctorsFeature />
      <WhyKaiteki />
      <RecognitionCabinet />
      <BranchStrip />
      <ClosingCta />
      <HomeFaq />
    </>
  );
}
