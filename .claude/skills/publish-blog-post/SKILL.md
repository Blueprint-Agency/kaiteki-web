---
name: publish-blog-post
description: Draft and publish a blog post to a git-based site (no CMS, posts are repo files). Use when asked to draft, write or publish a blog post for a project's repo. Phase A drafts in chat for fast iteration; Phase B ships it to a PR, and only runs when the user says so.
---

# Publish a blog post from a git repo

Some sites have no CMS. The repo is the database, a PR is the draft, and a merge
to `main` is the publish button.

**This skill has two phases and you are almost always in Phase A.**

| | Phase A — DRAFT | Phase B — PUBLISH |
|---|---|---|
| Runs | Always. This is the default. | Only when the user says "publish", "ship it", "open the PR". |
| Output | The post, in chat | Files, a branch, a preview, a PR |
| Touches files | **Never** | Yes |
| Runs installs or builds | **Never** | No — CI does that |

Writing a post is content work. Git is delivery. Keeping them apart is what
makes iteration fast: the user should be able to reshape the prose ten times
without a single commit, install or build.

---

# Phase A — draft

## A1. Gather what you cannot look up

Ask in **one message**, not one at a time. Never ask for anything the repo can
tell you.

- **Repo** — `owner/name`. If a repo is already checked out, that is the repo.
  Do not ask.
- **Topic** — required.
- Angle, target keyword, category, byline — ask **only** if the answer changes
  the post, and offer a default so a one-word reply is enough.

## A2. Read the contract — once, in one batch

If the project is in **Known projects** below, read exactly the files that row
names. Do not go exploring; the list is there so you don't have to.

Otherwise find the contract (`content/blog/AUTHORING.md`, `docs/publishing.md`,
`CONTRIBUTING.md`, a "blog" section in `README.md`), and from it: the metadata
type, the data files slugs come from, one recent published post, and the
validation script.

**Read the validation script, not just the prose.** It carries the exact limits
— character counts, minimum sections, banned characters — that a written
contract rounds off.

**The contract overrides this skill.** Where they disagree, it wins.

If no contract exists, say so, infer the shape from two published posts, and
flag that you are guessing.

## A3. Research

This is the part worth spending time on. Everything else in this skill is
mechanical; this is where the post earns its place.

- **Web search** for the primary sources: regulator positions, trial data,
  guidelines, the journal papers themselves. On a YMYL topic (medical,
  financial, legal) this is not optional, and citing a real source beats a
  confident sentence every time.
- **Search Console (`gsc`), if connected** — the highest-value tool here.
  Check what the site already ranks for on this topic before choosing the head
  keyword. Two purposes: find the queries with impressions and no good landing
  page (that is your post), and avoid cannibalising a page that already ranks.
- **Ubersuggest (`ubersuggest`), if connected** — keyword volume and difficulty,
  related questions, and what the current SERP actually rewards for the target
  query.
- **GA4 (`ga4`), if connected** — which existing posts get read and which get
  bounced. Useful for picking the shape and depth, not the topic.

Use what is connected; skip what is not, and say which you used. Do not block
on a tool being unavailable.

## A4. Write it, then stop

Write the post to the contract, then **output it in chat and stop.**

Show: the proposed metadata (slug, title, seoTitle, description, category,
author, reviewer) and the full body. Name the sources you used and say what you
are least sure about.

**Do not write a file. Do not create a branch. Do not commit. Do not install
anything. Do not run a build.** None of that helps the user judge the prose,
and all of it is slow.

Then wait. If they want changes, revise and show it again. Iterate here as many
times as it takes; it costs seconds.

**Only a clear instruction to publish moves you to Phase B.** "Looks good" is
approval of the prose, not an instruction to ship — if you are unsure, ask, in
one line.

Check your own output before showing it. What drafts get wrong everywhere:

- Metadata **field lengths** are hard limits with a validator behind them. Count
  characters, do not estimate.
- **Do not duplicate what the page template renders** — H1, byline, table of
  contents, related links, closing CTA usually come from metadata. Repeat them
  in the body and the post ships with two H1s.
- **Internal links must resolve** to slugs you actually read. Never invent one.
- **House style is machine-enforced** more often than you expect: banned
  characters (em-dashes are common), heading depth, minimum sections and links.
- Match the **voice of the published post you read**, not your default register.

## A5. Compliance, where the project has any

Regulated niches carry rules no validator can check. If the contract has a
compliance section, treat every line as a hard constraint and re-read the draft
against it specifically before showing it.

Common shape: no outcome guarantees, no testimonials or before/after imagery,
no superlatives about the business, no prices or promotions in editorial copy,
cite real sources, say when evidence is limited.

If a claim cannot be supported, cut it. Do not soften it.

---

# Phase B — publish

Only on an explicit instruction. Keep it small: everything here is delivery, and
CI is faster and more capable than the sandbox at every check that matters.

1. **Branch.** If the session already put you on a working branch, use it — do
   not rename or recreate it. Otherwise use the contract's convention (often
   `content/<slug>`). **Never commit to `main`:** it is protected, and merge is
   the publish event.
2. **Write the two files.** Append the metadata object to the data file, create
   the body file.
3. **Run the validation script only** (`pnpm check:blog` or equivalent). It is
   the one check that catches content errors and it usually needs no install.
   Fix what it reports, re-run until clean.
   **Do not run install, typecheck, lint or build.** CI runs all of them on the
   PR in well under a minute, on a machine that can actually complete them. A
   cold `install` plus `build` in a sandbox is minutes of waiting for a result
   you are about to get for free — and in a sandboxed network the build often
   cannot finish at all.
4. **Commit.** Two files, one commit.
5. **Push**, then deploy the preview if the project has one (see Known
   projects). Give the user the preview URL.
6. **Open the PR explicitly** — run the command, do not assume the harness does
   it: `gh pr create --base main --title "…" --body "…"`. If `gh` is
   unavailable, use the API, and if that fails, give the user the compare URL
   and say plainly that you could not open it.
   In the body: what the post is, what you ran, what you could not verify.
7. **Stop. Do not merge.** Merge is the publish event and it belongs to the
   human, whose job is the one CI cannot do — deciding whether the claims are
   true and the copy is compliant. If they want it to land unattended once
   checks pass, tell them to enable GitHub auto-merge themselves.

If you cannot push (no credentials in the sandbox), say so plainly and output
the files as code blocks — one per file, labelled with its exact path, no prose
around them.

## What "done" means

Phase A: the user has the draft and has said what they want changed.
Phase B: the PR is open, checks are green, the user has a preview URL, and you
have said which checks you skipped and why.

---

## Known projects

### Kaiteki — `Blueprint-Agency/kaiteki-web`

Medical aesthetics clinic, Malaysia. YMYL: MAB/MMC advertising rules bind every
claim. Read `content/blog/AUTHORING.md` §5 and treat it as hard.

**Read exactly these in A2, in one batch:**

```
content/blog/AUTHORING.md          the contract
scripts/check-blog.mts             the gate — the real limits
lib/types.ts                       the Post type
content/data/doctors.ts            author / reviewedBy slugs
content/data/concerns.ts           concern slugs and /concerns/… links
content/data/treatments.ts         treatment slugs and /treatments/… links
content/data/technology.ts         technology slugs and /technology/… links
content/blog/alma-titanium-lifting.mdx     a published body, for shape
```

**Phase B:**

```
pnpm check:blog                          # no install needed; the only local check
git push origin HEAD:staging --force     # preview → staging.kaiteki.my
gh pr create --base main                 # then stop
```

Staging holds one post at a time. The branch is cut from `main`, so the
force-push makes staging exactly *main plus this post*; the next post overwrites
it. Previews are noindexed.

Do not run `pnpm build` here. It fails in sandboxes on a blocked Google Fonts
fetch, and CI runs it on the PR in about 40 seconds.
