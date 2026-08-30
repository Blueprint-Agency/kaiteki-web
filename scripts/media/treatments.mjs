/**
 * Treatment media facts, read by scripts/media-audit.mjs. Same shape as the concern config
 * beside it; the machinery is shared, only these facts differ.
 *
 * The classification here is more explicit than the concern one on purpose. Concern files
 * name their concern (`img_acne_*`, `pbanner-DarkEyeCircle`), so a token table covered them.
 * Treatment files name a *device or brand* (`treatments-Oligio`, `logob_quadrostar`), and the
 * device→treatment edge lives in content/data/technology.ts, not in the filename — so the
 * assignment is a table, and every entry in it is a judgement docs/13 §3 records.
 */
import { readdirSync } from "node:fs";
import { join } from "node:path";
import { uniqueKey } from "./load.mjs";

export const folders = ["2. treatments", "3. device and injectables"];
export const bucketPrefix = "treatments/";
export const publicBase = "https://cdn.kaiteki.my/treatments/";
export const groupField = "treatment";
export const manifestPath = "config/treatment-media.json";
export const docPath = "docs/13-treatment-media-inventory.md";
export const docAnchor =
  /(## 3\. Coverage matrix — 19 treatments\n\n(?:.+\n|\n)*?)\| Treatment \| banner[\s\S]*?\n\n/;

/** Row order of the matrix — by explainer count, the order docs/13 §3 publishes. */
const TREATMENTS = [
  "microwave-contouring",
  "skin-booster",
  "double-eyelid",
  "pico-laser",
  "radiofrequency",
  "fotona-4d",
  "fat-freezing",
  "resurfacing-laser",
  "bio-stimulator",
  "dermal-fillers",
  "facial-treatments",
  "microneedling",
  "muscle-stimulation",
  "vascular-pigment-laser",
  "botulinum-toxin",
  "exosome-therapy",
  "hifu",
  "ultherapy",
  "laser-hair-removal",
];

/** The five counted families. Everything else is a bucket, never a page's media. */
const FAMILIES = ["banner", "figure", "area", "steps", "logo"];

/**
 * Buckets, and why each one never uploads. A bucket is the treatment equivalent of the
 * concern audit's `~parked`: mapped for provenance, held out of the sync, keyed under
 * `parked/` so the `treatments/` prefix holds only what a page can read.
 */
const BUCKETS = {
  "~hub-cards": "concern hub card, not treatment media (docs/13 §5)",
  "~partners": "partner or brand mark, no clinical page (docs/13 §8)",
  "~devices": "already composited into public/images/technology (docs/13 §2)",
  "~shipped": "already ships from public/ (docs/13 §2)",
  "~zh": "CN duplicate, parked for /zh (docs/13 §8)",
  "~unassigned": "no treatment page reads this (docs/13 §6–§7)",
};

/**
 * Figure assignment — the by-eye table. `treatments-*` and the loose `img_*`/`info_*`/
 * `mp_service_*` explainers name a device or a brand, so each is placed by what it shows.
 * Anything absent from this table is unassigned rather than guessed.
 */
const FIGURES = {
  "treatments-OndaCoolwaveTherapy.png": "microwave-contouring",
  "treatments-SkinBooster.jpg": "skin-booster",
  "treatments-Profhilo.jpg": "skin-booster",
  "treatments-Rejuranhealer.jpg": "skin-booster",
  "img_blog_skinbooster.jpg": "skin-booster",
  "mp_service_rejuran.jpg": "skin-booster",
  "treatments-Picosure.jpg": "pico-laser",
  "treatments-Lasers.jpg": "pico-laser",
  "treatments-ProYellowLaser2.jpg": "pico-laser",
  "img_blog_premiumlaser.jpg": "pico-laser",
  "treatments-Oligio.jpg": "radiofrequency",
  // Wonderface is an RF platform (content/data/technology.ts → radiofrequency).
  "services_wonderface1.jpg": "radiofrequency",
  "services_wonderface2.jpg": "radiofrequency",
  "treatments-FotonaLaser.jpg": "fotona-4d",
  "info_fotona-4d.jpg": "fotona-4d",
  "info_fotona4d.jpg": "fotona-4d",
  "treatments-Coolsculpting.jpg": "fat-freezing",
  "body-slimming.jpg": "fat-freezing",
  "treatments-ChemicalPeel.jpg": "resurfacing-laser",
  "mp_service_retinopeel.jpg": "resurfacing-laser",
  "treatments-Radiesse.jpg": "bio-stimulator",
  "treatments-DermalFillers.jpg": "dermal-fillers",
  "treatments-Hydroglow.jpg": "facial-treatments",
  "treatments-Sylfirm.jpg": "microneedling",
  "treatments-Schwarzy.jpg": "muscle-stimulation",
  "img_vascularlesions.png": "vascular-pigment-laser",
  "treatments-facemusclerelax.png": "botulinum-toxin",
  "treatments-PRP.jpg": "exosome-therapy",
  "treatments-HIFU.jpg": "hifu",
  // An explainer graphic rather than treatment photography — docs/13 §3.1 on why
  // ultherapy is the weakest of the four HOLDs.
  "img_WhatCanUltherapyTreat.jpg": "ultherapy",
  // These two ARE the shipping hero (public/images/treatments), not a second photo.
  "treatments-Microneedling.jpg": "~shipped",
  "treatments-DoubleEyeLid.jpg": "~shipped",
  // Mesolipolysis is a fat-melting injection with no treatment page of its own.
  "treatments-Mesolipolysis.png": "~unassigned",
  // Media whose subject has no page at all (docs/13 §7).
  "img_vaginalrejuvenation.jpg": "~unassigned",
  "info_HairTransplant_BaldSpot.jpg": "~unassigned",
  "info_HairTransplant_IncreasedShredding.jpg": "~unassigned",
};

/** Banner hosts. Four subjects for nineteen pages — docs/13 §4 is the consequence. */
const BANNERS = {
  picolaser: "pico-laser",
  exosome: "exosome-therapy",
  onda: "microwave-contouring",
  hairtransplant: "~unassigned", // No treatment page. The best-covered subject in the folder.
};

/**
 * Manufacturer mark → the treatment its device powers, via content/data/technology.ts.
 * Only the marks NOT already in public/images/tech appear here; the other ten ship today.
 * Two have no technology entry at all and are read off the mark itself.
 */
const LOGOS = {
  almalasers: "laser-hair-removal",
  ellanse: "bio-stimulator",
  hydrafacial: "facial-treatments",
  juvaderm: "dermal-fillers",
  plinest: "skin-booster",
  radiesse: "bio-stimulator",
  restylane: "dermal-fillers",
  schwazy: "muscle-stimulation",
  silkpeel: "facial-treatments",
  sylfirm: "microneedling",
  // No /technology entry; placed by what the device is (docs/13 §6.4).
  oligio: "radiofrequency",
  quadrostar: "vascular-pigment-laser",
  // DensityRF has no /technology page at all — a client question, not a build task (§6.4).
  density: "~unassigned",
};

/**
 * The marks that already ship, read from the folder that ships them rather than listed
 * here. `docs/13` §3 counts a logo only where the file is *not* already in
 * `public/images/tech`, and a list would be a second copy of that folder free to drift.
 * A `logob_*` in neither this set nor LOGOS is new since the audit: it lands in
 * `~unassigned`, so it is looked at rather than quietly filed as already-shipping.
 */
const SHIPPED_LOGOS = new Set(
  // Anchored to this module, not the cwd: this runs at import time, before the caller's
  // working directory is anyone's business.
  readdirSync(join(import.meta.dirname, "../../public/images/tech")),
);

export function classify(f) {
  const name = f.name;
  // `f.path` is relative to the source folder, so the subfolder test is unprefixed.
  const inFolder = (dir) => f.path.startsWith(`${dir}/`);

  if (/CN\.[a-z]+$/.test(name)) {
    f.family = "cn";
    f.group = "~zh";
  } else if (/^DES-Process-/i.test(name)) {
    f.family = "steps";
    f.group = "double-eyelid";
  } else if (/^img_onda_/i.test(name)) {
    f.family = "area";
    f.group = "microwave-contouring";
  } else if (/^pbanner/i.test(name)) {
    f.family = "banner";
    const stem = name.slice(0, name.lastIndexOf(".")).replace(/^pbanner[-_]/i, "").replace(/[-_]sm$/i, "");
    f.group = BANNERS[stem.toLowerCase()] ?? "~unassigned";
  } else if (/^logob_/i.test(name)) {
    const brand = name.slice(6, name.lastIndexOf(".")).toLowerCase();
    f.family = "logo";
    f.group = SHIPPED_LOGOS.has(name) ? "~shipped" : (LOGOS[brand] ?? "~unassigned");
  } else if (inFolder("collabs") || /^boxbg_/i.test(name)) {
    f.family = "collab";
    f.group = "~partners";
  } else if (inFolder("logo")) {
    // Whatever else sits beside the manufacturer marks is a brand logo, ours or a partner's.
    f.family = "brand";
    f.group = "~partners";
  } else if (/^machine_/i.test(name)) {
    f.family = "device";
    f.group = "~devices";
  } else if (/^product[-_]/i.test(name)) {
    f.family = "product";
    f.group = "~devices";
  } else if (/^treatment_/i.test(name)) {
    f.family = "card";
    f.group = "~hub-cards";
  } else {
    f.family = "figure";
    f.group = FIGURES[name] ?? "~unassigned";
  }
}

/** Noise the original filenames carry that says nothing about the subject. */
const NOISE = /^(treatments[-_]|img[-_]blog[-_]|img[-_]onda[-_]|img[-_]|info[-_]|mp[-_]service[-_]|services[-_]|logob[-_])/i;

/**
 * Compound stems the source spells as one word. A filename is image SEO (docs/14, story 20)
 * and `brafat` earns nothing, so the words are split here rather than left run together.
 */
const WORDS = {
  almalasers: "alma-lasers",
  brafat: "bra-fat",
  doublechin: "double-chin",
  dullskin: "dull-skin",
  facemusclerelax: "face-muscle-relax",
  heavyjowl: "heavy-jowl",
  lovehandles: "love-handles",
  premiumlaser: "premium-laser",
  rejuranhealer: "rejuran-healer",
  saggingjawline: "sagging-jawline",
  skinbooster: "skin-booster",
  skinlaxity: "skin-laxity",
  upperarms: "upper-arms",
  vascularlesions: "vascular-lesions",
};

function kebab(stem) {
  const out = stem
    .replace(NOISE, "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([a-z])(\d)/gi, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  // The trailing digit on a second crop (`lovehandles2`) is a sequence, not part of the word.
  const [, word, seq = ""] = out.match(/^(.*?)-?(\d*)$/);
  return [WORDS[word] ?? word, seq].filter(Boolean).join("-");
}

/**
 * Original filename → the descriptive kebab-case leaf of its CDN key. Filenames are image
 * SEO; the treatment already sits in the path, so the leaf carries only the subject, and
 * the family prefix on zones and steps keeps a directory listing self-describing.
 */
function leafOf(f) {
  const name = f.name;
  const ext = name.slice(name.lastIndexOf("."));
  const stem = name.slice(0, name.lastIndexOf("."));
  if (f.family === "steps") {
    // DES-Process-03-StartProcess → step-3-start-process. The number is the information.
    const [, n, label] = stem.match(/^DES-Process-0?(\d+)-(.*)$/i);
    return `step-${n}-${kebab(label)}${ext}`;
  }
  if (f.family === "area") return `area-${kebab(stem)}${ext}`;
  if (f.family === "logo") return `logo-${kebab(stem)}${ext}`;
  return `${kebab(stem) || f.family}${ext}`;
}

/** `treatments/<slug>/` for anything a page can read; `parked/<bucket>/` for the rest. */
function prefixOf(group) {
  return group.startsWith("~") ? `parked/${group.slice(1)}` : `treatments/${group}`;
}

/**
 * Banners are named by position, not by their legacy stem: the desktop/mobile pair is
 * `banner` + `banner-sm`, matching what the concern manifest already publishes.
 */
function bannerLeaf(f) {
  const name = f.name;
  const ext = name.slice(name.lastIndexOf("."));
  return `banner${/[-_]sm\.[a-z]+$/i.test(name) ? "-sm" : ""}${ext}`;
}

export function assignKeys(files) {
  const taken = new Set();
  for (const f of files) {
    f.hold = BUCKETS[f.group];
    f.key = uniqueKey(taken, prefixOf(f.group), f.family === "banner" ? bannerLeaf(f) : leafOf(f));
  }
}

/**
 * Hand-authored emphasis in the published table: the numbers docs/13 §3 calls out in prose
 * (the fifteen zone photographs, the five-step sequence, the banner gap, the one page with
 * no photography at all). Kept here so the generator reproduces the doc byte for byte.
 */
const EMPHASIS = new Set([
  "microwave-contouring.area",
  "skin-booster.figure",
  "double-eyelid.steps",
  "pico-laser.banner",
  "exosome-therapy.banner",
  "laser-hair-removal.figure",
]);

/** Tier labels; the first row of a tier carries the bold, as the published table does. */
const TIERS = {
  go: ["✅ **GO**", "✅ GO"],
  thin: ["⚠️ GO (thin)", "⚠️ GO (thin)"],
  hold: ["⛔ **HOLD**", "⛔ HOLD"],
  exclude: ["❌ **EXCLUDE**", "❌ **EXCLUDE**"],
};

export function matrix(files) {
  const rows = TREATMENTS.map((slug) => {
    const counts = Object.fromEntries(
      FAMILIES.map((fam) => [fam, files.filter((f) => f.group === slug && f.family === fam).length]),
    );
    // The explainer test docs/11 §4 established: in-body media that gives a page something
    // to show mid-scroll. Banners and manufacturer marks explain nothing, so neither counts.
    const explainer = counts.figure + counts.area + counts.steps;
    // One asset is not zero (docs/13 §3.1): a lone photograph HOLDs, a lone logo does not
    // rescue a page with no photography, and a logo is what makes a thin page worth doing.
    const tier =
      explainer === 0 ? "exclude" : explainer > 1 ? "go" : counts.logo ? "thin" : "hold";
    return { slug, counts, explainer, tier };
  });

  const seen = new Set();
  const lines = [
    "| Treatment | banner | figure | area | steps | logo (new) | **explainer** | verdict |",
    "|---|--:|--:|--:|--:|--:|--:|---|",
    ...rows.map((r) => {
      const cells = FAMILIES.map((fam) =>
        EMPHASIS.has(`${r.slug}.${fam}`) ? `**${r.counts[fam]}**` : String(r.counts[fam]),
      );
      const first = !seen.has(r.tier);
      seen.add(r.tier);
      // The explainer column is the verdict's input, so it is bold wherever it is decisive
      // — a page with several explainers or with none. One is the ambiguous case.
      const explainer = r.explainer === 1 ? "1" : `**${r.explainer}**`;
      return `| \`${r.slug}\` | ${cells.join(" | ")} | ${explainer} | ${TIERS[r.tier][first ? 0 : 1]} |`;
    }),
  ];
  const go = rows.filter((r) => r.tier === "go" || r.tier === "thin").length;
  return { table: lines.join("\n"), summary: `${files.length} files · ${go}/19 treatments GO` };
}
