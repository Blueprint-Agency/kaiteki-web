# 04 — Wire the full media set into acne, including results

**What to build:** A visitor reading about acne can see what each type looks like, what each
cause means, how the condition progresses, what happens in the room during a session, and
what treatment has achieved for other patients — on the one concern that is already fully
authored.

Acne is the reference implementation for the whole template, and it owns 45 mapped images.
This ticket turns the layout from 03 into a page that uses them, and establishes every media
pattern the remaining nine concerns will copy.

Four presentations, because the assets genuinely differ and collapsing them breaks something:

- **Type illustrations** are transparent cut-outs with a scalloped edge. They sit on the page
  ground in a grid beside their names — never on a tinted band, where the die-cut edge reads
  as a rendering fault. Active-acne types and scar types group separately, because they are
  two different problems treated two different ways.
- **Cause figures** are photographs whose subject sits left with the right half empty. The
  caption goes in that space and carries the meaning; the image itself is decorative to a
  screen reader.
- **Stage slides** are finished infographics with headline and body already in the artwork.
  They render whole rather than cropped, take no caption, and their alt text transcribes the
  burned-in copy so a screen-reader user gets the same information.
- **In-clinic photography** shows a session in progress. It belongs to the first-visit
  section and must never appear in the results gallery — a photograph of a device is not an
  outcome.

Then the **results gallery**. The source files are pre-composited: before and after already
sit side by side in one image, so this is a captioned grid of single images, not a two-panel
comparator. Three quarters of the set is under 700 pixels wide, so every cell caps at its
source width — sharp and small beats soft and large, and this is the detail that decides
whether the section reads as careful or careless. One disclaimer, defined once and rendered
with the gallery, stating plainly that outcomes vary and are not guaranteed.

**Blocked by:** 03 for the layout; 01 for the ADR, which must land before patient
photography renders.

**Status:** done

- [ ] Acne shows its type illustrations in a grid with names and descriptions, on the page ground
- [ ] Active-acne types and scar types are visually grouped as separate sets
- [ ] Each cause carries a figure with its caption beside it, and the image is marked decorative
- [ ] Stage infographics render uncropped, without captions, with alt text transcribing their burned-in copy
- [ ] In-clinic photography appears in the first-visit section and nowhere else
- [ ] The results gallery renders captioned single images, not a two-panel comparator
- [ ] No results cell exceeds its source width at any breakpoint
- [ ] Every image reserves its aspect ratio before loading; nothing shifts
- [ ] The disclaimer renders from a single shared source with every gallery and states that results vary and are not guaranteed
- [ ] The QA gate passes, including the media rules from 02
- [ ] The page reads correctly at phone, tablet, laptop and wide-desktop widths
