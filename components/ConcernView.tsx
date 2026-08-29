import { getImageProps } from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadAnswer } from "@/components/LeadAnswer";
import { Ledger, ReviewByline } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { TechnologyCard } from "@/components/cards";
import { FactRail, CtaMid } from "@/components/treatment-blocks";
import {
  Section,
  DriversBlock,
  VariantBlock,
  LocationBlock,
  SeeDoctorBlock,
  TreatmentsBlock,
  CompareBlock,
  FirstVisitBlock,
  ConcernRisksBlock,
  ConcernCostBlock,
  RelatedConcernsBlock,
  ResultsBlock,
} from "@/components/concern-blocks";
import { concernBySlug } from "@/content/data/concerns";
import { technologyOfConcern, treatmentsOfConcern } from "@/content/data/relations";
import { reviewerByline } from "@/content/data/doctors";
import { concernReviewer } from "@/lib/signoff";
import { concernToc, headingAnchor } from "@/lib/concern-toc";
import { TOC_MIN_HEADINGS } from "@/lib/toc";
import { waForConcern } from "@/lib/wa";
import type { Concern } from "@/lib/types";

/**
 * Concern-page template v2 — the editorial banner layout (docs/12).
 *
 * The block spine is unchanged: order is fixed, there is no
 * `if (archetype === …)` anywhere, and a block renders when its data exists and
 * returns null when it does not. What changed is the frame around it —
 *
 *   · a full-bleed banner with the H1 in the empty right half the artwork was
 *     cut for, replacing the photo-beside-headline hero;
 *   · one reading column beside the blog's sticky contents rail, replacing the
 *     sticky 21rem heading gutter (`Split`) and the horizontal jump bar. Both
 *     stay on /treatments, which this file no longer shares a layout with;
 *   · exactly three surfaced bands, each used once: espresso is the conversion
 *     moment, tint the technology comparison, porcelain the safety notice.
 *
 * A concern with no banner and no media renders the same page as clean text —
 * there is no placeholder furniture to advertise what is missing.
 */

const dmy = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/** Rule R-08 — the next review is always 12 months on, so it is derived. */
function nextReview(iso: string) {
  const d = new Date(iso);
  d.setFullYear(d.getFullYear() + 1);
  return dmy(d.toISOString());
}

/**
 * C-01 · The banner. Every `pbanner_*` places its subject hard left and
 * reserves the right half for copy, so `object-position: left` is part of the
 * contract, not a style choice — centre-cropping destroys the composition.
 *
 * `<picture>` rather than two `<Image>`s: a hidden `<img>` is still fetched, so
 * the two-component trick would download both halves of the responsive pair on
 * every visit. `getImageProps` keeps Next's optimisation on both sources.
 */
function Banner({ c }: { c: Concern }) {
  if (!c.banner) return null;
  const common = { alt: c.banner.alt, fill: true, priority: true, sizes: "100vw" } as const;
  const desktop = getImageProps({ ...common, src: c.banner.src }).props;
  const { srcSet: mobileSrcSet, ...img } = getImageProps({ ...common, src: c.banner.sm }).props;

  return (
    <div className="relative aspect-[16/9] w-full bg-tint sm:aspect-[2.88/1]">
      <picture>
        <source media="(min-width: 640px)" srcSet={desktop.srcSet} sizes={desktop.sizes} />
        <source srcSet={mobileSrcSet} sizes={img.sizes} />
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt comes from getImageProps */}
        <img {...img} className="absolute inset-0 h-full w-full object-cover object-left" />
      </picture>
      {/* The scrim is what gives the headline its contrast, so it only exists
          where the headline is over the artwork — below sm the copy sits under
          the image and a scrim would wash out half the shot for nothing. */}
      <div
        aria-hidden
        className="absolute inset-0 hidden bg-gradient-to-r from-transparent via-page/25 to-page/92 sm:block"
      />
    </div>
  );
}

/**
 * The reading column, with the sticky contents rail beside it on wide screens.
 * When there is no contents at all the column is not reserved either — an empty
 * 15rem gutter is the thing this layout exists to remove.
 */
function Reading({
  hasRail,
  rail,
  children,
}: {
  hasRail: boolean;
  rail?: ReactNode;
  children: ReactNode;
}) {
  // A sticky element only sticks while its own parent is on screen, so every
  // reading group that should have the rail beside it renders its own copy —
  // otherwise the groups after the full-bleed bands scroll with no contents at
  // all, which is exactly the half-a-page rail this avoids.
  if (!hasRail || !rail) {
    return (
      <Container>
        <div className="min-w-0">{children}</div>
      </Container>
    );
  }
  return (
    <Container>
      <div className="lg:grid lg:grid-cols-[15rem_1fr] lg:items-start lg:gap-16">
        <aside className="hidden lg:sticky lg:top-24 lg:block">{rail}</aside>
        <div className="min-w-0">{children}</div>
      </div>
    </Container>
  );
}

/**
 * A band inside the reading column. Bands carry their own full-width section
 * and Container, so below lg — where there is no rail and the column is the
 * page — the wrapper cancels the column's gutter and the band bleeds to the
 * screen edge as before. From lg the band stops at the column, leaving the
 * contents rail an unbroken gutter all the way down the article.
 */
function Bleed({ children }: { children: ReactNode }) {
  return <div className="-mx-5 sm:-mx-6 lg:mx-0">{children}</div>;
}

export function ConcernView({ c }: { c: Concern }) {
  // A reviewer byline is only shown for a page a doctor has actually signed off
  // (config/concern-signoff.json). Unsigned pages show no byline.
  const review = concernReviewer(c.slug);
  const options = treatmentsOfConcern(c.slug);
  const techItems = technologyOfConcern(c.slug);
  const wa = waForConcern(c.name);

  const related = (c.relatedConcerns ?? [])
    .map((r) => {
      const target = concernBySlug(r.slug);
      return target ? { slug: r.slug, name: target.name, reason: r.reason } : null;
    })
    .filter((r): r is { slug: string; name: string; reason: string } => Boolean(r));

  // The rail is fed from the same list the QA gate checks jump-nav anchors
  // against, so every entry scrolls to a section this page actually renders.
  // Below ArticleToc's own 3-heading threshold there is no contents at all, and
  // the rail column is not reserved either — an empty 15rem gutter is the thing
  // this layout exists to remove.
  const headings = concernToc(c, techItems.length > 0);
  const hasRail = headings.length >= TOC_MIN_HEADINGS;

  // Ghost CTA — sits in the hero next to the summary, on both hero variants.
  const cta = (
    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
      <WhatsAppButton href={wa} variant="outline" position="hero" label="Book a free consultation" />
      <p className="text-sm text-ink-500">
        Free, about 20–30 minutes, no obligation to book treatment.
      </p>
    </div>
  );

  return (
    <article>
      {/* ── 01 · Banner, breadcrumb, ghost CTA and medical reviewer. The ghost
          CTA catches the visitor who arrives already decided, without opening a
          medical page as a sales page — first of the three permitted CTAs. ── */}
      <header className="border-b border-hairline">
        {/* Breadcrumbs stay above the H1 (docs/04 §5, docs/06 §4.9), which on a
            banner page means above the banner rather than under it. */}
        <Container className="pt-6">
          <Breadcrumbs items={[{ label: "Concerns", href: "/concerns" }, { label: c.name }]} />
        </Container>

        {c.banner ? (
          <div className="relative mt-6">
            <Banner c={c} />
            {/* On sm+ the headline sits in the banner's empty right half; on
                narrow screens the artwork is too tight for it, so it falls
                below the image instead of over a face. */}
            <Container className="sm:absolute sm:inset-0 sm:flex sm:items-center">
              <div className="pt-8 sm:ml-auto sm:w-1/2 sm:pt-0">
                <p className="kicker">Concern · {c.group}</p>
                <h1 className="h-hero mt-4">{c.name}</h1>
                <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-700">
                  {c.summary}
                </p>
                {cta}
              </div>
            </Container>
          </div>
        ) : (
          <Container className="pt-6">
            <div className="max-w-[52ch]">
              <p className="kicker">Concern · {c.group}</p>
              <h1 className="h-hero mt-4">{c.name}</h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-700">{c.summary}</p>
              {cta}
            </div>
          </Container>
        )}

        {review && (
          <Container className="py-8 sm:py-10">
            <div className="max-w-sm">
              <ReviewByline
                doctorName={review.doctor.fullName}
                mmc={review.doctor.mmc}
                date={dmy(review.date)}
                photo={review.doctor.photo}
                href={`/doctors/${review.doctor.slug}`}
              />
            </div>
          </Container>
        )}
      </header>

      {/* 02 — three neutral process facts, never a time to a result (R-01). */}
      <FactRail facts={c.facts} />

      {/* ── The reading column. Prose holds its measure; tables, grids and media
          take the column's full width. ─────────────────────────────────────── */}
      <Reading
        hasRail={hasRail}
        rail={hasRail ? <ArticleToc headings={headings} variant="sidebar" /> : undefined}
      >
        {hasRail && (
          <div className="pt-10 lg:hidden">
            <ArticleToc headings={headings} />
          </div>
        )}

        <Section>
          <div className="max-w-[68ch]">
            <LeadAnswer>{c.leadAnswer}</LeadAnswer>
          </div>
        </Section>

        {/* 03 · What is X — anchor ids derive from the heading, so the rail
            addresses any section without a second authored field. */}
        {c.sections?.map((s) => (
          <Section key={s.heading} id={headingAnchor(s.heading)}>
            <h2 className="h-section">{s.heading}</h2>
            <div className="prose mt-6 max-w-[68ch] space-y-5 leading-[1.75] text-ink-700">
              {s.body.map((p, i) => (
                <p key={i} className={i === 0 ? "text-lg text-ink-900" : undefined}>
                  {p}
                </p>
              ))}
            </div>
            {s.list && (
              <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
                {s.list.map((li) => (
                  <li key={li} className="max-w-[68ch] py-3.5 leading-relaxed text-ink-700">
                    {li}
                  </li>
                ))}
              </ul>
            )}
          </Section>
        )) ?? (
          <Section>
            <p className="prose max-w-[68ch] text-lg leading-relaxed text-ink-700">
              {c.summary} A full, doctor-reviewed guide to {c.name.toLowerCase()} is being
              finalised. Our doctors can talk you through the options at a free consultation.
            </p>
          </Section>
        )}

        {/* 04 · 05 · 06 — the three archetype-variant blocks. */}
        <DriversBlock d={c.drivers} figures={c.figures} />
        <VariantBlock v={c.variant} illustrations={c.illustrations} slides={c.slides} />
        <LocationBlock l={c.locationBlock} />

        {/* 07 */}
        <SeeDoctorBlock s={c.seeDoctor} />

        {/* 09 · 10 */}
        <TreatmentsBlock c={c} options={options} />
        <CompareBlock c={c.compare} />

        {/* 08 — band 1 of 3, espresso: the conversion moment, placed where the
            visitor has just read the options and cannot pick between them alone. */}
        <Bleed>
          <CtaMid cta={c.ctaMid} href={wa} position="mid" />
        </Bleed>

        {/* Results — breaks the prose measure but stays in the column, so the
            contents rail keeps running beside it. It renders its own disclaimer
            (ADR-0001 §2). */}
        <Bleed>
          <ResultsBlock items={c.results} />
        </Bleed>

        {/* 15 · technology. The lead sentence is the point — a bare logo wall
            says nothing, "the device is matched to you" is a reason to choose
            Kaiteki. Photo cards in a horizontal scroller: the list runs to a
            dozen platforms on some concerns, and a grid that deep would bury
            the sections after it. */}
        {techItems.length > 0 && (
          <Section id="technology">
            <h2 className="h-section">Technology used</h2>
            <p className="mt-6 max-w-[62ch] leading-relaxed text-ink-700">
              {c.technologyIntro ??
                "Having more than one platform means the doctor can match the device to your skin type and to what is being treated, rather than fitting your skin to a single machine."}
            </p>
            <ul className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
              {techItems.map((x) => (
                <li key={x.slug} className="w-[17rem] shrink-0 snap-start">
                  <TechnologyCard x={x} showUsedIn={false} className="h-full" />
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* 13 · the safety notice. */}
        <ConcernRisksBlock r={c.risks} />

        {/* 12 · 14 · 16 · 17 — the tail, past the three bands. */}
        <FirstVisitBlock f={c.firstVisit} images={c.visitImages} />
        <ConcernCostBlock c={c.costFactors} href={wa} />

        {/* 16 — native <details>, answers always in the DOM (R-10). */}
        {c.faqs && c.faqs.length > 0 && (
          <Section id="faq">
            <h2 className="h-section">Common questions</h2>
            <div className="mt-6">
              <Faq items={c.faqs} />
            </div>
          </Section>
        )}

        <RelatedConcernsBlock items={related} />
      </Reading>


      {/* 18 — bottom CTA, on page ground: the three surfaced bands are spent.
          Heading and body are per-concern strings (spec bugs B-03/B-04):
          "what's causing it" is nonsense on a tattoo, and "your skin" is wrong
          for a scalp or a palm. */}
      <Container className="border-t border-hairline py-14 sm:py-20">
        <div className="mx-auto max-w-[62ch] text-center">
          <h2 className="h-section mx-auto max-w-[18ch]">
            {c.ctaHeading ?? "Have a doctor look at it"}
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] leading-relaxed text-ink-700">
            The consultation is free, takes about 20 to 30 minutes, and there is no obligation to
            book treatment afterwards. A doctor will examine {c.ctaAssesses ?? "your skin"} and
            talk you through what is, and is not, worth doing.
          </p>
          <WhatsAppButton
            href={wa}
            size="lg"
            position="bottom"
            label="Book a free consultation"
            className="mt-8"
          />
        </div>
      </Container>

      {/* 18 · the reviewer, as the blog renders one: a named, MMC-registered
          doctor with a photo and a link to the profile (docs/02 §5), plus the
          ledger's review dates (R-08). */}
      {review && (
        <Container className="py-12 sm:py-14">
          <div className="max-w-[62ch] space-y-8">
            <AuthorCard doctor={review.doctor} label="Medically reviewed by" />
            <Ledger
              rows={[
                { label: "Reviewed by", value: reviewerByline(review.doctor) },
                { label: "Last reviewed", value: dmy(review.date) },
                { label: "Next review due", value: nextReview(review.date) },
              ]}
            />
          </div>
        </Container>
      )}
    </article>
  );
}
