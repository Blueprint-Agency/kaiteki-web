# 06 — Remove the prototype and make doctor sign-off visible

**What to build:** The repository holds only the design that won, and nobody can ship a page
of medical copy that no doctor has read without knowing they're doing it.

Two closing jobs.

**The prototype comes out.** Three structurally different layouts were built on the live
route behind a search parameter to decide this revamp — the editorial banner that won, plus a
clinical-dossier variant that docked all media into a right-hand evidence column and a
guided-path variant that replaced scrolling with a stepper. All three, the switcher and the
staged prototype imagery are the primary source for the decision, so they belong on a
throwaway branch with a pointer from this ticket — not deleted, and not left in main, where
variant components rot and confuse the next reader. Main keeps the validated design only.

**Sign-off becomes visible.** The concern data already warns that its medical reviewers are
a plausible provisional assignment, not a confirmation that those doctors read those pages.
Ticket 05 multiplied that from one page to fourteen, on a site where health-content accuracy
is a legal constraint rather than a quality preference. Build the smallest thing that stops
this shipping silently: a record of which concerns a named doctor has actually reviewed and
when, surfaced so that an unsigned page is obvious before launch rather than after.

This does not need a workflow engine or an approval UI. It needs the state to be legible and
impossible to overlook.

**Blocked by:** 05 — all fourteen pages must be authored before sign-off can be tracked
against them.

**Status:** done

**Prototype branch:** `prototype/concern-layout-variants` (tip `a870f1d`) — local only,
never merged. It is the sole surviving copy of the losing variants and the 6.4 MB of staged
imagery; push it if this machine is not a safe enough home for it.

- [x] All three prototype variants, the switcher and the staged prototype imagery are preserved on a throwaway branch
- [x] The branch reference is recorded here and in the spec, so the losing variants remain findable — `docs/12` §Further Notes
- [x] Main contains no prototype components, no prototype imagery and no variant switching on the concern route
      — `components/proto/` and `public/proto/acne/` deleted. `components/proto-tx/` and
      `public/proto/tx/` stay: that is the *treatments* prototype, removed by its own ticket.
- [x] The concern route renders the real page with no conditional branching left behind — `searchParams` is gone from the route signature
- [x] Type checking and linting pass with no prototype-related warnings — 13 lint warnings remain, all pre-existing in `.design-sync/shims/`
- [x] A record exists of which concerns have been reviewed by a named doctor, and on what date — `config/concern-signoff.json`, read through `lib/signoff.ts`
- [x] Unsigned concerns are visibly distinguishable from signed ones without reading source
      — an unsigned page renders "Awaiting medical review" where the byline goes and in the
      ledger, asserts no `reviewedBy`/`lastReviewed` in schema (it keeps `dateModified`, which
      is a different fact), and is warned by name by Q-20. All fourteen are currently unsigned.
- [x] The provisional-reviewer warning in the concern data is updated to point at that record
- [x] The full QA gate passes on all fourteen concerns — 0 failures; 23 warnings = the 9
      pre-existing text-only ones plus 14 Q-20 unsigned notices.

**Not in scope, still true:** `TreatmentView`, `TechnologyView` and their routes still feed
intent-only `reviewedBy`/`lastReviewed` straight into schema. Same defect, two more page
types — `concernReviewer()` is the shape to copy when those tickets come up.
