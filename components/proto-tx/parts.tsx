/**
 * PROTOTYPE — throwaway. Delete with the rest of components/proto-tx/.
 *
 * The bits of the treatment page that are NOT the question. Every variant
 * renders the same hero, the same fact rail, the same lead answer and the same
 * tail blocks, all of them the real shipped components — so the only thing that
 * differs between A, B and C is where the media goes. That is the whole point:
 * the layout was already decided (docs/14), this prototype only asks how media
 * enters it.
 */

import Image from "next/image";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { LeadAnswer } from "@/components/LeadAnswer";
import { Ledger, ReviewByline } from "@/components/Ledger";
import { Faq } from "@/components/Faq";
import { Disclaimer } from "@/components/Disclaimer";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { TreatmentMotif } from "@/components/cards";
import { FactRail, CLEAR_CHROME } from "@/components/treatment-blocks";
import {
  RailCta,
  RailSuitability,
  RailSession,
  RailAfterSession,
  RailRisks,
  RailCost,
  RailTechnology,
  RailLocations,
} from "./railed";
import { doctorBySlug } from "@/content/data/doctors";
import { waForTreatment } from "@/lib/wa";
import type { Treatment } from "@/lib/types";

const dmy = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export const slugifyHeading = (h: string) =>
  h.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function waFor(t: Treatment) {
  return waForTreatment(t.name);
}

/** The shipped hero, unchanged. Not the question. */
export function TxHero({ t, trail }: { t: Treatment; trail: Crumb[] }) {
  const doctor = doctorBySlug(t.reviewedBy);
  const reviewedDate = t.lastReviewed ? dmy(t.lastReviewed) : "";
  return (
    <header className="border-b border-hairline bg-page">
      <Container className="py-10 sm:py-14">
        <Breadcrumbs items={trail} />
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[1fr_420px]">
          <div>
            <p className="kicker">{t.category}</p>
            <h1 className="h-hero mt-3">{t.name}</h1>
            <p className="prose mt-5 max-w-[52ch] text-lg leading-relaxed text-ink-700">
              {t.summary}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                href={waFor(t)}
                variant="outline"
                position="hero"
                label="Ask if it suits your skin"
              />
              <p className="text-sm text-ink-500">Free consultation, no obligation.</p>
            </div>
            {doctor && (
              <div className="mt-8 max-w-sm">
                <ReviewByline
                  doctorName={doctor.fullName}
                  mmc={doctor.mmc}
                  date={reviewedDate}
                  photo={doctor.photo}
                  href={`/doctors/${doctor.slug}`}
                />
              </div>
            )}
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl rounded-t-[4rem] bg-tint ring-1 ring-hairline lg:aspect-[4/5]">
            {t.image ? (
              <Image
                src={t.image}
                alt={`${t.name} treatment at Kaiteki Skin Aesthetic Clinic Malaysia`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            ) : (
              <TreatmentMotif t={t} seed="hero" className="size-full" />
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}

/**
 * Fact rail + lead answer — identical in every variant.
 *
 * `JumpNav` is deliberately NOT rendered. Same call docs/12 made for concerns:
 * the sticky rail and the horizontal bar do the same job at different
 * breakpoints, and running both gives the page two sticky navigations. On these
 * two hosts it costs nothing either way — neither authors `jumpNav`, so the
 * shipped bar renders null on them today.
 */
export function TxLede({ t }: { t: Treatment }) {
  return (
    <>
      <FactRail facts={t.facts} />
      <Container className="py-12 sm:py-14">
        <div className="mx-auto max-w-[68ch]">
          <LeadAnswer>{t.leadAnswer}</LeadAnswer>
        </div>
      </Container>
    </>
  );
}

/**
 * The reading column with the sticky contents rail beside it — the same 15rem /
 * gap-16 grid `ConcernView.Reading` uses, so the two page types line up.
 *
 * **One grid wraps the entire scrollable body**, not just the prose. That is the
 * difference from the first pass, where the rail covered the top half and the
 * blocks below it fell back to `Split`'s 21rem heading gutter — two left columns
 * on one page, the second one arriving unannounced halfway down.
 *
 * Consequences, both deliberate:
 *   · every block below the prose is forked away from `Split` (see railed.tsx);
 *   · tone bands become inset panels rather than full-bleed sections, because a
 *     full-bleed band inside a railed column would leave the rail floating over
 *     it. The three surfaces still mean what they meant — conversion, safety
 *     notice, compliance record — they just sit in the column.
 *
 * Below three headings there is no contents at all and the gutter is not
 * reserved: an empty 15rem column is the thing this layout exists to remove.
 */
export function TxReading({
  hasRail,
  rail,
  children,
}: {
  hasRail: boolean;
  rail?: ReactNode;
  children: ReactNode;
}) {
  return (
    <Container className="py-10 sm:py-14">
      <div className={hasRail ? "lg:grid lg:grid-cols-[15rem_1fr] lg:gap-16" : ""}>
        {hasRail && (
          <aside className="hidden lg:block">
            {rail && <div className="sticky top-24">{rail}</div>}
          </aside>
        )}
        <div className="min-w-0 space-y-16 sm:space-y-20">{children}</div>
      </div>
    </Container>
  );
}

/**
 * Everything after the media question, railed — forked away from `Split` so one
 * contents gutter runs the full length of the page instead of handing over to a
 * second, wider heading gutter halfway down. Renders inside the reading column,
 * so it takes no Container of its own.
 */
export function TxTail({ t }: { t: Treatment }) {
  const wa = waFor(t);
  const doctor = doctorBySlug(t.reviewedBy);
  return (
    <>
      <RailCta cta={t.ctaMid} href={wa} />
      <RailSuitability t={t} />
      <RailSession t={t} />
      <RailAfterSession a={t.afterSession} />
      <RailRisks r={t.risks} name={t.name} />
      <RailCost c={t.costFactors} href={wa} />
      <RailTechnology t={t} />
      {t.faqs && t.faqs.length > 0 && (
        <section id="faq" className={CLEAR_CHROME}>
          <h2 className="h-section">Common questions</h2>
          <div className="mt-8 max-w-[68ch]">
            <Faq items={t.faqs} />
          </div>
        </section>
      )}
      <RailLocations availableAt={t.availableAt} />
      <div className="rounded-2xl border border-hairline bg-porcelain p-8 sm:p-10">
        <Disclaimer />
        {doctor && t.lastReviewed && (
          <div className="mt-8">
            <Ledger
              rows={[
                { label: "Medically reviewed by", value: doctor.fullName },
                { label: "MMC", value: doctor.mmc ?? "—" },
                { label: "Last reviewed", value: dmy(t.lastReviewed) },
              ]}
            />
          </div>
        )}
      </div>
    </>
  );
}

/** A prose section, rendered identically everywhere. Variants decide what sits
 *  between calls to this, not what it looks like. */
export function TxSection({ s }: { s: NonNullable<Treatment["sections"]>[number] }) {
  return (
    <section id={slugifyHeading(s.heading)} className={CLEAR_CHROME}>
      <h2 className="h-section">{s.heading}</h2>
      <div className="prose mt-6 space-y-5 leading-[1.75] text-ink-700">
        {s.body.map((p, i) => (
          <p key={i} className={i === 0 ? "text-lg text-ink-900" : undefined}>
            {p}
          </p>
        ))}
      </div>
      {s.list && (
        <ul className="mt-6 divide-y divide-hairline border-y border-hairline">
          {s.list.map((li) => (
            <li key={li} className="py-3.5 leading-relaxed text-ink-700">
              {li}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
