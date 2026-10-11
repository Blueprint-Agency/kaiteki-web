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
    .replace(/(?<!\\)[*_`]/g, "")
    // Backslash escapes (the legacy import escapes { } < for MDX).
    .replace(/\\([\\`*_{}[\]()<>#+\-.!|])/g, "$1")
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
  // github-slugger suffixes repeats ("faq", "faq-1", …) across every heading
  // level, so count all of them, including the ones the contents leaves out.
  const seen = new Map<string, number>();
  let inFence = false;

  for (const line of raw.split(/\r?\n/)) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const m = /^(#{2,6})\s+(.+?)\s*#*\s*$/.exec(line);
    if (!m) continue;

    const text = plainText(m[2]);
    const base = headingId(text);
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    if (m[1].length > 3) continue;
    headings.push({ id: n ? `${base}-${n}` : base, text, level: m[1].length as 2 | 3 });
  }

  return headings;
}

// Date formatting lives in lib/post-date.ts so client components (the blog
// search) can use it without pulling node:fs into the browser bundle.
export { formatPostDate, formatPostDateShort } from "./post-date";
