import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lean container image: emit a self-contained server (.next/standalone) for Docker.
  output: "standalone",
  // Pin the workspace root so Next doesn't infer it from a stray parent lockfile.
  // (docs/07 §14 — this repo root is the app root; well-known/ is excluded reference.)
  turbopack: {
    root: __dirname,
  },
  // Modern formats for the warm imagery (docs/02 §2).
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // 301s for URLs moved by the taxonomy restructures.
  // IA v2 (2026-07-18): ultherapy is a flat treatment again; coolsculpting/onda/dermav
  // are now Technology items. ponytail: old nested /treatments/x/y URLs get their 301s
  // in the deferred redirect-map pass, not here.
  async redirects() {
    return [
      // Blog still lives on its own subdomain until it migrates to /blog.
      { source: "/blog", destination: "https://blog.kaiteki.my", permanent: false },

      // --- Interim taxonomy 301s (new-URL internal moves, IA v2) ---
      { source: "/treatments/coolsculpting", destination: "/technology/coolsculpting", statusCode: 301 },
      { source: "/treatments/onda", destination: "/technology/onda-coolwaves", statusCode: 301 },
      { source: "/treatments/dermav", destination: "/technology/dermav", statusCode: 301 },
      { source: "/treatments/tattoo-removal", destination: "/concerns/tattoo-removal", statusCode: 301 },

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
      { source: "/services.html", destination: "/treatments", statusCode: 301 },
      { source: "/skincare.html", destination: "/skincare", statusCode: 301 },
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
      { source: "/skin-care", destination: "/skincare", statusCode: 301 },
      { source: "/kuala-lumpur", destination: "/locations/bukit-jalil", statusCode: 301 },
    ];
  },
};

export default nextConfig;
