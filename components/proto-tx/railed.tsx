/**
 * PROTOTYPE — throwaway. Delete with the rest of components/proto-tx/.
 *
 * The tail blocks, forked away from `Split`.
 *
 * `Split` is a 21rem sticky heading gutter. A page cannot have that AND a 15rem
 * contents rail — you get two left columns, the rail stops halfway down, and the
 * second gutter reads as a different kind of sidebar. That is exactly the seam
 * visible in the first pass.
 *
 * So these are the same blocks with the aside content flowed inline: heading and
 * intro at the top of the reading column, content beneath. Identical data,
 * identical wording, identical compliance rules — only the gutter is gone.
 *
 * This is the same fork `concern-blocks.tsx` performed for concerns. It means
 * `docs/14`'s "Split stays" decision needs revisiting: once treatments fork too,
 * `Split` has no callers left.
 *
 * Tone bands become inset panels rather than full-bleed sections, because a
 * full-bleed band inside a railed column would have to break out of the grid and
 * would leave the rail floating over it.
 */

import Link from "next/link";
import type { ReactNode } from "react";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { TreatmentMotif, TechnologyCard } from "@/components/cards";
import { CardRow } from "@/components/CardRow";
import { Check, X } from "@/components/icons";
import { Rows, Row, CLEAR_CHROME } from "@/components/treatment-blocks";
import { branches } from "@/content/data/branches";
import { technologyOfTreatment } from "@/content/data/relations";
import type { Treatment } from "@/lib/types";

/** A section in the railed reading column. Replaces `Block` + `Split`. */
export function RailSection({
  id,
  heading,
  intro,
  aside,
  tone,
  children,
}: {
  id?: string;
  heading: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  tone?: "porcelain" | "espresso";
  children: ReactNode;
}) {
  const surface =
    tone === "porcelain"
      ? "rounded-2xl border border-hairline bg-porcelain p-8 sm:p-10"
      : tone === "espresso"
        ? "on-dark rounded-2xl bg-espresso p-8 text-ink-on-dark sm:p-10"
        : "";
  return (
    <section id={id} className={`${CLEAR_CHROME} ${surface}`}>
      <h2 className="h-section">{heading}</h2>
      {intro && <p className="mt-5 max-w-[62ch] leading-relaxed text-ink-700">{intro}</p>}
      {aside}
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function RailSuitability({ t }: { t: Treatment }) {
  if (t.avoidIf?.length) {
    return (
      <RailSection
        id="suitability"
        heading="Who should postpone or avoid it"
        intro={t.bringToConsult}
      >
        <ul className="divide-y divide-hairline border-y border-hairline">
          {t.avoidIf.map((i) => (
            <li key={i.lead} className="max-w-[68ch] py-4 leading-relaxed text-ink-700">
              <strong className="font-semibold text-espresso">{i.lead}</strong> {i.body}
            </li>
          ))}
        </ul>
      </RailSection>
    );
  }

  const suitable = t.suitableFor ?? [];
  const notSuitable = t.notSuitableFor ?? [];
  if (!suitable.length && !notSuitable.length) return null;

  return (
    <RailSection id="suitability" heading="Is this right for you?">
      <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
        {[
          { items: suitable, Icon: Check, tone: "text-success", label: "Often considered for" },
          { items: notSuitable, Icon: X, tone: "text-warn", label: "Usually not suitable for" },
        ]
          .filter((c) => c.items.length > 0)
          .map(({ items, Icon, tone, label }) => (
            <div key={label}>
              <h3 className="text-sm font-semibold text-espresso">{label}</h3>
              <ul className="mt-3 space-y-3 border-t border-hairline pt-3">
                {items.map((li) => (
                  <li key={li} className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-ink-700">
                    <Icon size={17} className={`mt-1 shrink-0 ${tone}`} />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </RailSection>
  );
}

export function RailSession({ t }: { t: Treatment }) {
  if (!t.sessionSteps?.length) return null;
  return (
    <RailSection id="your-session" heading="What a session involves">
      <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_15rem]">
        <ol className="space-y-8 border-l border-hairline pl-8">
          {t.sessionSteps.map((s, i) => (
            <li key={s.title} className="relative">
              <span
                aria-hidden
                className="absolute -left-[2.0625rem] top-0.5 flex size-[2.125rem] items-center justify-center rounded-full border border-hairline bg-page text-[0.8125rem] font-semibold text-accent"
              >
                {i + 1}
              </span>
              <h3 className="h-sub">{s.title}</h3>
              <p className="mt-2 max-w-[54ch] leading-relaxed text-ink-700">{s.body}</p>
            </li>
          ))}
        </ol>
        <TreatmentMotif
          t={t}
          seed="session"
          className="hidden aspect-[4/5] rounded-2xl rounded-t-[3rem] ring-1 ring-hairline xl:block"
        />
      </div>
    </RailSection>
  );
}

export function RailAfterSession({ a }: { a?: Treatment["afterSession"] }) {
  if (!a) return null;
  return (
    <RailSection id="after-a-session" heading="After a session" intro={a.intro}>
      <Rows>
        {a.bands.map((b) => (
          <Row key={b.title} title={b.title}>
            {b.body}
          </Row>
        ))}
      </Rows>
      <p className="mt-8 max-w-[68ch] leading-relaxed text-ink-700">{a.aftercare}</p>
    </RailSection>
  );
}

export function RailRisks({ r, name }: { r?: Treatment["risks"]; name: string }) {
  if (!r) return null;
  return (
    <RailSection
      id="risks"
      tone="porcelain"
      heading={`Risks, side effects, and what ${name} cannot do`}
      intro={r.intro}
    >
      <div className="divide-y divide-espresso/15 border-y border-espresso/15">
        <Row title="Common and temporary">{r.common}</Row>
        <Row title="Less common">{r.lessCommon}</Row>
        {r.pigmentNote && <Row title="Pigment change and Malaysian skin">{r.pigmentNote}</Row>}
        <Row title="What it cannot do">
          <ul className="space-y-3">
            {r.cannotDo.map((c) => (
              <li key={c} className="flex gap-3">
                <span aria-hidden className="mt-2 h-px w-4 shrink-0 bg-warn" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Row>
      </div>
      <p className="mt-8 max-w-[68ch] leading-relaxed text-ink-700">{r.disclose}</p>
    </RailSection>
  );
}

export function RailCost({ c, href }: { c?: Treatment["costFactors"]; href: string }) {
  if (!c) return null;
  return (
    <RailSection
      id="sessions-cost"
      heading="What affects the number of sessions, and the cost"
      intro={c.intro}
    >
      <ul className="divide-y divide-hairline border-y border-hairline">
        {c.factors.map((f) => (
          <li key={f} className="max-w-[68ch] py-4 leading-relaxed text-ink-700">
            {f}
          </li>
        ))}
      </ul>
      {c.outro && <p className="mt-8 max-w-[68ch] leading-relaxed text-ink-700">{c.outro}</p>}
      <WhatsAppButton
        href={href}
        variant="outline"
        position="cost"
        label="Ask what a plan might involve"
        className="mt-8"
      />
    </RailSection>
  );
}

/** The conversion moment. Inset espresso panel — the one saturated break. */
export function RailCta({ cta, href }: { cta?: Treatment["ctaMid"]; href: string }) {
  if (!cta) return null;
  return (
    <section className="on-dark rounded-2xl bg-espresso p-8 text-ink-on-dark sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
        <div>
          <h2 className="h-section max-w-[20ch]">{cta.heading}</h2>
          <p className="mt-5 max-w-[54ch] leading-relaxed text-ink-on-dark/80">{cta.body}</p>
        </div>
        <WhatsAppButton
          href={href}
          size="lg"
          position="mid"
          label="Ask about this on WhatsApp"
          className="ring-1 ring-ink-on-dark/60"
        />
      </div>
    </section>
  );
}

/** The authored technology→treatment edge, read back through relations.ts.
 *  Uncapped — every device that powers this treatment gets a card and a link. */
export function RailTechnology({ t }: { t: Treatment }) {
  const items = technologyOfTreatment(t.slug);
  if (!items.length) return null;
  return (
    <section
      id="devices"
      className={`${CLEAR_CHROME} rounded-2xl border border-hairline bg-tint p-8 sm:p-10`}
    >
      <h2 className="h-section max-w-[20ch]">Devices used at Kaiteki</h2>
      <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-700">
        Which platform is used depends on your individual assessment.
      </p>
      <CardRow className="mt-10">
        {items.map((x) => (
          <TechnologyCard key={x.slug} x={x} showUsedIn={false} />
        ))}
      </CardRow>
    </section>
  );
}

export function RailLocations({ availableAt }: { availableAt?: string[] }) {
  const list = availableAt?.length ? branches.filter((b) => availableAt.includes(b.slug)) : branches;
  if (!list.length) return null;
  return (
    <div className="border-t border-hairline pt-6">
      <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
        Available at
      </h3>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {list.map((b) => (
          <li key={b.slug}>
            <Link
              href={`/locations/${b.slug}`}
              className="text-[0.9375rem] text-ink-700 underline decoration-hairline underline-offset-4 transition-colors hover:text-espresso hover:decoration-mocha"
            >
              {b.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
