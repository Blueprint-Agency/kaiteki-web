import type { NextConfig } from "next";
import type { Redirect } from "next/dist/lib/load-custom-routes";
import { localePages } from "./content/i18n/pages.ts";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Lean container image: emit a self-contained server (.next/standalone) for Docker.
  output: "standalone",
  // Pin the workspace root so Next doesn't infer it from a stray parent lockfile.
  // (docs/07 §14 — this repo root is the app root; well-known/ is excluded reference.)
  turbopack: {
    root: __dirname,
  },
  // Three root layouts (app/(en), app/zh, app/ms — one per <html lang>) leave no
  // single layout to build a 404 from, so unmatched URLs use app/global-not-found.
  experimental: {
    globalNotFound: true,
  },
  // Dev-only: allow HMR when previewing from another device on the LAN.
  allowedDevOrigins: ["192.168.101.7"],
  // Modern formats for the warm imagery (docs/02 §2).
  images: {
    formats: ["image/avif", "image/webp"],
    // New blog media lives in Cloudflare R2 (bucket kaiteki-web-prod) behind the
    // existing cdn.kaiteki.my, under a blog/ prefix so it stays clear of the
    // brand/ objects already there. See content/blog/AUTHORING.md §3.
    //
    // The site's own images followed on 2026-10-11: everything that was in
    // public/images/ and public/awards/ now serves from the same paths on the CDN
    // (/images/**, /awards/**). Only the SEO-pinned files stay in public/: the brand
    // logo (schema Organization.logo), images/hero/ (site-wide OG/Twitter/schema image),
    // app icons, and the self-contained ads/ landing bundle.
    //
    // Concern media joins it under a concerns/ prefix (docs/11 §5), treatment media under
    // treatments/ (docs/13 §10). Unlike blog media neither is staged in git — the source
    // uploads straight from the designer's folder via scripts/sync-media.mjs (ADR-0001 §4).
    // The list is a fence, not a convenience: an authored URL outside these prefixes is a
    // storage boundary drifting, which is why validate-concerns.mts Q-14 also checks it.
    remotePatterns: [
      { protocol: "https", hostname: "cdn.kaiteki.my", pathname: "/blog/**" },
      { protocol: "https", hostname: "cdn.kaiteki.my", pathname: "/concerns/**" },
      { protocol: "https", hostname: "cdn.kaiteki.my", pathname: "/treatments/**" },
      { protocol: "https", hostname: "cdn.kaiteki.my", pathname: "/images/**" },
      { protocol: "https", hostname: "cdn.kaiteki.my", pathname: "/awards/**" },
    ],
  },
  // Ads landing pages live in public/ads/ but serve from the root URL they're bought on.
  async rewrites() {
    return [{ source: "/lp-ultherapy.html", destination: "/ads/lp-ultherapy.html" }];
  },

  // 301s for URLs moved by the taxonomy restructures.
  // IA v2 (2026-07-18): ultherapy is a flat treatment again; coolsculpting/onda/dermav
  // are now Technology items. ponytail: old nested /treatments/x/y URLs get their 301s
  // in the deferred redirect-map pass, not here.
  async redirects() {
    const rules: Redirect[] = [
      // --- Interim taxonomy 301s (new-URL internal moves, IA v2) ---
      { source: "/treatments/coolsculpting", destination: "/technology/coolsculpting", statusCode: 301 },
      { source: "/treatments/onda", destination: "/technology/onda-coolwaves", statusCode: 301 },
      { source: "/treatments/dermav", destination: "/technology/dermav", statusCode: 301 },
      { source: "/treatments/tattoo-removal", destination: "/concerns/tattoo-removal", statusCode: 301 },
      // Post renamed 2026-09-07: the comparison now covers Picocare, not Discovery Pico
      // (a device we do not offer). The slug is the URL, so the old one keeps its 301.
      { source: "/blog/discovery-pico-vs-picosure", destination: "/blog/picocare-vs-picosure", statusCode: 301 },
      // Page 1 of a blog listing is its base URL; never a second copy of it.
      { source: "/blog/page/1", destination: "/blog", statusCode: 301 },
      { source: "/blog/category/:slug/page/1", destination: "/blog/category/:slug", statusCode: 301 },

      // ===== Legacy site 301 map (old static HTML/PHP → new routes) =====
      // Source of truth: docs/01 §1–2 (legacy sitemap.xml inventory).

      // Canonical host: force non-www (old .htaccess did this; must persist).
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kaiteki.my" }],
        destination: "https://kaiteki.my/:path*",
        statusCode: 301,
      },

      // Core pages
      { source: "/index.html", destination: "/", statusCode: 301 },
      { source: "/our-clinics.php", destination: "/locations", statusCode: 301 },
      { source: "/our-clinics", destination: "/locations", statusCode: 301 },
      { source: "/services.html", destination: "/treatments", statusCode: 301 },
      { source: "/skincare.html", destination: "/products", statusCode: 301 },
      { source: "/privacy.html", destination: "/privacy", statusCode: 301 },
      // About / Our Story (page lives at /our-story)
      { source: "/aboutus.html", destination: "/our-story", statusCode: 301 },
      { source: "/about-us", destination: "/our-story", statusCode: 301 },
      { source: "/about", destination: "/our-story", statusCode: 301 },

      // Concern hub pages → /concerns (old sub-hubs removed 2026-07-18)
      { source: "/skin.html", destination: "/concerns", statusCode: 301 },
      { source: "/facial-treatment-malaysia.html", destination: "/concerns", statusCode: 301 },
      { source: "/hair.html", destination: "/concerns/hair-loss", statusCode: 301 },

      // Concern pages
      { source: "/acne.html", destination: "/concerns/acne", statusCode: 301 },
      { source: "/aging.html", destination: "/concerns/aging", statusCode: 301 },
      { source: "/pigmentation.html", destination: "/concerns/pigmentation", statusCode: 301 },
      { source: "/pores.html", destination: "/concerns/enlarged-pores", statusCode: 301 },
      { source: "/tattoo-removal.html", destination: "/concerns/tattoo-removal", statusCode: 301 },
      { source: "/dark-eye-circle-treatment.html", destination: "/concerns/dark-eye-circles", statusCode: 301 },
      { source: "/face-contour-treatment.html", destination: "/concerns/face-contouring", statusCode: 301 },
      { source: "/face-lifting-treatment.html", destination: "/concerns/face-lifting", statusCode: 301 },
      { source: "/fine-lines-and-wrinkles-treatment.html", destination: "/concerns/fine-lines-wrinkles", statusCode: 301 },
      { source: "/slimming-treatment.html", destination: "/concerns/body-slimming", statusCode: 301 },

      // Treatment pages
      { source: "/exosome-therapy.html", destination: "/treatments/exosome-therapy", statusCode: 301 },
      { source: "/bio-stimulator.html", destination: "/treatments/bio-stimulator", statusCode: 301 },
      { source: "/fat-freezing.html", destination: "/treatments/fat-freezing", statusCode: 301 },
      { source: "/fotona-4d.html", destination: "/treatments/fotona-4d", statusCode: 301 },
      { source: "/hifu.html", destination: "/treatments/hifu", statusCode: 301 },
      { source: "/microneedling.html", destination: "/treatments/microneedling", statusCode: 301 },
      { source: "/pico-laser-treatment.html", destination: "/treatments/pico-laser", statusCode: 301 },
      { source: "/radiofrequency.html", destination: "/treatments/radiofrequency", statusCode: 301 },
      { source: "/skinbooster.html", destination: "/treatments/skin-booster", statusCode: 301 },
      { source: "/ultherapy.html", destination: "/treatments/ultherapy", statusCode: 301 },

      // Machine pages now under Technology
      { source: "/dermav.html", destination: "/technology/dermav", statusCode: 301 },
      { source: "/onda.html", destination: "/technology/onda-coolwaves", statusCode: 301 },
      { source: "/coolsculpting.html", destination: "/technology/coolsculpting", statusCode: 301 },

      // Branch pages (9)
      { source: "/mont-kiara.php", destination: "/locations/mont-kiara", statusCode: 301 },
      { source: "/cheras.php", destination: "/locations/cheras", statusCode: 301 },
      { source: "/kuala-lumpur.php", destination: "/locations/bukit-jalil", statusCode: 301 },
      { source: "/fourseasons-kl.php", destination: "/locations/four-seasons-kl", statusCode: 301 },
      { source: "/petaling-jaya.php", destination: "/locations/petaling-jaya", statusCode: 301 },
      { source: "/shah-alam.php", destination: "/locations/kota-kemuning", statusCode: 301 },
      { source: "/johor.php", destination: "/locations/southkey-johor-bahru", statusCode: 301 },
      { source: "/johor-pelangi-avenue.php", destination: "/locations/pelangi-johor-bahru", statusCode: 301 },
      { source: "/kota-kinabalu.php", destination: "/locations/kota-kinabalu", statusCode: 301 },

      // Extensionless variants the old .htaccess rewrote (docs/01 §3)
      { source: "/skin", destination: "/concerns", statusCode: 301 },
      { source: "/skin-care", destination: "/products", statusCode: 301 },
      { source: "/skincare", destination: "/products", statusCode: 301 },
      { source: "/kuala-lumpur", destination: "/locations/bukit-jalil", statusCode: 301 },
    ];

    // The legacy /cn/ mirror (docs/01 §2: ~38 sitemap URLs, the same file names
    // as the English site). docs/04 §9.9: each /cn page lands on its /zh twin
    // once that exists, and on the English page until then, never a 404. A /zh
    // page exists in production only once a doctor has signed its translation
    // (content/i18n/pages.ts), so the destination follows the ledger and each
    // redirect flips to Chinese on the first build after its page is signed.
    // Derived from the English legacy rules above so the two maps cannot drift;
    // `pnpm test:redirects` checks every one has its /cn twin.
    const zh = (path: string) =>
      localePages.zh[path]?.status === "signed" ? (path === "/" ? "/zh" : `/zh${path}`) : path;
    const legacyFile = /^\/[a-z0-9-]+\.(html|php)$/;
    const cn: Redirect[] = rules
      .filter((r) => !r.has && legacyFile.test(r.source) && !r.destination.startsWith("/ads/"))
      .map((r) => ({ source: `/cn${r.source}`, destination: zh(r.destination), statusCode: 301 }));

    return [
      ...rules,
      { source: "/cn", destination: zh("/"), statusCode: 301 },
      ...cn,
      // The one page only the Chinese site had (docs/01 §2).
      { source: "/cn/double-eyelid-suture-treatment.html", destination: zh("/treatments/double-eyelid"), statusCode: 301 },
      // Anything else under /cn/ (dev leftovers, *_old.html, test pages): the
      // home page.
      { source: "/cn/:path*", destination: zh("/"), statusCode: 301 },
    ];
  },
};

// MDX for /blog bodies (locked decision #3). Turbopack can't serialize plugin
// *functions* through the config, so remark/rehype plugins are named as strings
// and resolved by the loader — the documented Turbopack form.
const withMDX = createMDX({
  extension: /\.mdx$/,
  options: {
    // GFM buys us tables (the comparison posts need real <table>s, not
    // screenshots) plus strikethrough and autolinks.
    remarkPlugins: [["remark-gfm", {}]],
    // Stable id="" on every heading so the article table of contents can anchor
    // to them without hand-authored ids.
    rehypePlugins: [["rehype-slug", {}]],
  } as never,
});

export default withMDX(nextConfig);
