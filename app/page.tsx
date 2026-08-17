import type { CSSProperties } from "react";
import { getImageProps } from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { HeroFace } from "@/components/HeroFace";
import { HeroSlider } from "@/components/HeroSlider";
import { WhyKaiteki } from "@/components/WhyKaiteki";
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
import { site } from "@/lib/site";
import { waLink } from "@/lib/wa";
import { pageMeta } from "@/lib/seo";
import { JsonLd } from "@/components/JsonLd";
import { webPageNode } from "@/lib/schema";

const TITLE = "Kaiteki: Japanese-Inspired Aesthetic Clinic in Malaysia";
const DESCRIPTION =
  "9 branches, 20 doctors, one standard of aesthetic care across KL, Selangor, Johor and Sabah. Your concern is assessed first, then the right treatment follows.";

export const metadata = pageMeta({
  title: TITLE,
  description: DESCRIPTION,
  path: "/",
});

// stagger index helper (typed CSS custom property)
const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

export default function Home() {
  return (
    <>
      <JsonLd
        data={webPageNode({
          path: "/",
          name: TITLE,
          description: DESCRIPTION,
          image: "/images/hero/hero-subject.png",
        })}
      />
      <PromoModal />
      {/* HERO — a two-slide carousel that auto-advances every 5s: the current
          campaign banner, then the warm-sanctuary fold. Both slides are
          server-rendered inside the client HeroSlider, so the <h1>, the CTAs and
          every concern hotspot link stay in the HTML. Pulled under the
          transparent header; each slide re-adds the 68px clearance itself. */}
      <section className="hero-warm relative -mt-[68px] overflow-hidden">
        <HeroSlider
          // Matches slide 1's natural height exactly (68px clearance + the
          // capped banner), so nothing shifts when the measured height takes
          // over at hydration. Two ratios because the banner is art-directed:
          // 4:5 (125vw) on phones, 16:9 (56.25vw) from sm up — see PromoSlide.
          initialHeightClass="h-[calc(68px+min(125vw,100dvh-92px))] sm:h-[calc(68px+min(56.25vw,100dvh-92px))]"
          slides={[
            { label: "Merdeka Steady Deals promotion", content: <PromoSlide /> },
            { label: "Japanese-inspired skin & aesthetic care", content: <WarmSlide /> },
          ]}
        />
      </section>

      {/* Post-hero narrative: concerns → treatments → the doctors who stand
          behind them → why (E-E-A-T) → recognition → branches → invitation. */}
      <ConcernsMosaic />
      <TreatmentsMenu />
      <HowItWorks />
      <DoctorsFeature />
      <WhyKaiteki />
      <RecognitionCabinet />
      {/* Compliance: patient testimonials are restricted under MAB 1/2023 &
          3/2023 — see the note in content/data/reviews.ts. Delete this line to
          remove the block. */}
      <GoogleReviews />
      <BranchStrip />
      <ClosingCta />
      <HomeFaq />
    </>
  );
}

/* ── Hero slide 1 — current campaign banner ─────────────────────────────────
   Art-directed, not just rescaled: the 16:9 desktop artwork puts its cards in
   one row, which at 390px renders the captions around 5px tall, so phones get a
   4:5 recut instead. A <picture> (rather than two <Image>s toggled with
   `hidden`) is what keeps the browser from downloading both — a display:none
   <img> is still fetched, and this one is on the LCP path.

   Both files are width-capped so the banner can never grow taller than the
   fold. Tapping it opens WhatsApp with the campaign named, matching the site's
   WhatsApp-only conversion model. */
function PromoSlide() {
  const shared = {
    alt: "Kaiteki Merdeka Steady Deals: buy 2 get 1 free across four treatment bundles, with a free Deusaderm or Radiesse bonus. Promo period 16 August to 15 September. Terms and conditions apply.",
    sizes: "100vw",
    priority: true,
  };
  const { props: desktop } = getImageProps({
    ...shared,
    src: "/images/hero/merdeka-2026-banner.png",
    width: 1920,
    height: 1080,
  });
  const { props: mobile } = getImageProps({
    ...shared,
    src: "/images/hero/merdeka-2026-banner-mobile.png",
    width: 1080,
    height: 1350,
  });

  return (
    <div className="pt-[68px]">
      {/* getImageProps() returns the srcSet but drops `priority`'s side effects,
          so the LCP banner gets neither a preload nor fetchpriority unless we
          emit them by hand. React hoists these into <head>; `media` is what
          keeps the phone from preloading the desktop file and vice versa. */}
      <link
        rel="preload"
        as="image"
        media="(min-width: 640px)"
        imageSrcSet={desktop.srcSet}
        imageSizes={desktop.sizes}
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        media="(max-width: 639.98px)"
        imageSrcSet={mobile.srcSet}
        imageSizes={mobile.sizes}
        fetchPriority="high"
      />
      <a
        href={waLink("Hi Kaiteki, I'd like to know more about the Merdeka Steady Deals promotion.")}
        target="_blank"
        rel="noopener"
        data-ga="cta_click"
        data-ga-cta_position="hero_banner"
        className="block"
      >
        <picture>
          <source media="(min-width: 640px)" srcSet={desktop.srcSet} sizes={desktop.sizes} />
          {/* The <img> carries the phone artwork, so `sm:` restyles it for the
              desktop source the media query above swaps in. The aspect classes
              set the box (never inherited from the file), and object-cover is
              belt-and-braces: both ratios are exact, so nothing is cropped. */}
          <img
            {...mobile}
            alt={shared.alt}
            fetchPriority="high"
            className="mx-auto w-full max-w-[calc((100dvh-92px)*0.8)] object-cover aspect-[4/5] sm:aspect-[16/9] sm:max-w-[calc((100dvh-92px)*1.7778)]"
          />
        </picture>
      </a>
    </div>
  );
}

/* ── Hero slide 2 — the "Warm Sanctuary" fold ───────────────────────────────
   Subject photo with interactive concern hotspots (see HeroFace). */
function WarmSlide() {
  return (
    <Container className="relative">
      {/* pt-[68px] offsets the -mt on the section so content clears the
          transparent header; the fold sizes to its content, not the viewport. */}
      <div className="grid items-end gap-x-10 pt-[68px] lg:grid-cols-[minmax(0,1fr)_minmax(0,50%)]">
        {/* Copy column — centred on mobile, left-aligned from lg up */}
        <div className="pb-10 pt-10 text-center sm:pt-14 lg:self-center lg:pb-24 lg:pt-16 lg:text-left">
          <p className="rise kicker" style={si(0)}>
            {site.tagline}
          </p>
          <h1 className="mask-clip mt-4 block h-hero">
            <span className="mask-line" style={si(0)}>
              Japanese-inspired skin &amp; <span className="h-em">aesthetic care</span>.
            </span>
          </h1>
          <p className="rise prose mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-700 mx-auto lg:mx-0" style={si(1)}>
            A calm, considered approach to your skin. Nine branches across
            Malaysia, 20 doctors, and every treatment starts with an assessment.
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
              9 branches across KL, Selangor, Johor &amp; Sabah:{" "}
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
  );
}
