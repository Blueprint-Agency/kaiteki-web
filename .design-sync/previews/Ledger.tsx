// Preview for Ledger — the signature clinical "record" of verifiable facts
// (mono label + value rows) shown on treatment pages. Each export is one cell
// with a realistic, MAB-compliant fact set (no outcome guarantees; time and
// downtime hedged; KKLIU shown as a sample pending real MAB approval).
import { Ledger } from "@/components/Ledger";

const wrap: React.CSSProperties = { maxWidth: 680 };

export function PicoLaser() {
  return (
    <div style={wrap}>
      <Ledger
        rows={[
          { label: "Treatment area", value: "Face, neck or targeted spots" },
          { label: "Session time", value: "About 20–30 minutes" },
          { label: "Anaesthetic", value: "Topical numbing cream, if needed" },
          { label: "Downtime", value: "Minimal; mild redness may occur" },
          { label: "Course", value: "Several sessions; individual to you" },
          { label: "Device", value: "PicoSure picosecond laser" },
          { label: "Advertising approval", value: "KKLIU 0000/2026 (sample)" },
        ]}
      />
    </div>
  );
}

export function SkinBooster() {
  return (
    <div style={wrap}>
      <Ledger
        rows={[
          { label: "Treatment area", value: "Face, under-eyes or hands" },
          { label: "Session time", value: "About 30–45 minutes" },
          { label: "Anaesthetic", value: "Topical numbing cream applied first" },
          { label: "Downtime", value: "Possible small bumps or bruising" },
          { label: "Course", value: "A short course is common; assessed individually" },
          { label: "Advertising approval", value: "KKLIU 0000/2026 (sample)" },
        ]}
      />
    </div>
  );
}
