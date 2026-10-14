import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { LeadAnswer } from "@/components/LeadAnswer";
import { Ledger } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { ReadNext } from "@/components/blog/ReadNext";
import { ConcernCard, TreatmentCard, TechnologyCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { Figure, List, Item, ScrollTable } from "@/components/page-blocks";
import {
  Section,
  FactRail,
  RoutingModule,
  VariantModule,
  CtaMid,
  SuitabilityBlock,
  SessionBlock,
  StepsBlock,
  ProcedurePhotos,
  AfterSession,
  RisksBlock,
  CostFactors,
  ManufacturerImages,
  AreasBlock,
} from "@/components/treatment-blocks";
import { treatmentBySlug } from "@/content/data/treatments";
import { postsFor } from "@/content/data/blog";
import { technologyOfTreatment, concernsOfTreatment } from "@/content/data/relations";
import { doctorBySlug, reviewerByline } from "@/content/data/doctors";
import { waForTreatment, waLink } from "@/lib/wa";
import { treatmentToc, treatmentSectionAnchors } from "@/lib/treatment-toc";
import { TOC_MIN_HEADINGS } from "@/lib/toc";
import type { Treatment } from "@/lib/types";
import { treatmentUi, type TreatmentUi } from "@/content/i18n/treatment-ui";
import { concernUi } from "@/content/i18n/concern-ui";
import { chrome, fmt } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { techCardProps } from "@/content/i18n/tech-cards";
import { localizedConcern } from "@/content/i18n/concern-locale";
import { isLive, lhref, localeReviewer } from "@/lib/locale-pages";
import { localePath, type Locale } from "@/lib/i18n";

/**
 * Treatment-page template v2 (docs/14).
 *
 * One sticky contents rail (`ArticleToc` at `variant="sidebar"`) runs beside the
 * *whole* scrollable body, so `Split`'s 21rem heading gutter is gone and every
 * block flows its heading inline. Media enters the reading column — Variant A
 * "Inline", chosen from the prototype on 2026-08-29.
 *
 * **2026-08 · aligned with the concern template.** A visitor moves between
 * `/concerns/[slug]` and `/treatments/[category]` constantly — they are the two
 * halves of one decision — and the two pages were furnished differently enough
 * to read as two sites. Four things changed, all of them adopting what
 * `ConcernView` already does:
 *
 *   · **no section backgrounds.** The tint device-comparison panel and the
 *     porcelain safety notice are gone; every section sits on page ground. The
 *     one surviving surface is the mid-page espresso CTA, which now bleeds full
 *     width here exactly as it does on a concern page;
 *   · **the reviewer byline** is not in the hero at all: the page closes with
 *     the blog's `AuthorCard` above the review ledger, which carries the
 *     named-doctor, MMC and last-reviewed signals once instead of twice;
 *   · **the closing CTA** is the concern page's centred block on page ground —
 *     no tint band, no generated motif beside it;
 *   · **no generated motifs anywhere.** They were decoration standing in for
 *     photography, which is the placeholder furniture `/concerns` refuses. A
 *     treatment with no media renders as clean text instead.
 */

const dmy = (iso: string, intl = "en-GB") =>
  new Date(iso).toLocaleDateString(intl, { day: "numeric", month: "short", year: "numeric" });

/** T-19 — next review is always 12 months after the last one, so it's derived. */
function nextReview(iso: string, intl = "en-GB") {
  const d = new Date(iso);
  d.setFullYear(d.getFullYear() + 1);
  return dmy(d.toISOString(), intl);
}

/** T-02 fallback for treatments whose fact strip has not been authored yet. */
function derivedFacts(t: Treatment, ui: TreatmentUi = treatmentUi.en) {
  const [sessionTime, downtime] = (t.durationDowntime ?? "").split("·").map((s) => s.trim());
  return [
    sessionTime && { value: sessionTime, label: ui.factSession },
    t.typicalSessions && { value: t.typicalSessions, label: ui.factSessions },
    downtime && { value: downtime, label: ui.factDowntime },
  ].filter(Boolean) as { value: string; label: string }[];
}

/* The chip row retired with the tail's concern list (2026-08). Every "browse
 * sideways" list on this page is now a card shelf; `AreasBlock` keeps its own
 * chips for treatment areas, which are labels rather than links. */

/**
 * The reading column, with the sticky contents rail beside it on wide screens.
 * One grid wraps the entire body — a sticky element only sticks while its own
 * parent is on screen, and the prototype's first pass proved what happens when
 * the rail owns only the top half. Below the heading threshold there is no rail
 * and no reserved gutter: an empty 15rem column is what this layout removes.
 */
function Reading({ rail, children }: { rail?: ReactNode; children: ReactNode }) {
  return (
    <Container>
      <div className={rail ? "lg:grid lg:grid-cols-[15rem_1fr] lg:items-start lg:gap-16" : ""}>
        {rail && <aside className="hidden lg:sticky lg:top-24 lg:mt-14 lg:block">{rail}</aside>}
        <div className="min-w-0">{children}</div>
      </div>
    </Container>
  );
}

/**
 * `t` is the record to render: English, or a locale overlay of it
 * (content/i18n/treatment-locale.ts). `source` is the English record, which a
 * locale page passes so section and FAQ anchors stay the English slugs.
 */
export function TreatmentView({
  t,
  trail,
  locale = "en",
  source = t,
}: {
  t: Treatment;
  trail: Crumb[];
  locale?: Locale;
  source?: Treatment;
}) {
  const en = locale === "en";
  const ui = treatmentUi[locale];
  const cu = concernUi[locale];
  const n = (tmpl: string) => tmpl.replace("{name}", t.name);
  const link = (href: string) => lhref(locale, href);
  // English pages name the authoring reviewer as before; a translation names
  // only the doctor who signed it in the locale ledger (content/i18n/pages.ts).
  const signed = en ? undefined : localeReviewer(locale, `/treatments/${t.slug}`);
  const doctor = en ? doctorBySlug(t.reviewedBy) : signed?.doctor;
  const reviewIso = en ? t.lastReviewed : signed?.date;
  const related = t.related.map((r) => treatmentBySlug(r)).filter(Boolean);
  const techItems = technologyOfTreatment(t.slug);
  const relatedConcerns = concernsOfTreatment(t.slug);
  // The blog is English-only, so a locale page lists no "read next" posts.
  const posts = en ? postsFor("treatments", t.slug) : [];
  const wa = en ? waForTreatment(t.name) : waLink(fmt(chrome[locale].wa.about, { name: t.name }));
  const sections = t.sections ?? [];
  const anchors = treatmentSectionAnchors(t, source);

  /** Concern card fields in this locale: its own translation once live, else
   *  the researched name and no English summary under a translated heading. */
  const concernCard = (slug: string, name: string) => {
    if (en) return {};
    const page = localizedConcern(locale, slug);
    const live = page && isLive(locale, `/concerns/${slug}`);
    const label = live ? page.c.name : term(locale, "concern", slug, name);
    return {
      href: link(`/concerns/${slug}`),
      name: label,
      summary: live ? page.c.summary : null,
      explore: cu.learnMore,
      alt: fmt(cu.cardAltConcern, { name: label }),
    };
  };

  // The rail reads the same derived list Q-24 checks against the page's own
  // anchors, so a rail entry can never point at a section that is not rendered.
  const headings = treatmentToc(t, techItems.length > 0, relatedConcerns.length > 0, ui, source);
  const rail =
    headings.length >= TOC_MIN_HEADINGS ? (
      <ArticleToc headings={headings} variant="sidebar" label={cu.onThisPage} />
    ) : undefined;

  return (
    <article>
      {/* ── Fold. Asymmetric: the title claims the left two-thirds, the
          photograph is an arched object on the right rather than a banner
          strip above the text. ─────────────────────────────────────────── */}
      <header className="border-b border-hairline">
        <Container className="pt-8 pb-10 sm:pb-12">
          <Breadcrumbs items={trail} home={en ? undefined : { label: cu.home, href: localePath(locale, "/") }} />
          <div
            className={`mt-8 grid gap-10 lg:gap-16 ${t.image ? "lg:grid-cols-[1fr_0.78fr] lg:items-center" : ""}`}
          >
            <div>
              <p className="kicker">{term(locale, "category", t.category, t.category)}</p>
              <h1 className="h-hero mt-5">{t.name}</h1>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-700">{t.summary}</p>
              {/* Ghost CTA, as the concern hero renders it: the visitor who
                  arrives already decided gets a route out without the page
                  opening as a sales page. First of the three permitted CTAs. */}
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <WhatsAppButton
                  href={wa}
                  variant="outline"
                  position="hero"
                  label={ui.heroCta}
                />
                <p className="text-sm text-ink-500">{ui.heroNote}</p>
              </div>
            </div>
            {/* No frame without a photograph: all 19 treatments carry a hero
                today, and the day one does not, the headline takes the width
                rather than a generated motif taking the space. */}
            {t.image && (
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-tint ring-1 ring-hairline lg:aspect-[5/4]">
                <Image
                  src={t.image}
                  alt={t.imageAlt ?? n(ui.imageAlt)}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </Container>
      </header>

      {/* T-02 — authored process facts, else the derived session/downtime tags. */}
      <FactRail facts={t.facts ?? derivedFacts(t, ui)} />

      <Reading rail={rail}>
        {rail && (
          <div className="pt-8 lg:hidden">
            <ArticleToc headings={headings} variant="collapsed" label={cu.onThisPage} />
          </div>
        )}

        {/* T-01 · The answer-first capsule, identical across the site so it
            stays recognisable and extractable — in the reading column, as the
            concern page places it. */}
        <Section>
          <div className="max-w-[68ch]">
            <LeadAnswer label={cu.inBrief}>{t.leadAnswer}</LeadAnswer>
          </div>
        </Section>

        {/* T-04 · T-05 — the reading spine. Prose holds a 68ch measure; anchor
            ids derive from the heading so any section is addressable without a
            second data field. Figures land one per two sections (Variant A),
            which is why a treatment must not author more than
            floor(sections / 2) of them — the surplus would be dropped (Q-23). */}
        {sections.map((s, i) => {
          const figure = i % 2 === 1 ? t.figures?.[Math.floor(i / 2)] : undefined;
          return (
            <Section key={anchors[i] || s.heading} id={anchors[i]}>
              <h2 className="h-section">{s.heading}</h2>
              <div className="prose mt-6 max-w-[68ch] space-y-5 leading-[1.75] text-ink-700">
                {s.body.map((p, j) => (
                  <p key={j} className={j === 0 ? "text-lg text-ink-900" : undefined}>
                    {p}
                  </p>
                ))}
              </div>
              {s.list && (
                <ul className="mt-6 max-w-[68ch] divide-y divide-hairline border-y border-hairline">
                  {s.list.map((li) => (
                    <li key={li} className="py-3.5 leading-relaxed text-ink-700">
                      {li}
                    </li>
                  ))}
                </ul>
              )}
              {figure && <Figure src={figure.src} caption={figure.caption} />}
            </Section>
          );
        })}
        {sections.length === 0 && (
          <Section>
            <p className="prose max-w-[68ch] text-lg leading-relaxed text-ink-700">
              {fmt(ui.pending, { summary: t.summary, name: t.name })}
            </p>
          </Section>
        )}

        {/* T-06 — every page ends this block on the same concern card shelf;
            authored routes add the why above it. */}
        {t.routes ? (
          <RoutingModule
            title={n(ui.routesTitle)}
            routes={t.routes}
            note={t.routesNote}
            link={link}
          >
            {relatedConcerns.length > 0 && (
              <CardRow className="mt-10">
                {relatedConcerns.map((concern) => (
                  <ConcernCard key={concern.slug} c={concern} {...concernCard(concern.slug, concern.name)} />
                ))}
              </CardRow>
            )}
          </RoutingModule>
        ) : (
          relatedConcerns.length > 0 && (
            /* Photo cards, not chips. This is the block that routes a visitor
               who arrived on a device name to the page that actually answers
               their question, and two bare pills gave it none of that weight —
               the same shelf the devices section below it uses. `routes`, where
               a treatment authors one, is still the better version of this
               block, because it explains *why* each concern is on the list. */
            <Section id="concerns-addressed">
              <h2 className="h-section">{ui.concernsHeading}</h2>
              <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-700">{n(ui.concernsIntro)}</p>
              <CardRow className="mt-10">
                {relatedConcerns.map((concern) => (
                  <ConcernCard key={concern.slug} c={concern} {...concernCard(concern.slug, concern.name)} />
                ))}
              </CardRow>
            </Section>
          )
        )}

        {/* T-07 — the device comparison, on page ground like every section. */}
        <VariantModule m={t.variantModule} link={link} learnMore={cu.learnMore} />

        {/* T-08 — the one surfaced band on the page: the conversion moment,
            placed where the visitor has just read the device comparison and
            cannot pick between the options alone. Same espresso bleed the
            concern page uses. */}
        <CtaMid cta={t.ctaMid} href={wa} copy={en ? undefined : cu.ctaMid} />

        {/* T-09 */}
        <SuitabilityBlock t={t} ui={ui} />

        {/* T-10 */}
        <SessionBlock t={t} ui={ui} />

        {/* The illustrated procedure sequence, where one is authored. */}
        <StepsBlock steps={t.steps} ui={ui} />

        {/* Kaiteki's own procedure photos. */}
        <ProcedurePhotos images={t.procedureImages} ui={ui} />

        {/* T-11 */}
        <AfterSession a={t.afterSession} ui={ui} />

        {/* T-12 — the safety notice, on page ground. */}
        <RisksBlock r={t.risks} name={t.name} ui={ui} />

        {/* T-13 */}
        <CostFactors c={t.costFactors} href={wa} ui={ui} />

        {/* T-14 */}
        <ManufacturerImages images={t.manufacturerImages} ui={ui} />

        {/* T-15 — chips, or die-cut zone photographs where they are authored. */}
        <AreasBlock t={t} ui={ui} />

        {t.comparisons && t.comparisons.length > 0 && (
          <Section id="comparisons">
            <h2 className="h-section">{n(ui.comparisonsHeading)}</h2>
            <ScrollTable
              columns={ui.comparisonColumns}
              swipeHint={cu.swipeHint}
              rows={t.comparisons.map((row) => [row.name, row.bestFor, row.downtime])}
              minWidth="34rem"
            />
          </Section>
        )}

        {(t.preCare?.length || t.postCare?.length) && (
          <Section id="care">
            <h2 className="h-section">{ui.careHeading}</h2>
            <List>
              {[
                { title: ui.careBefore, items: t.preCare ?? [] },
                { title: ui.careAfter, items: t.postCare ?? [] },
              ]
                .filter((g) => g.items.length > 0)
                .map((g) => (
                  <Item key={g.title} title={g.title}>
                    <ul className="list-disc space-y-2 pl-5 marker:text-ink-500">
                      {g.items.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  </Item>
                ))}
            </List>
          </Section>
        )}

        {/* Technology used — the authored technology→treatment edge, read back
            through relations.ts. Uncapped: every device/injectable that powers
            this treatment gets a card and an internal link. */}
        {techItems.length > 0 && (
          <Section id="devices">
            <h2 className="h-section">{ui.devicesHeading}</h2>
            <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-700">{ui.devicesIntro}</p>
            <CardRow className="mt-10">
              {techItems.map((x) => (
                <TechnologyCard
                  key={x.slug}
                  x={x}
                  showUsedIn={false}
                  {...techCardProps(locale, x)}
                />
              ))}
            </CardRow>
          </Section>
        )}

        {/* T-16 — native <details>, answers always in the DOM. */}
        {t.faqs && (
          <Section id="faq">
            <h2 className="h-section">{ui.faqHeading}</h2>
            <div className="mt-8 max-w-[68ch]">
              <Faq items={t.faqs} anchorFrom={source.faqs} />
            </div>
          </Section>
        )}

        <ReadNext posts={posts} />

        {/* T-17 — photo cards, matching `concerns-addressed` above and the
            device shelf between them, so the page's three "go here next"
            blocks are one shape rather than three. Each card carries the
            authored reason for the link where there is one, framed around what
            THIS treatment does not do; without one it falls back to the
            treatment's own summary, which still beats a bare name. */}
        {related.length > 0 && (
          <Section>
            <h2 className="h-section">{ui.nextHeading}</h2>
            <CardRow className="mt-10">
              {related.map((r) => {
                const name = term(locale, "treatment", r!.slug, r!.name);
                return (
                  <TreatmentCard
                    key={r!.slug}
                    t={r!}
                    reason={t.relatedReasons?.[r!.slug]}
                    {...(en
                      ? {}
                      : {
                          href: link(`/treatments/${r!.slug}`),
                          name,
                          summary: null,
                          learnMore: cu.learnMore,
                          alt: fmt(ui.cardAlt, { name }),
                        })}
                  />
                );
              })}
            </CardRow>
            {/* Treatments only. The concern chips that used to sit under this
                row are gone: a `routes` page already routes to its concerns in
                prose, with a reason per group, and every other page renders
                them as cards further up. A pill row repeating either was a
                third presentation of a list the page had already made. */}
            <Link
              href={link("/treatments")}
              className="mt-9 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
            >
              {ui.backToAll}
            </Link>
          </Section>
        )}
      </Reading>

      {/* T-18 — the closing CTA, on page ground: the one surfaced band is spent
          on the mid-page CTA. Centred, as the concern page closes. */}
      <Container className="border-t border-hairline py-14 sm:py-20">
        <div className="mx-auto max-w-[62ch] text-center">
          <h2 className="h-section mx-auto max-w-[18ch]">{ui.bottomHeading}</h2>
          <p className="mx-auto mt-5 max-w-[52ch] leading-relaxed text-ink-700">{n(ui.bottomBody)}</p>
          <WhatsAppButton
            href={wa}
            size="lg"
            position="bottom"
            label={ui.bottomCta}
            className="mt-8"
          />
        </div>
      </Container>

      {/* T-19 — the reviewer as the blog and the concern page render one: a
          named, MMC-registered doctor with a photo and a link to the profile
          (docs/02 §5), above the ledger's review dates. */}
      {doctor && reviewIso && (
        <Container className="py-12 sm:py-14">
          <div className="max-w-[62ch] space-y-8">
            <AuthorCard doctor={doctor} label={cu.reviewedByCard} viewProfile={cu.viewProfile} compact={!en} />
            <Ledger
              rows={[
                { label: cu.ledgerReviewedBy, value: reviewerByline(doctor) },
                { label: cu.ledgerLast, value: dmy(reviewIso, cu.intl) },
                { label: cu.ledgerNext, value: nextReview(reviewIso, cu.intl) },
              ]}
            />
          </div>
        </Container>
      )}
    </article>
  );
}
