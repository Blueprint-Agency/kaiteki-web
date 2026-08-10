import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { TreatmentMotif } from "@/components/cards";
import { ArrowRight, Check, X } from "@/components/icons";
import { branches } from "@/content/data/branches";
import { technologyBySlug } from "@/content/data/technology";
import type { Treatment } from "@/lib/types";

/**
 * Treatment-page template v2 blocks (config/treatments.json, T-01…T-19).
 *
 * Each block takes only the slice of `Treatment` it needs and returns null when
 * that data is absent — so a page turns a block off by omitting its field, and
 * TreatmentView stays a flat list of blocks with no per-page branching.
 *
 * Layout model (2026-07 redesign). The page was a single 768px column of ~14
 * identical bordered cards, several containing further bordered cards. That
 * reads as generated: every block equal weight, one spacing value throughout,
 * nothing to look at. It is now an editorial spine —
 *
 *   · sections sit on the page ground, separated by space and hairlines;
 *   · exactly three bands carry a surface, and each one means something:
 *     tint = the device comparison, espresso = the conversion moment,
 *     porcelain = the safety notice;
 *   · prose holds a 62–68ch measure while structural blocks use the full
 *     1200px grid, so width itself carries rhythm;
 *   · headings use the Fraunces display scale (.h-section/.h-sub) that the
 *     rest of the site already speaks, not grotesk bold.
 */

/* ── Primitives ─────────────────────────────────────────────────────────── */

type Tone = "page" | "tint" | "porcelain" | "espresso";

const TONE: Record<Tone, string> = {
  page: "",
  tint: "border-y border-hairline bg-tint",
  porcelain: "border-y border-hairline bg-porcelain",
  espresso: "on-dark bg-espresso text-ink-on-dark",
};

/**
 * Sticky chrome on this page is the 68px site header plus the ~60px jump nav.
 * Anything that sticks below it, or that an anchor scrolls to, clears 152px
 * plus air — one constant so the two never drift apart again. The jump nav is
 * only sticky from sm up, so mobile clears the header alone.
 */
export const CLEAR_CHROME = "scroll-mt-24 sm:scroll-mt-[10.5rem]";
const STICK_BELOW_CHROME = "lg:top-[10.5rem]";

/** A page section. `tone` promotes it to one of the three surfaced bands. */
export function Block({
  id,
  tone = "page",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`py-14 sm:py-20 ${id ? CLEAR_CHROME : ""} ${TONE[tone]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Heading column beside a content column — the page's structural rhythm, and
 * what replaces "heading stacked on body inside a card". The heading sticks
 * while its own content scrolls, so the reader never loses the question.
 */
export function Split({ aside, children }: { aside: ReactNode; children: ReactNode }) {
  return (
    <div className="grid gap-8 lg:grid-cols-[21rem_1fr] lg:gap-16">
      <div className={`aside-col lg:sticky ${STICK_BELOW_CHROME} lg:self-start`}>{aside}</div>
      <div className="min-w-0">{children}</div>
    </div>
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
 * T-03 · Jump navigation. Plain anchors, no JavaScript. Sticks below the 68px
 * header from sm up, where a 4,000-word page genuinely needs a way back to the
 * question you arrived with; on mobile it scrolls away rather than stacking a
 * second bar over an already-short viewport.
 */
export function JumpNav({ items }: { items?: { id: string; label: string }[] }) {
  if (!items?.length) return null;
  return (
    <nav
      aria-label="On this page"
      className="z-30 border-b border-hairline bg-page/90 backdrop-blur sm:sticky sm:top-[68px]"
    >
      <Container>
        {/* No w-max here: a max-content width on the scroll container itself makes
            the box wider than the viewport, so the whole document scrolls sideways
            instead of just this pill row. */}
        <ul className="scrollbar-none -mx-5 flex gap-1 overflow-x-auto px-5 py-3.5 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {items.slice(0, 7).map((i) => (
            <li key={i.id}>
              <a
                href={`#${i.id}`}
                data-ga="jump_nav_click"
                data-ga-destination={i.id}
                className="inline-flex whitespace-nowrap rounded-full px-3.5 py-1.5 text-sm text-ink-700 transition-colors hover:bg-tint hover:text-espresso"
              >
                {i.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
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
    <Block id="what-it-treats">
      <Split aside={<h2 className="h-section">{title}</h2>}>
        <Rows>
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
      </Split>
    </Block>
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

export function VariantModule({ t, m }: { t: Treatment; m?: Treatment["variantModule"] }) {
  if (!m) return null;
  return (
    <Block id="which-device" tone="tint">
      <h2 className="h-section max-w-[22ch]">{m.heading}</h2>
      <p className="mt-6 max-w-[64ch] leading-relaxed text-ink-700">{m.intro}</p>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-12">
        {m.items.map((i, idx) => {
          const cover = deviceImage(i.href);
          return (
          <div key={i.title}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl rounded-t-[2.5rem] bg-surface ring-1 ring-hairline">
              {cover ? (
                <Image
                  src={cover}
                  alt={`${i.title} — aesthetic technology at Kaiteki Skin Aesthetic Clinic`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover"
                />
              ) : (
                <TreatmentMotif t={t} seed={`device-${idx}`} className="size-full" />
              )}
            </div>
            <p className="ledger mt-6 text-[0.6875rem] uppercase tracking-[0.14em]">{i.eyebrow}</p>
            <h3 className="h-sub mt-1.5">{i.title}</h3>
            <p className="mt-3 max-w-[46ch] leading-relaxed text-ink-700">{i.body}</p>
            {i.href && (
              <Link
                href={i.href}
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
              >
                {i.hrefLabel ?? "Learn more"}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
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
    </Block>
  );
}

/**
 * T-08 · Mid-page CTA — the primary of the three permitted CTAs (rule R-06),
 * placed right after T-06/T-07 where the visitor has a question they cannot
 * answer alone. The one espresso band on the page: it gives the eye somewhere
 * to land mid-scroll, and it is the only place the conversion is allowed to be
 * the loudest thing on screen. The green pill carries a warm-white ring because
 * green on espresso is only 2.1:1 — the ring is what identifies the control.
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
  return (
    <Block tone="espresso">
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
    </Block>
  );
}

/**
 * T-09 · Suitability. `avoidIf` is the authored form; the suitable/not-suitable
 * pair is the fallback for treatments that have not been rewritten yet.
 */
export function SuitabilityBlock({ t }: { t: Treatment }) {
  if (t.avoidIf?.length) {
    return (
      <Block id="suitability">
        <Split
          aside={
            <>
              <h2 className="h-section">Who should postpone or avoid it</h2>
              {t.bringToConsult && (
                <p className="mt-6 max-w-[40ch] text-[0.9375rem] leading-relaxed text-ink-500">
                  {t.bringToConsult}
                </p>
              )}
            </>
          }
        >
          <ul className="divide-y divide-hairline border-y border-hairline">
            {t.avoidIf.map((i) => (
              <li key={i.lead} className="max-w-[62ch] py-4 leading-relaxed text-ink-700">
                <strong className="font-semibold text-espresso">{i.lead}</strong>{" "}
                {i.body}
              </li>
            ))}
          </ul>
        </Split>
      </Block>
    );
  }

  const suitable = t.suitableFor ?? [];
  const notSuitable = t.notSuitableFor ?? [];
  if (!suitable.length && !notSuitable.length) return null;

  return (
    <Block id="suitability">
      <Split aside={<h2 className="h-section">Is this right for you?</h2>}>
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
      </Split>
    </Block>
  );
}

/**
 * T-10 · What a session involves. Numbered because it is genuinely a sequence;
 * step 1 states that the first visit is a consultation, not a treatment. The
 * plate beside it is the second real image slot on the page.
 */
export function SessionBlock({ t }: { t: Treatment }) {
  if (!t.sessionSteps?.length) return null;
  return (
    <Block id="your-session">
      <Split
        aside={
          <>
            <h2 className="h-section">What a session involves</h2>
            <TreatmentMotif
              t={t}
              seed="session"
              className="mt-8 hidden aspect-[4/5] rounded-2xl rounded-t-[3rem] ring-1 ring-hairline lg:block"
            />
          </>
        }
      >
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
      </Split>
    </Block>
  );
}

/**
 * T-11 · After a session. Time-banded physical recovery only — never a
 * timeframe to a result, which would be an outcome claim (rule R-01).
 */
export function AfterSession({ a }: { a?: Treatment["afterSession"] }) {
  if (!a) return null;
  return (
    <Block id="after-a-session">
      <Split
        aside={
          <>
            <h2 className="h-section">After a session</h2>
            <p className="mt-6 max-w-[40ch] leading-relaxed text-ink-700">{a.intro}</p>
          </>
        }
      >
        <Rows>
          {a.bands.map((b) => (
            <Row key={b.title} title={b.title}>
              {b.body}
            </Row>
          ))}
        </Rows>
        <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{a.aftercare}</p>
      </Split>
    </Block>
  );
}

/**
 * T-12 · Risks and what it cannot do. Visually distinct so it cannot be
 * skimmed past — a porcelain band reading as a formal clinical notice rather
 * than a yellow alert card. `cannotDo` carries at least three real limits and
 * the pigment-change note is mandatory on energy-based treatments (rule R-05).
 */
export function RisksBlock({ r, name }: { r?: Treatment["risks"]; name: string }) {
  if (!r) return null;
  return (
    <Block id="risks" tone="porcelain">
      <Split
        aside={
          <>
            <h2 className="h-section">Risks, side effects, and what {name} cannot do</h2>
            <p className="mt-6 max-w-[40ch] leading-relaxed text-ink-700">{r.intro}</p>
          </>
        }
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
        <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{r.disclose}</p>
      </Split>
    </Block>
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
    <Block id="sessions-cost">
      <Split
        aside={
          <>
            <h2 className="h-section">What affects the number of sessions, and the cost</h2>
            <p className="mt-6 max-w-[40ch] leading-relaxed text-ink-700">{c.intro}</p>
            <WhatsAppButton
              href={href}
              variant="outline"
              position="cost"
              label="Ask what a plan might involve"
              className="mt-7"
            />
          </>
        }
      >
        <ul className="divide-y divide-hairline border-y border-hairline">
          {c.factors.map((f) => (
            <li key={f} className="max-w-[62ch] py-4 leading-relaxed text-ink-700">
              {f}
            </li>
          ))}
        </ul>
        {c.outro && <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{c.outro}</p>}
      </Split>
    </Block>
  );
}

/**
 * T-14 · What these treatments do. Manufacturer imagery only, labelled in all
 * four required places (heading paragraph, every caption, every alt text,
 * closing disclaimer). Omitted entirely rather than shipped half-labelled.
 */
export function ManufacturerImages({ images }: { images?: Treatment["manufacturerImages"] }) {
  if (!images?.length) return null;
  return (
    <Block>
      <Split
        aside={
          <>
            <h2 className="h-section">What these treatments do</h2>
            <p className="mt-6 max-w-[40ch] leading-relaxed text-ink-700">
              The images below are supplied by the device manufacturers. They are not Kaiteki
              patients, and they illustrate what this category of treatment is designed to act on.
            </p>
          </>
        }
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {images.map((img) => (
            <figure key={img.src}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-tint ring-1 ring-hairline">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[0.8125rem] leading-snug text-ink-500">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-8 max-w-[62ch] text-sm leading-relaxed text-ink-500">
          Images supplied by device manufacturers. Not Kaiteki patients. Individual results vary
          and a doctor assesses suitability before treatment.
        </p>
      </Split>
    </Block>
  );
}

/**
 * T-18 · Locations. Every branch where the treatment is offered, each linked —
 * never a "+N more" (rule R-12). Omitting `availableAt` lists all branches.
 */
export function LocationsBlock({ availableAt }: { availableAt?: string[] }) {
  const list = availableAt?.length
    ? branches.filter((b) => availableAt.includes(b.slug))
    : branches;
  if (!list.length) return null;
  return (
    <div className="mt-10 border-t border-hairline pt-6">
      <h3 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent">
        Available at
      </h3>
      <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        {list.map((b) => (
          <li key={b.slug}>
            <Link
              href={`/locations/${b.slug}`}
              className="text-[0.9375rem] text-ink-700 underline decoration-hairline underline-offset-4 transition-colors hover:decoration-mocha hover:text-espresso"
            >
              {b.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
