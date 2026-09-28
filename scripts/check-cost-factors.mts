/**
 * check:cost — keeps prices out of every "What affects the cost" block
 * (`docs/15` item 2.4).
 *
 * The client settled this on 2026-09-20: no figure, no range, no `Offer`
 * schema, anywhere. `costFactors` lists what moves the price (area, sessions,
 * device, combination) and nothing else. This fails the build if a currency
 * string gets into one, on any page type that carries the block.
 *
 * It checks the structured block only. Blog posts are out of scope: they are
 * editorial, reviewed per post, and some discuss market price ranges on
 * purpose.
 */
import { technology } from "../content/data/technology.ts";
import { treatments } from "../content/data/treatments.ts";
import { concerns } from "../content/data/concerns.ts";

type Cost = { intro: string; factors: string[]; outro?: string } | undefined;

/** Anything that reads as a price. Plain numbers ("three sessions", "4.5 mm")
 *  are allowed: a count or a depth is a factor, a currency amount is not. */
const CURRENCY: [RegExp, string][] = [
  [/\bRM\s*\d/i, "RM amount"],
  [/\bRM\b/, "RM"],
  [/\bMYR\b/i, "MYR"],
  [/\bringgit\b/i, "ringgit"],
  [/\b(USD|SGD|EUR|GBP)\b/i, "foreign currency code"],
  [/[$€£¥]/, "currency symbol"],
  [/\bsen\s*\d|\d\s*sen\b/i, "sen amount"],
];

// Guard the patterns themselves: each must catch its example and none may flag
// ordinary factor copy. Cheap, and it stops a later edit silently loosening one.
const MUST_FLAG = ["from RM1,500", "RM 800 per area", "MYR 2000", "2,000 ringgit", "$500", "USD 300", "50 sen"];
const MUST_PASS = [
  "The number of shots or lines delivered.",
  "Approximately 1.5 mm in the superficial dermis.",
  "A course of around three sessions spaced four to six weeks apart.",
  "Pricing is discussed at consultation rather than quoted online.",
  "Single-use consumable needle tips.",
];
const hit = (s: string) => CURRENCY.find(([re]) => re.test(s))?.[1];
for (const s of MUST_FLAG) if (!hit(s)) throw new Error(`check:cost pattern gap: "${s}" was not flagged`);
for (const s of MUST_PASS) if (hit(s)) throw new Error(`check:cost false positive on "${s}" (${hit(s)})`);

const clusters: Record<string, readonly { slug: string; costFactors?: Cost }[]> = {
  technology,
  treatments,
  concerns,
};

const failures: string[] = [];
let blocks = 0;

for (const [name, items] of Object.entries(clusters)) {
  for (const item of items) {
    const c = item.costFactors;
    if (!c) continue;
    blocks++;
    if (!c.factors.length) failures.push(`${name}/${item.slug}: costFactors has no factors`);
    const fields: [string, string][] = [
      ["intro", c.intro],
      ...c.factors.map((f, i): [string, string] => [`factors[${i}]`, f]),
      ...(c.outro ? [["outro", c.outro] as [string, string]] : []),
    ];
    for (const [field, text] of fields) {
      const why = hit(text);
      if (why) failures.push(`${name}/${item.slug} ${field}: ${why} in "${text}"`);
    }
  }
}

if (failures.length) {
  console.error(`✗ check:cost — ${failures.length} problem(s) in ${blocks} cost blocks:`);
  for (const f of failures) console.error(`  - ${f}`);
  console.error("\nCost blocks list factors only: no figure, no range, no currency (client decision, 2026-09-20).");
  process.exit(1);
}
console.log(`✓ check:cost — ${blocks} cost blocks, no currency strings.`);
