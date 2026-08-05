# TODO — pages to build

Pages intentionally deferred or stubbed during the rebuild. Track and revisit.

- [x] **Blog section** — built at `/blog` (hub), `/blog/[slug]` (article) and
      `/blog/category/[slug]` (archives). Bodies are MDX in `content/blog/`, metadata is typed in
      `content/data/blog.ts`, per locked decision #3. Nav/footer now link internally; the old
      `/blog` → subdomain 302 is removed.
- [ ] **Blog backlog** — three posts migrated so far (the live subdomain's three most recent).
      Remaining work:
      1. Port the rest of the WordPress archive from `well-known/kaitekim_blog2.sql.gz`.
      2. **301s on the subdomain.** `blog.kaiteki.my/<post>` → `kaiteki.my/blog/<slug>` has to be
         configured on the blog host itself — Next can't redirect a domain it doesn't serve. Each
         migrated post carries its old path in `legacyPath` so the map can be generated from data.
      3. Replace the migrated hero images: they are the old WordPress cards with the headline and
         a "Kaiteki Blog" watermark baked in, so they duplicate the H1 and carry retired branding.
- [ ] **About Us page** — removed in the IA v2 refactor. Rebuild (clinic story, E-E-A-T,
      credentials) or fold into `/doctors`.
- [ ] **Contact Us page** — removed. Conversion is WhatsApp-only for now; add a proper
      contact page (branches, hours, map, WhatsApp CTA) when needed.
