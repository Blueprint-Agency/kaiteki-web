# 03 — Wire the media into the fourteen, hold the five, remove the prototype

**What to build:** The authored media data for the fourteen treatments that can carry it, the
enforced exclusion of the five that cannot, and the removal of the prototype scaffolding.

This is a data ticket. The copy is already written — unlike the concern revamp, which had to
author ~180 fields, treatments need roughly 60 captions and labels. **It should not grow into
an authoring job.** If a treatment reads thin, that is a content question for a later ticket,
not licence to rewrite its prose here.

Three moves carry nearly all the value (`docs/13` §9):

**The zone gallery on `microwave-contouring`** is the single highest-value item in the audit —
15 die-cut area photographs that no other page has an equivalent of, landing in the `areas`
block that already exists. That treatment authors no `areas` today, so this is its first.
The die-cuts are transparent PNGs: page ground only, never a tint band.

**`manufacturerImages` across the GO tier.** The field, the component and the assets have all
existed for months with no data in them; twelve `logob_*` marks are unused. This is what makes
the six thin treatments worth touching at all.

**In-body figures** on the eight substantive treatments. Note Variant A's ceiling: it places
one figure per two prose sections, so a treatment cannot carry more than
`floor(sections / 2)`. `skin-booster` has nine sections and five candidate figures — one does
not fit, and choosing which to drop is an authoring decision, not something to leave to the
renderer.

**The five HOLDs get nothing.** `botulinum-toxin`, `exosome-therapy`, `hifu`, `ultherapy` and
`laser-hair-removal` declare no media fields and ship on the railed layout as clean text. **No
placeholder component is built** — an empty frame advertises incompleteness on a page whose
job is authority. Q-22 enforces this so it stays a decision rather than a memory.

Finally, remove the prototype. `components/proto-tx/`, `public/proto/tx/` and the `?variant=`
gate in `app/treatments/[category]/page.tsx` all come out of main. **Preserve them on a
throwaway branch first** — they are the primary source for the Variant A decision, and for
the two defects only a rendered page surfaced.

**Blocked by:** 02.

**Status:** done

- [x] All fourteen GO treatments author their media; none of the five HOLDs authors any
- [x] `microwave-contouring` authors its zones as labelled images, rendering on page
      ground with nothing cropped — **eleven, not fifteen**, see note 1
- [x] Every GO treatment with an unused manufacturer mark authors `manufacturerImages`
- [x] No treatment declares more figures than Variant A can place; the surplus figure on
      `skin-booster` is dropped by a deliberate choice recorded in the data
- [x] `double-eyelid` authors its five-step sequence, capped at native width
- [x] Every media URL sits on the treatments CDN prefix and resolves in the manifest
- [x] The five HOLD treatments render as clean text with no empty frames and no placeholder
      component anywhere in the codebase
- [x] Q-22 fails if any HOLD treatment gains a media field
- [x] The banned-language sweep runs over the newly authored captions and passes
- [x] Captions describe what is shown; none states or implies an outcome
- [x] Manufacturer captions identify the manufacturer, never a Kaiteki patient or result
- [x] `components/proto-tx/`, `public/proto/tx/` and the `?variant=` gate are gone from main
- [x] The prototype is preserved on a throwaway branch and the branch name is recorded here
      — **`proto/treatment-variants-2026-08-29`**, 42 files, do not garbage-collect it
- [x] `pnpm typecheck`, `pnpm lint` and the QA gate all pass
- [x] `docs/14` records Variant A as chosen and `Split` as deleted

**Nine of the sixty-nine uploadable assets were held, and why.** The ticket said not to let
this grow into an authoring job; it did not say to ship media that argues with the rules the
rest of the spec sets. Each is recorded next to the field it would have filled.

1. **The four `img_onda_*2` die-cuts.** Not four more subjects — the same four photographs
   (bra fat, love handles, thigh, upper arms) cut to a circle instead of the scalloped shape.
   Shipping both shows one body area twice. `docs/13` §6 lists eleven subjects for the same
   reason. **The labels also name the body area, not the concern the filename names**
   ("Jowls", not "Heavy jowl"): a captioned grid of defects reads as an indication list on an
   advertisement page (`docs/02` §8).
2. **`vascular-pigment-laser/vascular-lesions.png`.** A magnified side-by-side of a treated
   and an untreated leg — a before/after in all but name. README decision 6 and `docs/13`
   §3.3 both say treatments ship none. That page is carried by its manufacturer mark alone,
   which is what makes it a thin GO rather than a HOLD.
3. **`fotona-4d/fotona-4d.jpg`.** A manufacturer infographic with outcome copy burned into
   the artwork ("restore youthful texture and shine", "tighten and lift"). No caption walks
   that back (R-01), and `docs/13` §8 already names it as the duplicate of the file kept.
4. **`fat-freezing/body-slimming.jpg`.** A tape measure drawn round a waist. The image makes
   the outcome claim the caption is forbidden to.
5. **`radiofrequency/wonderface-{1,2}.jpg`.** 1544×2000 portraits against a 2:1 figure frame
   — a 2.6× crop that loses the subject. They wait for a container that can carry a portrait.
6. **`skin-booster/rejuran.jpg` and `resurfacing-laser/retinopeel.jpg`.** Both were briefly
   authored into `manufacturerImages` and both came back out on review. That block renders
   transparent marks contained on page ground, so an opaque JPEG lands as a white rectangle;
   and NeoStrata makes a retinol peel kit, not the CO2 laser the page describes — a
   manufacturer image that is not this treatment's manufacturer.

**Three further notes.**

7. **`pico-laser` gets one figure out of four candidates.** Q-23 allows `floor(sections / 2)`
   and that page carries two prose sections. This is a section-count problem, not a media
   one: the other three re-enter the moment the body grows. Only `skin-booster` hit the
   ceiling the ticket predicted.
8. **Q-04 was extended, not copied.** `docs/14` Testing Decisions says *parameterise, don't
   copy*, so the sweep is now one `sweepBanned()` with two callers. It is deliberately
   narrower on treatments — captions, labels and alt text, not the whole object — because the
   treatment prose predates these rules and uses some of the words legitimately
   (`pico-laser`'s "not a guarantee of suitability" is the opposite of an outcome promise).
   Widening it to the full object is a prose-audit ticket.
9. **Two manifest keys misspell the brand they exist to rank for** — `logo-schwazy.png`
   (Schwarzy) and `logo-juvaderm.png` (Juvéderm), both inherited from the source filenames.
   The alt and caption spell them correctly. Renaming means editing the assignment table in
   `scripts/media/treatments.mjs` and regenerating the manifest, which is ticket 01's
   territory and has to happen before the objects are live in the bucket. **Left open.**
