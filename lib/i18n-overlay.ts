// Locale overlay for structured page data (concerns now; treatments and devices
// later). A translation file mirrors the English record's shape, but only its
// copy is ever read: the walk below follows the ENGLISH structure and takes a
// string from the translation only where the key is copy. Slugs, image URLs,
// anchors and enums always come from English, so a translation can change
// what a page says but never what it links to or how it renders.

/** Keys whose string values are identifiers or enums, never reader-facing copy. */
export const FIXED_KEYS = new Set([
  "slug",
  "image",
  "src",
  "sm",
  "id",
  "treatments",
  "kind",
  "diagram",
  "depth",
  "focus",
  "ratio",
  "nativeWidth",
  "illustration",
  "archetype",
  "reviewedBy",
  "lastReviewed",
]);

/** Top-level keys that are fixed only at the root (nested ones are copy). */
export const FIXED_ROOT_KEYS = new Set(["group"]);

/** Every piece of copy in `x` as [path, text], in the same walk order and with
 *  the same fixed-key rules the overlay uses. */
export function copyStrings(x: unknown): [string, string][] {
  const out: [string, string][] = [];
  const walk = (v: unknown, path: string, key: string, depth: number) => {
    const fixed = FIXED_KEYS.has(key) || (depth === 1 && FIXED_ROOT_KEYS.has(key));
    if (typeof v === "string") {
      if (!fixed) out.push([path, v]);
    } else if (Array.isArray(v)) {
      v.forEach((it, i) => walk(it, `${path}[${i}]`, key, depth + 1));
    } else if (v && typeof v === "object") {
      for (const [k, w] of Object.entries(v)) walk(w, path ? `${path}.${k}` : k, k, depth + 1);
    }
  };
  walk(x, "", "", 0);
  return out;
}

export type OverlayResult<T> = {
  value: T;
  /** Dotted paths of copy the translation does not supply (English shown). */
  missing: string[];
};

export function overlay<T>(en: T, tr: unknown): OverlayResult<T> {
  const missing: string[] = [];

  function walk(e: unknown, t: unknown, path: string, key: string, depth: number): unknown {
    const fixed = FIXED_KEYS.has(key) || (depth === 1 && FIXED_ROOT_KEYS.has(key));
    if (typeof e === "string") {
      if (fixed) return e;
      if (typeof t === "string" && t.trim() !== "") return t;
      missing.push(path);
      return e;
    }
    if (Array.isArray(e)) {
      const ta = Array.isArray(t) ? t : [];
      return e.map((item, i) => walk(item, ta[i], `${path}[${i}]`, key, depth + 1));
    }
    if (e && typeof e === "object") {
      const to = t && typeof t === "object" && !Array.isArray(t) ? (t as Record<string, unknown>) : {};
      return Object.fromEntries(
        Object.entries(e as Record<string, unknown>).map(([k, v]) => [
          k,
          walk(v, to[k], path ? `${path}.${k}` : k, k, depth + 1),
        ]),
      );
    }
    return e; // numbers, booleans, null
  }

  return { value: walk(en, tr, "", "", 0) as T, missing };
}
