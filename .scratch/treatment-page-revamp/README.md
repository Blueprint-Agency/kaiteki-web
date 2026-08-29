# Treatment page revamp — tickets

Three tickets, linear. Spec is `docs/14-treatment-page-revamp-spec.md`; media ground truth is
`docs/13-treatment-media-inventory.md`.

| # | Ticket | Blocked by |
|---|---|---|
| 01 | [Generalise the media pipeline and put treatment media on R2](issues/01-generalise-the-media-pipeline-onto-treatments.md) | — |
| 02 | [Rail the treatment page, fork it off `Split`, and add the media contract](issues/02-rail-the-treatment-page-and-retire-split.md) | 01 |
| 03 | [Wire the media into the fourteen, hold the five, remove the prototype](issues/03-wire-the-fourteen-and-hold-the-five.md) | 02 |

Three, not six, because most of this is generalisation. The concern revamp already shipped
the manifest, the sync, the audit and the QA rules (tickets 01–04, merged); ticket 01 here
parameterises them rather than rebuilding them. And the copy is already authored — the
concern equivalent of ticket 03 was ~180 fields across three batches, this one is ~60
captions in a single pass.

## Decisions already made — do not reopen

1. **Scope is the 14 GO treatments** (`docs/13` §9). Both tiers, substantive and thin.
2. **Five are held** — `botulinum-toxin`, `exosome-therapy`, `hifu`, `ultherapy`,
   `laser-hair-removal`. No media fields, no placeholder component.
3. **Variant A "Inline"** won the prototype, chosen 2026-08-29.
4. **The contents rail wraps the whole page**, and `Split` is deleted as a result.
5. **The concern layout is not ported.** Four banner subjects exist for nineteen pages
   (`docs/13` §4); treatments keep their existing hero and block order.
6. **No before/after on treatments.** No such source media exists; ADR-0001 does not extend
   here and this work creates no new compliance exposure.

## Open

- **Ticket 01 cannot be finished without R2 credentials.** The concern equivalent shipped
  with the upload and the browser load unverified for exactly this reason (`5ed4c13`). Same
  gap will apply here.
- **The prototype branch name** is not chosen yet; ticket 03 records it.
- **Six device photos and three injectables have no `/technology` page**, and hair transplant
  has five assets including a banner but no page at all (`docs/13` §6, §7). Client questions,
  deliberately out of scope.
