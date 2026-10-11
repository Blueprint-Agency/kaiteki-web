// Post dates are calendar dates ("2026-05-26"), which Date parses as UTC
// midnight. Formatting in UTC keeps the day the same on the server and in a
// browser west of Greenwich, so a client-rendered card never shows the day before.

/** Long-form dates in one place so cards, bylines and archives never diverge. */
export function formatPostDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Compact variant for cards, where the byline row is tight. */
export function formatPostDateShort(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}
