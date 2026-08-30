import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArrowRight, Check, X } from "@/components/icons";
import { technologyBySlug } from "@/content/data/technology";
import type { Treatment } from "@/lib/types";

/**
 * Treatment-page template v2 blocks (config/treatments.json, T-01…T-19).
 *
 * Each block takes only the slice of `Treatment` it needs and returns null when
 * that data is absent — so a page turns a block off by omitting its field, and
 * TreatmentView stays a flat list of blocks with no per-page branching.
 *
 * Layout model. A 62–68ch prose measure, Fraunces display headings, and one
 * sticky contents rail (`ArticleToc`) running the whole scrollable body, so
 *
 *   · `Split`, the sticky 21rem *heading* gutter, is gone. A page cannot carry
 *     that and a 15rem contents rail; they are two left columns, and the
 *     prototype's first pass showed the second one arriving unannounced halfway
 *     down. Every block that used it flows its heading and intro inline at the
 *     top of its own section instead — same data, same wording, same compliance
 *     rules. This is the fork `concern-blocks.tsx` already performed;
 *   · sections render *inside* TreatmentView's reading column and carry no
 *     Container of their own;
 *   · **every section sits on page ground.** The 2026-07 spine gave the device
 *     comparison a tint panel and the safety notice a porcelain one; 2026-08
 *     removed both, so treatments match the concern page they are read
 *     alongside. One surface survives — the espresso mid-page CTA — because it
 *     is the conversion moment and the only thing allowed to be loudest on the
 *     page. It bleeds full width, as it does on `/concerns`, rather than
 *     floating as an inset panel under the rail.
 *
 * `JumpNav` retired with the gutter, for the reason docs/12 retired it on
 * concerns: two navigations doing one job.
 */

/* ── Primitives ─────────────────────────────────────────────────────────── */

/**
 * Clearance for the 68px sticky site header — the only sticky chrome left now
 * that the jump-nav bar has retired. Exported because the reading column's
 * sections and the prototype both anchor against it.
 */
export const CLEAR_CHROME = "scroll-mt-24";

/** A section of the reading column. No Container: the column supplies it. */
export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`py-12 sm:py-14 ${id ? CLEAR_CHROME : ""} ${className}`}>
      {children}
    </section>
  );
}

/** The full-bleed espresso band — the one surfaced band both page types keep,
 *  and the only place the conversion is allowed to be the loudest thing on the
 *  screen. Nothing else on a treatment page carries a background. */
function EspressoBand({ children }: { children: ReactNode }) {
  return (
    <section className="on-dark bg-espresso py-14 text-ink-on-dark sm:py-20">
      <Container>{children}</Container>
    </section>
  );
}

/** The heading and optional intro that used to sit in `Split`'s gutter. */
function Lede({ heading, intro }: { heading: ReactNode; intro?: ReactNode }) {
  return (
    <>
      <h2 className="h-section">{heading}</h2>
      {intro && <p className="mt-5 max-w-[62ch] leading-relaxed text-ink-700">{intro}</p>}
    </>
  );
}

/** One hairline record row: title in the left column, content in the right. */
export function Row({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="grid gap-2 py-6 sm:grid-cols-[13.5rem_1fr] sm:gap-10 sm:py-7">
      <h3 className="h-sub">{title}</h3>
      <div className="max-w-[62ch] leading-relaxed text-ink-700">{children}</div>
    </div>
  );
}

/** Wrapper for a stack of `Row`s. */
export function Rows({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`divide-y divide-hairline border-y border-hairline ${className}`}>
      {children}
    </div>
  );
}

/* ── Blocks ─────────────────────────────────────────────────────────────── */

/**
 * T-02 · Fact rail. Authored process facts, else the derived session/downtime
 * tags. A full-width rule-divided rail rather than three tinted boxes — the
 * boxed stat row is the template tell, and these are record values, not metrics.
 */
export function FactRail({ facts }: { facts?: { value: string; label: string }[] }) {
  if (!facts?.length) return null;

  return (
    <div className="border-y border-hairline">
      <Container>
        <dl className="grid divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {facts.slice(0, 3).map((f) => (
            <div key={f.label} className="py-6 sm:px-9 sm:py-8 sm:first:pl-0 sm:last:pr-0">
              <dt className="h-sub">{f.value}</dt>
              <dd className="mt-2 max-w-[34ch] text-sm leading-snug text-ink-500">{f.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  );
}

/**
 * T-06 · Routing module. The highest-value block on a treatment page: names
 * each sub-group of the concern space and links to the concern that owns it,
 * instead of competing with it. Descriptions are never reused across
 * treatments (rule R-04).
 */
export function RoutingModule({
  title,
  routes,
  note,
}: {
  title: string;
  routes?: Treatment["routes"];
  note?: string;
}) {
  if (!routes?.length) return null;
  return (
    <Section id="what-it-treats">
      <Lede heading={title} />
      <Rows className="mt-8">
        {routes.map((r) => (
          <Row key={r.title} title={r.title}>
            <p>{r.body}</p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
              {r.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
                >
                  {l.label}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              ))}
            </div>
          </Row>
        ))}
      </Rows>
      {note && (
        <p className="mt-8 max-w-[62ch] rounded-xl bg-tint px-6 py-5 leading-relaxed text-ink-700">
          {note}
        </p>
      )}
    </Section>
  );
}

/**
 * T-07 · Archetype variant module (Full depth only). On energy/device
 * treatments this is the wavelength comparison; the copy must read as a
 * factual difference in delivery, never as a ranking (rule R-02). Two genuinely
 * equivalent columns, so an equal two-up is honest here — and it is the one
 * place on the page where imagery does real work.
 */
/** The variant's own `/technology/[slug]` link already names the platform, so
 *  the cover shot is derived from it rather than authored a second time. */
const deviceImage = (href?: string) =>
  href?.startsWith("/technology/") ? technologyBySlug(href.split("/").pop()!)?.image : undefined;

export function VariantModule({ m }: { m?: Treatment["variantModule"] }) {
  if (!m) return null;
  return (
    <Section id="which-device">
      <Lede heading={m.heading} intro={m.intro} />
      <div className="mt-10 grid gap-10 sm:grid-cols-2 sm:gap-12">
        {m.items.map((i) => {
          const cover = deviceImage(i.href);
          return (
            <div key={i.title}>
              {/* No frame where there is no photograph — an empty tinted box is
                  the placeholder furniture this page type does not carry. */}
              {cover && (
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl rounded-t-[2.5rem] bg-tint ring-1 ring-hairline">
                  <Image
                    src={cover}
                    alt={`${i.title}: aesthetic technology at Kaiteki Skin Aesthetic Clinic`}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              )}
              <p className="ledger text-[0.6875rem] uppercase tracking-[0.14em]">{i.eyebrow}</p>
              <h3 className="h-sub mt-1.5">{i.title}</h3>
              <p className="mt-3 max-w-[46ch] leading-relaxed text-ink-700">{i.body}</p>
              {i.href && (
                <Link
                  href={i.href}
                  className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
                >
                  {i.hrefLabel ?? "Learn more"}
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </Link>
              )}
            </div>
          );
        })}
      </div>
      {m.note && (
        <p className="mt-12 max-w-[64ch] border-t border-hairline pt-6 leading-relaxed text-ink-700">
          {m.note}
        </p>
      )}
    </Section>
  );
}

/**
 * T-08 · Mid-page CTA — the primary of the three permitted CTAs (rule R-06),
 * placed right after T-06/T-07 where the visitor has a question they cannot
 * answer alone. The one espresso surface on the page: it gives the eye
 * somewhere to land mid-scroll, and it is the only place the conversion is
 * allowed to be the loudest thing on screen. The green pill carries a
 * warm-white ring because green on espresso is only 2.1:1 — the ring is what
 * identifies the control.
 *
 * One shape for both page types: a full-bleed espresso band. Treatments used to
 * render it as an inset panel; matching concerns means a visitor who reads a
 * concern and a treatment back to back meets the same CTA twice, not two.
 */
export function CtaMid({
  cta,
  href,
  position = "mid",
}: {
  cta?: Treatment["ctaMid"];
  href: string;
  position?: string;
}) {
  if (!cta) return null;
  const body = (
    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
      <div>
        <h2 className="h-section max-w-[18ch]">{cta.heading}</h2>
        <p className="mt-5 max-w-[54ch] leading-relaxed text-ink-on-dark/80">{cta.body}</p>
      </div>
      <WhatsAppButton
        href={href}
        size="lg"
        position={position}
        label="Ask about this on WhatsApp"
        className="ring-1 ring-ink-on-dark/60"
      />
    </div>
  );
  return <EspressoBand>{body}</EspressoBand>;
}

/**
 * T-09 · Suitability. `avoidIf` is the authored form; the suitable/not-suitable
 * pair is the fallback for treatments that have not been rewritten yet.
 */
export function SuitabilityBlock({ t }: { t: Treatment }) {
  if (t.avoidIf?.length) {
    return (
      <Section id="suitability">
        <Lede heading="Who should postpone or avoid it" intro={t.bringToConsult} />
        <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
          {t.avoidIf.map((i) => (
            <li key={i.lead} className="max-w-[68ch] py-4 leading-relaxed text-ink-700">
              <strong className="font-semibold text-espresso">{i.lead}</strong> {i.body}
            </li>
          ))}
        </ul>
      </Section>
    );
  }

  const suitable = t.suitableFor ?? [];
  const notSuitable = t.notSuitableFor ?? [];
  if (!suitable.length && !notSuitable.length) return null;

  return (
    <Section id="suitability">
      <Lede heading="Is this right for you?" />
      <div className="mt-8 grid gap-x-12 gap-y-8 sm:grid-cols-2">
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
                  <li
                    key={li}
                    className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-ink-700"
                  >
                    <Icon size={17} className={`mt-1 shrink-0 ${tone}`} />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </Section>
  );
}

/**
 * T-10 · What a session involves. Numbered because it is genuinely a sequence;
 * step 1 states that the first visit is a consultation, not a treatment.
 *
 * The generated motif that used to sit beside it is gone. It was decoration
 * standing in for a photograph nobody has taken — the same placeholder
 * furniture `/concerns` refuses — and the numbered ladder is identical to
 * `FirstVisitBlock`'s, which never had one.
 */
export function SessionBlock({ t }: { t: Treatment }) {
  if (!t.sessionSteps?.length) return null;
  return (
    <Section id="your-session">
      <Lede heading="What a session involves" />
      <ol className="mt-8 space-y-8 border-l border-hairline pl-8">
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
    </Section>
  );
}

/**
 * The illustrated procedure sequence (`steps`). Numbered because the order is
 * the information, not decoration.
 *
 * **The 156px cap is the point.** The sources are 156×156 icons; rendered at
 * 300px they are visibly soft, so the cell is capped at native width and the
 * grid distributes the slack rather than stretching the image. Q-19 enforces
 * the same ceiling on the data.
 */
export function StepsBlock({ steps }: { steps?: Treatment["steps"] }) {
  if (!steps?.length) return null;
  return (
    <Section id="steps">
      <Lede heading="The procedure, step by step" />
      <ol className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.label} className="flex gap-5">
            <div className="w-[156px] max-w-[156px] flex-none">
              <div className="relative aspect-square">
                <Image
                  src={s.src}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="156px"
                  className="object-contain"
                />
              </div>
            </div>
            <div className="min-w-0">
              <p className="ledger text-[0.6875rem] uppercase tracking-[0.14em]">Step {i + 1}</p>
              <h3 className="h-sub mt-1.5">{s.label}</h3>
              <p className="mt-2 max-w-[46ch] leading-relaxed text-ink-700">{s.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/**
 * T-11 · After a session. Time-banded physical recovery only — never a
 * timeframe to a result, which would be an outcome claim (rule R-01).
 */
export function AfterSession({ a }: { a?: Treatment["afterSession"] }) {
  if (!a) return null;
  return (
    <Section id="after-a-session">
      <Lede heading="After a session" intro={a.intro} />
      <Rows className="mt-8">
        {a.bands.map((b) => (
          <Row key={b.title} title={b.title}>
            {b.body}
          </Row>
        ))}
      </Rows>
      <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{a.aftercare}</p>
    </Section>
  );
}

/**
 * T-12 · Risks and what it cannot do. A formal clinical notice rather than an
 * alert card, and on page ground like the rest of the reading column — the
 * twin of `ConcernRisksBlock`, which never carried a surface. `cannotDo`
 * carries at least three real limits and the pigment-change note is mandatory
 * on energy-based treatments (rule R-05).
 */
export function RisksBlock({ r, name }: { r?: Treatment["risks"]; name: string }) {
  if (!r) return null;
  return (
    <Section id="risks">
      <Lede heading={`Risks, side effects, and what ${name} cannot do`} intro={r.intro} />
      <div className="mt-8 divide-y divide-espresso/15 border-y border-espresso/15">
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
      <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{r.disclose}</p>
    </Section>
  );
}

/**
 * T-13 · Sessions and cost factors. Factors only, no figures (rule R-03), and
 * a list rather than prose so it can become a price table later without a
 * rebuild. Closes with the secondary (ghost) variant of the same CTA.
 */
export function CostFactors({ c, href }: { c?: Treatment["costFactors"]; href: string }) {
  if (!c) return null;
  return (
    <Section id="sessions-cost">
      <Lede heading="What affects the number of sessions, and the cost" intro={c.intro} />
      <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
        {c.factors.map((f) => (
          <li key={f} className="max-w-[62ch] py-4 leading-relaxed text-ink-700">
            {f}
          </li>
        ))}
      </ul>
      {c.outro && <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{c.outro}</p>}
      <WhatsAppButton
        href={href}
        variant="outline"
        position="cost"
        label="Ask what a plan might involve"
        className="mt-8"
      />
    </Section>
  );
}

/**
 * T-14 · What these treatments do. Manufacturer imagery only, labelled in all
 * four required places (heading paragraph, every caption, every alt text,
 * closing disclaimer). Omitted entirely rather than shipped half-labelled.
 *
 * **The container is `object-contain` on page ground**, not `object-cover` in a
 * 4:3 tint box. Every manufacturer mark is a 1.25:1 transparent PNG: cover
 * crops it, and a warm tint panel behind a transparent logo puts a background
 * where the artwork assumes the page. Same class of defect as the concern
 * image-fit bug (docs/11), fixed before anything authors into it.
 */
export function ManufacturerImages({ images }: { images?: Treatment["manufacturerImages"] }) {
  if (!images?.length) return null;
  return (
    <Section id="manufacturer">
      <Lede
        heading="What these treatments do"
        intro="The images below are supplied by the device manufacturers. They are not Kaiteki patients, and they illustrate what this category of treatment is designed to act on."
      />
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {images.map((img) => (
          <figure key={img.src}>
            <div className="relative aspect-[5/4] rounded-xl border border-hairline bg-page">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 30vw"
                className="object-contain p-4"
              />
            </div>
            <figcaption className="mt-3 text-[0.8125rem] leading-snug text-ink-500">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-8 max-w-[62ch] text-sm leading-relaxed text-ink-500">
        Images supplied by device manufacturers. Not Kaiteki patients. Individual results vary and
        a doctor assesses suitability before treatment.
      </p>
    </Section>
  );
}

/**
 * T-15 · Treatment areas. One field, two shapes: a string is a text chip, an
 * object is a die-cut zone photograph with its label beneath (docs/14). The
 * die-cuts are transparent PNGs, so they sit on page ground — never on a tint
 * or espresso surface. Q-20 fails an array that mixes the two.
 */
export function AreasBlock({ t }: { t: Treatment }) {
  if (!t.areas?.length) return null;
  const zones = t.areas.filter((a) => typeof a !== "string");

  return (
    <Section id="treatment-areas">
      <Lede
        heading="Treatment areas"
        intro={
          zones.length > 0
            ? `These are the areas ${t.name} is most often used for at Kaiteki. Which of them apply to you is decided at your consultation.`
            : undefined
        }
      />
      {zones.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 sm:grid-cols-4">
          {zones.map((z) => (
            <figure key={z.src} className="text-center">
              <div className="relative aspect-square">
                <Image
                  src={z.src}
                  alt=""
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 45vw, 190px"
                  className="object-contain"
                />
              </div>
              <figcaption className="mt-1 text-sm text-ink-700">{z.label}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <ul className="mt-8 flex flex-wrap gap-2">
          {t.areas.map((a) => (
            <li
              key={String(a)}
              className="inline-flex rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-sm text-ink-700"
            >
              {String(a)}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

/* T-18 · Locations ("Available at") was removed in 2026-08. No treatment ever
 * authored `availableAt`, so every page listed all nine branches identically —
 * nine outbound links repeated nineteen times, saying nothing about the
 * treatment. The branch list belongs to /locations and the footer, which is
 * where it stays. */
