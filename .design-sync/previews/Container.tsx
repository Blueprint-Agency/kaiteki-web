// Preview for Container — the centered max-width:1200px content column with
// responsive gutters (px-5 / sm:px-6 / lg:px-8). It is invisible on its own, so
// each cell layers three surfaces to expose its bounds: a sand stage (page edge),
// the container tinted (bg-tint) to reveal its gutter padding, and a white content
// panel inset by that padding. Stages stay <= 900px so cells render whole in the
// capture. (The 1200px clamp + auto-centering only shows on a stage wider than
// 1200px — see learnings for the wide-viewport override needed to demonstrate it.)
import { Container } from "@/components/Container";

const Panel = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-[10px] bg-surface p-6 ring-1 ring-hairline">{children}</div>
);

export function GutterPadding() {
  return (
    <div style={{ width: 880 }} className="bg-sand py-10">
      <Container className="bg-tint py-8">
        <Panel>
          <p className="text-xs font-semibold uppercase tracking-wide text-accent">Our approach</p>
          <h2 className="mt-2 font-serif text-2xl text-ink-900">A calm, considered consultation</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink-700">
            The white panel sits inside the container, so the tinted band on the left and right
            is the responsive gutter the container adds around every section.
          </p>
        </Panel>
      </Container>
    </div>
  );
}

export function NarrowColumn() {
  return (
    <div style={{ width: 520 }} className="bg-sand py-10">
      <Container className="bg-tint py-6">
        <Panel>
          <h2 className="font-serif text-xl text-ink-900">Consistent gutters</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-700">
            The same container in a narrower column keeps the identical left and right gutters,
            so content never touches the viewport edge.
          </p>
        </Panel>
      </Container>
    </div>
  );
}

export function SectionComposition() {
  return (
    <div style={{ width: 880 }} className="bg-page py-8">
      <Container>
        <div className="grid grid-cols-3 gap-4">
          {["Pigmentation", "Lifting & Tightening", "Skin Health"].map((t) => (
            <div key={t} className="rounded-[10px] bg-tint p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">Category</p>
              <p className="mt-1 font-serif text-lg text-ink-900">{t}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
