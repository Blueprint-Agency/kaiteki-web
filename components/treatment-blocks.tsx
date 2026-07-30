import Image from "next/image";
import Link from "next/link";
import { SectionCard } from "@/components/SectionCard";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArrowRight } from "@/components/icons";
import { branches } from "@/content/data/branches";
import type { Treatment } from "@/lib/types";

/**
 * Treatment-page template v2 blocks (config/treatments.json, T-01…T-19).
 *
 * Each block takes only the slice of `Treatment` it needs and returns null when
 * that data is absent — so a page turns a block off by omitting its field, and
 * TreatmentView stays a flat list of blocks with no per-page branching.
 * Shared with concern pages where the block is genuinely the same (T-03, T-18).
 */

/** T-02 · Fact strip. Three process facts, no display-size numerals. */
export function FactStrip({ facts }: { facts?: Treatment["facts"] }) {
  if (!facts?.length) return null;
  return (
    <dl className="mt-6 grid gap-3 sm:grid-cols-3">
      {facts.slice(0, 3).map((f) => (
        <div key={f.label} className="rounded-xl border border-hairline bg-tint p-4">
          <dt className="text-sm font-semibold text-espresso">{f.value}</dt>
          <dd className="mt-1 text-[0.8125rem] leading-snug text-ink-500">{f.label}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * T-03 · Jump navigation. Plain anchors, no JavaScript; horizontal scroll on
 * narrow screens. `scroll-mt-*` on each block clears the sticky header.
 */
export function JumpNav({ items }: { items?: { id: string; label: string }[] }) {
  if (!items?.length) return null;
  return (
    <nav aria-label="On this page" className="mt-8 -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <ul className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
        {items.slice(0, 7).map((i) => (
          <li key={i.id}>
            <a
              href={`#${i.id}`}
              className="inline-flex whitespace-nowrap rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-sm text-ink-700 transition-colors hover:border-mocha hover:text-espresso"
            >
              {i.label}
            </a>
          </li>
        ))}
      </ul>
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
    <SectionCard id="what-it-treats" title={title}>
      <div className="grid gap-4 sm:grid-cols-2">
        {routes.map((r) => (
          <div key={r.title} className="rounded-xl border border-hairline bg-tint p-5">
            <h3 className="font-semibold text-espresso">{r.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-700">{r.body}</p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              {r.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
                >
                  {l.label} <ArrowRight size={14} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      {note && <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-700">{note}</p>}
    </SectionCard>
  );
}

/**
 * T-07 · Archetype variant module (Full depth only). On energy/device
 * treatments this is the wavelength comparison; the copy must read as a
 * factual difference in delivery, never as a ranking (rule R-02).
 */
export function VariantModule({ m }: { m?: Treatment["variantModule"] }) {
  if (!m) return null;
  return (
    <SectionCard id="which-device" title={m.heading}>
      <p className="text-ink-700">{m.intro}</p>
      <div className="mt-6 space-y-4">
        {m.items.map((i) => (
          <div key={i.title} className="rounded-xl border border-hairline bg-tint p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-mocha">
              {i.eyebrow}
            </p>
            <h3 className="mt-1 font-semibold text-espresso">{i.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-700">{i.body}</p>
            {i.href && (
              <Link
                href={i.href}
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
              >
                {i.hrefLabel ?? "Learn more"} <ArrowRight size={14} />
              </Link>
            )}
          </div>
        ))}
      </div>
      {m.note && <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-700">{m.note}</p>}
    </SectionCard>
  );
}

/**
 * T-08 · Mid-page CTA — the primary of the three permitted CTAs (rule R-06),
 * placed right after T-06/T-07 where the visitor has a question they cannot
 * answer alone. Heading is authored per page.
 */
export function CtaMid({ cta, href }: { cta?: Treatment["ctaMid"]; href: string }) {
  if (!cta) return null;
  return (
    <SectionCard className="bg-tint">
      <h2 className="text-xl font-bold text-espresso">{cta.heading}</h2>
      <p className="mt-2 max-w-xl leading-relaxed text-ink-700">{cta.body}</p>
      <div className="mt-5">
        <WhatsAppButton href={href} size="lg" label="Ask about this on WhatsApp" />
      </div>
    </SectionCard>
  );
}

/** T-09 · Who should avoid it, plus what to bring to consultation. */
export function AvoidList({
  items,
  bring,
}: {
  items?: Treatment["avoidIf"];
  bring?: string;
}) {
  if (!items?.length) return null;
  return (
    <>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i.lead} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-700">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mocha" />
            <span>
              <strong className="font-semibold text-espresso">{i.lead}</strong> {i.body}
            </span>
          </li>
        ))}
      </ul>
      {bring && <p className="mt-5 leading-relaxed text-ink-700">{bring}</p>}
    </>
  );
}

/**
 * T-10 · What a session involves. Numbered because it is genuinely a sequence;
 * step 1 states that the first visit is a consultation, not a treatment.
 */
export function SessionSteps({ steps }: { steps?: Treatment["sessionSteps"] }) {
  if (!steps?.length) return null;
  return (
    <ol className="mt-2 space-y-5">
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-4">
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-mocha/10 text-sm font-semibold text-mocha">
            {i + 1}
          </span>
          <div>
            <h3 className="font-semibold text-espresso">{s.title}</h3>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-700">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/**
 * T-11 · After a session. Time-banded physical recovery only — never a
 * timeframe to a result, which would be an outcome claim (rule R-01).
 */
export function AfterSession({ a }: { a?: Treatment["afterSession"] }) {
  if (!a) return null;
  return (
    <SectionCard id="after-a-session" title="After a session: what happens, and what to do">
      <p className="leading-relaxed text-ink-700">{a.intro}</p>
      <dl className="mt-5 divide-y divide-hairline border-y border-hairline">
        {a.bands.map((b) => (
          <div key={b.title} className="py-4 sm:flex sm:gap-6">
            <dt className="font-semibold text-espresso sm:w-48 sm:shrink-0">{b.title}</dt>
            <dd className="mt-1 text-[0.9375rem] leading-relaxed text-ink-700 sm:mt-0">
              {b.body}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-5 leading-relaxed text-ink-700">{a.aftercare}</p>
    </SectionCard>
  );
}

/**
 * T-12 · Risks and what it cannot do. Visually distinct so it cannot be
 * skimmed past. `cannotDo` carries at least three real limits and the
 * pigment-change note is mandatory on energy-based treatments (rule R-05).
 */
export function RisksBlock({ r, name }: { r?: Treatment["risks"]; name: string }) {
  if (!r) return null;
  return (
    <section
      id="risks"
      className="scroll-mt-28 rounded-2xl border border-warn/30 bg-warn/[0.06] p-6 sm:p-8"
    >
      <h2 className="text-xl font-bold text-espresso sm:text-2xl">
        Risks, side effects, and what {name} cannot do
      </h2>
      <p className="mt-4 leading-relaxed text-ink-700">{r.intro}</p>

      <h3 className="mt-6 font-semibold text-espresso">Common and temporary</h3>
      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-700">{r.common}</p>

      <h3 className="mt-5 font-semibold text-espresso">Less common</h3>
      <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-700">{r.lessCommon}</p>

      {r.pigmentNote && (
        <>
          <h3 className="mt-5 font-semibold text-espresso">Pigment change and Malaysian skin</h3>
          <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-700">{r.pigmentNote}</p>
        </>
      )}

      <h3 className="mt-5 font-semibold text-espresso">What it cannot do</h3>
      <ul className="mt-1.5 space-y-2">
        {r.cannotDo.map((c) => (
          <li key={c} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-700">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-warn" />
            <span>{c}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-700">{r.disclose}</p>
    </section>
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
    <SectionCard id="sessions-cost" title="What affects the number of sessions, and the cost">
      <p className="leading-relaxed text-ink-700">{c.intro}</p>
      <ul className="mt-4 space-y-2.5">
        {c.factors.map((f) => (
          <li key={f} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-700">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-mocha" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      {c.outro && <p className="mt-5 leading-relaxed text-ink-700">{c.outro}</p>}
      <div className="mt-6">
        <WhatsAppButton href={href} variant="outline" label="Ask what a plan might involve" />
      </div>
    </SectionCard>
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
    <SectionCard title="What these treatments do">
      <p className="leading-relaxed text-ink-700">
        The images below are supplied by the device manufacturers. They are not Kaiteki patients,
        and they are included to illustrate what this category of treatment is designed to act on.
        Individual results vary, and suitability is assessed by a doctor.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {images.map((img) => (
          <figure key={img.src}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-hairline bg-tint">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 text-xs leading-snug text-ink-500">
              {img.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-5 text-sm leading-relaxed text-ink-500">
        Images supplied by device manufacturers. Not Kaiteki patients. Individual results vary and
        a doctor assesses suitability before treatment.
      </p>
    </SectionCard>
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
    <div className="mt-8 border-t border-hairline pt-6">
      <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-mocha">Available at</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {list.map((b) => (
          <li key={b.slug}>
            <Link
              href={`/locations/${b.slug}`}
              className="inline-flex rounded-full border border-hairline bg-page px-3 py-1.5 text-sm text-ink-700 transition-colors hover:border-mocha hover:text-espresso"
            >
              {b.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
