/**
 * Concern media facts, read by scripts/media-audit.mjs. Everything here is a decision about
 * *these* files — which folders they live in, which concern each one belongs to, and which
 * ones no page reads. The machinery that measures and emits them is in the engine.
 *
 * Classification is filename-driven with an explicit override table for the 20 files that
 * carry no concern in their name and were classified by opening them (docs/11 §3).
 */
import { uniqueKey } from "./load.mjs";

export const folders = ["1. concerns", "4. before after"];
export const bucketPrefix = "concerns/";
export const publicBase = "https://cdn.kaiteki.my/concerns/";
export const groupField = "concern";
export const manifestPath = "config/concern-media.json";
export const docPath = "docs/11-concern-media-inventory.md";
export const docAnchor = /(## 2\. Coverage matrix\n\nAfter the visual reclassification in §3\.\n\n)\|[\s\S]*?\n\n/;

/** Row order of the matrix: the 14 concerns, then the three non-concern buckets. */
const CONCERNS = [
  "acne",
  "pigmentation",
  "face-lifting",
  "face-contouring",
  "dark-eye-circles",
  "tattoo-removal",
  "body-slimming",
  "fine-lines-wrinkles",
  "hair-loss",
  "aging",
  "enlarged-pores",
  "vascular-lesions",
  "birthmark",
  "excessive-sweating",
];
const BUCKETS = ["~first-visit", "~parked", "~unassigned"];
const FAMILIES = ["banner", "figure", "slide", "illus", "photo", "results"];

/**
 * Files the manifest maps but the sync must not upload, and why. Everything else is fair
 * game; a hold is a decision, so it is recorded here rather than left to the operator.
 */
const HOLDS = {
  // Watermarked DRJESSIE.AESTHETIC — a doctor's personal account, not Kaiteki branding.
  "mp_service_other1.jpg": "ownership unconfirmed (docs/11 §3.1)",
};

/** Concern pages that ship text-only — no media wiring (docs/11 §4). */
const EXCLUDED = new Set(["enlarged-pores", "vascular-lesions", "birthmark", "excessive-sweating"]);

/**
 * Files whose filename names no concern, or names one that misleads. Every entry here is
 * a judgement made by opening the image — docs/11 §3 records the basis for each.
 */
const OVERRIDES = {
  // Results reassigned by subject (docs/11 §3).
  "mp_service_beforeafter1.jpg": "face-contouring",
  "mp_service_beforeafter4.jpg": "face-contouring",
  "mp_service_beforeafter6.jpg": "face-contouring",
  "mp_service_beforeafter2.jpg": "aging",
  "mp_service_beforeafter3.jpg": "enlarged-pores",
  "mp_service_beforeafter5.jpg": "fine-lines-wrinkles",
  "mp_service_beforeafter7.jpg": "acne",
  "mp_service_other1.jpg": "acne",
  "mp_service_other2.jpg": "acne",
  // Device handpiece in frame — treatment-in-progress, not a result.
  "mp_service_beforeafter8.jpg": "~first-visit",
  "mp_service_beforeafter9.jpg": "~first-visit",
  "mp_service_beforeafter10.jpg": "~first-visit",
  "ba_dermatological-problem_01.jpg": "acne",
  "ba_dermatological-problem_02.jpg": "dark-eye-circles",
  "ba_dermatological-problem_03.jpg": "vascular-lesions",
  "img_ba_skin_01.jpg": "acne",
  "img_ba_skin_02.jpg": "vascular-lesions",
  "img_ba_skin_03.jpg": "acne",
  "img_unevenskintexture.png": "enlarged-pores",
  "img_unevenskintone.png": "pigmentation",
  "main_feature_skin.jpg": "acne",
  "main_feature_skin2.jpg": "acne",
  "info_Scar_refinement.jpg": "acne",
  "img_ba_foreheadfiller_01.jpg": "face-contouring",
  // Double eyelid is a treatment, not one of the 14 concerns — no page wants these.
  "pbanner-DoubleEyelidSuture.jpg": "~parked",
  "pbanner-DoubleEyelidSuture_sm.jpg": "~parked",
  "pbanner-FacialTreatment.jpg": "~parked",
  "pbanner-FacialTreatment_sm.jpg": "~parked",
  "ba_doubleeyelidsuture_01.jpg": "~parked",
  "img_ba_doubleeyelidsuture_01.jpg": "~parked",
  // Subject belongs to no concern page.
  "Kaiteki-Clinic-Bukit-Jalil-Laser-Facial--750x500.jpg": "~unassigned",
  "skin-derma.jpg": "~unassigned",
  "skin-doubleeyelid.jpg": "~unassigned",
  "img_ba_noseenhancement_01.jpg": "~unassigned",
  "img_ba_noseenhancement_02.jpg": "~unassigned",
  "img_ba_lipfillers_01.jpg": "~unassigned",
  // Generic stock lifestyle shot (traveller with suitcase) — a treatment benefit, not a concern.
  "info_NoDowntime.jpg": "~unassigned",
};

/** Filename token → concern. First match wins, so longer tokens come first. */
const TOKENS = [
  ["darkeye", "dark-eye-circles"],
  ["undereyes", "dark-eye-circles"],
  ["acnescar", "acne"],
  ["acne", "acne"],
  ["pigmentation", "pigmentation"],
  ["picolaser", "pigmentation"],
  ["faciallaser", "pigmentation"],
  ["proyellow", "pigmentation"],
  ["agespot", "pigmentation"],
  ["sun-damaged", "pigmentation"],
  ["sun-induced", "pigmentation"],
  ["skin-pigment", "pigmentation"],
  ["facelifting", "face-lifting"],
  ["facetightening", "face-lifting"],
  ["skin-tightening", "face-lifting"],
  ["collagenreduction", "face-lifting"],
  ["musclechanges", "face-lifting"],
  ["thread", "face-lifting"],
  ["lifting", "face-lifting"],
  ["facecontour", "face-contouring"],
  ["facialcontouring", "face-contouring"],
  ["chinfiller", "face-contouring"],
  ["fillerchin", "face-contouring"],
  ["jawdef", "face-contouring"],
  ["jawline", "face-contouring"],
  ["cheekfillers", "face-contouring"],
  ["doublechin", "face-contouring"],
  ["tattoo", "tattoo-removal"],
  ["slimming", "body-slimming"],
  ["bodycontouring", "body-slimming"],
  ["fatmelting", "body-slimming"],
  ["mesolipolysis", "body-slimming"],
  ["cellulite", "body-slimming"],
  ["lovehandles", "body-slimming"],
  ["lowerbellypouch", "body-slimming"],
  ["brabunglesbackfat", "body-slimming"],
  ["fineline", "fine-lines-wrinkles"],
  ["finelines", "fine-lines-wrinkles"],
  ["hairtransplant", "hair-loss"],
  ["hairgrowth", "hair-loss"],
  ["hairregrowth", "hair-loss"],
  ["hairloss", "hair-loss"],
  ["fuevsfut", "hair-loss"],
  ["aging", "aging"],
  ["pores", "enlarged-pores"],
  ["profhilo", "enlarged-pores"],
  ["telangiectasia", "vascular-lesions"],
  ["telengectasia", "vascular-lesions"],
  ["vein", "vascular-lesions"],
  ["birthmark", "birthmark"],
  ["sweating", "excessive-sweating"],
  ["hormonalchanges", "acne"],
  ["inflammationacne", "acne"],
  ["sebumskindebris", "acne"],
  ["skincarehabits", "acne"],
  ["postacne", "acne"],
];

/** Which of the six families a file belongs to, from its prefix and folder. */
function familyOf(folder, name) {
  if (folder === "4. before after") return "results";
  if (/^pbanner/i.test(name)) return "banner";
  if (/^info-.*stage/i.test(name)) return "slide";
  if (/^info_/i.test(name)) return "figure";
  if (/^img_acne_/i.test(name)) return "illus";
  return "photo";
}

function concernOf(name) {
  if (OVERRIDES[name]) return OVERRIDES[name];
  const lower = name.toLowerCase();
  for (const [token, concern] of TOKENS) if (lower.includes(token)) return concern;
  return "~unassigned";
}

export function classify(f) {
  f.family = familyOf(f.folder, f.name);
  f.group = concernOf(f.name);
}

/** Noise the original filenames carry that says nothing about the subject. */
const NOISE =
  /^(pbanner[-_]|info[-_]|img[-_]ba[-_]|img[-_]|mp[-_]service[-_]|ba[-_]|skin[-_]|main[-_]feature[-_])/i;

/**
 * Original filename → the descriptive kebab-case leaf of its CDN key. Filenames are image
 * SEO; the concern already sits in the path, so the leaf carries only the subject.
 */
function leafOf(family, name, concern, seq) {
  const ext = name.slice(name.lastIndexOf("."));
  if (family === "results") {
    // The first-visit set sits in the results folder but shows a handpiece mid-treatment,
    // not an outcome — calling those files before-after would be a claim, not a filename.
    const subject = concern === "~first-visit" ? "treatment-in-progress" : "before-after";
    return `${subject}-${String(seq).padStart(2, "0")}${ext}`;
  }
  // Slides keep the stage number burned into the artwork, whatever the filename spells it.
  const stage = family === "slide" && name.match(/stage-?(\d+)/i);
  if (stage) return `stage-${stage[1]}${ext}`;
  const kebab = name
    .slice(0, name.lastIndexOf("."))
    .replace(NOISE, "")
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/([a-z])(\d)/gi, "$1-$2")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .toLowerCase()
    // Drop the concern's own words as whole tokens — the path already says them.
    .split("-")
    .filter((t) => t && !concern.replace(/^~/, "").split("-").includes(t))
    .join("-");
  // A stem that reduced to nothing but its numbering says nothing on its own.
  const subjectless = /^\d/.test(kebab) || kebab === "";
  return `${subjectless ? [family, kebab].filter(Boolean).join("-") : kebab}${ext}`;
}

/**
 * Buckets no page will ever read. They stay in the manifest for provenance, but they take
 * a `parked/` path rather than a `concerns/` one and are held out of the upload.
 * `~first-visit` is not among them: it is shared media the concern pages do render.
 */
const PARKED = new Set(["~parked", "~unassigned"]);

/** The bucket prefix a file's objects live under. */
function prefixOf(concern) {
  const leaf = concern.replace(/^~/, "");
  return PARKED.has(concern) ? `parked/${leaf}` : `concerns/${leaf}`;
}

/**
 * Banners are named by position, not by their legacy stem: each concern's desktop/mobile
 * pair is `banner{,-2}` + `{,-sm}`, paired by the stem the `_sm` suffix hangs off.
 */
function nameBanners(files) {
  const byConcern = new Map();
  for (const f of files.filter((f) => f.family === "banner")) {
    const stem = f.name
      .slice(0, f.name.lastIndexOf("."))
      .replace(/[-_]sm(?=\d*$)/i, "")
      .toLowerCase();
    if (!byConcern.has(f.group)) byConcern.set(f.group, new Map());
    const groups = byConcern.get(f.group);
    if (!groups.has(stem)) groups.set(stem, []);
    groups.get(stem).push(f);
  }
  for (const [concern, groups] of byConcern) {
    [...groups.keys()].sort().forEach((stem, i) => {
      for (const f of groups.get(stem)) {
        const sm = /[-_]sm\d*\.[a-z]+$/i.test(f.name) ? "-sm" : "";
        const ext = f.name.slice(f.name.lastIndexOf("."));
        f.key = `${prefixOf(concern)}/banner${i ? `-${i + 1}` : ""}${sm}${ext}`;
      }
    });
  }
}

/** Keys are assigned after classification: results number per concern. */
export function assignKeys(files) {
  const seq = new Map();
  const taken = new Set();
  nameBanners(files);
  for (const f of files) {
    f.hold = HOLDS[f.name] || (PARKED.has(f.group) ? "no concern page reads this" : undefined);
    if (f.key) {
      taken.add(f.key);
      continue;
    }
    const n = (seq.get(f.group + f.family) || 0) + 1;
    seq.set(f.group + f.family, n);
    f.key = uniqueKey(taken, prefixOf(f.group), leafOf(f.family, f.name, f.group, n));
  }
}

export function matrix(files) {
  const rows = [...CONCERNS, ...BUCKETS].map((concern) => {
    const counts = FAMILIES.map(
      (fam) => files.filter((f) => f.group === concern && f.family === fam).length,
    );
    return { concern, counts, total: counts.reduce((a, b) => a + b, 0) };
  });
  const verdict = (r) => {
    if (r.concern.startsWith("~")) {
      return { "~first-visit": "reassigned, see §3", "~parked": "no concern page wants these" }[r.concern] || "unresolved";
    }
    if (r.total <= 2) return "❌ **bare**";
    if (!EXCLUDED.has(r.concern)) return "ok";
    return r.counts[0] === 0 ? "⚠️ no explainers, no banner" : "⚠️ no explainers";
  };
  const lines = [
    "| Concern | banner | figure | slide | illus | photo | results | total | verdict |",
    "|---|--:|--:|--:|--:|--:|--:|--:|---|",
    ...rows.map((r) => {
      const label = EXCLUDED.has(r.concern) ? `**\`${r.concern}\`**` : `\`${r.concern}\``;
      // Bold the absences that decide the verdict: no banner, or no results at all.
      const decisive = (i) => i === 0 || i === FAMILIES.length - 1;
      const cells = r.counts.map((c, i) =>
        c === 0 && decisive(i) && EXCLUDED.has(r.concern) ? "**0**" : String(c),
      );
      return `| ${label} | ${cells.join(" | ")} | ${r.total} | ${verdict(r)} |`;
    }),
  ];
  const covered = rows.filter((r) => !r.concern.startsWith("~") && !EXCLUDED.has(r.concern)).length;
  return { table: lines.join("\n"), summary: `${files.length} files · ${covered}/14 concerns covered` };
}
