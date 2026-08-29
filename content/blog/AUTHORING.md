# Publishing a post to kaiteki.my/blog

Everything a post needs, and nothing it does not. Two files, one command.

```
content/data/blog.ts        ← append the metadata entry
content/blog/<slug>.mdx     ← the body
pnpm check:blog             ← the gate (must pass before merge)
```

There is no CMS and no admin UI. A post is code, so it goes through a normal
change: branch → the two files above → `pnpm check:blog` → PR → merge to `main`
(which builds and deploys to kaiteki.my).

**Branch is `content/<slug>`, and a post never gets committed to `main`.** Merge
is the publish event; branch commits and open PRs publish nothing, so iterate as
long as you like. To see it rendered before merge, merge the branch into
`staging` (deploys to staging.kaiteki.my, which is noindexed) — one shared
environment, so only one post at a time sits there.

---

## 1. Metadata

Append one object to the `posts` array in `content/data/blog.ts`. Order in the
array does not matter; every page sorts by `publishedAt`.

```ts
{
  slug: "melasma-treatment-malaysia-causes-skincare",
  title: "Melasma treatment in Malaysia: causes, skincare and when to see a doctor",
  seoTitle: "Melasma Treatment Malaysia: Causes & Skincare | Kaiteki",
  description:
    "What causes melasma in Malaysia's tropical climate, how to manage it with daily skincare and sun protection, and when professional treatment is the next step.",
  category: "Skin Concerns",
  image:
    "https://cdn.kaiteki.my/blog/melasma-treatment-malaysia-causes-skincare/melasma-treatment-malaysia-causes-skincare.png",
  imageAlt:
    "Illustration of a woman touching her cheek where a melasma patch sits, for a Kaiteki guide to melasma treatment in Malaysia",
  author: "dr-joaan-kong",
  reviewedBy: "dr-chew-yuhhui",
  publishedAt: "2026-08-13",
  readingMinutes: 8,
  leadAnswer:
    "Melasma is a chronic pigmentation disorder causing symmetrical brown or grey patches on the face, driven by UV exposure, hormones and genetics. Daily broad-spectrum SPF 50+ is the foundation of every plan. Where that is not enough, doctors add topical brighteners, oral tranexamic acid or low-energy Pico Laser.",
  concerns: ["pigmentation"],
  treatments: ["pico-laser"],
  technology: ["picosure"],
  related: ["how-to-reduce-facial-redness-causes-treatment"],
  faqs: [{ q: "Does melasma come back?", a: "It can, and the usual reason is stopping sun protection." }],
}
```

| Field | Required | Rule |
|---|---|---|
| `slug` | yes | lowercase-kebab, unique, matches the `.mdx` filename. Include the head keyword; never change it after publish (it is the URL). |
| `title` | yes | The visible H1. Sentence case, written for a human. No brand suffix. |
| `seoTitle` | recommended | The `<title>`. **Max 60 characters including `\| Kaiteki`.** Title Case, head keyword first. Omit only when `title` is already under 60. |
| `description` | yes | Meta description, **140–160 characters** (the gate errors outside 120–170). Describes what the reader gets. No "Learn more", no clickbait. |
| `category` | yes | Exactly one of: `Treatments Explained`, `Skin Concerns`, `Device & Injectables`, `Weight & Wellness`, `Skincare`. |
| `image` / `imageAlt` | optional pair | 1440×1080 (4:3). Always a `https://cdn.kaiteki.my/blog/...` URL with the file staged under `content/blog/media/` (§3). Alt describes the picture for someone who cannot see it. Omit both and the post renders a generated motif instead, which is fine. |
| `author` | yes | Doctor slug from `content/data/doctors.ts`. The byline: a real doctor, never "Kaiteki team". |
| `reviewedBy` | recommended | A second doctor slug. Spread reviews across the panel rather than piling them on one name. |
| `publishedAt` | yes | `YYYY-MM-DD`. |
| `updatedAt` | on rewrite | `YYYY-MM-DD` of a substantive edit or medical re-review. Bumping this is what tells Google the post is maintained; do not bump it for a typo. |
| `readingMinutes` | yes | Body words ÷ 225, rounded. The gate warns if it is off by more than 3. |
| `leadAnswer` | yes | **40–60 words** answering the title's question outright, above the fold. This is the block answer engines quote, so it must stand alone. |
| `concerns` / `treatments` / `technology` | at least one | Slugs from the matching data file. These render the "Related pages on our site" links; this is the whole SEO reason /blog exists. |
| `related` | optional | Post slugs. Defaults to same-category posts when omitted. |
| `faqs` | optional | `{ q, a }` pairs shown as an accordion after the article. Questions end in `?`. Visible only, no FAQPage schema (house rule). |
| `featured` | at most one post | Pins the post to the top of the hub. |
| `legacyPath` | migration only | The old `blog.kaiteki.my` path this replaces, e.g. `/discovery-pico-vs-picosure/`. Feeds the 301 map. |

## 2. Body

`content/blog/<slug>.mdx` is plain Markdown. No frontmatter, no imports, no H1
(the title is the H1). Start with one or two orienting paragraphs, then `##`
sections.

Structure that works for these posts:

```md
One paragraph that restates the answer with a little more room than leadAnswer had.

A second paragraph saying what the guide covers.

## Key takeaways

- **Bolded question or label:** the answer in one or two sentences.

## What is <thing>?
## What causes it in Malaysia?
## Daily care
## Professional options
### One option
### Another option
## When to see a doctor
```

Rules the gate enforces:

- **At least two `##` sections.** `###` may only appear under a `##`.
- **At least two internal links**, and every one must resolve to a real page.
  Write them as root-relative Markdown: `[Pico Laser](/treatments/pico-laser)`.
  Valid shapes: `/concerns/<slug>`, `/treatments/<slug>`, `/technology/<slug>`,
  `/locations/<slug>`, `/doctors/<slug>`, `/blog/<slug>`, `/products`, `/`.
  Link on descriptive text, never "click here".
- **No em-dashes** anywhere a reader can see (`—`). Use a comma, colon, bracket
  or full stop. En-dashes in ranges (`10–15%`) are correct and stay.
- **Tables** are Markdown (GFM) and scroll on their own on mobile. Use them for
  real comparisons.

## 3. Media: R2, and nothing under `public/`

**Every image a blog post serves lives in Cloudflare R2** (bucket
`kaiteki-web-prod`, served from `https://cdn.kaiteki.my`). `public/` is for the
rest of the site only; there is no blog media there and none should return.

You do not upload anything by hand. The publish is git-based, so the git push
does it:

1. Put the file at **`content/blog/media/<post-slug>/<descriptive-name>.png`**.
   That directory is not served by Next, it is the upload queue. Descriptive
   filenames are image SEO, so name the file what the picture is, not
   `img-2.jpg`.
2. Reference it as the full CDN URL, mirroring that path exactly:
   `https://cdn.kaiteki.my/blog/<post-slug>/<descriptive-name>.png`.
3. Merge to `staging` or `main`. The deploy workflow syncs
   `content/blog/media/` into the bucket's `blog/` prefix before it builds the
   image, using credentials held in the repo's GitHub secrets. Nothing is
   hardcoded and no author needs the keys.

`pnpm check:blog` fails the PR if a post points anywhere but that host, or if a
CDN URL has no matching file staged for upload, which is the 404 that would
otherwise only show up in production.

`next/image` optimizes an R2 URL exactly like a local file (`next.config.ts`
allows the host), and the JSON-LD passes it through absolute.

The sync only ever adds; it never deletes. Removing a file from git leaves the
old URL serving, deliberately, because it may already be indexed. To retire an
object, delete it from the bucket yourself.

**Video is never in the repo and never raw in R2.** R2 serves flat files with
no transcoding or adaptive streaming. Default to a YouTube embed.

## 4. Blocks

Available in any `.mdx` body with no import line (`components/blog/blocks.tsx`):

```mdx
<Figure
  src="https://cdn.kaiteki.my/blog/melasma-treatment-malaysia-causes-skincare/melasma-depth-diagram.png"
  alt="Cross-section showing epidermal, dermal and mixed melasma depths"
  caption="Epidermal pigment sits shallow; dermal pigment sits deeper and needs a different plan."
  ratio="16/9"
/>

<AskCta
  heading="Not sure which type you have?"
  body="A doctor can tell epidermal from dermal melasma at the consultation, which decides the plan."
  topic="melasma"
/>
```

- `Figure` — in-body imagery. Use this rather than `![]()`: it goes through
  `next/image` (AVIF/WebP, lazy, no layout shift). `alt` is mandatory.
- `AskCta` — one mid-article WhatsApp CTA for long posts. At most one; the
  closing CTA is rendered by the page already.

Everything else the page renders for you from metadata: breadcrumbs, byline and
reviewer line, hero image, lead answer, table of contents, FAQ accordion,
related-pages links, author card, medical disclaimer, closing CTA, JSON-LD.
Do not hand-write any of those in the body.

## 5. Compliance (YMYL, Malaysian medical advertising)

Non-negotiable, and no regex catches these. `docs/02` §8 is the full rule set.

- No outcome or efficacy guarantees. "Reduces" and "may improve" only where a
  cited source supports it; never "removes", "cures", "permanent", "guaranteed".
- No before/after imagery, no patient photos, no testimonials, no reviews.
- No superlatives about the clinic ("best", "leading", "number one").
- No prices, no "from RM", no promotional discounts in editorial copy.
- Cite real sources in prose for clinical claims (journal name in italics is the
  house pattern). Say when evidence is limited.
- Say plainly when something is not suitable, and that a doctor assesses first.

## 6. Before you merge

```bash
pnpm check:blog    # the contract above, machine-checked
pnpm typecheck     # the metadata object is typed; this catches a bad field
pnpm build         # optional locally; CI runs it on merge
```

`check:blog` prints warnings (thin description, few internal links, reading time
drift) and errors (anything that would ship broken). Warnings are a judgement
call. Errors block.
