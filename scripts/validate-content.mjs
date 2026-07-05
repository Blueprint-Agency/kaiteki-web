#!/usr/bin/env node
// Placeholder-content gate for ledger-displayed compliance data (MMC/KKLIU/entity
// registration). Kaiteki's trust thesis rests on these values reading as real and
// verifiable; a `sample`/`pending`/`xxxx` value that reaches production undermines
// it at the exact spot meant to prove it (impeccable critique, 2026-07-04).
//
// This is a first slice of the `validate:content` gate specced in docs/07 §16
// (eventually Zod schema validation + banned medical-ad words + KKLIU-expiry
// checks); those are separate, larger workstreams and out of scope here.

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(fileURLToPath(import.meta.url), "../..");

const BANNED = [/xxxx/i, /\(sample\)/i, /\bsample\b/i, /\bpending\b/i, /\bplaceholder\b/i, /\btbd\b/i];

const TARGETS = [
  { file: "lib/site.ts", fields: ["entity", "kkliu"] },
  { file: "content/data/doctors.ts", fields: ["mmc"] },
  { file: "content/data/treatments.ts", fields: ["kkliu"] },
];

function extractFieldValues(source, field) {
  const re = new RegExp(`\\b${field}\\s*:\\s*"([^"]*)"`, "g");
  return [...source.matchAll(re)].map((m) => m[1]);
}

let violations = [];

for (const { file, fields } of TARGETS) {
  const source = readFileSync(path.join(root, file), "utf8");
  for (const field of fields) {
    for (const value of extractFieldValues(source, field)) {
      const hit = BANNED.find((re) => re.test(value));
      if (hit) violations.push({ file, field, value });
    }
  }
}

if (violations.length > 0) {
  console.error(`✗ validate:content — ${violations.length} placeholder value(s) found in ledger-displayed content:\n`);
  for (const { file, field, value } of violations) {
    console.error(`  ${file} — ${field}: "${value}"`);
  }
  console.error("\nThese are real placeholders in this repo today (docs/05 §9 — pending client data), so this");
  console.error("failure is expected until the real MMC/KKLIU/registration data lands. Replace before shipping");
  console.error("to production; do not silence this check instead.");
  process.exit(1);
}

console.log("✓ validate:content — no placeholder values found in ledger-displayed content.");
