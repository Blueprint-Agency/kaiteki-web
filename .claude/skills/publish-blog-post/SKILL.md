---
name: publish-blog-post
description: Draft and publish a blog post to a git-based site (no CMS, posts are repo files). Use when asked to draft, write or publish a blog post for a project's repo. Phase A drafts in chat for fast iteration; Phase B ships it to a PR, and only runs when the user says so.
---

# Publish a blog post from a git repo

No CMS: the repo is the database, a PR is the draft, a merge to `main` publishes.

**Two phases. You are in Phase A unless told otherwise.**

| | A: DRAFT | B: PUBLISH |
|---|---|---|
| When | Default, always | Only on "publish" / "ship it" / "open the PR" |
| Output | The post, in chat | Files, branch, preview, PR |
| Writes files | Never | Yes |
| Installs or builds | Never | No, CI does that |

"Looks good" approves the prose. It is not an instruction to ship. If unsure, ask in one line.

---

# Phase A: draft

**A1. Ask once.** One message, not a serial interview. Never ask what the repo can tell you.

- Repo (`owner/name`). If one is checked out, that is it. Do not ask.
- Topic.
- Angle, keyword, category, byline: only if the answer changes the post, and offer a default.

**A2. Read the contract, one batch.** If the project is in Known projects, read exactly the files that row lists and stop exploring. Otherwise find the contract (`content/blog/AUTHORING.md`, `docs/publishing.md`, `CONTRIBUTING.md`), then the metadata type, the data files slugs come from, one recent post, and the validation script.

Read the validation script, not just the prose. It holds the exact limits the written contract rounds off. **The contract overrides this skill.**

No contract? Say so, infer from two published posts, flag that you are guessing.

**A3. Research.** The part worth spending time on. Everything else here is mechanical.

- **Web search** for primary sources: regulator positions, trial data, guidelines. Mandatory on YMYL topics (medical, financial, legal).
- **`gsc`**, if connected. Highest value: find queries with impressions and no good landing page (that is your post), and avoid cannibalising a page that already ranks.
- **`ubersuggest`**, if connected: volume, difficulty, related questions, what the SERP rewards.
- **`ga4`**, if connected: which posts get read. Informs depth and shape, not topic.

Use what is connected, skip what is not, say which you used. Never block on a missing tool.

**A4. Write, show, stop.** Output the metadata (slug, title, seoTitle, description, category, author, reviewer) and the full body in chat. Name your sources. Say what you are least sure about. Then wait.

**No file writes. No branch. No commit. No install. No build.** None of it helps the user judge prose, all of it is slow. Iterate here as many times as they want; it costs seconds.

Check before showing:

- Field lengths are hard limits with a validator behind them. Count characters, do not estimate.
- Do not duplicate what the template renders (H1, byline, TOC, related links, closing CTA come from metadata). Duplicating ships two H1s.
- Internal links must resolve to slugs you actually read. Never invent one.
- House style is machine-enforced: banned characters (em-dashes are common), heading depth, minimum sections and links.
- Match the voice of the published post you read.

**A5. Compliance**, where the contract has a section for it. No validator catches these, so re-read the draft against them specifically. Usual shape: no outcome guarantees, no testimonials or before/after imagery, no superlatives about the business, no prices or promotions, cite real sources, say when evidence is limited. If a claim cannot be supported, cut it rather than soften it.

---

# Phase B: publish

Explicit instruction only. Keep it small: CI is faster and more capable than the sandbox.

1. **Branch.** Already on a working branch? Use it, do not rename or recreate. Otherwise the contract's convention. Never commit to `main`: it is protected and merge is the publish event.
2. **Write the two files.** Metadata appended to the data file, body file created.
   Any image the post uses is a third: commit the file wherever the contract's
   media section says it is staged, and reference it by the URL that section
   dictates. Never invent a media URL with no file behind it, and never park a
   blog image in the app's static directory to save a step.
3. **Run the validation script only.** Fix and re-run until clean. Do not run install, typecheck, lint or build: CI does all four in under a minute on a machine that can finish them, and a sandboxed build often cannot.
4. **Commit.** Two files, one commit.
5. **Push**, then deploy the preview if the project has one. Give the user the URL.
6. **Open the PR with a command**, not an assumption: `gh pr create --base main --title "..." --body "..."`. If `gh` is missing, use the API; if that fails, give the compare URL and say plainly you could not open it. Body: what the post is, what you ran, what you could not verify.
7. **Stop. Do not merge.** Merge belongs to the human, whose job is the one CI cannot do: deciding whether the claims are true and the copy is compliant. If they want it unattended, tell them to enable auto-merge themselves.

Cannot push (no credentials)? Say so plainly and output the files as code blocks, one per file, labelled with its path, no prose around them.

**Done means:** Phase A, the user has the draft. Phase B, the PR is open, checks are green, they have a preview URL, and you have said which checks you skipped.

---

# Known projects

## Kaiteki: `Blueprint-Agency/kaiteki-web`

Medical aesthetics clinic, Malaysia. YMYL: MAB/MMC advertising rules bind every claim. `AUTHORING.md` §5 is hard.

Read exactly these in A2:

```
content/blog/AUTHORING.md                 the contract
scripts/check-blog.mts                    the gate, the real limits
lib/types.ts                              the Post type
content/data/doctors.ts                   author / reviewedBy slugs
content/data/concerns.ts                  /concerns/... slugs
content/data/treatments.ts                /treatments/... slugs
content/data/technology.ts                /technology/... slugs
content/blog/alma-titanium-lifting.mdx    a published body, for shape
```

Phase B:

```
pnpm check:blog                          # no install needed, the only local check
git push origin HEAD:staging --force     # preview at staging.kaiteki.my, noindexed
gh pr create --base main                 # then stop
```

Staging holds one post at a time: the branch is cut from `main`, so the force-push makes staging exactly main plus this post, and the next post overwrites it.

Never run `pnpm build` here. It cannot finish in a sandbox (Google Fonts fetch is blocked) and CI runs it on the PR in about 40 seconds.
