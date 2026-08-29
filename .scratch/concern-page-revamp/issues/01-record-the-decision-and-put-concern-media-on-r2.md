# 01 — Record the before/after decision and put concern media on R2

**What to build:** The clinic's 236 owned concern images become servable from the CDN, and
the policy reversal that allows the results photography among them is written down before
anything renders it.

Two halves of one foundation, neither of which touches a page:

The **decision** currently contradicts itself in six places. `docs/02` §8.1, `docs/05` §1,
`docs/06` §5, `docs/00` §14, `DESIGN.md`'s imagery section, and the `notSuitableFor` comment
on the `Treatment` type all assert that before/after patient photography is never used
anywhere on the site. That position has been reversed on explicit instruction. Write
`docs/adr/0001-before-after-imagery.md` recording what was decided, by whom, what it
reverses and what labelling every published results image carries — then amend all six so
the next reader (or the next agent) doesn't revert the work as a bug.

The **media** currently lives only on a designer's local disk. Establish the delivery path:
a committed manifest mapping each source file to its CDN key, a sync script that uploads
from the local source folder using the R2 credentials already present in the environment,
and the image config widened so Next will serve the concerns prefix. Filenames are renamed
on the way up — originals are mixed-case with underscores, and filenames are image SEO.

Also ship the audit that keeps `docs/11` honest: a command that rebuilds the coverage matrix
from the filesystem, so the inventory can't drift from the assets it describes.

**Blocked by:** None — can start immediately.

**Status:** done

- [ ] `docs/adr/0001-before-after-imagery.md` exists and states the decision, the approver, the four documents it reverses, and the labelling contract for published results imagery
- [ ] All six locations that assert "no before/after anywhere" are amended and cross-reference the ADR
- [ ] A committed manifest maps every source file to its CDN key, preserving the original filename for provenance
- [ ] Keys are concern-scoped kebab-case describing the subject, not the original mixed-case underscore names
- [ ] A dry run prints every planned upload and writes nothing
- [ ] A real run uploads the mapped assets under the concerns prefix, reading credentials from the environment — never from the repo
- [ ] Source binaries are not committed to the repository
- [ ] A concern image loads successfully from the CDN in a browser
- [ ] The image config permits the concerns prefix; the blog prefix still works
- [ ] The divergence from the blog's staged-in-repo media rule is recorded in the ADR, not left implicit
- [ ] An audit command reprints the coverage matrix from the filesystem, and a write mode updates `docs/11` §2 in place
- [ ] Running the audit against today's assets reproduces the committed table
