import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Container } from "@/components/Container";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArrowRight } from "@/components/icons";
import {
  Section,
  SectionHead,
  Note,
  List,
  Item,
  Steps,
  PhotoGrid,
  IconGrid,
} from "@/components/page-blocks";
import type { Treatment } from "@/lib/types";

/**
 * Treatment-page template v2 blocks (config/treatments.json, T-01…T-19).
 *
 * Each block takes only the slice of `Treatment` it needs and returns null when
 * that data is absent — so a page turns a block off by omitting its field, and
 * TreatmentView stays a flat list of blocks with no per-page branching.
 *
 * Layout comes from the shared kit in `page-blocks.tsx` (2026-10): every list
 * is the same hairline `List`, every sequence the same `Steps` timeline, and
 * every section sits on page ground. The one surface is the espresso mid-page
 * CTA, which the concern page shares.
 */

export { Section };

/** A text link with the trailing arrow, as used under list rows. */
export function ArrowLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
    >
      {children}
      <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}

/* ── Blocks ─────────────────────────────────────────────────────────────── */

/**
 * T-02 · Fact rail. Authored process facts, else the derived session/downtime
 * tags. A full-width rule-divided rail rather than three tinted boxes — these
 * are record values, not metrics.
 */
export function FactRail({ facts }: { facts?: { value: string; label: string }[] }) {
  if (!facts?.length) return null;

  return (
    <div className="border-y border-hairline">
      <Container>
        <dl className="grid divide-y divide-hairline sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {facts.slice(0, 3).map((f) => (
            <div key={f.label} className="py-5 sm:px-9 sm:py-8 sm:first:pl-0 sm:last:pr-0">
              <dt className="h-sub">{f.value}</dt>
              <dd className="mt-1.5 max-w-[34ch] text-sm leading-snug text-ink-500">{f.label}</dd>
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
  children,
}: {
  title: string;
  routes?: Treatment["routes"];
  note?: string;
  /** The concern card shelf, so routed pages show the same cards as the rest. */
  children?: ReactNode;
}) {
  if (!routes?.length) return null;
  return (
    <Section id="what-it-treats">
      <SectionHead heading={title} />
      <List>
        {routes.map((r) => (
          <Item key={r.title} title={r.title}>
            <p>{r.body}</p>
            <div className="flex flex-wrap gap-x-5">
              {r.links.map((l) => (
                <ArrowLink key={l.href} href={l.href}>
                  {l.label}
                </ArrowLink>
              ))}
            </div>
          </Item>
        ))}
      </List>
      {note && <Note>{note}</Note>}
      {children}
    </Section>
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
    <Section id="which-device">
      <SectionHead heading={m.heading} intro={m.intro} />
      <List>
        {m.items.map((i) => (
          <Item key={i.title} title={i.title}>
            {i.eyebrow && <p className="text-sm text-ink-500">{i.eyebrow}</p>}
            <p className={i.eyebrow ? "mt-2" : undefined}>{i.body}</p>
            {i.href && <ArrowLink href={i.href}>{i.hrefLabel ?? "Learn more"}</ArrowLink>}
          </Item>
        ))}
      </List>
      {m.note && <Note>{m.note}</Note>}
    </Section>
  );
}

/**
 * T-08 · Mid-page CTA — the primary of the three permitted CTAs (rule R-06),
 * placed where the visitor has a question they cannot answer alone. The one
 * espresso surface on the page, shared with the concern page. The green pill
 * carries a warm-white ring because green on espresso is only 2.1:1.
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
    <section className="on-dark my-6 rounded-2xl bg-espresso px-6 py-10 text-ink-on-dark sm:rounded-3xl sm:px-12 sm:py-14">
      <h2 className="h-section max-w-[20ch]">{cta.heading}</h2>
      <p className="mt-4 max-w-[54ch] leading-relaxed text-ink-on-dark/85">{cta.body}</p>
      <WhatsAppButton
        href={href}
        size="lg"
        position={position}
        label="Ask about this on WhatsApp"
        className="mt-7 w-full sm:w-auto"
      />
      <p className="mt-3 text-sm text-ink-on-dark/75">
        Free consultation, about 20 to 30 minutes, no obligation.
      </p>
    </section>
  );
}

/**
 * T-09 · Suitability. `avoidIf` is the authored form; the suitable/not-suitable
 * pair is the fallback for treatments that have not been rewritten yet.
 */
export function SuitabilityBlock({ t }: { t: Treatment }) {
  if (t.avoidIf?.length) {
    return (
      <Section id="suitability">
        <SectionHead heading="Who should postpone or avoid it" intro={t.bringToConsult} />
        <List>
          {t.avoidIf.map((i) => (
            <Item key={i.lead} lead={i.lead}>
              {i.body}
            </Item>
          ))}
        </List>
      </Section>
    );
  }

  const groups = [
    { label: "Often considered for", items: t.suitableFor ?? [] },
    { label: "Usually not suitable for", items: t.notSuitableFor ?? [] },
  ].filter((g) => g.items.length > 0);
  if (!groups.length) return null;

  return (
    <Section id="suitability">
      <SectionHead heading="Is this right for you?" />
      {groups.map((g) => (
        <div key={g.label} className="mt-8">
          <h3 className="h-sub">{g.label}</h3>
          <List className="mt-4">
            {g.items.map((li) => (
              <Item key={li}>{li}</Item>
            ))}
          </List>
        </div>
      ))}
    </Section>
  );
}

/**
 * T-10 · What a session involves. Numbered because it is genuinely a sequence;
 * step 1 states that the first visit is a consultation, not a treatment.
 */
export function SessionBlock({ t }: { t: Treatment }) {
  if (!t.sessionSteps?.length) return null;
  return (
    <Section id="your-session">
      <SectionHead heading="What a session involves" />
      <Steps steps={t.sessionSteps} />
    </Section>
  );
}

/**
 * Kaiteki's own photos of the treatment in progress — the same large grid as
 * the concern page's first-visit photos. A device in use is not an outcome, so
 * the caption carries the meaning and there is no results framing.
 */
export function ProcedurePhotos({ images }: { images?: Treatment["procedureImages"] }) {
  if (!images?.length) return null;
  return (
    <Section id="in-the-treatment-room">
      <SectionHead heading="In the treatment room" />
      <PhotoGrid images={images} />
    </Section>
  );
}

/**
 * The illustrated procedure sequence (`steps`). Numbered because the order is
 * the information. The sources are 156×156 icons, so the image stays under its
 * native width (Q-19) and sits beside its text.
 */
export function StepsBlock({ steps }: { steps?: Treatment["steps"] }) {
  if (!steps?.length) return null;
  return (
    <Section id="steps">
      <SectionHead heading="The procedure, step by step" />
      <ol className="mt-8 grid gap-8 sm:grid-cols-2">
        {steps.map((s, i) => (
          <li key={s.label} className="flex items-start gap-4">
            <div className="relative aspect-square w-24 flex-none sm:w-[120px]">
              <Image
                src={s.src}
                alt=""
                fill
                loading="lazy"
                sizes="120px"
                className="object-contain"
              />
            </div>
            <div className="min-w-0">
              <h3 className="h-sub">
                {i + 1}. {s.label}
              </h3>
              <p className="mt-2 leading-relaxed text-ink-700">{s.body}</p>
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
      <SectionHead heading="After a session" intro={a.intro} />
      <List>
        {a.bands.map((b) => (
          <Item key={b.title} title={b.title}>
            {b.body}
          </Item>
        ))}
      </List>
      <Note>{a.aftercare}</Note>
    </Section>
  );
}

/**
 * T-12 · Risks and what it cannot do. A formal clinical notice on page ground,
 * the twin of `ConcernRisksBlock`. `cannotDo` carries at least three real
 * limits and the pigment-change note is mandatory on energy-based treatments
 * (rule R-05).
 */
export function RisksBlock({ r, name }: { r?: Treatment["risks"]; name: string }) {
  if (!r) return null;
  return (
    <Section id="risks">
      <SectionHead heading={`Risks, side effects, and what ${name} cannot do`} intro={r.intro} />
      <List>
        <Item title="Common and temporary">{r.common}</Item>
        <Item title="Less common">{r.lessCommon}</Item>
        {r.pigmentNote && <Item title="Pigment change and Malaysian skin">{r.pigmentNote}</Item>}
        <Item title="What it cannot do">
          <ul className="list-disc space-y-2 pl-5 marker:text-ink-500">
            {r.cannotDo.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Item>
      </List>
      <Note>{r.disclose}</Note>
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
      <SectionHead heading="What affects the number of sessions, and the cost" intro={c.intro} />
      <List>
        {c.factors.map((f) => (
          <Item key={f}>{f}</Item>
        ))}
      </List>
      {c.outro && <Note>{c.outro}</Note>}
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
 * Transparent marks, so `object-contain` on page ground.
 */
export function ManufacturerImages({ images }: { images?: Treatment["manufacturerImages"] }) {
  if (!images?.length) return null;
  return (
    <Section id="manufacturer">
      <SectionHead
        heading="What these treatments do"
        intro="The images below are supplied by the device manufacturers. They are not Kaiteki patients, and they illustrate what this category of treatment is designed to act on."
      />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {images.map((img) => (
          <figure key={img.src}>
            <div className="relative aspect-[5/4] rounded-xl border border-hairline bg-page">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, 380px"
                className="object-contain p-4"
              />
            </div>
            <figcaption className="mt-3 text-sm leading-snug text-ink-500">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-8 max-w-[65ch] text-sm leading-relaxed text-ink-500">
        Images supplied by device manufacturers. Not Kaiteki patients. Individual results vary and
        a doctor assesses suitability before treatment.
      </p>
    </Section>
  );
}

/**
 * T-15 · Treatment areas. One field, two shapes: a string is a text chip,
 * an object is a die-cut zone photograph with its label beneath. Q-20 fails an
 * array that mixes the two.
 */
export function AreasBlock({ t }: { t: Treatment }) {
  if (!t.areas?.length) return null;
  const zones = t.areas.filter((a) => typeof a !== "string");

  return (
    <Section id="treatment-areas">
      <SectionHead
        heading="Treatment areas"
        intro={
          zones.length > 0
            ? `These are the areas ${t.name} is most often used for at Kaiteki. Which of them apply to you is decided at your consultation.`
            : undefined
        }
      />
      {zones.length > 0 ? (
        <IconGrid items={zones} />
      ) : (
        // Short labels, not sentences: a compact chip row reads at a glance
        // where a full-width row per word would just be scroll.
        <ul className="mt-6 flex flex-wrap gap-2">
          {t.areas.map((a) => (
            <li
              key={String(a)}
              className="rounded-full border border-hairline bg-surface px-3.5 py-1.5 text-sm text-ink-700"
            >
              {String(a)}
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

/* T-18 · Locations ("Available at") was removed in 2026-08. The branch list
 * belongs to /locations and the footer. */
