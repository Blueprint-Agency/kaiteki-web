# 03 — Rebuild the concern page on the editorial banner layout

**What to build:** A visitor arriving at any concern page gets a page that opens with an
image of their concern, a headline in clear space, and a contents rail that tracks where they
are as they read — instead of four thousand words in a narrow column beside an empty gutter.

Replace the concern page's layout with the arrangement validated in the prototype. The
banner runs full width with its subject held left and the headline set into the empty right
half the artwork was cut for; centre-cropping it destroys the composition, so the alignment
is part of the contract, not a style choice. A contents rail sticks alongside the article on
wide screens, reusing the blog's existing scroll-spy rather than growing a second one, and
collapses to the inline card on narrow ones — one navigation at any width, never two. The
prose runs in a single measured column that widens for media. The alternating surface bands
drop from six to three, each one meaning something: the conversion moment, the technology
comparison, the safety notice.

The sticky heading gutter and the horizontal jump bar both retire from concern pages. Both
are shared with the treatment page, so fork rather than edit in place — `/treatments` must
come out of this ticket unchanged.

This slice ships the layout with the banner as its only new imagery; the rest arrives in 04.
It also has to hold up for the four concerns that will never get imagery, so verify those
here rather than discovering it later: they must read as finished text pages, with no empty
frames and no placeholder furniture announcing what's missing.

**Blocked by:** 02 — the banner field must exist on the type first.

**Status:** done

- [ ] A concern page renders a full-width banner using the desktop asset, swapping to the mobile asset at narrow widths
- [ ] The banner subject stays left-aligned at every breakpoint and the headline sits in clear space over sufficient contrast
- [ ] A contents rail sticks beside the article on wide screens and highlights the section currently being read
- [ ] The inline contents card renders only below the rail's breakpoint — never both at once
- [ ] Every contents entry scrolls to a section the page actually renders, and deep links land correctly
- [ ] Prose holds a single measured column; structural sections break to full container width
- [ ] Exactly three surface bands remain, each used once
- [ ] The sticky heading gutter and horizontal jump bar no longer appear on concern pages
- [ ] `/treatments` renders identically to before this ticket
- [ ] `enlarged-pores`, `vascular-lesions`, `birthmark` and `excessive-sweating` render as clean text pages with no empty frames or placeholders
- [ ] Page metadata, canonical URL and structured data are unchanged
- [ ] Only the banner loads eagerly; images reserve their space so text does not shift on load
- [ ] The contents rail and all interactive elements are reachable by keyboard in a sensible order
