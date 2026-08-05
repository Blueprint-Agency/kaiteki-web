#!/usr/bin/env node
// House-style gate for /blog copy.
//
//   node scripts/check-blog-style.mjs
//
// Rule one: no em-dashes in anything a reader sees. The client flagged the first
// published post as reading AI-generated, and the em-dash is the most visible
// tell. En-dashes in numeric ranges (10–15%) are correct typography and stay.
//
// This only catches the mechanical half. The cadence half — varied sentence
// length, first-person clinical voice, local grounding — is a judgement call
// that no regex settles, so it stays with whoever writes and reviews the post.
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(fileURLToPath(import.meta.url), "../..");
const EM_DASH = /—/;

/** Reader-facing string fields in the typed post metadata. */
const META_FIELDS = ["title", "seoTitle", "description", "imageAlt", "leadAnswer"];

const errors = [];

// 1. MDX bodies — every line is reader-facing.
const blogDir = path.join(root, "content", "blog");
for (const file of readdirSync(blogDir).filter((f) => f.endsWith(".mdx"))) {
  const lines = readFileSync(path.join(blogDir, file), "utf8").split(/\r?\n/);
  lines.forEach((line, i) => {
    if (EM_DASH.test(line)) errors.push(`content/blog/${file}:${i + 1}  ${line.trim().slice(0, 90)}`);
  });
}

// 2. Post metadata. Code comments are not reader-facing, so only the declared
//    string fields are checked, not the whole file.
const dataPath = path.join(root, "content", "data", "blog.ts");
const data = readFileSync(dataPath, "utf8");
for (const field of META_FIELDS) {
  const re = new RegExp(`\\b${field}\\s*:\\s*(?:\\n\\s*)?"((?:[^"\\\\]|\\\\.)*)"`, "g");
  for (const m of data.matchAll(re)) {
    if (!EM_DASH.test(m[1])) continue;
    const line = data.slice(0, m.index).split("\n").length;
    errors.push(`content/data/blog.ts:${line}  ${field}: ${m[1].slice(0, 80)}`);
  }
}

// 3. The blog routes and components themselves. Headings, intro copy and alt
//    text live in JSX, so they need the same rule. Code comments are stripped
//    first: a note to a developer is not copy a patient reads.
function stripComments(src) {
  return src.replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
}

for (const dir of [path.join(root, "app", "blog"), path.join(root, "components", "blog")]) {
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) {
        walk(p);
        continue;
      }
      if (!/\.tsx?$/.test(e.name)) continue;
      stripComments(readFileSync(p, "utf8"))
        .split(/\r?\n/)
        .forEach((line, i) => {
          if (EM_DASH.test(line)) {
            errors.push(`${path.relative(root, p)}:${i + 1}  ${line.trim().slice(0, 90)}`);
          }
        });
    }
  };
  walk(dir);
}

if (errors.length) {
  console.error(`✗ blog style: ${errors.length} em-dash(es) in reader-facing copy\n`);
  console.error(errors.map((e) => `  - ${e}`).join("\n"));
  console.error("\n  Use a comma, colon, bracket or full stop instead.");
  process.exit(1);
}

console.log("✓ blog style: no em-dashes in reader-facing copy");
