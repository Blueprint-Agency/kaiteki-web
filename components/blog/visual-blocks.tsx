import type { ComponentType } from "react";
import {
  BadgeCheck,
  Check,
  Clock,
  Droplet,
  Eye,
  Layers,
  Lock,
  Search,
  ShieldCheck,
  Sparkle,
  Sun,
  Tone,
} from "@/components/icons";

/*
 * Visual blocks for post bodies: they make an article scannable without moving
 * a single word into an image. Everything here renders as real HTML text (a
 * list, a table, a paragraph), so Google and answer engines read it all.
 * Registered in mdx-components.tsx beside the blocks in ./blocks.tsx.
 *
 * Restraint is the design: hairline rules and the tint surface, mocha line
 * icons, no card grids, no coloured side borders (DESIGN.md, PRODUCT.md
 * anti-references). Use each at most once or twice in a post.
 */

/** Icons an author can name in a block's props, as plain strings. */
const ICONS = {
  badge: BadgeCheck,
  check: Check,
  clock: Clock,
  droplet: Droplet,
  eye: Eye,
  layers: Layers,
  lock: Lock,
  search: Search,
  shield: ShieldCheck,
  sparkle: Sparkle,
  sun: Sun,
  tone: Tone,
} satisfies Record<string, ComponentType<{ className?: string; size?: number }>>;
export type BlockIcon = keyof typeof ICONS;

/**
 * Key takeaways as an annotated list: one line icon and a bold lead per point,
 * two columns on wide screens, hairline rules between rows rather than boxes.
 * Put it under a markdown `## Key takeaways` heading so the heading stays a
 * real H2 for the contents rail and for answer engines.
 */
export function Takeaways({ items }: { items: { icon: BlockIcon; lead: string; body: string }[] }) {
  return (
    <ul className="mt-6 grid gap-x-10 border-t border-hairline sm:grid-cols-2">
      {items.map((it) => {
        const Icon = ICONS[it.icon];
        return (
          <li key={it.lead} className="flex gap-4 border-b border-hairline py-5">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-tint text-accent ring-1 ring-hairline">
              <Icon size={20} />
            </span>
            <p className="text-[0.9375rem] leading-relaxed text-ink-700">
              <strong className="block font-display text-[1.0625rem] font-medium leading-snug text-espresso">
                {it.lead}
              </strong>
              <span className="mt-1 block">{it.body}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

/** What a reader would notice at a stage. Qualitative on purpose: house rules
 *  forbid durations and outcome figures, so the marker shows timing, never the
 *  size of a result. */
type Notice = "little" | "some" | "main";

const NOTICE_LABEL: Record<Notice, string> = {
  little: "Little to notice",
  some: "Some change",
  main: "Main change develops",
};

function NoticeMark({ level }: { level: Notice }) {
  const fill =
    level === "main"
      ? "bg-mocha"
      : level === "some"
        ? "bg-[linear-gradient(90deg,var(--color-mocha)_50%,transparent_50%)]"
        : "bg-page";
  return <span aria-hidden className={`mt-1.5 inline-block size-3.5 shrink-0 rounded-full border-2 border-mocha ${fill}`} />;
}

/**
 * A comparison over time: one column per option, one row per stage, a marker
 * for what you would notice and a sentence on what is happening. A real
 * <table>, so answer engines can lift it and screen readers announce the row
 * and column for every cell. On a phone the stage label moves to its own
 * full-width row above its cells (each stage is a <tbody> it heads), so the
 * option columns keep the whole width. The legend says what the markers mean;
 * `caption` should say it is timing only.
 */
export function StageTimeline({
  options,
  stages,
  caption,
}: {
  options: string[];
  stages: { stage: string; cells: { notice: Notice; text: string }[] }[];
  caption?: string;
}) {
  return (
    <figure className="mt-8 overflow-hidden rounded-2xl bg-tint ring-1 ring-hairline">
      <table className="w-full table-fixed border-collapse text-left">
        <thead>
          <tr className="border-b border-hairline">
            <th scope="col" className="hidden w-[26%] px-6 py-4 sm:table-cell">
              <span className="sr-only">Stage</span>
              <Clock size={18} className="text-accent" />
            </th>
            {options.map((o) => (
              <th key={o} scope="col" className="px-4 py-4 font-display text-lg font-medium text-espresso sm:px-5">
                {o}
              </th>
            ))}
          </tr>
        </thead>
        {stages.map((st, r) => (
          <tbody key={st.stage} className={r < stages.length - 1 ? "border-b border-hairline" : undefined}>
            {/* Phone: the stage heads its own row. Hidden rows leave the
                accessibility tree, so each label is announced once. */}
            <tr className="sm:hidden">
              <th
                scope="rowgroup"
                colSpan={options.length}
                className="px-4 pt-5 font-sans text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.12em] text-accent"
              >
                {st.stage}
              </th>
            </tr>
            <tr>
              <th
                scope="rowgroup"
                className="hidden px-6 py-5 align-top font-sans text-[0.6875rem] font-semibold uppercase leading-snug tracking-[0.12em] text-accent sm:table-cell"
              >
                {st.stage}
              </th>
              {st.cells.map((c, i) => (
                <td key={options[i]} className="px-4 pb-5 pt-3 align-top sm:px-5 sm:pt-5">
                  <span className="flex gap-2.5">
                    <NoticeMark level={c.notice} />
                    <span className="text-[0.9375rem] leading-relaxed text-ink-700">
                      <span className="sr-only">{NOTICE_LABEL[c.notice]}. </span>
                      {c.text}
                    </span>
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        ))}
      </table>
      <figcaption className="flex flex-wrap items-center font-sans gap-x-5 gap-y-2 border-t border-hairline bg-page/60 px-4 py-4 text-[0.8125rem] leading-snug text-ink-500 sm:px-6">
        {(Object.keys(NOTICE_LABEL) as Notice[]).map((k) => (
          <span key={k} className="flex items-center gap-2">
            <NoticeMark level={k} />
            {NOTICE_LABEL[k]}
          </span>
        ))}
        {caption && <span className="basis-full">{caption}</span>}
      </figcaption>
    </figure>
  );
}

/** One point the reader should not miss, set apart from the prose. Once or
 *  twice a post at most: a page of callouts is a page of noise. */
export function Note({ icon = "shield", title, body }: { icon?: BlockIcon; title: string; body: string }) {
  const Icon = ICONS[icon];
  return (
    <aside className="mt-8 flex gap-4 rounded-2xl bg-tint p-5 ring-1 ring-hairline sm:p-6">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-espresso text-ink-on-dark">
        <Icon size={20} />
      </span>
      <div>
        <p className="font-display text-lg font-medium leading-snug text-espresso">{title}</p>
        <p className="mt-1.5 leading-relaxed text-ink-700">{body}</p>
      </div>
    </aside>
  );
}

/** Things to do or ask, each with a check mark: a real list, not an image. */
export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((it) => (
        <li key={it} className="flex gap-3 leading-relaxed text-ink-700">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-sand/60 text-espresso">
            <Check size={14} />
          </span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
