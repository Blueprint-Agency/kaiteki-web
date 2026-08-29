---
name: publish-blog-post
description: Write and publish a blog post to a git-based site (no CMS, posts are repo files). Use when asked to draft, write or publish a blog post for a project's repo. Gathers what it needs, reads the repo's own authoring contract, drafts for approval, then branches, previews and opens a PR.
---

# Publish a blog post from a git repo

Some sites have no CMS. The repo is the database, a PR is the draft, and a merge
to `main` is the publish button. A post is one or two files plus a contract that
says exactly what those files must contain.

Your job: find that contract, obey it, and produce the files.

## Step 1 — gather what you cannot look up

Ask for these in **one message**, not one at a time. Never ask for anything you
can discover from the repo yourself.

**Required:**

- **Repo** — `owner/name`. If the session already has a repo checked out, that
  is the repo; do not ask.
- **Topic** — what the post is about.

**Ask only if the answer would change the post, and offer a default:**

- Angle or reader — who it is for, what question it answers.
- Target keyword, if the project does SEO.
- Category or section, if the contract has a fixed list (read the list first,
  then ask them to pick from it).
- Author or byline, if the contract requires a real person.

If they already gave you a draft, you still do Step 2 before touching it. A
draft written without the contract will not satisfy the contract.

## Step 2 — find and read the contract

If the repo is checked out, read the files directly. Otherwise list the tree
(public repos need no auth):

```
https://api.github.com/repos/<owner>/<name>/git/trees/<default-branch>?recursive=1
https://raw.githubusercontent.com/<owner>/<name>/<default-branch>/<path>
```

Look for the authoring contract. Names vary by project:

```
content/blog/AUTHORING.md   docs/publishing.md   content/AUTHORING.md
CONTRIBUTING.md             docs/content.md      README.md (a "blog" section)
```

**The contract overrides this skill.** Where they disagree, it wins.

Then read what the contract points at:

- The **type or schema** for post metadata, so every field is real and typed
  correctly.
- The **data files** any slug must come from (authors, categories, tags,
  related pages). Never invent a slug or a category; if it is not in the data
  file, the page does not exist and the link will fail the build.
- **One published post**, the most recent one. Copy its shape. It is the only
  reliable record of what the project actually accepts.
- The **validation script** the contract names (`check:blog`,
  `validate:content`, or similar). Read it. It carries the exact limits —
  character counts, minimum sections, link rules — that prose may round off.

If no contract exists, say so plainly, infer the format from two published
posts, and flag that you are guessing.

## Step 3 — draft, then stop

Write the post to the contract. Then **output the draft in chat and stop.**

Do not create a branch, write files, or commit until the user approves. Iterating
prose in chat is faster than iterating as commits.

Show them: the proposed metadata (title, description, category, author, slug)
and the full body. Say what you are least sure about. Then wait.

If they ask for changes, revise and show it again. Only move on when they say so.

The things drafts break in every project, worth checking before you show it:

- Metadata **field lengths** are usually hard limits with a validator behind
  them. Count characters, do not estimate.
- **Do not duplicate what the page template renders.** Most sites render the H1,
  byline, table of contents, related links and closing CTA from metadata. Repeat
  them in the body and the post ships with two H1s.
- **Internal links must resolve.** Use the slugs you read in Step 2, on
  descriptive anchor text.
- **House style is enforced by machine** more often than you expect: banned
  characters (em-dashes are a common one), heading depth, minimum sections,
  minimum links. The validation script is the truth.
- Match the **voice of the published post you read**, not your default register.

## Step 4 — compliance, if the project has any

Regulated niches (medical, financial, legal, health claims) carry rules no
validator can check. If the contract has a compliance section, treat every line
as a hard constraint, and re-read your draft against it specifically.

Common shape: no outcome guarantees, no testimonials or before/after imagery,
no superlatives about the business, no prices or promotions in editorial copy,
cite real sources, say when evidence is limited.

If a claim cannot be supported, cut it. Do not soften it.

## Step 5 — write the files and run the gate

Once approved:

1. Branch. Use the convention the contract names (often `content/<slug>`).
   **Never commit to `main`.** It is usually protected, and merge is the publish
   event. Branch commits and open PRs publish nothing, so iterate freely.
2. Write the files. Append metadata to the data file, create the body file.
3. Run the project's validation script, plus typecheck and lint. Fix what it
   reports and re-run until clean. Expect the first run to fail.
4. If a step fails for an environment reason rather than a content reason
   (blocked network, missing font fetch, no package registry), say so explicitly
   and do not present it as a content failure.
5. Commit. Two files, one commit.

## Step 6 — preview

Push the branch, then deploy it to the project's preview environment if it has
one (see Known projects). Give the user the preview URL and wait for their read.

Further changes: amend or add commits to the branch, push, redeploy the preview.

## Step 7 — open the PR

Base `main`, head your branch. In the description say what the post is, which
checks you ran locally, and anything you could not verify.

**Do not merge.** Merge is the publish event and it belongs to the human, whose
job is the thing CI cannot do: check that the claims are true and the copy is
compliant. If they want it to land unattended once checks pass, tell them to
enable GitHub auto-merge on the PR themselves.

If you cannot push (no credentials in the sandbox), say so plainly, and output
the files as code blocks — one per file, labelled with its exact path, no prose
around them.

## What "done" means

The PR is open, the required checks are green, and the user has a preview URL.
Say which checks you could not run and what you are least sure about. That is
more useful than a confident hand-off.

## Known projects

| Say | Repo | Contract | Preview | Gate |
|---|---|---|---|---|
| Kaiteki, kaiteki.my | `Blueprint-Agency/kaiteki-web` | `content/blog/AUTHORING.md` | `git push origin HEAD:staging --force` → staging.kaiteki.my (one post at a time, branch is cut from `main` so staging becomes main + this post) | `pnpm check:blog`, `typecheck`, `lint`. `pnpm build` fails in sandboxes — Google Fonts is blocked outbound; CI runs the real build. |
