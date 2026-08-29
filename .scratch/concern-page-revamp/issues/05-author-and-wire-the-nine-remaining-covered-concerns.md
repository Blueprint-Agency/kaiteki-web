# 05 — Author and wire the nine remaining covered concerns

**What to build:** A visitor with pigmentation, sagging, dark circles, an unwanted tattoo or
any of the other covered concerns gets the same depth of explanation and the same imagery as
someone with acne — rather than an intro, three paragraphs and an FAQ.

Nine concerns are currently shells. They fill roughly five of the template's eighteen
blocks, because the content behind the other thirteen was never written. What causes it, how
the types differ, what a first visit involves, what treatment cannot do, what drives the
cost, why each treatment is offered for *this* concern — all blank, so all invisible. Adding
imagery to a page with no causes section leaves nowhere to put the causes diagram, which is
why this ticket is content first and wiring second.

The nine: **pigmentation, face-lifting, face-contouring, dark-eye-circles, tattoo-removal,
body-slimming, fine-lines-wrinkles, hair-loss, aging.**

Draft from what already exists — the legacy site's copy, the page-structures document, and
the media filenames themselves, which encode the subheadings each page needs (an asset named
for glabellar lines is telling you the fine-lines page wants a glabellar-lines entry). Then
attach each concern's media using the patterns established on acne in 04, following the
coverage matrix so nothing references an asset that doesn't exist.

Two things this ticket must not do. It must not invent efficacy claims, outcome promises,
timeframes or prices to fill space — the banned-language sweep runs across all of this newly
written copy and is expected to catch real violations. And it must not present the
provisional medical reviewers as confirmed sign-offs; that data already carries a warning
saying these are placeholders, and this ticket multiplies that debt ninefold.

**Scope note:** this is the largest ticket by a wide margin — roughly 180 authored fields. If
it does not fit one working session, split it by the batches below rather than by layer;
each batch is independently shippable.

**Blocked by:** 04 — every media pattern this copies must exist on acne first.

**Status:** ready-for-agent

- [ ] Batch 1 — pigmentation, face-lifting, face-contouring — authored and wired
- [ ] Batch 2 — dark-eye-circles, tattoo-removal, body-slimming — authored and wired
- [ ] Batch 3 — fine-lines-wrinkles, hair-loss, aging — authored and wired
- [ ] Every concern fills the blocks its content supports; blocks without content stay absent rather than rendering empty
- [ ] Each treatment listed on each concern carries a rationale specific to that concern, unique across all fourteen pages
- [ ] Each risks section names at least one thing treatment cannot do
- [ ] Each cost section explains what drives price without quoting a figure
- [ ] Each concern's media matches the coverage matrix; nothing references an asset that does not exist
- [ ] The banned-language sweep passes across all newly authored copy
- [ ] The full QA gate passes on all fourteen concerns
- [ ] Every page renders correctly at phone, tablet, laptop and wide-desktop widths
