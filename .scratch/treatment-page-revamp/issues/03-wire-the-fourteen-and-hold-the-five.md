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

- [ ] All fourteen GO treatments author their media; none of the five HOLDs authors any
- [ ] `microwave-contouring` authors its 15 zones as labelled images, rendering on page
      ground with nothing cropped
- [ ] Every GO treatment with an unused manufacturer mark authors `manufacturerImages`
- [ ] No treatment declares more figures than Variant A can place; the surplus figure on
      `skin-booster` is dropped by a deliberate choice recorded in the data
- [ ] `double-eyelid` authors its five-step sequence, capped at native width
- [ ] Every media URL sits on the treatments CDN prefix and resolves in the manifest
- [ ] The five HOLD treatments render as clean text with no empty frames and no placeholder
      component anywhere in the codebase
- [ ] Q-22 fails if any HOLD treatment gains a media field
- [ ] The banned-language sweep runs over the newly authored captions and passes
- [ ] Captions describe what is shown; none states or implies an outcome
- [ ] Manufacturer captions identify the manufacturer, never a Kaiteki patient or result
- [ ] `components/proto-tx/`, `public/proto/tx/` and the `?variant=` gate are gone from main
- [ ] The prototype is preserved on a throwaway branch and the branch name is recorded here
- [ ] `pnpm typecheck`, `pnpm lint` and the QA gate all pass
- [ ] `docs/14` records Variant A as chosen and `Split` as deleted
