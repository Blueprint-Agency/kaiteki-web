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

**Status:** ready-for-agent

- [ ] All three prototype variants, the switcher and the staged prototype imagery are preserved on a throwaway branch
- [ ] The branch reference is recorded here and in the spec, so the losing variants remain findable
- [ ] Main contains no prototype components, no prototype imagery and no variant switching on the concern route
- [ ] The concern route renders the real page with no conditional branching left behind
- [ ] Type checking and linting pass with no prototype-related warnings
- [ ] A record exists of which concerns have been reviewed by a named doctor, and on what date
- [ ] Unsigned concerns are visibly distinguishable from signed ones without reading source
- [ ] The provisional-reviewer warning in the concern data is updated to point at that record
- [ ] The full QA gate passes on all fourteen concerns
