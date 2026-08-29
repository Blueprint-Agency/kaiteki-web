import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { ResultsDisclaimer } from "@/components/Disclaimer";
import { Rows, Row } from "@/components/treatment-blocks";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArrowRight } from "@/components/icons";
import { VariantTabs } from "@/components/VariantTabs";
import { treatmentHref } from "@/content/data/treatments";
import type { Concern, LeadIn } from "@/lib/types";
import type { Treatment } from "@/lib/types";

/**
 * Concern-page template v1 blocks (config/concerns.json, 01…18).
 *
 * Same contract as treatment-blocks.tsx: each block takes only the slice of
 * `Concern` it needs and returns null when that data is absent, so a page turns
 * a block off by omitting its field. Blocks 04, 05 and 06 are the only ones
 * that change shape by archetype, and even those are data-driven — the
 * archetype picks which data was authored, not which branch runs here.
 *
 * Layout is forked from the treatment spine (docs/12 §Layout). `Split` — the
 * sticky 21rem heading gutter — is gone from concern pages and left untouched
 * on /treatments: here the heading sits above its own content in a single
 * measured column beside the contents rail. Sections therefore render *inside*
 * ConcernView's reading column and carry no Container of their own; only the
 * three surfaced bands break out to full width.
 */

/* ── Layout primitives (concern-only fork) ──────────────────────────────── */

/** Clearance for the 68px sticky site header. The jump-nav bar retired with
 *  the gutter, so there is only one piece of sticky chrome left to clear. */
const CLEAR_HEADER = "scroll-mt-24";

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
    <section id={id} className={`py-12 sm:py-14 ${id ? CLEAR_HEADER : ""} ${className}`}>
      {children}
    </section>
  );
}

/**
 * One of the exactly three surfaced bands, each used once: espresso is the
 * conversion moment, tint the technology comparison, porcelain the safety
 * notice. A band breaks out of the reading column, so it carries a Container.
 */
export function Band({
  id,
  tone,
  children,
}: {
  id?: string;
  tone: "tint" | "porcelain" | "espresso";
  children: ReactNode;
}) {
  const surface = {
    tint: "border-y border-hairline bg-tint",
    porcelain: "border-y border-hairline bg-porcelain",
    espresso: "on-dark bg-espresso text-ink-on-dark",
  }[tone];
  return (
    <section id={id} className={`py-14 sm:py-20 ${id ? CLEAR_HEADER : ""} ${surface}`}>
      <Container>{children}</Container>
    </section>
  );
}

/** Bold lead-in bullets — the scannable, quotable shape blocks 04 and 13 share. */
function LeadInList({ items }: { items: LeadIn[] }) {
  return (
    <ul className="divide-y divide-hairline border-y border-hairline">
      {items.map((i) => (
        <li key={i.lead} className="max-w-[62ch] py-4 leading-relaxed text-ink-700">
          <strong className="font-semibold text-espresso">{i.lead}</strong> {i.body}
        </li>
      ))}
    </ul>
  );
}

/* ── Media (docs/12 §"Two figure components, not one") ──────────────────── */

/**
 * A 2:1 photograph whose subject sits hard left with the right half empty. The
 * caption goes in that empty half and carries the meaning, so the image is
 * `alt=""` — a screen reader that heard both would hear the same thing twice.
 */
function Figure({ src, caption }: { src: string; caption: string }) {
  return (
    <figure className="mt-6 grid gap-4 sm:grid-cols-[1.5fr_1fr] sm:items-center sm:gap-7">
      <div className="relative aspect-[2/1] overflow-hidden rounded-xl bg-tint">
        <Image
          src={src}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, 460px"
          className="object-cover object-left"
        />
      </div>
      <figcaption className="text-sm leading-relaxed text-ink-500">{caption}</figcaption>
    </figure>
  );
}

/**
 * A finished infographic: headline and body copy are already in the artwork.
 * `object-contain` because cropping one cuts words off, no caption because it
 * would double-label what the image already says, and the alt transcribes the
 * burned-in copy so both audiences get the same information.
 */
function Slide({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mt-6 aspect-[2/1] overflow-hidden rounded-xl bg-tint ring-1 ring-hairline">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 720px"
        className="object-contain"
      />
    </div>
  );
}

/**
 * The scalloped die-cut illustrations. Transparent PNGs on the page ground —
 * never on a tinted band, where the die-cut edge reads as a rendering fault.
 * `group` splits one set into two (active types vs scar types) without a second
 * field; ungrouped illustrations render as a single unlabelled set. The label
 * and sub are the accessible text, so the image itself is decorative.
 */
function IllustrationGrid({ items }: { items: NonNullable<Concern["illustrations"]> }) {
  // Grouped by name rather than by adjacency: authored data that interleaves
  // two groups would otherwise render the same heading twice, under a repeated
  // React key. First mention fixes a group's position.
  const groups = new Map<string | undefined, typeof items>();
  for (const i of items) groups.set(i.group, [...(groups.get(i.group) ?? []), i]);
  return (
    <div className="mt-10 space-y-12">
      {[...groups].map(([name, group]) => (
        <div key={name ?? "ungrouped"}>
          {name && <h3 className="h-sub">{name}</h3>}
          <ul className={`grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4 ${name ? "mt-6" : ""}`}>
            {group.map((i) => (
              <li key={i.src}>
                <div className="relative aspect-square">
                  <Image
                    src={i.src}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 45vw, 180px"
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 font-display text-base text-espresso">{i.label}</p>
                <p className="mt-1 text-sm leading-snug text-ink-500">{i.sub}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/**
 * The results gallery. The sources are pre-composited — before and after are
 * already side by side in one file — so this is a captioned grid of single
 * images, not a two-panel comparator.
 *
 * Each cell is capped at the image's own native width: 74 of 111 sources are
 * under 700px (docs/11 §1.2), and stretching one to fill a column is the
 * failure this exists to prevent. The declared ratio reserves the space, so
 * nothing shifts as the images arrive. The disclaimer is not optional
 * furniture — it renders from its single shared source with every gallery
 * (ADR-0001 §2, gate rule Q-18).
 */
export function ResultsBlock({ items }: { items?: Concern["results"] }) {
  if (!items?.length) return null;
  return (
    <section id="results" className={`py-14 sm:py-20 ${CLEAR_HEADER}`}>
      <Container>
        <h2 className="h-section">Results from Kaiteki patients</h2>
        <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-9 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((r) => (
            <li key={r.src}>
              <div
                className="relative overflow-hidden rounded-lg bg-tint ring-1 ring-hairline"
                style={{ aspectRatio: r.ratio, maxWidth: r.nativeWidth }}
              >
                {/* `object-contain`, not cover: the file is a composited pair,
                    and any drift between the declared ratio and the source
                    would crop one half of it. The caption carries the meaning,
                    so the image is decorative to a screen reader. */}
                <Image
                  src={r.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 260px"
                  className="object-contain"
                />
              </div>
              <p className="mt-2.5 max-w-[34ch] text-sm leading-snug text-ink-500">{r.caption}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 max-w-[70ch]">
          <ResultsDisclaimer />
        </div>
      </Container>
    </section>
  );
}

/**
 * C-04 · What drives it. The heading is authored per concern rather than fixed,
 * because nothing "causes" a tattoo and nobody "develops" a birthmark —
 * hardcoding "Common causes" here is what makes a template read as generated.
 */
export function DriversBlock({
  d,
  figures,
}: {
  d?: Concern["drivers"];
  figures?: Concern["figures"];
}) {
  if (!d?.items.length) return null;
  return (
    <Section id="causes">
      <h2 className="h-section">{d.heading}</h2>
      {d.intro && <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-900">{d.intro}</p>}
      {/* One figure per cause, in authored order. Without figures this is the
          same bold lead-in list every other block uses; with them each cause
          gets its photograph and the caption beside it. */}
      <div className="mt-8">
        {figures?.length ? (
          <ul className="divide-y divide-hairline border-y border-hairline">
            {d.items.map((i, n) => (
              <li key={i.lead} className="py-6">
                <p className="max-w-[62ch] leading-relaxed text-ink-700">
                  <strong className="font-semibold text-espresso">{i.lead}</strong> {i.body}
                </p>
                {figures[n] && <Figure {...figures[n]} />}
              </li>
            ))}
          </ul>
        ) : (
          <LeadInList items={d.items} />
        )}
      </div>
      {d.outro && <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{d.outro}</p>}
    </Section>
  );
}

/**
 * C-05 · The archetype differentiator. Three presentations cover all five
 * archetypes; which one renders is decided by the authored data's `kind`, so
 * adding archetype F later is a data shape, not a new branch in every page.
 */
export function VariantBlock({
  v,
  illustrations,
  slides,
}: {
  v?: Concern["variant"];
  illustrations?: Concern["illustrations"];
  slides?: Concern["slides"];
}) {
  if (!v) return null;

  return (
    <Section id="which-type">
      <h2 className="h-section max-w-[24ch]">{v.heading}</h2>
      <p className="mt-6 max-w-[64ch] leading-relaxed text-ink-700">{v.intro}</p>

      {!!illustrations?.length && <IllustrationGrid items={illustrations} />}

      {v.kind === "tabs" && <VariantTabs tabs={v.tabs} />}

      {/* No heading above the slides: each one already carries its own
          headline in the artwork, and a hardcoded one here would be the
          template writing copy it does not have (see DriversBlock). */}
      {!!slides?.length && (
        <div className="mt-12">
          {slides.map((s) => (
            <Slide key={s.src} {...s} />
          ))}
        </div>
      )}

      {v.kind === "pairs" && (
        <dl className="mt-12 divide-y divide-hairline border-y border-hairline">
          {v.pairs.map((p) => (
            <div key={p.claim} className="grid gap-2 py-6 sm:grid-cols-2 sm:gap-12 sm:py-7">
              <dt className="max-w-[40ch] font-display text-lg leading-snug text-ink-500 line-through decoration-warn/60 decoration-1">
                {p.claim}
              </dt>
              <dd className="max-w-[52ch] leading-relaxed text-ink-700">{p.reality}</dd>
            </div>
          ))}
        </dl>
      )}

      {v.kind === "table" && (
        <>
          <ScrollTable columns={v.columns} rows={v.rows} className="mt-12" />
          {v.note && (
            <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{v.note}</p>
          )}
        </>
      )}
    </Section>
  );
}

/**
 * C-06 · Where it appears. Only rendered where location is diagnostically
 * meaningful — archetype B omits it, E replaces it with non-surgical vs
 * surgical. The closing `note` card carries the differential ("this might be
 * something else entirely"), which is the honest, citable part of the block.
 */
export function LocationBlock({ l }: { l?: Concern["locationBlock"] }) {
  if (!l?.cards.length) return null;
  return (
    <Section id="where">
      <h2 className="h-section max-w-[22ch]">{l.heading}</h2>
      {l.intro && <p className="mt-6 max-w-[64ch] leading-relaxed text-ink-700">{l.intro}</p>}
      <div className="mt-10 grid gap-x-12 gap-y-9 sm:grid-cols-2">
        {l.cards.map((c) => (
          <div key={c.title} className="border-t border-hairline pt-5">
            <h3 className="h-sub">{c.title}</h3>
            <p className="mt-2.5 leading-relaxed text-ink-700">{c.body}</p>
          </div>
        ))}
        {l.note && (
          <div className="border-t border-warn/50 pt-5">
            <h3 className="h-sub">{l.note.title}</h3>
            <p className="mt-2.5 leading-relaxed text-ink-700">{l.note.body}</p>
          </div>
        )}
      </div>
    </Section>
  );
}

/**
 * C-07 · When to see a doctor. A genuine trust signal on a YMYL page and the
 * honest counterweight to a page that otherwise lists treatments — which is
 * why it is never trimmed, and is expanded on archetype D.
 */
export function SeeDoctorBlock({ s }: { s?: Concern["seeDoctor"] }) {
  if (!s?.triggers.length) return null;
  return (
    <Section id="see-a-doctor">
      <h2 className="h-section">{s.heading ?? "When to see a doctor"}</h2>
      <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-ink-900">{s.intro}</p>
      <ul className="mt-7 divide-y divide-hairline border-y border-hairline">
        {s.triggers.map((t) => (
          <li key={t} className="max-w-[62ch] py-4 leading-relaxed text-ink-700">
            {t}
          </li>
        ))}
      </ul>
      {s.outro && <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{s.outro}</p>}
    </Section>
  );
}

/**
 * C-09 · Treatment options with the mandatory "why for this concern" line.
 * That line is the only thing keeping five concern pages that share a treatment
 * list from competing with each other for the same terms (rule R-04), so a
 * treatment with no authored `why` still renders — visibly bare — rather than
 * silently borrowing a neighbouring page's sentence.
 */
export function TreatmentsBlock({
  c,
  options,
}: {
  c: Concern;
  options: Treatment[];
}) {
  if (!options.length) return null;
  return (
    <Section id="treatments">
      <h2 className="h-section max-w-[22ch]">Treatment options at Kaiteki</h2>
      <p className="mt-6 max-w-[64ch] leading-relaxed text-ink-700">
        {c.treatmentsIntro ??
          `These are the treatments most often considered at our clinics for ${c.name.toLowerCase()}. None of them is a default. Which one is appropriate, and whether any of them is, depends on what the assessment finds.`}
      </p>
      <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {options.map((t) => {
          const w = c.treatmentWhy?.[t.slug];
          return (
            <div key={t.slug} className="border-t border-espresso/20 pt-5">
              <p className="ledger text-[0.6875rem] uppercase tracking-[0.14em]">{t.category}</p>
              <h3 className="h-sub mt-1.5">{t.name}</h3>
              <p className="mt-2 max-w-[38ch] font-medium leading-snug text-accent">
                {w?.why ?? "Considered case by case at consultation"}
              </p>
              <p className="mt-3 max-w-[42ch] leading-relaxed text-ink-700">
                {w?.body ?? t.summary}
              </p>
              <Link
                href={treatmentHref(t)}
                className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
              >
                {t.name}
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          );
        })}
      </div>
      {c.treatmentsNote && (
        <p className="mt-12 max-w-[64ch] border-t border-hairline pt-6 leading-relaxed text-ink-700">
          {c.treatmentsNote}
        </p>
      )}
    </Section>
  );
}

/** Shared table shell: the comparison IS the value, so it scrolls rather than
 *  collapsing into stacked cards on mobile. */
function ScrollTable({
  columns,
  rows,
  className = "",
}: {
  columns: string[];
  rows: string[][];
  className?: string;
}) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full min-w-[42rem] border-collapse text-left">
        <thead>
          <tr className="border-b border-espresso/25">
            {columns.map((h) => (
              <th
                key={h}
                scope="col"
                className="pb-3 pr-6 text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-accent"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-hairline">
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((cell, i) => (
                <td
                  key={i}
                  className={
                    i === 0
                      ? "py-4 pr-6 font-medium text-espresso"
                      : "py-4 pr-6 text-[0.9375rem] text-ink-700"
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * C-10 · Which treatment suits which type. Full depth only — a comparison table
 * needs at least four things to compare, and on a one-treatment concern it
 * reads as padding. Column headers describe, never rank (rule R-02).
 */
export function CompareBlock({ c }: { c?: Concern["compare"] }) {
  if (!c?.rows.length) return null;
  return (
    <Section id="compare">
      <h2 className="h-section max-w-[24ch]">Which treatment suits which type?</h2>
      <p className="mt-6 max-w-[64ch] leading-relaxed text-ink-700">{c.intro}</p>
      <ScrollTable columns={c.columns} rows={c.rows} className="mt-10" />
      {c.note && <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{c.note}</p>}
    </Section>
  );
}

/**
 * C-12 · What your first visit involves. The page asks twice for a consultation
 * but never says what one is; this is friction removal, and the "no obligation"
 * and "sometimes the answer is to wait" lines do more than a fourth CTA would.
 */
export function FirstVisitBlock({
  f,
  images,
}: {
  f?: Concern["firstVisit"];
  images?: Concern["visitImages"];
}) {
  if (!f?.steps.length) return null;
  return (
    <Section id="first-visit">
      <h2 className="h-section">What your first visit involves</h2>
      <p className="mt-6 max-w-[62ch] leading-relaxed text-ink-700">{f.intro}</p>
      <ol className="mt-10 space-y-8 border-l border-hairline pl-8">
        {f.steps.map((s, i) => (
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
      {f.outro && <p className="mt-9 max-w-[62ch] leading-relaxed text-ink-700">{f.outro}</p>}
      {/* Treatment-in-progress photography, here and nowhere else: a photograph
          of a device in use is not an outcome, and the results gallery would
          present it as one (docs/11 §3). The caption carries the meaning. */}
      {!!images?.length && (
        <ul className="mt-10 grid gap-6 sm:grid-cols-3">
          {images.map((v) => (
            <li key={v.src}>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-tint">
                <Image
                  src={v.src}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover"
                />
              </div>
              <p className="mt-2.5 text-sm leading-snug text-ink-500">{v.caption}</p>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

/**
 * C-13 · Risks and realistic limits. Porcelain band — a formal clinical notice
 * rather than an alert card. At least one item must state what treatment cannot
 * do, and the pigment-change note is required wherever energy devices are
 * listed (rule R-05); both are enforced by scripts/validate-concerns.mjs.
 */
export function ConcernRisksBlock({ r }: { r?: Concern["risks"] }) {
  if (!r?.items.length) return null;
  return (
    <Band id="risks" tone="porcelain">
      <h2 className="h-section">Risks and what to expect</h2>
      {r.intro && <p className="mt-6 max-w-[62ch] leading-relaxed text-ink-700">{r.intro}</p>}
      <div className="mt-10 divide-y divide-espresso/15 border-y border-espresso/15">
        {r.items.map((i) => (
          <Row key={i.lead} title={i.lead}>
            {i.body}
          </Row>
        ))}
      </div>
      <p className="mt-8 max-w-[62ch] leading-relaxed text-ink-700">{r.disclose}</p>
    </Band>
  );
}

/**
 * C-14 · What affects the cost. Factors only — no figures, no ranges, no
 * "from RM" (rule R-03) — structured as a list so it can become a price table
 * later without restructuring the page. Ghost CTA: the secondary variant of the
 * same WhatsApp destination, not a fourth CTA.
 */
export function ConcernCostBlock({
  c,
  href,
}: {
  c?: Concern["costFactors"];
  href: string;
}) {
  if (!c?.factors.length) return null;
  return (
    <Section id="cost">
      <h2 className="h-section">What affects the cost</h2>
      <p className="mt-6 max-w-[62ch] leading-relaxed text-ink-700">{c.intro}</p>
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
        label="Ask about pricing for your case"
        className="mt-8"
      />
    </Section>
  );
}

/**
 * C-17 · Related concerns. Each carries a one-line reason for the relationship —
 * that is what makes it an internal link rather than a nav dump, and it gives a
 * crawler context for the edge. The route back up to /concerns matters: without
 * it, anyone who self-identified incorrectly is stranded.
 */
export function RelatedConcernsBlock({
  items,
}: {
  items: { slug: string; name: string; reason: string }[];
}) {
  if (!items.length) return null;
  return (
    <Section>
      <h2 className="h-section">Related concerns</h2>
      <ul className="mt-8 divide-y divide-hairline border-y border-hairline">
        {items.map((i) => (
          <li key={i.slug} className="py-5">
            <Link
              href={`/concerns/${i.slug}`}
              className="group inline-flex items-center gap-1.5 font-display text-lg font-medium text-espresso decoration-mocha/50 underline-offset-4 hover:underline"
            >
              {i.name}
              <ArrowRight
                size={15}
                className="text-accent transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <p className="mt-1.5 max-w-[58ch] leading-relaxed text-ink-700">{i.reason}</p>
          </li>
        ))}
      </ul>
      <Link
        href="/concerns"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
      >
        Back to all concerns
      </Link>
    </Section>
  );
}

export { Rows, Row };
