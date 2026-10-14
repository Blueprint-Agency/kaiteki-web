import type { CSSProperties } from "react";
import Link from "next/link";
import { Container } from "@/components/Container";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { HeroFace } from "@/components/HeroFace";
import { WhyKaiteki } from "@/components/WhyKaiteki";
import { LeaderBadges } from "@/components/LeaderBadges";
import { RecognitionCabinet } from "@/components/RecognitionCabinet";
import { ConcernsMosaic } from "@/components/ConcernsMosaic";
import { TreatmentsMenu } from "@/components/TreatmentsMenu";
import { HowItWorks } from "@/components/HowItWorks";
import { DoctorsFeature } from "@/components/DoctorsFeature";
import { BranchStrip } from "@/components/BranchStrip";
import { GoogleReviews } from "@/components/GoogleReviews";
import { ClosingCta } from "@/components/ClosingCta";
import { HomeFaq } from "@/components/HomeFaq";
import { PromoModal } from "@/components/PromoModal";
import { ArrowRight, MapPin } from "@/components/icons";
import { doctors } from "@/content/data/doctors";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { webPageNode } from "@/lib/schema";
import { homeCopy } from "@/content/i18n/home";
import { chrome, fmt } from "@/content/i18n/chrome";
import { lhref } from "@/lib/locale-pages";
import { waLink } from "@/lib/wa";
import type { Locale } from "@/lib/i18n";

// The homepage, rendered by app/(en)/page.tsx, app/zh/page.tsx and app/ms/page.tsx.
// Copy lives in content/i18n/home.ts; this file is layout only.

const n = String(doctors.length);

export function homeMeta(locale: Locale) {
  const m = homeCopy[locale].meta;
  return pageMeta({
    title: m.title,
    description: fmt(m.description, { n }),
    path: "/",
    locale,
  });
}

// stagger index helper (typed CSS custom property)
const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

export function HomePage({ locale }: { locale: Locale }) {
  const copy = homeCopy[locale];
  return (
    <>
      <JsonLd
        data={webPageNode({
          path: "/",
          name: copy.meta.title,
          description: fmt(copy.meta.description, { n }),
          image: "/images/hero/hero-subject.png",
          locale,
        })}
      />
      <PromoModal copy={copy.promo} productsHref={lhref(locale, "/products")} />
      {/* HERO — warm-sanctuary fold: subject photo with interactive concern
          hotspots (see HeroFace). Pulled under the transparent header. When a
          campaign banner is running, wrap this in components/HeroSlider. */}
      <section className="hero-warm relative -mt-[68px] overflow-hidden">
        <WarmSlide locale={locale} />
      </section>

      {/* Post-hero narrative: concerns → treatments → the doctors who stand
          behind them → why (E-E-A-T) → recognition → branches → invitation. */}
      {/* Device-fleet records, straight under the fold: the first thing after
          the hero, before the site starts explaining itself. */}
      <LeaderBadges locale={locale} />
      <ConcernsMosaic locale={locale} />
      <TreatmentsMenu locale={locale} />
      <HowItWorks locale={locale} />
      <DoctorsFeature locale={locale} />
      <WhyKaiteki locale={locale} />
      <RecognitionCabinet locale={locale} />
      {/* Compliance: patient testimonials are restricted under MAB 1/2023 &
          3/2023 — see the note in content/data/reviews.ts. Delete this line to
          remove the block. */}
      <GoogleReviews copy={copy.reviews} />
      <BranchStrip locale={locale} />
      <ClosingCta locale={locale} />
      <HomeFaq locale={locale} />
    </>
  );
}

/* ── Hero — the "Warm Sanctuary" fold ─────────────────────────────────────────
   Subject photo with interactive concern hotspots (see HeroFace). */
function WarmSlide({ locale }: { locale: Locale }) {
  const h = homeCopy[locale].hero;
  return (
    <Container className="relative">
      {/* pt-[68px] offsets the -mt on the section so content clears the
          transparent header; the fold sizes to its content, not the viewport. */}
      <div className="grid items-end gap-x-10 pt-[68px] lg:grid-cols-[minmax(0,1fr)_minmax(0,50%)]">
        {/* Copy column — centred on mobile, left-aligned from lg up */}
        <div className="pb-10 pt-10 text-center sm:pt-14 lg:self-center lg:pb-24 lg:pt-16 lg:text-left">
          <p className="rise kicker" style={si(0)}>
            {h.kicker}
          </p>
          <h1 className="mask-clip mt-4 block h-hero">
            <span className="mask-line" style={si(0)}>
              {h.h1.pre}<span className="h-em">{h.h1.em}</span>{h.h1.post}
            </span>
          </h1>
          <p className="rise prose mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-700 mx-auto lg:mx-0" style={si(1)}>
            {fmt(h.sub, { n })}
          </p>
          <div className="rise mt-7 flex flex-col items-center gap-5 lg:items-start" style={si(2)}>
            <WhatsAppButton size="lg" label={h.cta} href={waLink(chrome[locale].wa.generic)} />
            <Link
              href={lhref(locale, "/treatments")}
              className="group inline-flex items-center gap-1.5 text-base font-medium text-espresso"
            >
              <span className="border-b border-espresso/30 pb-0.5 transition-colors group-hover:border-espresso">
                {h.explore}
              </span>
              <ArrowRight size={18} className="text-accent transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* One quiet trust line — no card chrome, keeps the fold calm */}
          <p className="rise mt-10 hidden items-center justify-center gap-2.5 text-sm text-ink-500 sm:flex lg:justify-start" style={si(3)}>
            <MapPin size={16} className="shrink-0 text-accent" />
            <span>
              {h.branchesLine}{" "}
              <Link
                href={lhref(locale, "/locations")}
                className="font-medium text-accent underline decoration-mocha/50 underline-offset-4 transition-colors hover:text-espresso"
              >
                {h.findNearest}
              </Link>
            </span>
          </p>
        </div>

        {/* Subject column — bottom-flush, hotspots on the face */}
        <HeroFace locale={locale} />
      </div>
    </Container>
  );
}
