# 02 — Add the concern media contract and enforce it in the QA gate

**What to build:** A content editor can describe a concern's imagery as typed data, and the
build refuses to ship a reference that would 404, upscale, or skip its compliance labelling.

Today a concern has exactly one image field — a hero card photo. The page has nowhere to put
the type illustrations, cause diagrams, stage infographics, results photography or
in-clinic shots the clinic owns. Add the fields that make those describable, each optional so
that omitting one turns its section off — matching how every other block on the template
already behaves.

The fields carry more than a path, because the source assets differ in ways that break the
page if ignored. A designed infographic has its headline burned into the artwork, so it needs
alt text transcribing that text and must never receive a caption that double-labels it. A
photograph with an empty right half needs a caption that carries the meaning and empty alt.
A results image is pre-composited before-and-after in one file, and three quarters of the
source set is under 700 pixels wide — so each entry declares its native width, and the
renderer caps the cell there rather than blowing it up.

Then enforce all of it where concern rules already live. The project has one QA gate for
concern pages, with numbered rules and a non-zero exit. Media rules join it as new numbered
checks rather than a new test surface. This is the single seam for the whole revamp: every
rule below fails on authored data, and nothing asserts markup or component structure.

**Blocked by:** 01 — the manifest must exist before anything can validate against it.

**Status:** done

- [ ] The concern type gains optional fields for the banner pair, figures, slides, illustrations, results and in-clinic photography
- [ ] Every field is optional, and omitting one removes its section without a code branch
- [ ] Results entries carry a native width and an aspect ratio
- [ ] Illustrations can declare a group, so active types and scar types separate without a second field
- [ ] The gate fails when a media URL is not on the concerns CDN prefix
- [ ] The gate fails when a media URL has no matching manifest entry
- [ ] The gate fails when a results entry omits its native width or ratio, or declares a width that disagrees with the manifest's recorded source width
- [ ] The gate fails when a slide carries a caption, or a figure carries none
- [ ] The gate fails when a concern declares results without the shared disclaimer being rendered
- [ ] The existing banned-language, anchor-resolution and reviewer checks still pass on all fourteen concerns
- [ ] Every new rule is numbered and documented in the gate's header comment, matching the existing convention
