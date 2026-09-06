import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { NOINDEX_SITE } from "@/lib/seo";

// Native Next.js robots — served at /robots.txt. Points crawlers at the sitemap
// (a core sitemap best practice) on the canonical non-www host.
//
// ⚠️ Cloudflare currently PREPENDS a "Managed robots.txt" block to this output that
// blocks GPTBot, ClaudeBot, CCBot, Google-Extended, Applebot-Extended, Bytespider,
// Amazonbot and meta-externalagent, and emits `Content-Signal: ai-train=no`. That block
// is not in this repo and cannot be removed from here — it is a Cloudflare dashboard
// setting (AI Crawl Control / Managed robots.txt). Until it is switched off, the live
// file carries two conflicting `User-agent: *` groups and the allowlist below does not
// take effect. See docs/03b §T2.
//
// Policy rationale (docs/03b): AI Overviews fire on most of our informational queries,
// so being *cited* matters more than being clicked. The retrieval agents below are the
// ones that fetch pages to answer a live user question — blocking them removes Kaiteki
// from AI answers entirely. Token list per docs/00 §3.
const AI_RETRIEVAL_AGENTS = [
  "OAI-SearchBot", // ChatGPT search index
  "ChatGPT-User", // ChatGPT live fetch on a user's behalf
  "Claude-SearchBot", // Claude search index
  "Claude-User", // Claude live fetch on a user's behalf
  "PerplexityBot",
  "Applebot", // Siri / Spotlight — also feeds Apple Intelligence summaries
];

export default function robots(): MetadataRoute.Robots {
  if (NOINDEX_SITE) return { rules: { userAgent: "*", disallow: "/" } };
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Named groups beat the wildcard, so this states the retrieval policy explicitly
      // rather than leaving it to inheritance.
      { userAgent: AI_RETRIEVAL_AGENTS, allow: "/" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
