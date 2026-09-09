import type { CSSProperties } from "react";
import { Container } from "./Container";

// Stagger index for the scroll reveal (typed CSS custom property).
const si = (i: number): CSSProperties => ({ "--i": Math.min(i, 8) } as CSSProperties);

// Device-fleet claims. These are counts of machines owned, not efficacy or
// outcome claims — MAB-safe as long as the wording stays about equipment
// (docs/02 §8). "In Malaysia" is the qualifier; keep it on every seal.
const SEALS = [
  ["Onda", "machines"],
  ["Oligio X", "machines"],
  ["lifting", "devices"],
];

/* ── The laurel ─────────────────────────────────────────────────────────────
   240×240 box, wreath centred at (120,120) on a radius-76 stem. One row of
   leaves, not two: two rows collided at the crown and read as wheat. Each leaf
   is a real leaf outline (two curves to a point) attached to the stem and
   swept 40° toward the crown, the way a laurel actually grows — so the row
   fans instead of stacking. Angles are screen-space, y down: 90° is the
   bottom of the circle, 270° the top. The stem stops at 256°, leaving the
   crown open for the star. */
const CX = 120;
const CY = 120;
const R = 76;

const LEAVES = Array.from({ length: 9 }, (_, i) => {
  const deg = 88 + i * 20.25;
  const a = deg * (Math.PI / 180);
  // Taper: shortest at the crossed tails, longest around the shoulder.
  const len = 32 * (0.62 + 0.38 * Math.sin((Math.PI * (i + 0.6)) / 9.2));
  return { x: CX + R * Math.cos(a), y: CY + R * Math.sin(a), deg: deg + 40, len };
});

// Leaf drawn along +x with its base at the origin and its tip at (1,0).
const LEAF = "M0 0C.26-.3.72-.27 1 0 .72.27.26.3 0 0Z";

function LaurelHalf() {
  return (
    <g fill="url(#laurel-gold)">
      <path
        d={`M${CX + R * Math.cos(1.2217)} ${CY + R * Math.sin(1.2217)}A${R} ${R} 0 1 1 ${
          CX + R * Math.cos(4.4680)
        } ${CY + R * Math.sin(4.4680)}`}
        fill="none"
        stroke="url(#laurel-gold)"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {LEAVES.map(({ x, y, deg, len }) => (
        <path
          key={deg}
          d={LEAF}
          transform={`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${deg.toFixed(
            1,
          )}) scale(${len.toFixed(1)})`}
        />
      ))}
    </g>
  );
}

function Seal({ subject, noun }: { subject: string; noun: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[12.5rem] sm:max-w-[13.5rem]">
      <svg viewBox="0 0 240 240" className="w-full" aria-hidden>
        <LaurelHalf />
        <g transform="translate(240 0) scale(-1 1)">
          <LaurelHalf />
        </g>
        {/* One star in the crown. Three crowded the leaf tips. */}
        <path
          d="M0-1 .25-.31 1-.31.4.14.62.9 0 .46-.62.9-.4.14-1-.31-.25-.31Z"
          fill="url(#laurel-gold)"
          transform="translate(120 34) scale(10)"
        />
      </svg>

      {/* The claim, as real text over the open centre — the wreath is decoration,
          this is the content. Fraunces (the display face) rather than the
          condensed sans every stock award seal uses. */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-[21%] pt-[9%] text-center">
        <span className="font-display text-[0.9rem] font-normal italic leading-none text-mocha">
          The most
        </span>
        <span className="font-display mt-1.5 text-[1.28rem] font-medium leading-[1.1] tracking-[-0.01em] text-espresso">
          {subject}
          <br />
          {noun}
        </span>
        <span className="mt-2.5 rounded-[3px] bg-espresso px-2 py-[3px] text-[0.5rem] font-semibold uppercase tracking-[0.16em] text-ink-on-dark">
          in Malaysia
        </span>
      </div>
    </div>
  );
}

/**
 * Leader badges — the device-fleet record as three laurel seals.
 *
 * Deliberately NOT on a tinted band: a band here stacked a third hard edge
 * between the promo banner and the concerns grid and read as a stray stripe.
 * The seals sit on the page ground; the concerns section's own top padding is
 * the separation, so no rule is needed either.
 * Pure server component; the wreath is inline SVG, so nothing loads.
 */
export function LeaderBadges() {
  return (
    <section aria-label="Device fleet records" className="bg-page">
      <Container className="reveal pb-4 pt-12 sm:pb-6 sm:pt-14">
        {/* One shared gradient for all three seals — an id may appear once. */}
        <svg width="0" height="0" aria-hidden className="absolute">
          <linearGradient id="laurel-gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e3cd96" />
            <stop offset="52%" stopColor="#c2a05a" />
            <stop offset="100%" stopColor="#9d7a30" />
          </linearGradient>
        </svg>

        <ul className="mx-auto grid max-w-3xl grid-cols-1 gap-y-7 sm:grid-cols-3 sm:gap-x-6">
          {SEALS.map(([subject, noun], i) => (
            <li key={subject} className="reveal" style={si(i)}>
              <Seal subject={subject} noun={noun} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
