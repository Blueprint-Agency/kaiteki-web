// Preview for Dandelion — the decorative brand-signature seed drift (echoing the
// dandelion in the Kaiteki wordmark). At runtime the seeds start at opacity:0 and
// only become visible once JS adds `.reveal-ready` (and motion is allowed), so a
// static capture would render nothing. Each cell scopes a small <style> that
// simulates that revealed state (opacity + a touch more size), then shows the
// motif in its default mocha, a darker espresso tone, and as a hero accent.
import { Dandelion } from "@/components/Dandelion";

const stage = "relative overflow-hidden rounded-[10px]";

export function SeedDriftMocha() {
  return (
    <div style={{ width: 360, height: 240 }} className={`dl-mocha ${stage} bg-porcelain ring-1 ring-hairline`}>
      <style>{`.dl-mocha .seed{opacity:.9!important;width:7px!important;height:7px!important}`}</style>
      <Dandelion />
      <p className="absolute left-4 top-4 text-xs font-semibold uppercase tracking-wide text-ink-500">
        Seed drift · mocha
      </p>
    </div>
  );
}

export function EspressoTone() {
  return (
    <div style={{ width: 360, height: 240 }} className={`dl-espresso ${stage} bg-page ring-1 ring-hairline`}>
      <style>{`.dl-espresso .seed{opacity:.92!important;width:7px!important;height:7px!important;background:var(--color-espresso)!important}`}</style>
      <Dandelion />
      <p className="absolute left-4 top-4 text-xs font-semibold uppercase tracking-wide text-ink-500">
        Seed drift · espresso
      </p>
    </div>
  );
}

export function HeroAccent() {
  return (
    <div style={{ width: 440, height: 240 }} className={`dl-hero ${stage} bg-tint`}>
      <style>{`.dl-hero .seed{opacity:.75!important;width:6px!important;height:6px!important;background:var(--color-sand)!important}`}</style>
      <Dandelion />
      <div className="relative z-10 flex h-full flex-col justify-center px-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">Kaiteki</p>
        <h2 className="mt-2 font-serif text-3xl leading-tight text-ink-900">
          A quiet clinic for considered skin care
        </h2>
      </div>
    </div>
  );
}
