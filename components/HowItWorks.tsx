import { Container } from "./Container";

// "What to expect" — the four-step visit flow, in the same numbered-ledger
// register as the doctor/recognition record (docs/06 §4.6). No stock photos:
// real step photography to be dropped in per step once shot.
const steps = [
  {
    n: "01",
    title: "Free Consultation",
    kicker: "A conversation, not a sales pitch",
    body: "Message us on WhatsApp to book a free consultation at your nearest branch. A doctor will review your concern, skin history and goals. You'll leave with a clear understanding of what's possible, what it involves, and whether treatment is right for you. No packages pushed, no obligation.",
  },
  {
    n: "02",
    title: "Your Treatment Plan",
    kicker: "Assessed by a doctor, explained in full",
    body: "If treatment is appropriate, your doctor builds a plan around your specific concern. This covers which treatment, how many sessions, expected timeline and realistic outcomes. Everything is explained before you commit to anything.",
  },
  {
    n: "03",
    title: "Treatment Day",
    kicker: "Doctor-led from start to finish",
    body: "Your treatment is carried out by the same registered doctor who assessed you. Sessions typically range from 15 to 90 minutes depending on the treatment. Your doctor will walk you through each step and check comfort throughout.",
  },
  {
    n: "04",
    title: "Aftercare and Follow-Up",
    kicker: "The plan doesn't end at the door",
    body: "You'll receive clear aftercare instructions specific to your treatment. Your doctor's team follows up to check on your recovery and progress. If your plan involves multiple sessions, each one is reassessed before proceeding.",
  },
];

export function HowItWorks() {
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
              <p className="kicker">What to expect</p>
              <h2 className="mt-3 h-section">Your first visit, step by step</h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-700">
                Every treatment at Kaiteki begins the same way, with a conversation.
                Here&rsquo;s what the process looks like from start to finish.
              </p>
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
