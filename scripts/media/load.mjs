/**
 * Resolves `<type>` on the media scripts' command line to its config module and source
 * folder. Both scripts need exactly this and nothing more, so the page-type whitelist and
 * its error wording live here rather than being spelled twice and drifting apart.
 */
export async function loadMediaConfig(type) {
  if (!/^(concerns|treatments)$/.test(type ?? "")) {
    throw new Error(`unknown media type '${type}' — expected 'concerns' or 'treatments'`);
  }
  const cfg = await import(`./${type}.mjs`);
  const source = process.env.MEDIA_SOURCE;
  if (!source) throw new Error(`set MEDIA_SOURCE to the media export folder (see .env.example)`);
  return { cfg, source };
}

/**
 * A CDN key under `prefix` that nothing has taken, suffixing `-2`, `-3` on collision.
 * Two originals can reduce to the same subject — a duplicate export, a second crop
 * (`info_fotona-4d` beside `info_fotona4d`) — and silently overwriting one with the other
 * is a page losing an image nobody notices. Shared: both page types rename on upload, so
 * both can collide.
 */
export function uniqueKey(taken, prefix, leaf) {
  let key = `${prefix}/${leaf}`;
  for (let i = 2; taken.has(key); i++) {
    key = `${prefix}/${leaf.replace(/(\.[a-z]+)$/i, `-${i}$1`)}`;
  }
  taken.add(key);
  return key;
}
