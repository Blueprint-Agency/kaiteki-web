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
  // 301s for URLs moved by the treatment/concern taxonomy restructure
  // (docs/superpowers/plans/2026-07-13-treatment-taxonomy-restructure.md, Task 5).
  async redirects() {
    return [
      { source: "/treatments/ultherapy", destination: "/treatments/hifu/ultherapy", permanent: true },
      { source: "/treatments/coolsculpting", destination: "/treatments/fat-freezing/coolsculpting", permanent: true },
      { source: "/treatments/onda", destination: "/treatments/microwave-contouring/onda", permanent: true },
      { source: "/treatments/dermav", destination: "/treatments/vascular-pigment-laser/dermav", permanent: true },
      { source: "/treatments/tattoo-removal", destination: "/concerns/tattoo-removal", permanent: true },
    ];
  },
};

export default nextConfig;
