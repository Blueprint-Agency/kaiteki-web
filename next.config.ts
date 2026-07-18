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
      { source: "/treatments/coolsculpting", destination: "/technology/coolsculpting", permanent: true },
      { source: "/treatments/onda", destination: "/technology/onda-coolwaves", permanent: true },
      { source: "/treatments/dermav", destination: "/technology/dermav", permanent: true },
      { source: "/treatments/tattoo-removal", destination: "/concerns/tattoo-removal", permanent: true },

      // ===== Legacy site 301 map (old static HTML/PHP → new routes) =====
      // Source of truth: docs/01 §1–2 (legacy sitemap.xml inventory).

      // Canonical host: force non-www (old .htaccess did this; must persist).
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kaiteki.my" }],
        destination: "https://kaiteki.my/:path*",
        permanent: true,
      },

      // Core pages
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/our-clinics.php", destination: "/locations", permanent: true },
      { source: "/services.html", destination: "/treatments", permanent: true },
      { source: "/skincare.html", destination: "/skincare", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      // About / Our Story (page lives at /our-story)
      { source: "/aboutus.html", destination: "/our-story", permanent: true },
      { source: "/about-us", destination: "/our-story", permanent: true },
      { source: "/about", destination: "/our-story", permanent: true },

      // Concern hub pages → /concerns (old sub-hubs removed 2026-07-18)
      { source: "/skin.html", destination: "/concerns", permanent: true },
      { source: "/facial-treatment-malaysia.html", destination: "/concerns", permanent: true },
      { source: "/hair.html", destination: "/concerns/hair-loss", permanent: true },

      // Concern pages
      { source: "/acne.html", destination: "/concerns/acne", permanent: true },
      { source: "/aging.html", destination: "/concerns/aging", permanent: true },
      { source: "/pigmentation.html", destination: "/concerns/pigmentation", permanent: true },
      { source: "/pores.html", destination: "/concerns/enlarged-pores", permanent: true },
      { source: "/tattoo-removal.html", destination: "/concerns/tattoo-removal", permanent: true },
      { source: "/dark-eye-circle-treatment.html", destination: "/concerns/dark-eye-circles", permanent: true },
      { source: "/face-contour-treatment.html", destination: "/concerns/face-contouring", permanent: true },
      { source: "/face-lifting-treatment.html", destination: "/concerns/face-lifting", permanent: true },
      { source: "/fine-lines-and-wrinkles-treatment.html", destination: "/concerns/fine-lines-wrinkles", permanent: true },
      { source: "/slimming-treatment.html", destination: "/concerns/body-slimming", permanent: true },

      // Treatment pages
      { source: "/exosome-therapy.html", destination: "/treatments/exosome-therapy", permanent: true },
      { source: "/bio-stimulator.html", destination: "/treatments/bio-stimulator", permanent: true },
      { source: "/fat-freezing.html", destination: "/treatments/fat-freezing", permanent: true },
      { source: "/fotona-4d.html", destination: "/treatments/fotona-4d", permanent: true },
      { source: "/hifu.html", destination: "/treatments/hifu", permanent: true },
      { source: "/microneedling.html", destination: "/treatments/microneedling", permanent: true },
      { source: "/pico-laser-treatment.html", destination: "/treatments/pico-laser", permanent: true },
      { source: "/radiofrequency.html", destination: "/treatments/radiofrequency", permanent: true },
      { source: "/skinbooster.html", destination: "/treatments/skin-booster", permanent: true },
      { source: "/ultherapy.html", destination: "/treatments/ultherapy", permanent: true },

      // Machine pages now under Technology
      { source: "/dermav.html", destination: "/technology/dermav", permanent: true },
      { source: "/onda.html", destination: "/technology/onda-coolwaves", permanent: true },
      { source: "/coolsculpting.html", destination: "/technology/coolsculpting", permanent: true },

      // Branch pages (9)
      { source: "/mont-kiara.php", destination: "/locations/mont-kiara", permanent: true },
      { source: "/cheras.php", destination: "/locations/cheras", permanent: true },
      { source: "/kuala-lumpur.php", destination: "/locations/bukit-jalil", permanent: true },
      { source: "/fourseasons-kl.php", destination: "/locations/four-seasons-kl", permanent: true },
      { source: "/petaling-jaya.php", destination: "/locations/petaling-jaya", permanent: true },
      { source: "/shah-alam.php", destination: "/locations/kota-kemuning", permanent: true },
      { source: "/johor.php", destination: "/locations/southkey-johor-bahru", permanent: true },
      { source: "/johor-pelangi-avenue.php", destination: "/locations/pelangi-johor-bahru", permanent: true },
      { source: "/kota-kinabalu.php", destination: "/locations/kota-kinabalu", permanent: true },

      // Extensionless variants the old .htaccess rewrote (docs/01 §3)
      { source: "/skin", destination: "/concerns", permanent: true },
      { source: "/skin-care", destination: "/skincare", permanent: true },
      { source: "/kuala-lumpur", destination: "/locations/bukit-jalil", permanent: true },
    ];
  },
};

export default nextConfig;
