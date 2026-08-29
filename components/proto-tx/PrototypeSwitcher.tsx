"use client";

/** PROTOTYPE — throwaway. Floating variant switcher for /treatments, never ships. */

import { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const VARIANTS = [
  { key: "A", name: "Inline" },
  { key: "B", name: "Wide" },
  { key: "C", name: "Paired" },
] as const;

const HOSTS = ["microwave-contouring", "skin-booster"];

export function PrototypeSwitcher({ current }: { current: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const i = Math.max(0, VARIANTS.findIndex((v) => v.key === current));

  useEffect(() => {
    const go = (delta: number) => {
      const next = VARIANTS[(i + delta + VARIANTS.length) % VARIANTS.length].key;
      const p = new URLSearchParams(params.toString());
      p.set("variant", next);
      router.replace(`${pathname}?${p}`, { scroll: false });
    };
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      if (
        el instanceof HTMLElement &&
        (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable)
      )
        return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [i, params, pathname, router]);

  if (process.env.NODE_ENV === "production") return null;

  const href = (delta: number) => {
    const next = VARIANTS[(i + delta + VARIANTS.length) % VARIANTS.length].key;
    const p = new URLSearchParams(params.toString());
    p.set("variant", next);
    return `${pathname}?${p}`;
  };

  const other = HOSTS.find((h) => !pathname.endsWith(h)) ?? HOSTS[0];

  return (
    <div className="fixed bottom-5 left-1/2 z-[9999] -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full bg-neutral-900 px-2 py-1.5 text-white shadow-2xl ring-1 ring-white/20">
        <a
          href={href(-1)}
          className="rounded-full px-3 py-1.5 text-lg leading-none hover:bg-white/15"
          aria-label="Previous variant"
        >
          ←
        </a>
        <span className="px-3 font-mono text-xs tabular-nums">
          <strong>{VARIANTS[i].key}</strong> — {VARIANTS[i].name}
          <span className="ml-2 opacity-50">
            {i + 1}/{VARIANTS.length}
          </span>
        </span>
        <a
          href={href(1)}
          className="rounded-full px-3 py-1.5 text-lg leading-none hover:bg-white/15"
          aria-label="Next variant"
        >
          →
        </a>
        <a
          href={`/treatments/${other}?variant=${VARIANTS[i].key}`}
          className="ml-1 rounded-full bg-white/15 px-3 py-1.5 font-mono text-[11px] hover:bg-white/25"
        >
          ⇄ {other === "skin-booster" ? "skin-booster" : "microwave"}
        </a>
      </div>
      <p className="mt-1.5 text-center font-mono text-[10px] text-neutral-500">
        prototype · ← → to cycle · ⇄ swaps treatment
      </p>
    </div>
  );
}
