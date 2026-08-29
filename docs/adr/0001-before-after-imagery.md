# ADR-0001 — Publish before/after imagery on concern pages

**Status:** accepted
**Date:** 2026-08-29
**Approved by:** the client (Kaiteki), on explicit instruction relayed through the project
owner. This is a client decision, not an engineering one; engineering records and
implements it.
**Supersedes:** the blanket "no before/after anywhere" position in `docs/02` §8.1,
`docs/05` §1, `docs/06` §5, `docs/00` §14, `DESIGN.md` "Imagery", and the `notSuitableFor`
comment in `lib/types.ts`.

---

## 1. Context

Every project document written before this point states that patient before/after
photography is never used anywhere on the site. That position came from Malaysian
medical-advertising rules — MAB 1/2023 and 3/2023 under the Medicines (Advertisement and
Sale) Act 1956, and the MMC ethics guidelines — which restrict before/after imagery,
testimonials, and anything creating an unjustified expectation of benefit.

The clinic holds 111 pre-composited before/after files, already used on the legacy site and
on its social accounts, and has instructed that they be published on the revamped
`/concerns/[slug]` pages. `docs/12` treats their presence as a given; `docs/11` inventories
them.

## 2. Decision

**Kaiteki publishes before/after imagery on concern pages.** The blanket prohibition is
lifted and replaced with the conditions in §3.

The prohibition on **testimonials**, superlatives, guarantees, price/facility comparison,
and `Review`/`AggregateRating` schema is **unchanged**. This ADR reverses one clause, not
the compliance posture.

## 3. Conditions on every published results image

1. **Labelled.** Each image carries a caption naming what was treated and the course
   (`"Acne scarring · 6 sessions"`). No claim of a typical, expected, or guaranteed result.
2. **Disclaimed.** Any concern page rendering results also renders the shared disclaimer
   that individual results vary and are not guaranteed. Enforced in code rather than by
   author discipline: the string lives only inside `<ResultsDisclaimer />`
   (`components/Disclaimer.tsx`), and `validate-concerns.mts` Q-18 fails the build if any
   concern declares `results` while no concern renderer renders that component.
3. **Not marked up.** Results images are never expressed as `Review`, `AggregateRating`, or
   any schema that reads as a testimonial or an efficacy claim.
4. **Unidentifiable.** Cropped to the treated area; no identifying features, no names.
5. **Not upscaled.** 74 of 111 sources are under 700px wide (`docs/11` §1.2). A soft,
   stretched clinical photo misrepresents the result as much as a retouched one does. The
   manifest records every source's pixel dimensions, and `validate-concerns.mts` Q-16
   fails any results entry whose declared `nativeWidth` disagrees with the source.
6. **No retouching** beyond consistent crop and colour handling across the pair.

## 4. The delivery divergence this also records

Blog media is staged in the repo (`content/blog/media/`) and pushed by a deploy workflow
(`content/blog/AUTHORING.md` §3). **Concern media is not.** The 44 MB of source would be
permanent git weight for files the build never reads.

Instead: `config/concern-media.json` maps every source file to its CDN key and records its
pixel dimensions, and `scripts/sync-concern-media.mjs` uploads from the designer's local
folder using R2 credentials from the environment. The manifest is what will give
`scripts/validate-concerns.mts` the same build-time guarantee `check-blog.mts` gets from
staged files, without the weight. Filenames are rewritten on upload from mixed-case
underscores to concern-scoped kebab-case, because filenames are image SEO.

An asset can carry a `hold` with a reason; held assets stay mapped for provenance and are
never uploaded. Files belonging to no concern page take a `parked/` key rather than a
`concerns/` one, so the public prefix contains only what a page actually renders.

## 5. Consequences

- **Legal exposure moves to the clinic.** Publishing this imagery may breach MAB 1/2023 and
  3/2023. The conditions in §3 reduce but do not remove that risk. **A
  MAB-experienced adviser should clear the concern pages before launch**; this ADR is the
  record that the instruction was given and the risk stated, not a finding that the
  practice is compliant.
- **One asset's ownership is unconfirmed.** `mp_service_other1.jpg` carries a
  `DRJESSIE.AESTHETIC` watermark — a doctor's personal account, not Kaiteki branding
  (`docs/11` §3.1). It must not ship until ownership is confirmed, so it carries a `hold`
  in `config/concern-media.json` and the sync script refuses to upload it.
- Six documents were amended to point here rather than being left to contradict the build.
  A future reader finding results imagery on a concern page should find this ADR before
  concluding it is a bug.
- Reversing this decision means deleting the `results` field from the affected concerns and
  the objects under the `concerns/` prefix; nothing else depends on it.
