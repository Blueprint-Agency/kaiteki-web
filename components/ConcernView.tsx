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
import { ReadNext } from "@/components/blog/ReadNext";
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
import { postsFor } from "@/content/data/blog";
import { technologyOfConcern, treatmentsOfConcern } from "@/content/data/relations";
import { reviewerByline } from "@/content/data/doctors";
import { concernReviewer } from "@/lib/signoff";
import { concernToc, sectionAnchors } from "@/lib/concern-toc";
import { TOC_MIN_HEADINGS } from "@/lib/toc";
import { waForConcern, waLink } from "@/lib/wa";
import type { Concern } from "@/lib/types";
import { concernUi } from "@/content/i18n/concern-ui";
import { chrome, fmt } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { lhref, localeReviewer } from "@/lib/locale-pages";
import { localePath, type Locale } from "@/lib/i18n";

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
 *   · sections drawn from the shared kit in `page-blocks.tsx` (2026-10), with
 *     one surface: the espresso mid-page CTA.
 *
 * A concern with no banner and no media renders the same page as clean text —
 * there is no placeholder furniture to advertise what is missing.
 */

const dmy = (iso: string, intl = "en-GB") =>
  new Date(iso).toLocaleDateString(intl, { day: "numeric", month: "short", year: "numeric" });

/** Rule R-08 — the next review is always 12 months on, so it is derived. */
function nextReview(iso: string, intl = "en-GB") {
  const d = new Date(iso);
  d.setFullYear(d.getFullYear() + 1);
  return dmy(d.toISOString(), intl);
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
        <aside className="hidden lg:sticky lg:top-24 lg:mt-14 lg:block">{rail}</aside>
        <div className="min-w-0">{children}</div>
      </div>
    </Container>
  );
}

/**
 * `c` is the record to render: English, or a locale overlay of it
 * (content/i18n/concern-locale.ts). `source` is the English record, which a
 * locale page passes so section anchors stay the English slugs.
 */
export function ConcernView({
  c,
  locale = "en",
  source = c,
}: {
  c: Concern;
  locale?: Locale;
  source?: Concern;
}) {
  const en = locale === "en";
  const ui = concernUi[locale];
  const path = `/concerns/${c.slug}`;
  // A reviewer byline is only shown for a page a doctor has actually signed off:
  // config/concern-signoff.json for English, the locale ledger
  // (content/i18n/pages.ts) for a translation, which needs its own reader.
  const review = en ? concernReviewer(c.slug) : localeReviewer(locale, path);
  const options = treatmentsOfConcern(c.slug);
  const techItems = technologyOfConcern(c.slug);
  // The blog is English-only, so a locale page lists no "read next" posts.
  const posts = en ? postsFor("concerns", c.slug) : [];
  const wa = en ? waForConcern(c.name) : waLink(fmt(chrome[locale].wa.about, { name: c.name }));
  const date = (iso: string) => dmy(iso, ui.intl);

  const related = (c.relatedConcerns ?? [])
    .map((r) => {
      const target = concernBySlug(r.slug);
      return target
        ? {
            slug: r.slug,
            name: term(locale, "concern", r.slug, target.name),
            reason: r.reason,
            href: lhref(locale, `/concerns/${r.slug}`),
          }
        : null;
    })
    .filter((r): r is { slug: string; name: string; reason: string; href: string } => Boolean(r));
  const anchors = sectionAnchors(c, source);

  // The rail is fed from the same list the QA gate checks jump-nav anchors
  // against, so every entry scrolls to a section this page actually renders.
  // Below ArticleToc's own 3-heading threshold there is no contents at all, and
  // the rail column is not reserved either — an empty 15rem gutter is the thing
  // this layout exists to remove.
  const headings = concernToc(
    c,
    techItems.length > 0,
    {
      seeDoctor: ui.seeDoctor,
      treatments: ui.treatmentsHeading,
      compare: ui.compareHeading,
      results: { illustrated: ui.resultsIllustrated, patients: ui.resultsPatients },
      technology: ui.technologyHeading,
      risks: ui.risksHeading,
      firstVisit: ui.firstVisitHeading,
      cost: ui.costHeading,
      faq: ui.faqHeading,
    },
    source,
  );
  const hasRail = headings.length >= TOC_MIN_HEADINGS;

  // Ghost CTA — sits in the hero next to the summary, on both hero variants.
  const cta = (
    <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
      <WhatsAppButton href={wa} variant="outline" position="hero" label={ui.heroCta} />
      <p className="text-sm text-ink-500">{ui.heroNote}</p>
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
          <Breadcrumbs
            home={{ label: ui.home, href: localePath(locale, "/") }}
            items={[{ label: ui.concerns, href: lhref(locale, "/concerns") }, { label: c.name }]}
          />
        </Container>

        {c.banner ? (
          <div className="relative mt-6">
            <Banner c={c} />
            {/* On sm+ the headline sits in the banner's empty right half; on
                narrow screens the artwork is too tight for it, so it falls
                below the image instead of over a face. */}
            <Container className="sm:absolute sm:inset-0 sm:flex sm:items-center">
              <div className="pt-8 sm:ml-auto sm:w-1/2 sm:pt-0">
                <p className="kicker">{fmt(ui.kicker, { group: term(locale, "group", c.group, c.group) })}</p>
                <h1 className="h-hero mt-4">{c.name}</h1>
                <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-ink-700">
                  {c.summary}
                </p>
                {cta}
              </div>
            </Container>
          </div>
        ) : (
          // No banner and no reviewer byline (an unsigned page) leaves the CTA
          // line as the header's last child, sitting on the divider; the
          // byline's own padding is what normally separates them.
          <Container className={review ? "pt-6" : "pt-6 pb-10 sm:pb-12"}>
            <div className="max-w-[52ch]">
              <p className="kicker">{fmt(ui.kicker, { group: term(locale, "group", c.group, c.group) })}</p>
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
                date={date(review.date)}
                photo={review.doctor.photo}
                href={lhref(locale, `/doctors/${review.doctor.slug}`)}
                label={ui.bylineLabel}
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
        rail={hasRail ? <ArticleToc headings={headings} variant="sidebar" label={ui.onThisPage} /> : undefined}
      >
        {hasRail && (
          <div className="pt-8 lg:hidden">
            <ArticleToc headings={headings} variant="collapsed" label={ui.onThisPage} />
          </div>
        )}

        <Section>
          <div className="max-w-[68ch]">
            <LeadAnswer label={ui.inBrief}>{c.leadAnswer}</LeadAnswer>
          </div>
        </Section>

        {/* 03 · What is X — anchor ids derive from the heading, so the rail
            addresses any section without a second authored field. */}
        {c.sections?.map((s, i) => (
          <Section key={anchors[i] || s.heading} id={anchors[i]}>
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
              {fmt(ui.pending, { summary: c.summary, name: en ? c.name.toLowerCase() : c.name })}
            </p>
          </Section>
        )}

        {/* 04 · 05 · 06 — the three archetype-variant blocks. */}
        <DriversBlock d={c.drivers} figures={c.figures} />
        {/* Slides carry English copy burned into the artwork, so a locale page
            leaves them out until there is artwork in its language. */}
        <VariantBlock
          v={c.variant}
          illustrations={c.illustrations}
          slides={en ? c.slides : undefined}
          ui={ui}
        />
        <LocationBlock l={c.locationBlock} />

        {/* 07 */}
        <SeeDoctorBlock s={c.seeDoctor} ui={ui} />

        {/* 09 · 10 */}
        <TreatmentsBlock c={c} options={options} ui={ui} locale={locale} />
        <CompareBlock c={c.compare} ui={ui} />

        {/* 08 — band 1 of 3, espresso: the conversion moment, placed where the
            visitor has just read the options and cannot pick between them alone. */}
        {/* A rounded card inside the column at every width, so it does not bleed. */}
        <CtaMid cta={c.ctaMid} href={wa} position="mid" copy={en ? undefined : ui.ctaMid} />

        {/* Results — large before/after pairs in the reading column, so the
            contents rail keeps running beside it. It renders its own disclaimer
            (ADR-0001 §2). */}
        <ResultsBlock items={c.results} ui={ui} locale={locale} />

        {/* 15 · technology. The lead sentence is the point — a bare logo wall
            says nothing, "the device is matched to you" is a reason to choose
            Kaiteki. Photo cards in a horizontal scroller: the list runs to a
            dozen platforms on some concerns, and a grid that deep would bury
            the sections after it. */}
        {techItems.length > 0 && (
          <Section id="technology">
            <h2 className="h-section">{ui.technologyHeading}</h2>
            <p className="mt-6 max-w-[62ch] leading-relaxed text-ink-700">
              {c.technologyIntro ?? ui.technologyIntro}
            </p>
            <ul className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
              {techItems.map((x) => (
                <li key={x.slug} className="w-[17rem] shrink-0 snap-start">
                  <TechnologyCard
                    x={x}
                    showUsedIn={false}
                    className="h-full"
                    // Device summaries are English-only data until the
                    // technology pages get their own locale round.
                    {...(en
                      ? {}
                      : {
                          summary: null,
                          typeLabel: ui.techType[x.type],
                          learnMore: ui.learnMore,
                          href: lhref(locale, `/technology/${x.slug}`),
                        })}
                  />
                </li>
              ))}
            </ul>
          </Section>
        )}

        {/* 13 · the safety notice. */}
        <ConcernRisksBlock r={c.risks} ui={ui} />

        {/* 12 · 14 · 16 · 17 — the tail, past the three bands. */}
        <FirstVisitBlock f={c.firstVisit} images={c.visitImages} ui={ui} />
        <ConcernCostBlock c={c.costFactors} href={wa} ui={ui} />

        {/* 16 — native <details>, answers always in the DOM (R-10). */}
        {c.faqs && c.faqs.length > 0 && (
          <Section id="faq">
            <h2 className="h-section">{ui.faqHeading}</h2>
            <div className="mt-6">
              <Faq items={c.faqs} anchorFrom={source.faqs} />
            </div>
          </Section>
        )}

        <ReadNext posts={posts} />

        <RelatedConcernsBlock items={related} ui={ui} allHref={lhref(locale, "/concerns")} />
      </Reading>


      {/* 18 — bottom CTA, on page ground: the three surfaced bands are spent.
          Heading and body are per-concern strings (spec bugs B-03/B-04):
          "what's causing it" is nonsense on a tattoo, and "your skin" is wrong
          for a scalp or a palm. */}
      <Container className="border-t border-hairline py-14 sm:py-20">
        <div className="mx-auto max-w-[62ch] text-center">
          <h2 className="h-section mx-auto max-w-[18ch]">
            {c.ctaHeading ?? ui.bottomHeading}
          </h2>
          <p className="mx-auto mt-5 max-w-[52ch] leading-relaxed text-ink-700">
            {fmt(ui.bottomBody, { assesses: c.ctaAssesses ?? ui.bottomAssesses })}
          </p>
          <WhatsAppButton
            href={wa}
            size="lg"
            position="bottom"
            label={ui.bottomCta}
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
            <AuthorCard
              doctor={review.doctor}
              label={ui.reviewedByCard}
              viewProfile={ui.viewProfile}
              compact={!en}
            />
            <Ledger
              rows={[
                { label: ui.ledgerReviewedBy, value: reviewerByline(review.doctor) },
                { label: ui.ledgerLast, value: date(review.date) },
                { label: ui.ledgerNext, value: nextReview(review.date, ui.intl) },
              ]}
            />
          </div>
        </Container>
      )}
    </article>
  );
}
