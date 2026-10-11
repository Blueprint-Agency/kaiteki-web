# TODO — pages to build

Pages intentionally deferred or stubbed during the rebuild. Track and revisit.

- [x] **Blog section** — built at `/blog` (hub), `/blog/[slug]` (article) and
      `/blog/category/[slug]` (archives). Bodies are MDX in `content/blog/`, metadata is typed in
      `content/data/blog.ts`, per locked decision #3. Nav/footer now link internally; the old
      `/blog` → subdomain 302 is removed.
- [x] **Blog backlog** — the whole published archive is migrated (2026-10): 152 posts moved
      verbatim by `pnpm blog:migrate-legacy` into `content/data/blog-legacy.ts` +
      `content/blog/`, same slug, title, meta description, author, dates and images; the 3
      earlier rewrites keep their new slugs. `pnpm blog:redirects` generates the subdomain's
      301 map, served by the `blog-redirect` stack on bpvps1 (infrastructure repo).
      Not migrated by decision: the 8 Malay posts and the 51 doorway pages (both 301'd).
- [ ] **Legacy blog follow-ups**
      1. The 152 legacy posts are copied as published, so they predate the house rules: they
         carry prices, "before and after" photos, efficacy words and em-dashes that
         `docs/02` §8 bars from new copy. `legacy: true` exempts them from `check:blog`. Each
         needs a doctor review before it is promoted to a normal post.
      2. Their covers are the old WordPress cards with the headline and a "Kaiteki Blog"
         watermark baked in, so they duplicate the H1 and carry retired branding.
      3. No legacy post maps to concerns/treatments/technology yet, so none appears in a
         page's "Read next" row and none links out to the money pages.
      4. `/blog` lists all 167 posts on one page (1.6 MB of HTML). Paginate the hub.
      5. Malay posts → `/ms/blog` once the locale exists; they 301 to `/blog` until then.
- [ ] **About Us page** — removed in the IA v2 refactor. Rebuild (clinic story, E-E-A-T,
      credentials) or fold into `/doctors`.
- [ ] **Contact Us page** — removed. Conversion is WhatsApp-only for now; add a proper
      contact page (branches, hours, map, WhatsApp CTA) when needed.
