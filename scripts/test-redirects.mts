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

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = readFileSync(join(root, "next.config.ts"), "utf8");
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});

const tmpFile = join(root, "scripts", ".next.config.redirect-check.cjs");
writeFileSync(tmpFile, outputText);
let config: { redirects: () => Promise<{ source: string; destination: string; permanent: boolean }[]> };
try {
  const require = createRequire(import.meta.url);
  delete require.cache[require.resolve(tmpFile)];
  config = require(tmpFile).default;
} finally {
  unlinkSync(tmpFile);
}

const want: Record<string, string> = {
  "/treatments/ultherapy": "/treatments/hifu/ultherapy",
  "/treatments/coolsculpting": "/treatments/fat-freezing/coolsculpting",
  "/treatments/onda": "/treatments/microwave-contouring/onda",
  "/treatments/dermav": "/treatments/vascular-pigment-laser/dermav",
  "/treatments/tattoo-removal": "/concerns/tattoo-removal",
};

const rules = await config.redirects();
const errs: string[] = [];
for (const [source, destination] of Object.entries(want)) {
  const r = rules.find((x) => x.source === source);
  if (!r) errs.push(`missing redirect ${source}`);
  else if (r.destination !== destination) errs.push(`${source} → ${r.destination} (want ${destination})`);
  else if (!r.permanent) errs.push(`${source} not permanent (301)`);
}
if (errs.length) {
  console.error("✗ redirects:\n" + errs.map((e) => "  - " + e).join("\n"));
  process.exit(1);
}
console.log(`✓ ${Object.keys(want).length} redirects OK`);
