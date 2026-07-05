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
};

export default nextConfig;
