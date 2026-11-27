import type { CSSProperties, ReactNode } from "react";
import { Section } from "@/components/treatment-blocks";
import { headingAnchor } from "@/lib/treatment-toc";
import type { TechBlock, TechIcon } from "@/lib/types";
import {
  Beaker,
  Calendar,
  Chat,
  Check,
  Clock,
  Droplet,
  Eye,
  Heart,
  Layers,
  Search,
  ShieldCheck,
  Sparkle,
  Sun,
  Syringe,
  Texture,
  Tone,
  Waves,
  X,
} from "@/components/icons";

/**
 * Visual blocks for a technology page (`Technology.blocks`). Added 2026-11-22
 * for the ECM skin booster, whose prose read as a wall: the same facts land
 * faster as icon cards, a timeline and chips. Every block is data-driven, so a
 * second device page can use them without touching this file.
 *
 * Motion follows DESIGN.md: opacity and transform only, revealed once on
 * scroll through the site's `.reveal` observer, and nothing moves under
 * `prefers-reduced-motion`. The one exception is the diagram's line draw,
 * which uses the same stroke-dashoffset precedent as the skin-depth diagram.
 */

const ICONS: Record<TechIcon, (p: { className?: string; size?: number }) => ReactNode> = {
  droplet: Droplet,
  sparkle: Sparkle,
  layers: Layers,
  syringe: Syringe,
  beaker: Beaker,
  heart: Heart,
  eye: Eye,
  clock: Clock,
  shield: ShieldCheck,
  check: Check,
  x: X,
  sun: Sun,
  tone: Tone,
  waves: Waves,
  texture: Texture,
  calendar: Calendar,
  search: Search,
  chat: Chat,
};

function Icon({ name, size = 22, className = "" }: { name: TechIcon; size?: number; className?: string }) {
  const C = ICONS[name];
  return <C size={size} className={className} />;
}

/** The round icon badge every block shares. */
function Badge({ name, tone = "tint" }: { name: TechIcon; tone?: "tint" | "surface" }) {
  return (
    <span
      className={`flex size-11 flex-none items-center justify-center rounded-full text-accent ring-1 ring-hairline ${
        tone === "tint" ? "bg-tint" : "bg-surface"
      }`}
    >
      <Icon name={name} />
    </span>
  );
}

const stagger = (i: number) => ({ "--i": i }) as CSSProperties;

export const techBlockAnchor = (b: TechBlock) => headingAnchor(b.heading);

export function TechBlocks({ blocks }: { blocks?: TechBlock[] }) {
  if (!blocks?.length) return null;
  return (
    <>
      {blocks.map((b) => (
        <Section key={b.heading} id={techBlockAnchor(b)}>
          <h2 className="h-section max-w-[24ch]">{b.heading}</h2>
          {"intro" in b && b.intro && (
            <p className="mt-5 max-w-[60ch] text-lg leading-relaxed text-ink-700">{b.intro}</p>
          )}
          <Block b={b} />
        </Section>
      ))}
    </>
  );
}

function Block({ b }: { b: TechBlock }) {
  switch (b.kind) {
    case "cards":
      return (
        <ul className="mt-9 grid gap-4 sm:grid-cols-3">
          {b.items.map((c, i) => (
            <li
              key={c.title}
              style={stagger(i)}
              className={`reveal reveal-stagger relative flex flex-col rounded-2xl p-6 transition-transform duration-200 motion-safe:hover:-translate-y-1 ${
                c.highlight ? "bg-tint ring-2 ring-mocha" : "bg-surface ring-1 ring-hairline"
              }`}
            >
              {c.highlight && (
                <span className="absolute -top-3 right-5 rounded-full bg-espresso px-3 py-1 text-xs font-medium tracking-wide text-ink-on-dark">
                  {c.highlight}
                </span>
              )}
              <Badge name={c.icon} tone={c.highlight ? "surface" : "tint"} />
              <p className="kicker mt-5">{c.eyebrow}</p>
              <h3 className="h-sub mt-2">{c.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-700">{c.body}</p>
            </li>
          ))}
        </ul>
      );

    case "diagram":
      return (
        <figure className="reveal ecm-diagram mt-9">
          <ol className="grid gap-4 sm:grid-cols-3">
            {b.panels.map((p, i) => (
              <li key={p.title} className="overflow-hidden rounded-2xl bg-surface ring-1 ring-hairline">
                <ScaffoldPanel stage={i as 0 | 1 | 2} />
                <div className="p-5">
                  <p className="kicker flex items-center gap-2">
                    <span className="flex size-6 items-center justify-center rounded-full bg-tint text-xs font-semibold text-accent ring-1 ring-hairline">
                      {i + 1}
                    </span>
                    {p.title}
                  </p>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-700">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <figcaption className="mt-4 text-sm text-ink-500">{b.caption}</figcaption>
        </figure>
      );

    case "steps":
      return (
        <>
          <ol className="steps-line relative mt-10 space-y-7 before:absolute before:top-2 before:bottom-2 before:left-[1.35rem] before:w-px before:bg-sand">
            {b.items.map((s, i) => (
              <li key={s.title} style={stagger(i)} className="reveal reveal-stagger relative flex gap-5">
                <span className="relative z-10 flex size-11 flex-none items-center justify-center rounded-full bg-surface text-accent ring-1 ring-sand">
                  <Icon name={s.icon} />
                </span>
                <div className="max-w-[60ch] pt-1.5">
                  <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span className="font-medium text-ink-900">{s.title}</span>
                    {s.tag && (
                      <span className="rounded-full bg-tint px-2.5 py-0.5 text-xs text-ink-500 ring-1 ring-hairline">
                        {s.tag}
                      </span>
                    )}
                  </p>
                  <p className="mt-1.5 leading-relaxed text-ink-700">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          {b.note && <Note>{b.note}</Note>}
        </>
      );

    case "chips":
      return (
        <>
          <ul className="mt-9 grid gap-3 sm:grid-cols-2">
            {b.items.map((c, i) => (
              <li
                key={c.label}
                style={stagger(i)}
                className="reveal reveal-stagger flex items-center gap-4 rounded-2xl bg-surface p-4 ring-1 ring-hairline"
              >
                <Badge name={c.icon} />
                <span className="leading-snug text-ink-900">{c.label}</span>
              </li>
            ))}
          </ul>
          {b.note && <Note>{b.note}</Note>}
        </>
      );

    case "callout":
      return (
        <div className="reveal mt-9 rounded-3xl bg-tint p-7 ring-1 ring-hairline sm:p-9">
          <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3.5 py-1.5 text-sm font-medium text-accent ring-1 ring-hairline">
            <Beaker size={16} />
            {b.badge}
          </span>
          <ul className="mt-6 space-y-3.5">
            {b.points.map((p) => (
              <li key={p} className="flex gap-3.5 leading-relaxed text-ink-900">
                <Check size={20} className="mt-0.5 flex-none text-accent" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 border-t border-hairline pt-5 text-[0.95rem] leading-relaxed text-ink-700">{b.note}</p>
        </div>
      );

    case "checklists":
      return (
        <>
          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {b.columns.map((col, ci) => (
              <div
                key={col.title}
                style={stagger(ci)}
                className="reveal reveal-stagger rounded-2xl bg-surface p-6 ring-1 ring-hairline"
              >
                <p className="h-sub flex items-center gap-3">
                  <Badge name={col.tone === "avoid" ? "x" : "shield"} />
                  {col.title}
                </p>
                <ul className="mt-5 divide-y divide-hairline">
                  {col.items.map((it) => (
                    <li key={it} className="flex gap-3 py-3 leading-snug text-ink-700">
                      <span aria-hidden className="mt-2 size-1.5 flex-none rounded-full bg-mocha" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {b.note && <Note>{b.note}</Note>}
        </>
      );
  }
}

function Note({ children }: { children: ReactNode }) {
  return <p className="mt-7 max-w-[62ch] text-[0.95rem] leading-relaxed text-ink-500">{children}</p>;
}

// ── The ECM scaffold drawing ─────────────────────────────────────────────
// Deterministic geometry so server and client draw the same picture.
// Collagen = thick mocha strokes; elastin = thin accent waves.

const COLLAGEN: [number, number, number, number][] = [
  [14, 70, 92, 112], [40, 128, 128, 74], [70, 156, 160, 102], [108, 66, 196, 120],
  [132, 150, 226, 92], [18, 108, 80, 154], [150, 74, 230, 140], [92, 98, 174, 158],
  [176, 62, 214, 160], [30, 90, 62, 160],
];
const ELASTIN = [
  "M8 86 C40 74 56 100 92 88 S150 76 184 92 S222 98 236 88",
  "M6 122 C34 110 64 136 100 122 S160 108 196 126 S228 132 236 124",
  "M10 148 C46 140 70 160 112 148 S170 138 204 154 S230 158 236 152",
];
// What remains with age: fewer, shorter, broken fibres.
const COLLAGEN_THIN: [number, number, number, number][] = [
  [20, 74, 58, 96], [76, 150, 112, 126], [118, 70, 152, 92], [150, 148, 190, 120], [36, 126, 66, 150],
  [182, 74, 212, 112],
];
const ELASTIN_THIN = [
  "M8 90 C30 82 44 98 66 92",
  "M128 124 C150 114 170 132 196 124",
  "M70 150 C92 144 104 158 124 150",
];
// Booster particles settling into the gaps.
const PARTICLES: [number, number, number][] = [
  [94, 88, 5], [138, 112, 4.5], [60, 116, 5.5], [178, 96, 4.2], [110, 140, 5], [204, 140, 4.6],
  [34, 100, 4], [154, 74, 4.4], [80, 70, 3.8], [222, 112, 4], [126, 98, 3.6], [44, 144, 4.2],
];

function ScaffoldPanel({ stage }: { stage: 0 | 1 | 2 }) {
  const intact = stage === 0;
  const fibres = intact ? COLLAGEN : COLLAGEN_THIN;
  const waves = intact ? ELASTIN : ELASTIN_THIN;
  const surface = intact
    ? "M0 26 C60 22 180 22 240 26"
    : "M0 28 C14 20 26 34 42 26 S70 20 86 30 S116 22 132 30 S162 20 180 30 S210 22 240 28";
  return (
    <svg viewBox="0 0 240 170" className="block w-full bg-tint/60" role="presentation" aria-hidden>
      <path d={`${surface} L240 52 L0 52 Z`} className="fill-porcelain" />
      <path d={surface} pathLength={1} className="sd-line fill-none stroke-mocha" strokeWidth={2} strokeLinecap="round" />
      {fibres.map(([x1, y1, x2, y2], i) => (
        <line
          key={`c${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          pathLength={1}
          className="sd-line stroke-mocha"
          strokeOpacity={intact ? 0.85 : 0.55}
          strokeWidth={4}
          strokeLinecap="round"
          style={stagger(i)}
        />
      ))}
      {waves.map((d, i) => (
        <path
          key={`e${i}`}
          d={d}
          pathLength={1}
          className="sd-line fill-none stroke-accent"
          strokeOpacity={0.7}
          strokeWidth={1.6}
          strokeLinecap="round"
          style={stagger(i + 4)}
        />
      ))}
      {stage === 2 && (
        <g className="ecm-particles">
          {PARTICLES.map(([cx, cy, r], i) => (
            <circle
              key={i}
              cx={cx}
              cy={cy}
              r={r}
              className="fill-sand stroke-accent"
              strokeWidth={1.2}
              style={stagger(i)}
            />
          ))}
        </g>
      )}
    </svg>
  );
}
