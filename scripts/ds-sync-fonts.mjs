// design-sync: self-host the brand fonts the DS bundle needs.
// next/font/google injects Schibsted Grotesk + Source Serif 4 at runtime in the
// app; the standalone bundle has no next/font, so we fetch the woff2 once and
// ship @font-face via cfg.extraFonts. Outputs to .design-sync/fonts/ (committed).
//
//   node scripts/ds-sync-fonts.mjs
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, ".design-sync/fonts");
mkdirSync(outDir, { recursive: true });

// Modern-Chrome UA so Google Fonts serves variable woff2 (not ttf).
const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const FAMILIES = [
  { name: "Schibsted Grotesk", url: "https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@400..900&display=swap" },
  { name: "Source Serif 4", url: "https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,200..900&display=swap" },
];
const KEEP = new Set(["latin", "latin-ext"]); // enough for an English-first DS

const rules = [];
for (const fam of FAMILIES) {
  const css = await (await fetch(fam.url, { headers: { "User-Agent": UA } })).text();
  // Split into @font-face blocks, each preceded by a /* subset */ comment.
  const blocks = css.split(/\/\*\s*/).slice(1); // ["latin */ @font-face {...}", ...]
  for (const b of blocks) {
    const subset = b.slice(0, b.indexOf(" */")).trim();
    if (!KEEP.has(subset)) continue;
    const face = b.slice(b.indexOf("@font-face"));
    const urlMatch = face.match(/url\((https:\/\/[^)]+\.woff2)\)/);
    if (!urlMatch) continue;
    const remote = urlMatch[1];
    const slug = fam.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const file = `${slug}-${subset}.woff2`;
    const buf = Buffer.from(await (await fetch(remote, { headers: { "User-Agent": UA } })).arrayBuffer());
    writeFileSync(resolve(outDir, file), buf);
    // Rewrite the url() to the local relative path; keep unicode-range/weight.
    rules.push(face.replace(remote, `./${file}`).trim());
    console.error(`[ds-sync-fonts] ${fam.name} ${subset} -> ${file} (${(buf.length / 1024).toFixed(1)} KiB)`);
  }
}

writeFileSync(resolve(outDir, "fonts.css"), rules.join("\n\n") + "\n");
console.error(`[ds-sync-fonts] wrote ${rules.length} @font-face rule(s) to .design-sync/fonts/fonts.css`);
