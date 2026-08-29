# 01 — Generalise the media pipeline and put treatment media on R2

**What to build:** The treatment media becomes servable from the CDN, reusing the pipeline
the concern revamp already shipped rather than a second copy of it.

Concern ticket 01 (`5ed4c13`) built a manifest, a sync script, an audit script and a set of
QA rules — all of them hardcoded to concerns. The treatment work needs the same four things
for a different prefix and a different source folder. **The rule is parameterise, don't
copy:** two near-identical scripts drift, and the drift shows up in production as a page that
404s its own imagery.

`sync-concern-media.mjs` is already generic in everything but its manifest path and its
`*_MEDIA_SOURCE` variable — it reads `bucketPrefix` and `assets[{source, key, hold}]` and
uploads them. Lift those two out and it serves both page types unchanged, `hold` semantics
included. `audit-concern-media.mjs` is half generic: the `sips` dimension read and the
manifest emit apply anywhere, while the folder list, the slug list and the
classified-by-eye override table are concern facts that belong in config beside the script.

Same for the QA gate. `validate-concerns.mts` rules Q-14…Q-17 check that a URL sits on the
right CDN prefix, resolves to a manifest entry, and that captions exist — none of which is
concern-specific except the prefix and the manifest it reads. Widen them to walk treatments
too; do not start a `validate-treatments.mts`.

Sources are `2. treatments` (76 files) and `3. device and injectables` (125). Not all of them
upload: `docs/13` §8 excludes the 36 partner brand marks, the Kaiteki wordmark, and the six
CN duplicates, and `docs/13` §5 establishes that the 32 `treatment_*` files are concern hub
cards rather than treatment media. Those take a `hold` in the manifest the same way concerns
held the parked and unconfirmed-ownership assets, so the decision is recorded where the sync
reads it rather than in someone's memory.

`images.remotePatterns` currently fences to the blog and concerns prefixes. Widen it **once**
to cover treatments as well, not twice.

**Blocked by:** None — can start immediately.

- [ ] The sync script serves both concerns and treatments from one implementation; no
      `sync-treatment-media.mjs` exists
- [ ] The audit script's generic half is shared; the concern-specific folder list, slug list
      and override table move to config without changing the concern output
- [ ] Re-running the concern audit reproduces the committed `docs/11` §2 table byte for byte
- [ ] A committed manifest maps every uploading treatment source file to its CDN key, with
      pixel dimensions, generated rather than transcribed
- [ ] Keys are treatment-scoped kebab-case describing the subject, not the original
      mixed-case underscore names
- [ ] Assets excluded by `docs/13` §5 and §8 carry a `hold` naming the reason, and never upload
- [ ] A dry run prints every planned upload and writes nothing
- [ ] A real run uploads under the treatments prefix, reading credentials from the
      environment — never from the repo
- [ ] Source binaries are not committed to the repository
- [ ] A treatment image loads from the CDN in a browser
- [ ] `remotePatterns` permits blog, concerns and treatments; all three still resolve
- [ ] Q-14…Q-17 walk treatments as well as concerns, from one implementation
- [ ] The audit regenerates `docs/13` §3 and reproduces the committed table
