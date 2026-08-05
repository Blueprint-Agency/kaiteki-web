import { readFile } from "node:fs/promises";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface Heading {
  /** Anchor id — matches what rehype-slug puts on the rendered heading. */
  id: string;
  text: string;
  level: 2 | 3;
}

/**
 * Reproduce github-slugger (what rehype-slug uses) for our authored headings:
 * lowercase, drop punctuation, spaces → hyphens. github-slugger's own character
 * class is a large Unicode table; for the ASCII English headings we write,
 * "keep letters, digits, spaces and hyphens" is equivalent. Keep this in step
 * with the rehype-slug entry in next.config.ts — if the two drift, every
 * table-of-contents link lands nowhere.
 */
export function headingId(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

/** Strip the inline markdown we actually use in headings (bold, italic, links, code). */
function plainText(md: string): string {
  return md
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`]/g, "")
    .trim();
}

/**
 * Table-of-contents source for a post, read from its .mdx at build time
 * (every /blog/[slug] page is prerendered, so this never runs per-request).
 *
 * Derived from the file rather than hand-listed in content/data/blog.ts so a
 * heading can never drift out of sync with the article it points at.
 */
export async function postHeadings(slug: string): Promise<Heading[]> {
  let raw: string;
  try {
    raw = await readFile(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
  } catch {
    return [];
  }

  const headings: Heading[] = [];
  let inFence = false;

  for (const line of raw.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const m = /^(#{2,3})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!m) continue;

    const text = plainText(m[2]);
    headings.push({ id: headingId(text), text, level: m[1].length as 2 | 3 });
  }

  return headings;
}

/** Long-form dates in one place so cards, bylines and archives never diverge. */
export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Compact variant for cards, where the byline row is tight. */
export function formatPostDateShort(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
