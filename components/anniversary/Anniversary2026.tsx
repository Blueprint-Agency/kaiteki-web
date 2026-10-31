import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Dandelion } from "@/components/Dandelion";
import { Disclaimer } from "@/components/Disclaimer";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { Sparkle } from "@/components/icons";
import { Countdown } from "./Countdown";
import { CAMPAIGN, posters, waMessage, type Poster } from "@/content/data/anniversary-2026";
import { branches } from "@/content/data/branches";
import { pageMeta } from "@/lib/seo";
import { webPageNode } from "@/lib/schema";
import { waLink } from "@/lib/wa";

// /anniversary/2026 — the 7th Anniversary campaign page. Sections, order and
// copy follow the designer's concept page (Kaiteki_7th_Anniversary_Share/
// index.html): hero → countdown → theme → offers → branches → customer
// service. Only the shell is the site's own: header/footer, Fraunces display
// type, the espresso/sand palette and the green WhatsApp CTA.

const PATH = "/anniversary/2026";
const TITLE = "Kaiteki | 7 Years of Confidence";
const DESCRIPTION =
  "Celebrate Kaiteki's 7th anniversary. Discover our Positive Face Project and visit one of nine branches across Malaysia.";
const SHARE_IMAGE = "https://cdn.kaiteki.my/images/promos/anniversary-2026-1.jpg";

export function anniversary2026Meta() {
  return pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH, image: SHARE_IMAGE });
}

const si = (i: number): CSSProperties => ({ "--i": i } as CSSProperties);

// Non-WhatsApp buttons. Espresso, so the green stays reserved for WhatsApp.
const BTN =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors active:scale-[0.98]";
const BTN_SOLID = `${BTN} bg-espresso text-ink-on-dark hover:bg-ink-700`;
const BTN_OUTLINE = `${BTN} border border-espresso text-espresso hover:bg-espresso hover:text-ink-on-dark`;

export function Anniversary2026() {
  return (
    <>
      <JsonLd data={webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION, image: SHARE_IMAGE })} />
      <Hero />
      <CountdownSection />
      <Theme />
      <Offers />
      <Branches />
      <CustomerService />
    </>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="hero-warm relative overflow-hidden">
      <Container className="pt-6 sm:pt-8">
        <Breadcrumbs items={[{ label: "7th Anniversary" }]} />
        <div className="grid items-center gap-x-12 gap-y-10 pb-14 pt-8 sm:pt-12 lg:grid-cols-2 lg:pb-20">
          <div>
            <p className="rise kicker" style={si(0)}>
              Kaiteki · 7th anniversary
            </p>
            <h1 className="mask-clip mt-4 h-hero">
              <span className="mask-line" style={si(0)}>
                Seven years.
                <br />
                Countless reasons to <span className="h-em">smile.</span>
              </span>
            </h1>
            <p className="rise prose mt-5 max-w-[450px] text-lg leading-relaxed text-ink-700" style={si(1)}>
              Celebrating the faces, stories and confidence that have shaped our journey. Here&apos;s to embracing the
              positive in every one of us.
            </p>
            <div className="rise mt-8" style={si(2)}>
              <a href="#offers" className={BTN_SOLID}>
                Explore the celebration
              </a>
            </div>
          </div>
          <SevenMark />
        </div>
      </Container>
    </section>
  );
}

/** The large "7" with "Years of Kaiteki" beneath it, set in an arch. */
function SevenMark() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:mr-0">
      <div className="hero-arch relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[10px] bg-[radial-gradient(circle_at_50%_40%,#f9eee9_0%,#e9d2ca_50%,#c6aa93_100%)] ring-1 ring-hairline">
        <Dandelion />
        <div aria-hidden className="absolute inset-0 flex items-center justify-center pt-[4%]">
          <span className="relative font-display text-[clamp(14rem,28vw,20rem)] font-[340] leading-none text-white/80 [text-shadow:0_6px_30px_rgb(118_91_78/0.35)]">
            7
            <Sparkle size={34} className="absolute -right-6 top-8 text-white" />
          </span>
        </div>
        <p className="absolute inset-x-0 bottom-[12%] text-center text-xs font-semibold uppercase tracking-[0.3em] text-espresso/80">
          Years of Kaiteki
        </p>
      </div>
    </div>
  );
}

/* ── Countdown ───────────────────────────────────────────────────────────── */

function CountdownSection() {
  return (
    <section aria-labelledby="countdown-h" className="bg-tint">
      <Container className="py-16 text-center sm:py-20">
        <p className="kicker">The celebration ends 30 November 2026</p>
        <h2 id="countdown-h" className="h-section mt-3">
          Make every moment count.
        </h2>
        <Countdown endsAt={CAMPAIGN.endsAt} endedText="Our anniversary promotion has ended." />
      </Container>
    </section>
  );
}

/* ── Theme ───────────────────────────────────────────────────────────────── */

function Theme() {
  return (
    <section id="project" className="scroll-mt-20 bg-porcelain/40">
      <Container className="reveal grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2 lg:gap-14">
        <div
          aria-hidden
          className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-[10px] bg-[linear-gradient(145deg,#d9bdb5,#f8ede4)] p-8 text-center sm:min-h-[410px]"
        >
          <Dandelion className="opacity-70" />
          <p className="relative font-display text-[clamp(2.2rem,1.5rem+2.6vw,3.25rem)] font-[380] italic leading-[1.1] text-white [text-shadow:0_2px_18px_rgb(118_91_78/0.3)]">
            The Positive
            <br />
            Face Project
          </p>
        </div>

        <div>
          <p className="kicker">Our anniversary theme</p>
          <h2 className="h-section mt-3">
            Less negativity.
            <br />
            More <span className="h-em">possibilities.</span>
          </h2>
          <div className="prose mt-5 space-y-4 text-lg leading-relaxed text-ink-700">
            <p>
              Our 7th anniversary celebrates beauty. It&apos;s an invitation to let go of unnecessary self criticism,
              embrace what makes us unique, and move forward with confidence.
            </p>
            <p>
              Discover our anniversary experience, created around the idea that a positive face begins with a positive
              perspective.
            </p>
          </div>
          <a href="#offers" className={`${BTN_OUTLINE} mt-7`}>
            View anniversary offers
          </a>
          <p className="mt-4 text-sm text-ink-500">
            Offers valid during the anniversary campaign, subject to terms and consultation.
          </p>
        </div>
      </Container>
    </section>
  );
}

/* ── Offers ──────────────────────────────────────────────────────────────── */

function Offers() {
  return (
    <section id="offers" className="scroll-mt-20 bg-porcelain/40">
      <Container className="pb-16 pt-4 sm:pb-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="kicker">1 to 30 November 2026</p>
          <h2 className="h-section mt-3">The Positive Face Project Anniversary Offers</h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Explore our five official promotional posters. Tap any image to see the full details. Offers and
            eligibility are subject to consultation and clinic terms.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {posters.map((p) => (
            <PosterCard key={p.src} p={p} />
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center">
          <p className="text-sm text-ink-500">
            Promotional details are shown in the original artwork. Treatment suitability is assessed by a qualified
            clinician.
          </p>
          <div className="text-left">
            <Disclaimer />
          </div>
        </div>
      </Container>
    </section>
  );
}

function PosterCard({ p }: { p: Poster }) {
  return (
    <a
      href={p.src}
      target="_blank"
      rel="noopener"
      aria-label={`View ${p.label} full-size`}
      className={`reveal group block overflow-hidden rounded-[18px] border border-hairline bg-surface shadow-[0_12px_34px_-14px_rgb(73_54_40/0.25)] ${
        p.featured ? "sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-[520px]" : ""
      }`}
    >
      <Image
        src={p.src}
        alt={p.alt}
        width={p.featured ? 1080 : 1024}
        height={p.featured ? 1350 : 1280}
        sizes="(min-width: 1200px) 560px, (min-width: 640px) 48vw, 100vw"
        className="h-auto w-full"
      />
      <span className="flex items-center justify-between gap-3 px-5 py-4 text-sm font-semibold text-espresso">
        {p.label}
        <span aria-hidden className="text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
          ↗
        </span>
      </span>
    </a>
  );
}

/* ── Branches ────────────────────────────────────────────────────────────── */

function Branches() {
  return (
    <section id="branches" className="scroll-mt-20">
      <Container className="py-16 sm:py-24">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="kicker">Visit us</p>
          <h2 className="h-section mt-3">
            Find your <span className="h-em">Kaiteki.</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-700">
            Nine branches across Kuala Lumpur, Selangor, Johor and Sabah.
          </p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b) => (
            <li key={b.slug} className="reveal rounded-[10px] border border-hairline bg-surface p-6">
              <p className="kicker">{b.region}</p>
              <h3 className="h-sub mt-2">{b.name}</h3>
              <Link
                href={`/locations/${b.slug}`}
                className="mt-3 inline-block text-sm text-accent underline decoration-mocha/40 underline-offset-4 transition-colors hover:text-espresso"
              >
                View branch address
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center">
          <Link href="/locations" className={BTN_OUTLINE}>
            View all locations
          </Link>
        </p>
      </Container>
    </section>
  );
}

/* ── Customer service ────────────────────────────────────────────────────── */

function CustomerService() {
  return (
    <section id="customer-service" className="on-dark relative overflow-hidden border-b border-ink-on-dark/15 bg-espresso">
      <Dandelion className="opacity-40" />
      <Container className="reveal relative flex flex-col items-center py-20 text-center sm:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sand">Your journey continues</p>
        <h2 className="h-section mt-3">Here&apos;s to your next chapter.</h2>
        <p className="mt-4 text-lg text-ink-on-dark/85">Thank you for being part of our first seven years.</p>
        <WhatsAppButton
          size="lg"
          position="closing"
          label="WhatsApp customer service"
          href={waLink(waMessage)}
          className="mt-7"
        />
        <p className="mt-4 text-sm text-ink-on-dark/75">
          WhatsApp our customer service team at 010 381 8170 for all branches.
        </p>
      </Container>
    </section>
  );
}
