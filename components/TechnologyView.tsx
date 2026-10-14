import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { Ledger } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { LeadAnswer } from "@/components/LeadAnswer";
import { ArticleToc } from "@/components/blog/ArticleToc";
import { AuthorCard } from "@/components/blog/AuthorCard";
import { ReadNext } from "@/components/blog/ReadNext";
import { ConcernCard, TreatmentCard, TechnologyCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { Section, FactRail, CostFactors } from "@/components/treatment-blocks";
import {
  treatmentsOfTechnology,
  concernsOfTechnology,
  relatedTechnology,
} from "@/content/data/relations";
import { doctorBySlug, reviewerByline } from "@/content/data/doctors";
import { postsFor } from "@/content/data/blog";
import { technologyToc, alternativesHeading, technologySectionAnchors } from "@/lib/technology-toc";
import { TOC_MIN_HEADINGS } from "@/lib/toc";
import { waForTreatment, waLink } from "@/lib/wa";
import type { Technology } from "@/lib/types";
import { technologyUi } from "@/content/i18n/technology-ui";
import { treatmentUi } from "@/content/i18n/treatment-ui";
import { concernUi } from "@/content/i18n/concern-ui";
import { chrome, fmt } from "@/content/i18n/chrome";
import { term } from "@/content/i18n/terms";
import { techCardProps } from "@/content/i18n/tech-cards";
import { localizedConcern } from "@/content/i18n/concern-locale";
import { localizedTreatment } from "@/content/i18n/treatment-locale";
import { isLive, lhref, localeReviewer } from "@/lib/locale-pages";
import { localePath, type Locale } from "@/lib/i18n";

/**
 * `/technology/[slug]` — the device and injectable page, rebuilt 2026-09-21
 * (`docs/15` item 1.2) onto the treatment page's article layout.
 *
 * **Why it was rebuilt.** These 36 pages were the last on the site still using
 * the old card-stack: no answer-first capsule, no fact rail, no anchors, no
 * author card. That mattered twice over. They earn the site's best
 * click-through rates — 3 to 5% on brand-name queries, against 0.1 to 1% on
 * concern and treatment terms (`docs/03d` §4) — and 23 of the 36 sit in the
 * never-crawled set, including all 13 injectables (`docs/03b` T0).
 *
 * **What this template does not do.** It renders no "available at" branch list:
 * Kaiteki's machines rotate between clinics, so there is no stable fact to
 * publish (client, 2026-09-20). And `costFactors` carries factors only — never
 * a figure, a range or a currency string.
 *
 * **What the template cannot fix.** Structure is not differentiation. Thirty-five
 * of these 36 pages still share six section headings, which is the actual
 * reason the cluster is uncrawled. The fields added here — `leadAnswer`,
 * `facts`, `costFactors` — exist so `docs/15` item 2.3 can make each page carry
 * something only it can say. `docs/16` is the contract; `pnpm check:sameness`
 * is the measure.
 */

const TYPE_LABEL: Record<Technology["type"], string> = {
  device: "Device",
  injectable: "Injectable",
};

const deviceLogo: Record<string, string> = {
  PicoSure: "logob_picosure.png",
  Ultherapy: "logob_ultherapy.png",
  CoolSculpting: "logob_coolsculpting.png",
  Fotona: "logob_fotona.png",
  Onda: "logob_onda.png",
  Profhilo: "logob_profhilo.png",
  Sculptra: "logob_sculptra.png",
  Potenza: "logob_potenza.png",
};

const dmy = (iso: string, intl = "en-GB") =>
  new Date(iso).toLocaleDateString(intl, { day: "numeric", month: "short", year: "numeric" });

/** Next review is always 12 months after the last one, so it's derived — the
 *  same rule the treatment and concern ledgers use. */
function nextReview(iso: string, intl = "en-GB") {
  const d = new Date(iso);
  d.setFullYear(d.getFullYear() + 1);
  return dmy(d.toISOString(), intl);
}

/** The reading column with its sticky rail, as `TreatmentView` lays one out:
 *  one grid wraps the whole body, because a sticky element only sticks while
 *  its own parent is on screen. No rail, no reserved 15rem gutter. */
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
 * `x` is the record to render: English, or a locale overlay of it
 * (content/i18n/technology-locale.ts). `source` is the English record, which a
 * locale page passes so section and FAQ anchors stay the English slugs.
 */
export function TechnologyView({
  x,
  trail,
  locale = "en",
  source = x,
}: {
  x: Technology;
  trail: Crumb[];
  locale?: Locale;
  source?: Technology;
}) {
  const en = locale === "en";
  const ui = technologyUi[locale];
  const cu = concernUi[locale];
  const link = (href: string) => lhref(locale, href);
  const treatments = treatmentsOfTechnology(x.slug);
  const relatedConcerns = concernsOfTechnology(x.slug);
  const siblings = relatedTechnology(x.slug);
  // Falls back to the treatments this device delivers: 11 of 36 devices are
  // tagged by a post directly, and the hop lifts that to 22 without leaving topic.
  // The blog is English-only, so a locale page lists no "read next" posts.
  const posts = en ? postsFor("technology", x.slug, { tag: "treatments", slugs: x.treatments }) : [];
  // English names the authoring reviewer; a translation only the doctor who
  // signed it in the locale ledger (content/i18n/pages.ts).
  const signed = en ? undefined : localeReviewer(locale, `/technology/${x.slug}`);
  const doctor = en ? (x.reviewedBy ? doctorBySlug(x.reviewedBy) : undefined) : signed?.doctor;
  const reviewIso = en ? x.lastReviewed : signed?.date;
  const logo = x.device ? deviceLogo[x.device] : undefined;
  const reviewedDate = reviewIso ? dmy(reviewIso, cu.intl) : undefined;
  const wa = en ? waForTreatment(x.name) : waLink(fmt(chrome[locale].wa.about, { name: x.name }));
  const sections = x.sections ?? [];
  const anchors = technologySectionAnchors(x, source);

  // "Injectables · Injectable" is a stutter. Where the group already names the
  // type, the group says it once.
  const typeLabel = en ? TYPE_LABEL[x.type] : ui.type[x.type];
  const typeWord = ui.typeWord[x.type];
  const group = term(locale, "category", x.group, x.group);
  const kicker = en && x.group.toLowerCase().startsWith(typeLabel.toLowerCase())
    ? x.group
    : `${group} · ${typeLabel}`;
  const alternatives = en ? alternativesHeading(x) : (ui.alternatives[x.group] ?? ui.alternatives.other);

  /** Concern / treatment card fields in this locale: their own translation
   *  once live, else the researched name and no English summary. */
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
  const treatmentCard = (slug: string, name: string) => {
    if (en) return {};
    const page = localizedTreatment(locale, slug);
    const live = page && isLive(locale, `/treatments/${slug}`);
    const label = live ? page.t.name : term(locale, "treatment", slug, name);
    return {
      href: link(`/treatments/${slug}`),
      name: label,
      summary: live ? page.t.summary : null,
      learnMore: cu.learnMore,
      alt: fmt(treatmentUi[locale].cardAlt, { name: label }),
    };
  };

  // The rail reads the same derived list the page renders from, so an entry
  // can never point at a section that is not on the page.
  const headings = technologyToc(
    x,
    relatedConcerns.length > 0,
    treatments.length > 0,
    siblings.length > 0,
    {
      concernsHeading: ui.concernsHeading,
      usedInHeading: ui.usedInHeading,
      costHeading: treatmentUi[locale].costHeading,
      faqHeading: cu.faqHeading,
      typeWord: ui.typeWord,
      alternatives,
    },
    source,
  );
  const rail =
    headings.length >= TOC_MIN_HEADINGS ? (
      <ArticleToc headings={headings} variant="sidebar" label={cu.onThisPage} />
    ) : undefined;
  return (
    <article>
      {/* Fold. The treatment page's asymmetry: the name claims the left, the
          product photograph is an arched object on the right. */}
      <header className="border-b border-hairline">
        <Container className="pt-8 pb-10 sm:pb-12">
          <Breadcrumbs items={trail} home={en ? undefined : { label: cu.home, href: localePath(locale, "/") }} />
          <div
            className={`mt-8 grid gap-10 lg:gap-16 ${x.image ? "lg:grid-cols-[1fr_0.78fr] lg:items-center" : ""}`}
          >
            <div>
              <p className="kicker flex items-center gap-3">
                <span aria-hidden className="h-px w-7 flex-none bg-sand" />
                {kicker}
              </p>
              <h1 className="h-hero mt-5">{x.name}</h1>
              <p className="mt-6 max-w-[48ch] text-lg leading-relaxed text-ink-700">{x.summary}</p>
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
            {/* No frame without a photograph. A device without product
                photography takes the full width as text rather than showing a
                generated motif in the place a real photo belongs. */}
            {x.image && (
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl rounded-t-[4rem] bg-tint ring-1 ring-hairline lg:aspect-[5/4]">
                <Image
                  src={x.image}
                  alt={x.imageAlt ?? fmt(ui.imageAlt, { name: x.name, device: x.device ? ` (${x.device})` : "" })}
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

      {/* Extractable facts — depth, energy, session length. Different on every
          page by design; a device with none authored yet renders no rail. */}
      <FactRail facts={x.facts} />

      {x.leadAnswer && (
        <Container className="py-12 sm:py-14">
          <div className="mx-auto max-w-[68ch]">
            <LeadAnswer label={cu.inBrief}>{x.leadAnswer}</LeadAnswer>
          </div>
        </Container>
      )}

      <Reading rail={rail}>
        {rail && (
          <div className="pt-4 lg:hidden">
            <ArticleToc headings={headings} label={cu.onThisPage} />
          </div>
        )}

        {/* The reading spine. Anchor ids derive from the heading, so every
            section is addressable without a second data field — which is what
            lets an answer engine cite one section rather than the page. */}
        {sections.map((s, i) => (
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
          </Section>
        ))}

        {sections.length === 0 && (
          <Section>
            <p className="max-w-[68ch] text-lg leading-relaxed text-ink-700">
              {fmt(ui.pending, { summary: x.summary, name: x.name })}
            </p>
          </Section>
        )}

        {/* Concerns and treatments as card shelves rather than the old pill
            chips: the same components the treatment and concern pages use, so
            a reader crossing between page types meets one vocabulary. */}
        {relatedConcerns.length > 0 && (
          <Section id="may-help-with">
            <h2 className="h-section">{ui.concernsHeading.replace("{type}", typeWord)}</h2>
            <p className="mt-5 max-w-[62ch] leading-relaxed text-ink-700">{ui.concernsIntro}</p>
            <CardRow className="mt-10">
              {relatedConcerns.map((c) => (
                <ConcernCard key={c.slug} c={c} {...concernCard(c.slug, c.name)} />
              ))}
            </CardRow>
          </Section>
        )}

        {treatments.length > 0 && (
          <Section id="used-in">
            <h2 className="h-section">{ui.usedInHeading.replace("{name}", x.name)}</h2>
            <CardRow className="mt-10">
              {treatments.map((t) => (
                <TreatmentCard key={t.slug} t={t} {...treatmentCard(t.slug, t.name)} />
              ))}
            </CardRow>
            <Link
              href={link("/technology")}
              className="mt-9 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
            >
              {ui.backToAll}
            </Link>
          </Section>
        )}

        {/* Factors only. No figure, no range, no Offer schema — settled
            2026-09-20 and linted in CI. */}
        <CostFactors c={x.costFactors} href={wa} ui={treatmentUi[locale]} />

        {/* docs/17 finding 1. Until now no technology page linked to another,
            so equity arrived in the cluster and never circulated. The heading
            names the group rather than repeating one phrase 36 times, and the
            cards are ranked by shared treatments, so what a reader is offered
            is the genuine alternative rather than whatever sits next in the
            data file. */}
        {siblings.length > 0 && (
          <Section id="alternatives">
            <h2 className="h-section">{alternatives}</h2>
            <p className="mt-5 max-w-[62ch] leading-relaxed text-ink-700">{ui.alternativesIntro}</p>
            <CardRow className="mt-10">
              {siblings.map((s) => (
                <TechnologyCard key={s.slug} x={s} showUsedIn={false} {...techCardProps(locale, s)} />
              ))}
            </CardRow>
          </Section>
        )}

        {logo && (
          <Section>
            <p className="kicker">{ui.manufacturer}</p>
            <Image
              src={`https://cdn.kaiteki.my/images/tech/${logo}`}
              alt={fmt(ui.logoAlt, { device: x.device! })}
              width={140}
              height={44}
              className="mt-5 h-8 w-auto object-contain opacity-80"
            />
          </Section>
        )}

        {x.faqs && x.faqs.length > 0 && (
          <Section id="faq">
            <h2 className="h-section">{cu.faqHeading}</h2>
            <div className="mt-8 max-w-[68ch]">
              <Faq items={x.faqs} anchorFrom={source.faqs} />
            </div>
          </Section>
        )}

        <ReadNext posts={posts} />
      </Reading>

      {/* The closing CTA on page ground, centred, as the treatment and concern
          pages close. */}
      <Container className="border-t border-hairline py-14 sm:py-20">
        <div className="mx-auto max-w-[62ch] text-center">
          <h2 className="h-section mx-auto max-w-[18ch]">{ui.bottomHeading}</h2>
          <p className="mx-auto mt-5 max-w-[52ch] leading-relaxed text-ink-700">
            {ui.bottomBody.replace("{name}", x.name)}
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

      {/* The reviewer as every other page type renders one: a named,
          MMC-registered doctor with a photo and a link to the profile
          (docs/02 §5), above the ledger's review dates. */}
      {doctor && reviewedDate && reviewIso && (
        <Container className="py-12 sm:py-14">
          <div className="max-w-[62ch] space-y-8">
            <AuthorCard doctor={doctor} label={cu.reviewedByCard} viewProfile={cu.viewProfile} compact={!en} />
            <Ledger
              rows={[
                { label: cu.ledgerReviewedBy, value: reviewerByline(doctor) },
                { label: cu.ledgerLast, value: reviewedDate },
                { label: cu.ledgerNext, value: nextReview(reviewIso, cu.intl) },
              ]}
            />
          </div>
        </Container>
      )}

      <Container className="pb-14">
        <div className="max-w-[62ch]">
          <Disclaimer locale={locale} />
        </div>
      </Container>
    </article>
  );
}
