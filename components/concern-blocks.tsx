import Image from "next/image";
import Link from "next/link";
import { ResultsDisclaimer } from "@/components/Disclaimer";
import { ResultsGallery } from "@/components/ResultsGallery";
import { WhatsAppButton } from "@/components/WhatsAppCTA";
import { ArrowRight } from "@/components/icons";
import { FaceLayersDiagram } from "@/components/FaceLayersDiagram";
import { SkinDepthDiagram } from "@/components/SkinDepthDiagram";
import { UnderEyeDiagram } from "@/components/UnderEyeDiagram";
import {
  Section,
  SectionHead,
  Note,
  List,
  Item,
  Steps,
  Figure,
  PhotoGrid,
  IconGrid,
  ScrollTable,
} from "@/components/page-blocks";
import { ArrowLink } from "@/components/treatment-blocks";
import { treatmentHref } from "@/content/data/treatments";
import { resultsHeading } from "@/lib/concern-toc";
import type { Concern, ConcernVariant } from "@/lib/types";
import type { Treatment } from "@/lib/types";

/**
 * Concern-page template blocks (config/concerns.json, 01…18).
 *
 * Same contract as treatment-blocks.tsx: each block takes only the slice of
 * `Concern` it needs and returns null when that data is absent, so a page turns
 * a block off by omitting its field. Blocks 04, 05 and 06 are the only ones
 * that change shape by archetype, and even those are data-driven — the
 * archetype picks which data was authored, not which branch runs here.
 *
 * Layout comes from the shared kit in `page-blocks.tsx` (2026-10), so a
 * concern page and a treatment page read as one layout.
 */

export { Section };

/* ── Media ──────────────────────────────────────────────────────────────── */

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
 * The scalloped die-cut illustrations, on page ground. `group` splits one set
 * into two (active types vs scar types) without a second field. Grouped by
 * name rather than adjacency, so interleaved data never repeats a heading.
 */
function IllustrationGroups({ items }: { items: NonNullable<Concern["illustrations"]> }) {
  const groups = new Map<string | undefined, typeof items>();
  for (const i of items) groups.set(i.group, [...(groups.get(i.group) ?? []), i]);
  return (
    <div className="mt-10 space-y-10">
      {[...groups].map(([name, group]) => (
        <div key={name ?? "ungrouped"}>
          {name && <h3 className="h-sub">{name}</h3>}
          <IconGrid items={group} className={name ? "mt-6" : ""} />
        </div>
      ))}
    </div>
  );
}

/**
 * The results gallery. The sources are pre-composited before/after pairs, so
 * they are shown large — one per row on a phone, two-up from sm — and each
 * opens fullscreen. The disclaimer renders from its single shared source with
 * every gallery (ADR-0001 §2, gate rule Q-18).
 */
export function ResultsBlock({ items }: { items?: Concern["results"] }) {
  if (!items?.length) return null;
  return (
    <Section id="results">
      <h2 className="h-section">{resultsHeading(items)}</h2>
      <ResultsGallery items={items} />
      <div className="mt-10 max-w-[70ch]">
        <ResultsDisclaimer />
      </div>
    </Section>
  );
}

/**
 * C-04 · What drives it. The heading is authored per concern rather than fixed,
 * because nothing "causes" a tattoo and nobody "develops" a birthmark.
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
      <SectionHead heading={d.heading} intro={d.intro} />
      {/* One figure per cause, in authored order, under the cause it shows. */}
      <List>
        {d.items.map((i, n) => (
          <Item key={i.lead} lead={i.lead}>
            {i.body}
            {figures?.[n] && <Figure {...figures[n]} />}
          </Item>
        ))}
      </List>
      {d.outro && <Note>{d.outro}</Note>}
    </Section>
  );
}

/* ── C-05 · type sections ───────────────────────────────────────────────── */

type TabSet = Extract<ConcernVariant, { kind: "tabs" }>;
type Tab = TabSet["tabs"][number];

// Each drawing takes only its own focus values; anything else shows them all.
const underEye = (f: Tab["focus"]) =>
  f === "pigment" || f === "vascular" || f === "structural" ? f : "mixed";
const faceLayer = (f: Tab["focus"]) => (f === "skin" || f === "volume" ? f : "structure");

function TypeDiagram({ diagram, tab }: { diagram: NonNullable<TabSet["diagram"]>; tab: Tab }) {
  if (diagram === "skin-depth") return <SkinDepthDiagram depth={tab.depth ?? "both"} />;
  if (diagram === "under-eye") return <UnderEyeDiagram focus={underEye(tab.focus)} />;
  return <FaceLayersDiagram focus={faceLayer(tab.focus)} />;
}

/**
 * Archetypes A/D/E: each type as its own sub-section, all visible at once —
 * no tabs to tap through, and every routing line is in the page for readers
 * and crawlers alike. Where a diagram is authored, each type gets the drawing
 * with its own layer brought forward: under the title on a phone, beside the
 * text from lg. This orients, it does not diagnose.
 */
function TypeSections({ tabs, diagram }: { tabs: TabSet["tabs"]; diagram?: TabSet["diagram"] }) {
  return (
    <div className="mt-10 divide-y divide-hairline border-y border-hairline">
      {tabs.map((t) => (
        <div
          key={t.label}
          className={`flex flex-col py-8 ${diagram ? "lg:grid lg:grid-cols-[minmax(0,1fr)_17rem] lg:grid-rows-[auto_1fr] lg:gap-x-10" : ""}`}
        >
          <div>
            <h3 className="h-sub">{t.title}</h3>
            {t.sub && <p className="mt-1 text-sm text-ink-500">{t.sub}</p>}
          </div>
          {diagram && (
            <div className="mt-6 w-full max-w-[20rem] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
              <TypeDiagram diagram={diagram} tab={t} />
            </div>
          )}
          <div className="min-w-0">
            <p className="mt-4 max-w-[65ch] leading-relaxed text-ink-700">{t.body}</p>
            {t.items && (
              <ul className="mt-4 max-w-[65ch] list-disc space-y-2 pl-5 leading-relaxed text-ink-700 marker:text-ink-500">
                {t.items.map((it) => (
                  <li key={it.lead}>
                    <strong className="font-semibold text-espresso">{it.lead}</strong> {it.body}
                  </li>
                ))}
              </ul>
            )}
            {t.routing && (
              <p className="mt-4 max-w-[65ch] leading-relaxed text-ink-700">
                <strong className="font-semibold text-espresso">Usually assessed for:</strong>{" "}
                {t.routing}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

/**
 * C-05 · The archetype differentiator. Which presentation renders is decided
 * by the authored data's `kind`, so adding an archetype later is a data shape,
 * not a new branch in every page.
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
      <SectionHead heading={v.heading} intro={v.intro} />

      {!!illustrations?.length && <IllustrationGroups items={illustrations} />}

      {v.kind === "tabs" && <TypeSections tabs={v.tabs} diagram={v.diagram} />}

      {/* No heading above the slides: each one carries its own headline in
          the artwork. */}
      {!!slides?.length && (
        <div className="mt-10">
          {slides.map((s) => (
            <Slide key={s.src} {...s} />
          ))}
        </div>
      )}

      {/* The belief, quoted, then the honest answer under it. */}
      {v.kind === "pairs" && (
        <List>
          {v.pairs.map((p) => (
            <Item key={p.claim} title={`“${p.claim}”`}>
              {p.reality}
            </Item>
          ))}
        </List>
      )}

      {v.kind === "table" && (
        <>
          <ScrollTable columns={v.columns} rows={v.rows} />
          {v.note && <Note>{v.note}</Note>}
        </>
      )}
    </Section>
  );
}

/**
 * C-06 · Where it appears. Only rendered where location is diagnostically
 * meaningful. The closing `note` carries the differential ("this might be
 * something else entirely"), which is the honest, citable part of the block.
 */
export function LocationBlock({ l }: { l?: Concern["locationBlock"] }) {
  if (!l?.cards.length) return null;
  return (
    <Section id="where">
      <SectionHead heading={l.heading} intro={l.intro} />
      <List>
        {l.cards.map((c) => (
          <Item key={c.title} title={c.title}>
            {c.body}
          </Item>
        ))}
        {l.note && <Item title={l.note.title}>{l.note.body}</Item>}
      </List>
    </Section>
  );
}

/**
 * C-07 · When to see a doctor. A genuine trust signal on a YMYL page and the
 * honest counterweight to a page that otherwise lists treatments.
 */
export function SeeDoctorBlock({ s }: { s?: Concern["seeDoctor"] }) {
  if (!s?.triggers.length) return null;
  return (
    <Section id="see-a-doctor">
      <SectionHead heading={s.heading ?? "When to see a doctor"} intro={s.intro} />
      <List>
        {s.triggers.map((t) => (
          <Item key={t}>{t}</Item>
        ))}
      </List>
      {s.outro && <Note>{s.outro}</Note>}
    </Section>
  );
}

/**
 * C-09 · Treatment options with the mandatory "why for this concern" line.
 * That line keeps concern pages that share a treatment list from competing
 * with each other (rule R-04), so a treatment with no authored `why` still
 * renders — visibly bare — rather than borrowing a neighbouring page's line.
 */
export function TreatmentsBlock({ c, options }: { c: Concern; options: Treatment[] }) {
  if (!options.length) return null;
  return (
    <Section id="treatments">
      <SectionHead
        heading="Treatment options at Kaiteki"
        intro={
          c.treatmentsIntro ??
          `These are the treatments most often considered at our clinics for ${c.name.toLowerCase()}. None of them is a default. Which one is appropriate, and whether any of them is, depends on what the assessment finds.`
        }
      />
      <List>
        {options.map((t) => {
          const w = c.treatmentWhy?.[t.slug];
          return (
            <Item key={t.slug} title={t.name}>
              <p className="font-medium text-accent">
                {w?.why ?? "Considered case by case at consultation"}
              </p>
              <p className="mt-2">{w?.body ?? t.summary}</p>
              <ArrowLink href={treatmentHref(t)}>{t.name}</ArrowLink>
            </Item>
          );
        })}
      </List>
      {c.treatmentsNote && <Note>{c.treatmentsNote}</Note>}
    </Section>
  );
}

/**
 * C-10 · Which treatment suits which type. Column headers describe, never rank
 * (rule R-02).
 */
export function CompareBlock({ c }: { c?: Concern["compare"] }) {
  if (!c?.rows.length) return null;
  return (
    <Section id="compare">
      <SectionHead heading="Which treatment suits which type?" intro={c.intro} />
      <ScrollTable columns={c.columns} rows={c.rows} />
      {c.note && <Note>{c.note}</Note>}
    </Section>
  );
}

/**
 * C-12 · What your first visit involves — friction removal. The photos are
 * treatment-in-progress, here and nowhere else: a device in use is not an
 * outcome, and the results gallery would present it as one (docs/11 §3).
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
      <SectionHead heading="What your first visit involves" intro={f.intro} />
      <Steps steps={f.steps} />
      {f.outro && <Note>{f.outro}</Note>}
      {!!images?.length && <PhotoGrid images={images} />}
    </Section>
  );
}

/**
 * C-13 · Risks and realistic limits. At least one item must state what
 * treatment cannot do, and the pigment-change note is required wherever energy
 * devices are listed (rule R-05); both are enforced by validate-concerns.
 */
export function ConcernRisksBlock({ r }: { r?: Concern["risks"] }) {
  if (!r?.items.length) return null;
  return (
    <Section id="risks">
      <SectionHead heading="Risks and what to expect" intro={r.intro} />
      <List>
        {r.items.map((i) => (
          <Item key={i.lead} title={i.lead}>
            {i.body}
          </Item>
        ))}
      </List>
      <Note>{r.disclose}</Note>
    </Section>
  );
}

/**
 * C-14 · What affects the cost. Factors only — no figures, no ranges, no
 * "from RM" (rule R-03). Ghost CTA: the secondary variant of the same WhatsApp
 * destination, not a fourth CTA.
 */
export function ConcernCostBlock({ c, href }: { c?: Concern["costFactors"]; href: string }) {
  if (!c?.factors.length) return null;
  return (
    <Section id="cost">
      <SectionHead heading="What affects the cost" intro={c.intro} />
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
        label="Ask about pricing for your case"
        className="mt-8"
      />
    </Section>
  );
}

/**
 * C-17 · Related concerns. Each carries a one-line reason for the relationship —
 * that is what makes it an internal link rather than a nav dump. The route back
 * up to /concerns matters for anyone who self-identified incorrectly.
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
      <List>
        {items.map((i) => (
          <Item
            key={i.slug}
            title={
              <Link
                href={`/concerns/${i.slug}`}
                className="group inline-flex items-center gap-1.5 decoration-mocha/50 underline-offset-4 hover:underline"
              >
                {i.name}
                <ArrowRight
                  size={15}
                  className="text-accent transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            }
          >
            {i.reason}
          </Item>
        ))}
      </List>
      <Link
        href="/concerns"
        className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-espresso"
      >
        Back to all concerns
      </Link>
    </Section>
  );
}
