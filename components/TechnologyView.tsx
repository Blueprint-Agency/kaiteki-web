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
import { technologyToc, alternativesHeading } from "@/lib/technology-toc";
import { headingAnchor } from "@/lib/treatment-toc";
import { TOC_MIN_HEADINGS } from "@/lib/toc";
import { waForTreatment } from "@/lib/wa";
import type { Technology } from "@/lib/types";

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

const dmy = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

/** Next review is always 12 months after the last one, so it's derived — the
 *  same rule the treatment and concern ledgers use. */
function nextReview(iso: string) {
  const d = new Date(iso);
  d.setFullYear(d.getFullYear() + 1);
  return dmy(d.toISOString());
}

/** The reading column with its sticky rail, as `TreatmentView` lays one out:
 *  one grid wraps the whole body, because a sticky element only sticks while
 *  its own parent is on screen. No rail, no reserved 15rem gutter. */
function Reading({ rail, children }: { rail?: ReactNode; children: ReactNode }) {
  return (
    <Container>
      <div className={rail ? "lg:grid lg:grid-cols-[15rem_1fr] lg:items-start lg:gap-16" : ""}>
        {rail && <aside className="hidden lg:sticky lg:top-24 lg:block">{rail}</aside>}
        <div className="min-w-0">{children}</div>
      </div>
    </Container>
  );
}

export function TechnologyView({ x, trail }: { x: Technology; trail: Crumb[] }) {
  const treatments = treatmentsOfTechnology(x.slug);
  const relatedConcerns = concernsOfTechnology(x.slug);
  const siblings = relatedTechnology(x.slug);
  // Falls back to the treatments this device delivers: 11 of 36 devices are
  // tagged by a post directly, and the hop lifts that to 22 without leaving topic.
  const posts = postsFor("technology", x.slug, { tag: "treatments", slugs: x.treatments });
  const doctor = x.reviewedBy ? doctorBySlug(x.reviewedBy) : undefined;
  const logo = x.device ? deviceLogo[x.device] : undefined;
  const reviewedDate = x.lastReviewed ? dmy(x.lastReviewed) : undefined;
  const wa = waForTreatment(x.name);
  const sections = x.sections ?? [];

  // "Injectables · Injectable" is a stutter. Where the group already names the
  // type, the group says it once.
  const typeLabel = TYPE_LABEL[x.type];
  const kicker = x.group.toLowerCase().startsWith(typeLabel.toLowerCase())
    ? x.group
    : `${x.group} · ${typeLabel}`;

  // The rail reads the same derived list the page renders from, so an entry
  // can never point at a section that is not on the page.
  const headings = technologyToc(
    x,
    relatedConcerns.length > 0,
    treatments.length > 0,
    siblings.length > 0,
  );
  const rail =
    headings.length >= TOC_MIN_HEADINGS ? (
      <ArticleToc headings={headings} variant="sidebar" />
    ) : undefined;

  return (
    <article>
      {/* Fold. The treatment page's asymmetry: the name claims the left, the
          product photograph is an arched object on the right. */}
      <header className="border-b border-hairline">
        <Container className="pt-8 pb-10 sm:pb-12">
          <Breadcrumbs items={trail} />
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
                  label="Ask if it suits your skin"
                />
                <p className="text-sm text-ink-500">Free consultation, no obligation.</p>
              </div>
            </div>
            {/* No frame without a photograph. A device without product
                photography takes the full width as text rather than showing a
                generated motif in the place a real photo belongs. */}
            {x.image && (
              <div className="relative aspect-[3/2] overflow-hidden rounded-2xl rounded-t-[4rem] bg-tint ring-1 ring-hairline lg:aspect-[5/4]">
                <Image
                  src={x.image}
                  alt={`${x.name}${x.device ? ` (${x.device})` : ""} at Kaiteki Skin Aesthetic Clinic Malaysia`}
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
            <LeadAnswer>{x.leadAnswer}</LeadAnswer>
          </div>
        </Container>
      )}

      <Reading rail={rail}>
        {rail && (
          <div className="pt-4 lg:hidden">
            <ArticleToc headings={headings} />
          </div>
        )}

        {/* The reading spine. Anchor ids derive from the heading, so every
            section is addressable without a second data field — which is what
            lets an answer engine cite one section rather than the page. */}
        {sections.map((s) => (
          <Section key={s.heading} id={headingAnchor(s.heading)}>
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
              {x.summary} A fuller, doctor-reviewed guide to {x.name} is being prepared. Our doctors
              can tell you whether it suits your skin at a free consultation.
            </p>
          </Section>
        )}

        {/* Concerns and treatments as card shelves rather than the old pill
            chips: the same components the treatment and concern pages use, so
            a reader crossing between page types meets one vocabulary. */}
        {relatedConcerns.length > 0 && (
          <Section id="may-help-with">
            <h2 className="h-section">Concerns this {typeLabel.toLowerCase()} addresses</h2>
            <p className="mt-5 max-w-[62ch] leading-relaxed text-ink-700">
              Whether it is the right choice for any of these is a decision for a doctor who has
              examined your skin.
            </p>
            <CardRow className="mt-10">
              {relatedConcerns.map((c) => (
                <ConcernCard key={c.slug} c={c} />
              ))}
            </CardRow>
          </Section>
        )}

        {treatments.length > 0 && (
          <Section id="used-in">
            <h2 className="h-section">Treatments that use {x.name}</h2>
            <CardRow className="mt-10">
              {treatments.map((t) => (
                <TreatmentCard key={t.slug} t={t} />
              ))}
            </CardRow>
            <Link
              href="/technology"
              className="mt-9 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
            >
              Back to all devices and injectables
            </Link>
          </Section>
        )}

        {/* Factors only. No figure, no range, no Offer schema — settled
            2026-09-20 and linted in CI. */}
        <CostFactors c={x.costFactors} href={wa} />

        {/* docs/17 finding 1. Until now no technology page linked to another,
            so equity arrived in the cluster and never circulated. The heading
            names the group rather than repeating one phrase 36 times, and the
            cards are ranked by shared treatments, so what a reader is offered
            is the genuine alternative rather than whatever sits next in the
            data file. */}
        {siblings.length > 0 && (
          <Section id="alternatives">
            <h2 className="h-section">{alternativesHeading(x)}</h2>
            <p className="mt-5 max-w-[62ch] leading-relaxed text-ink-700">
              These address overlapping concerns. Which one suits you is a decision for a doctor who
              has examined your skin, not a choice to make from a page.
            </p>
            <CardRow className="mt-10">
              {siblings.map((s) => (
                <TechnologyCard key={s.slug} x={s} showUsedIn={false} />
              ))}
            </CardRow>
          </Section>
        )}

        {logo && (
          <Section>
            <p className="kicker">Manufacturer</p>
            <Image
              src={`/images/tech/${logo}`}
              alt={`${x.device!} logo`}
              width={140}
              height={44}
              className="mt-5 h-8 w-auto object-contain opacity-80"
            />
          </Section>
        )}

        {x.faqs && x.faqs.length > 0 && (
          <Section id="faq">
            <h2 className="h-section">Common questions</h2>
            <div className="mt-8 max-w-[68ch]">
              <Faq items={x.faqs} />
            </div>
          </Section>
        )}

        <ReadNext posts={posts} />
      </Reading>

      {/* The closing CTA on page ground, centred, as the treatment and concern
          pages close. */}
      <Container className="border-t border-hairline py-14 sm:py-20">
        <div className="mx-auto max-w-[62ch] text-center">
          <h2 className="h-section mx-auto max-w-[18ch]">Book a free consultation</h2>
          <p className="mx-auto mt-5 max-w-[52ch] leading-relaxed text-ink-700">
            The consultation is free, takes about 20 to 30 minutes, and there is no obligation to
            book treatment afterwards. A doctor will examine your skin and tell you whether {x.name}{" "}
            is appropriate, and if it isn&rsquo;t, what would be.
          </p>
          <WhatsAppButton
            href={wa}
            size="lg"
            position="bottom"
            label="Ask about this"
            className="mt-8"
          />
        </div>
      </Container>

      {/* The reviewer as every other page type renders one: a named,
          MMC-registered doctor with a photo and a link to the profile
          (docs/02 §5), above the ledger's review dates. */}
      {doctor && reviewedDate && x.lastReviewed && (
        <Container className="py-12 sm:py-14">
          <div className="max-w-[62ch] space-y-8">
            <AuthorCard doctor={doctor} label="Medically reviewed by" />
            <Ledger
              rows={[
                { label: "Reviewed by", value: reviewerByline(doctor) },
                { label: "Last reviewed", value: reviewedDate },
                { label: "Next review due", value: nextReview(x.lastReviewed) },
              ]}
            />
          </div>
        </Container>
      )}

      <Container className="pb-14">
        <div className="max-w-[62ch]">
          <Disclaimer />
        </div>
      </Container>
    </article>
  );
}
