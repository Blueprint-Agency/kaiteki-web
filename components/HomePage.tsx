import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { HeroFace } from "@/components/HeroFace";
import { HeroSlider } from "@/components/HeroSlider";
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
      {/* HERO — a carousel that auto-advances every 5s: the two 7th Anniversary
          banners (1–30 Nov 2026), then the warm-sanctuary fold. Every slide is
          server-rendered inside the client HeroSlider, so the <h1>, the CTAs
          and every concern hotspot link stay in the HTML. Pulled under the
          transparent header; each slide re-adds the 68px clearance itself.
          When the campaign ends, render <WarmSlide locale={locale} /> alone
          again; without `lead={false}` its photo gets `priority` back. */}
      <section className="hero-warm relative -mt-[68px] overflow-hidden">
        <HeroSlider
          // Matches a banner slide's natural height exactly (68px clearance +
          // the width-capped 16:9 banner), so hydration doesn't shift anything.
          initialHeightClass="h-[calc(68px+min(56.25vw,100dvh-92px))]"
          slides={[
            ...ANNIVERSARY_BANNERS.map((src, i) => ({
              label: copy.campaign.slides[i].label,
              content: <BannerSlide locale={locale} index={i} src={src} />,
            })),
            {
              label: copy.hero.h1.pre + copy.hero.h1.em,
              content: <WarmSlide locale={locale} lead={false} />,
            },
          ]}
        />
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

/* ── Hero — campaign banner slides ───────────────────────────────────────────
   16:9 artwork from the designer's PDF, hosted on R2. Width-capped so a banner
   never grows taller than the fold. Tapping it opens WhatsApp with the campaign
   named (WhatsApp-only conversion). The artwork has a slider arrow printed on
   it (right edge on banner 1, left edge on banner 2); an invisible button sits
   over each one, so it does what it looks like rather than opening WhatsApp. */
const ANNIVERSARY_BANNERS = [
  "https://cdn.kaiteki.my/images/promos/anniversary-2026-1.jpg",
  "https://cdn.kaiteki.my/images/promos/anniversary-2026-2.jpg",
];
// Arrow centres as a share of the artwork's width/height (from the PDF).
const BANNER_ARROWS = [
  { left: "97.27%", top: "48.1%", to: 1, dir: "next" },
  { left: "2.17%", top: "48.1%", to: 0, dir: "prev" },
] as const;

function BannerSlide({ locale, index, src }: { locale: Locale; index: number; src: string }) {
  const c = homeCopy[locale].campaign;
  const arrow = BANNER_ARROWS[index];
  return (
    <div className="pt-[68px]">
      <div className="relative mx-auto w-full max-w-[calc((100dvh-92px)*1.7778)]">
        <a
          href={waLink(c.waMessage)}
          target="_blank"
          rel="noopener"
          data-ga="cta_click"
          data-ga-cta_position="hero_banner"
          className="block"
        >
          <Image
            src={src}
            alt={c.slides[index].alt}
            width={2880}
            height={1620}
            sizes="100vw"
            priority={index === 0}
            className="aspect-[16/9] h-auto w-full"
          />
        </a>
        {arrow && (
          <button
            type="button"
            data-slide-to={arrow.to}
            aria-label={c[arrow.dir]}
            style={{ left: arrow.left, top: arrow.top }}
            className="absolute aspect-square w-[max(2.75rem,5%)] -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          />
        )}
      </div>
    </div>
  );
}

/* ── Hero — the "Warm Sanctuary" fold ─────────────────────────────────────────
   Subject photo with interactive concern hotspots (see HeroFace). `lead` is
   false while a campaign banner is the first slide and owns the LCP preload. */
function WarmSlide({ locale, lead = true }: { locale: Locale; lead?: boolean }) {
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
        <HeroFace locale={locale} priority={lead} />
      </div>
    </Container>
  );
}
