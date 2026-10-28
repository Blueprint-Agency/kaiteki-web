// Asserts the 301 redirect map in next.config.ts (Task 5 of
// docs/superpowers/plans/2026-07-13-treatment-taxonomy-restructure.md).
//
// ponytail: a plain `import config from "../next.config.ts"` under
// `node --experimental-strip-types` throws ("__dirname is not defined in ES
// module scope") because next.config.ts references __dirname for
// turbopack.root, and Node's type-stripping runs the file as ESM. Rather than
// touching next.config.ts (that __dirname usage is needed for the real Next.js
// build) or adding a new dependency, we use the already-installed `typescript`
// devDependency to transpile the config to CommonJS at runtime — where
// __dirname is provided by Node's CJS wrapper — then execute it directly. This
// still round-trips the real file, so it fails if the redirects in
// next.config.ts drift from what's expected below.
import { readFileSync, writeFileSync, unlinkSync } from "node:fs";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { localePages } from "../content/i18n/pages.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "next.config.ts"), "utf8");
const { outputText } = ts.transpileModule(source, {
  // esModuleInterop matches tsconfig.json. Without it, next.config.ts's default
  // import of the CJS `@next/mdx` transpiles to a bare `.default` access and
  // blows up with "is not a function" before any redirect is read.
  compilerOptions: {
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
    esModuleInterop: true,
  },
});

// At the repo root, so the config's relative imports (the locale ledger)
// resolve as they do for Next.
const tmpFile = join(root, ".next.config.redirect-check.cjs");
writeFileSync(tmpFile, outputText);
let config: {
  redirects: () => Promise<
    { source: string; destination: string; permanent?: boolean; statusCode?: number }[]
  >;
};
try {
  const require = createRequire(import.meta.url);
  delete require.cache[require.resolve(tmpFile)];
  config = require(tmpFile).default;
} finally {
  unlinkSync(tmpFile);
}

// IA v2 (next.config.ts, 2026-07-18) superseded the nested
// /treatments/<category>/<device> scheme the 2026-07-13 plan proposed: that
// route was never built, so the devices live under /technology and ultherapy
// went back to being a flat treatment page. Expect what shipped.
// The /zh twin of an English path once its translation is signed, else the
// English path itself: the rule next.config.ts applies to /cn.
function zh(path: string) {
  if (localePages.zh[path]?.status !== "signed") return path;
  return path === "/" ? "/zh" : `/zh${path}`;
}

const want: Record<string, string> = {
  "/treatments/coolsculpting": "/technology/coolsculpting",
  "/treatments/onda": "/technology/onda-coolwaves",
  "/treatments/dermav": "/technology/dermav",
  "/treatments/tattoo-removal": "/concerns/tattoo-removal",
  // The legacy Chinese mirror (docs/04 §9.9, docs/15 item 4.4): the /zh twin
  // once its translation is signed, the English page until then.
  "/cn": zh("/"),
  "/cn/index.html": zh("/"),
  "/cn/aboutus.html": zh("/our-story"),
  "/cn/acne.html": zh("/concerns/acne"),
  "/cn/pico-laser-treatment.html": zh("/treatments/pico-laser"),
  "/cn/onda.html": zh("/technology/onda-coolwaves"),
  "/cn/johor-pelangi-avenue.php": zh("/locations/pelangi-johor-bahru"),
  "/cn/double-eyelid-suture-treatment.html": zh("/treatments/double-eyelid"),
  "/cn/:path*": zh("/"),
};

// /treatments/ultherapy is a live page under IA v2, so a redirect there would
// shadow it. Assert its absence rather than leaving the gap untested.
const wantNoRedirect = ["/treatments/ultherapy"];

// next.config.ts spells these `statusCode: 301`; Next only sets `permanent`
// when the rule uses that key instead, so accept either spelling of a 301.
const isPermanent = (r: { permanent?: boolean; statusCode?: number }) =>
  r.permanent === true || r.statusCode === 301;

const rules = await config.redirects();
const errs: string[] = [];
for (const [source, destination] of Object.entries(want)) {
  const r = rules.find((x) => x.source === source);
  if (!r) errs.push(`missing redirect ${source}`);
  else if (r.destination !== destination) errs.push(`${source} → ${r.destination} (want ${destination})`);
  else if (!isPermanent(r)) errs.push(`${source} not permanent (301)`);
}
for (const source of wantNoRedirect) {
  const r = rules.find((x) => x.source === source);
  if (r) errs.push(`${source} redirects to ${r.destination}, but it is a live page under IA v2`);
}
// Next matches in order, so the /cn catch-all must follow every specific /cn
// rule, and every legacy English page must have its /cn twin.
const cnRules = rules.filter((x) => x.source.startsWith("/cn"));
if (cnRules.at(-1)?.source !== "/cn/:path*") errs.push("the /cn/:path* catch-all is not the last /cn rule");
for (const r of rules.filter((x) => /^\/[a-z0-9-]+\.(html|php)$/.test(x.source) && !x.destination.startsWith("/ads/"))) {
  if (!rules.some((x) => x.source === `/cn${r.source}`)) errs.push(`no /cn twin for ${r.source}`);
}

if (errs.length) {
  console.error("✗ redirects:\n" + errs.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log(
  `✓ ${Object.keys(want).length} redirects OK, ${wantNoRedirect.length} path(s) correctly left unredirected`,
);
