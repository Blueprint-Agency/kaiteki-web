import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
      { source: "/treatments/coolsculpting", destination: "/technology/coolsculpting", permanent: true },
      { source: "/treatments/onda", destination: "/technology/onda-coolwaves", permanent: true },
      { source: "/treatments/dermav", destination: "/technology/dermav", permanent: true },
      { source: "/treatments/tattoo-removal", destination: "/concerns/tattoo-removal", permanent: true },
    ];
  },
};

export default nextConfig;
