import type { CSSProperties } from "react";

// Brand-signature seed drift, echoing the dandelion in the Kaiteki wordmark.
// Deterministic configs (no random → no hydration mismatch). Decorative only;
// hidden under prefers-reduced-motion (globals.css).
const SEEDS: { left: string; top: string; sx: string; sy: string; dur: string; delay: string; size: string }[] = [
  { left: "8%", top: "72%", sx: "60px", sy: "-160px", dur: "11s", delay: "0s", size: "5px" },
  { left: "22%", top: "84%", sx: "90px", sy: "-220px", dur: "14s", delay: "1.5s", size: "3px" },
  { left: "40%", top: "66%", sx: "40px", sy: "-140px", dur: "10s", delay: "3s", size: "4px" },
  { left: "58%", top: "80%", sx: "110px", sy: "-200px", dur: "13s", delay: "0.8s", size: "3px" },
  { left: "73%", top: "60%", sx: "70px", sy: "-180px", dur: "12s", delay: "2.2s", size: "5px" },
  { left: "86%", top: "78%", sx: "50px", sy: "-150px", dur: "15s", delay: "4s", size: "3px" },
  { left: "50%", top: "90%", sx: "30px", sy: "-240px", dur: "16s", delay: "5s", size: "4px" },
];

export function Dandelion({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {SEEDS.map((s, i) => (
        <span
          key={i}
          className="seed"
          style={
            {
              left: s.left,
              top: s.top,
              width: s.size,
              height: s.size,
              "--sx": s.sx,
              "--sy": s.sy,
              "--seed-dur": s.dur,
              "--seed-delay": s.delay,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
