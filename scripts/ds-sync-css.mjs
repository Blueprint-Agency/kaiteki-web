// design-sync: compile the app's Tailwind v4 stylesheet into a static CSS file
// the design-sync converter can ship. The converter can't run Tailwind, so
// without this every component would render with only browser-default styles.
//
// Because the shipped styles.css is STATIC (designs receive it, they don't run
// Tailwind JIT), only classes present at compile time work. So besides the
// app's own classes (auto-scanned), we safelist a bounded set of common layout/
// spacing/type utilities (+ responsive variants) via an @source content file,
// so the design agent can lay out freely on-brand.
//
// Output: .design-sync/.cache/ds-compiled.css  (pointed at by cfg.cssEntry)
// Re-run before the converter on every (re)sync — wired as cfg.buildCmd.
//
//   node scripts/ds-sync-css.mjs
import postcss from "postcss";
import tailwind from "@tailwindcss/postcss";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const input = resolve(root, "app/globals.css");
const outDir = resolve(root, ".design-sync/.cache");
const safelistFile = resolve(outDir, "ds-safelist.html");
const outFile = resolve(outDir, "ds-compiled.css");

// ── Safelist ─────────────────────────────────────────────────────────────
const R = ["", "sm:", "md:", "lg:", "xl:"]; // responsive variants
const withR = (arr) => arr.flatMap((c) => R.map((v) => v + c));

const spacingVals = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "5", "6", "7", "8", "10", "12", "14", "16", "20", "24", "28", "32"];
const spacingProps = ["p", "px", "py", "pt", "pr", "pb", "pl", "m", "mx", "my", "mt", "mr", "mb", "ml", "gap", "gap-x", "gap-y", "space-x", "space-y"];
const nums = [1, 2, 3, 4, 5, 6, 12];

// Base set (non-responsive) — the full toolkit.
const base = [
  // display
  "flex", "inline-flex", "grid", "inline-grid", "block", "inline-block", "inline", "hidden", "contents", "table", "flow-root",
  // flexbox
  "flex-row", "flex-row-reverse", "flex-col", "flex-col-reverse", "flex-wrap", "flex-nowrap", "flex-1", "flex-auto", "flex-initial", "flex-none", "grow", "grow-0", "shrink", "shrink-0",
  // alignment
  "items-start", "items-center", "items-end", "items-baseline", "items-stretch",
  "justify-start", "justify-center", "justify-end", "justify-between", "justify-around", "justify-evenly",
  "self-auto", "self-start", "self-center", "self-end", "self-stretch",
  "content-start", "content-center", "content-between", "place-items-center", "place-content-center",
  // grid
  ...nums.map((n) => `grid-cols-${n}`), ...[1, 2, 3, 4].map((n) => `grid-rows-${n}`),
  ...[1, 2, 3, 4, 5, 6, "full"].map((n) => `col-span-${n}`), ...[1, 2, 3, 4].map((n) => `row-span-${n}`),
  "auto-cols-fr", "auto-rows-fr", "grid-flow-row", "grid-flow-col",
  // spacing
  ...spacingProps.flatMap((p) => spacingVals.map((v) => `${p}-${v}`)),
  "mx-auto", "my-auto", "ml-auto", "mr-auto",
  // sizing
  "w-full", "w-auto", "w-fit", "w-screen", "w-min", "w-max", "w-1/2", "w-1/3", "w-2/3", "w-1/4", "w-3/4", "w-1/5", "w-4/5",
  "h-full", "h-auto", "h-fit", "h-screen", "h-px", "min-h-screen", "min-h-full", "min-h-0", "min-w-0",
  ...["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "full", "prose", "none"].map((s) => `max-w-${s}`),
  // type
  ...["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl"].map((s) => `text-${s}`),
  "font-sans", "font-serif", "font-mono",
  "font-thin", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold",
  "text-left", "text-center", "text-right", "text-justify",
  "leading-none", "leading-tight", "leading-snug", "leading-normal", "leading-relaxed", "leading-loose",
  "tracking-tighter", "tracking-tight", "tracking-normal", "tracking-wide", "tracking-wider", "tracking-widest",
  "uppercase", "lowercase", "capitalize", "normal-case", "truncate", "text-balance", "text-pretty", "italic", "not-italic",
  "underline", "no-underline", "line-through", "antialiased",
  ...[1, 2, 3, 4, 5, 6].map((n) => `line-clamp-${n}`),
  // radius
  "rounded", "rounded-none", "rounded-sm", "rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl", "rounded-3xl", "rounded-full",
  "rounded-t-lg", "rounded-b-lg", "rounded-t-xl", "rounded-b-xl",
  // position
  "relative", "absolute", "fixed", "sticky", "static", "inset-0", "inset-x-0", "inset-y-0", "top-0", "right-0", "bottom-0", "left-0",
  "z-0", "z-10", "z-20", "z-30", "z-40", "z-50",
  // overflow
  "overflow-hidden", "overflow-auto", "overflow-scroll", "overflow-visible", "overflow-x-auto", "overflow-y-auto", "overflow-x-hidden", "overflow-y-hidden",
  // borders
  "border", "border-0", "border-2", "border-t", "border-r", "border-b", "border-l", "border-x", "border-y", "divide-x", "divide-y",
  // media / effects
  "aspect-square", "aspect-video", "aspect-auto", "object-cover", "object-contain", "object-center", "object-top", "object-bottom",
  "shadow-sm", "shadow", "shadow-md", "shadow-lg", "shadow-xl", "shadow-2xl", "shadow-none",
  "opacity-0", "opacity-40", "opacity-50", "opacity-60", "opacity-70", "opacity-75", "opacity-80", "opacity-90", "opacity-100",
  "transition", "transition-all", "transition-colors", "transition-transform", "transition-opacity",
  "duration-150", "duration-200", "duration-300", "ease-in", "ease-out", "ease-in-out",
];

// Responsive set (curated — the utilities you actually make responsive).
const responsive = withR([
  "flex", "grid", "block", "inline-block", "hidden", "flex-row", "flex-col",
  "items-start", "items-center", "items-end", "justify-start", "justify-center", "justify-between",
  ...nums.map((n) => `grid-cols-${n}`),
  ...[1, 2, 3, 4].map((n) => `col-span-${n}`),
  ...["2", "3", "4", "5", "6", "8", "10", "12"].map((v) => `gap-${v}`),
  ...["2", "4", "6", "8"].flatMap((v) => [`px-${v}`, `py-${v}`, `p-${v}`]),
  ...["4", "6", "8", "10", "12", "16", "20", "24"].map((v) => `py-${v}`),
  "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl",
  "text-left", "text-center",
  "w-full", "w-auto", "w-1/2", "w-1/3",
  "max-w-md", "max-w-lg", "max-w-xl", "max-w-2xl", "max-w-3xl", "max-w-4xl", "max-w-5xl", "max-w-6xl",
]);

const safelist = [...new Set([...base, ...responsive])];
mkdirSync(outDir, { recursive: true });
writeFileSync(safelistFile, safelist.join(" "));

// ── Compile ──────────────────────────────────────────────────────────────
const css =
  readFileSync(input, "utf8") + `\n@source "${safelistFile.replaceAll("\\", "/")}";\n`;
const result = await postcss([tailwind()]).process(css, { from: input, to: outFile });

// next/font defines these face vars at runtime on <html>; the bundle has no
// next/font, so define them here (self-hosted @font-face ships via cfg.extraFonts).
const faceVars = `
/* design-sync: brand font faces (next/font sets these at runtime in the app) */
:root {
  --font-display-face: "Schibsted Grotesk", ui-sans-serif, system-ui, sans-serif;
  --font-serif-face: "Source Serif 4", ui-serif, Georgia, "Times New Roman", serif;
}
`;

writeFileSync(outFile, result.css + "\n" + faceVars);
console.error(`[ds-sync-css] wrote ${outFile} (${(result.css.length / 1024).toFixed(1)} KiB, ${safelist.length} safelisted utilities)`);
