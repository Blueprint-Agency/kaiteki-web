import { NextResponse, type NextRequest } from "next/server";
import map from "./config/blog-host-redirects.json";

/**
 * blog.kaiteki.my — the retired WordPress blog. Every legacy URL answers with a
 * 301 to its new home on kaiteki.my, so links and rankings carry over.
 *
 * This used to be an nginx container on bpvps1 (infrastructure repo,
 * vps/bpvps1/stacks/blog-redirect/). It moved here on 2026-10-31, when the site
 * moved to Vercel. The map is config/blog-host-redirects.json, converted from
 * that nginx file. The generator (scripts/blog-redirects.mts) needed the old
 * WordPress API, which is gone, so edit the JSON by hand from now on.
 *
 * The matcher only lets blog.kaiteki.my requests in. kaiteki.my never runs this.
 */
const SITE = "https://kaiteki.my";
const redirects: Record<string, string> = map.redirects;
const gone = new Set<string>(map.gone);

export function proxy(request: NextRequest) {
  let path = request.nextUrl.pathname;
  try {
    // Keys are stored decoded (a few image names hold a "×").
    path = decodeURIComponent(path);
  } catch {
    // Malformed escape: look it up as sent.
  }
  // `/slug/` and `/slug` are the same page.
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);

  // Injected spam posts: gone, never redirected.
  if (gone.has(path)) return new NextResponse(null, { status: 410 });

  const target = redirects[path];
  if (target) return NextResponse.redirect(target, 301);

  // Images the migration did not move are gone with WordPress.
  if (path.startsWith("/wp-content/")) return new NextResponse(null, { status: 410 });

  // Everything else (home, feeds, authors, ?p=…) goes to the blog index.
  return NextResponse.redirect(`${SITE}/blog`, 301);
}

export const config = {
  matcher: [{ source: "/:path*", has: [{ type: "host", value: "blog.kaiteki.my" }] }],
};
