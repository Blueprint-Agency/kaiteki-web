"use client";

import { useSyncExternalStore } from "react";

// A one-second clock as an external store. The snapshot is whole seconds so it
// stays stable between React's reads within a tick; the server snapshot is null.
const subscribe = (tick: () => void) => {
  const id = setInterval(tick, 1000);
  return () => clearInterval(id);
};
const clientNow = () => Math.floor(Date.now() / 1000) * 1000;
const serverNow = () => null;

const UNITS = [
  { label: "Days", ms: 86_400_000, mod: Infinity },
  { label: "Hours", ms: 3_600_000, mod: 24 },
  { label: "Minutes", ms: 60_000, mod: 60 },
  { label: "Seconds", ms: 1_000, mod: 60 },
] as const;

/**
 * Countdown to the campaign's end. The server render shows "00" (as the
 * concept page did) and the client takes over on hydration. The heading above
 * states the end date in text, so the ticking digits are aria-hidden rather
 * than re-announced every second.
 */
export function Countdown({ endsAt, endedText }: { endsAt: string; endedText: string }) {
  const now = useSyncExternalStore<number | null>(subscribe, clientNow, serverNow);
  const diff = now === null ? null : Math.max(0, Date.parse(endsAt) - now);

  return (
    <>
      <ol aria-hidden className="mx-auto mt-8 flex max-w-md justify-center gap-2.5 sm:max-w-none sm:gap-3">
        {UNITS.map((u) => (
          <li
            key={u.label}
            className="flex min-w-0 flex-1 flex-col items-center rounded-[10px] border border-hairline bg-surface px-2 py-4 sm:w-28 sm:flex-none sm:py-5"
          >
            <span className="font-display text-4xl leading-none tabular-nums text-espresso sm:text-5xl">
              {diff === null ? "00" : String(Math.floor(diff / u.ms) % u.mod).padStart(2, "0")}
            </span>
            <span className="mt-2 text-[0.6875rem] uppercase tracking-[0.14em] text-ink-500">{u.label}</span>
          </li>
        ))}
      </ol>
      {diff === 0 && <p className="mt-5 text-sm text-ink-500">{endedText}</p>}
    </>
  );
}
