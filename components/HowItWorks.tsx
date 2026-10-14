import { Container } from "./Container";
import { homeCopy } from "@/content/i18n/home";
import type { Locale } from "@/lib/i18n";

// "What to expect" — the four-step visit flow, in the same numbered-ledger
// register as the doctor/recognition record (docs/06 §4.6). No stock photos:
// real step photography to be dropped in per step once shot. Copy: content/i18n/home.ts.
export function HowItWorks({ locale = "en" }: { locale?: Locale }) {
  const k = homeCopy[locale].how;
  const steps = k.steps.map((s, i) => ({ ...s, n: String(i + 1).padStart(2, "0") }));
  return (
    <section id="how-it-works" className="relative bg-page">
      {/* The four steps read sideways: while this tall block is pinned, vertical
          scroll drives the track's translateX (CSS scroll-driven animation — see
          .hscroll in globals.css). The heading lives inside the pinned stage so
          the section is one screen tall with no dead space above the track.
          Browsers without animation-timeline, and anyone on
          prefers-reduced-motion, get the same track as a plain swipeable
          scroller — the markup is one list either way. */}
      <div className="hscroll">
        <div className="hscroll-stage">
          <Container className="reveal shrink-0">
            <div className="mx-auto max-w-2xl text-center">
              <p className="kicker">{k.kicker}</p>
              <h2 className="mt-3 h-section">{k.h2}</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-700">{k.sub}</p>
            </div>
          </Container>

          <ol className="hscroll-track">
            {steps.map((s) => (
              <li key={s.n} className="hscroll-panel">
                <span className="font-display text-5xl font-medium leading-none text-mocha/45 tabular-nums sm:text-6xl">
                  {s.n}
                </span>
                <h3 className="h-sub mt-5 text-espresso">{s.title}</h3>
                <p className="mt-1 text-sm font-medium text-accent">{s.kicker}</p>
                <p className="mt-3 leading-relaxed text-ink-700">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
