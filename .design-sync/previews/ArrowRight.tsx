// Preview for ArrowRight — the forward/CTA affordance icon (1.5px stroke,
// 24px grid). Each export is one review cell: large glyph, size ramp, two tones.
import { ArrowRight } from "@/components/icons";

const ESPRESSO = "#493628";
const ACCENT = "#8a6a4f";
const SURFACE = "#faf7f2";
const BORDER = "#e7ddd0";
const INK = "#6f6152";

const surface: React.CSSProperties = {
  background: SURFACE,
  border: `1px solid ${BORDER}`,
  borderRadius: 16,
  padding: 40,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const col: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 12,
};

export function Large() {
  return (
    <div style={{ ...surface, color: ESPRESSO }}>
      <ArrowRight size={48} />
    </div>
  );
}

export function SizeRamp() {
  return (
    <div style={{ ...surface, gap: 44, color: ESPRESSO }}>
      {[16, 24, 32, 48].map((s) => (
        <div key={s} style={col}>
          <ArrowRight size={s} />
          <span style={{ fontSize: 12, color: INK }}>{s}px</span>
        </div>
      ))}
    </div>
  );
}

export function TwoTones() {
  return (
    <div style={{ ...surface, gap: 48 }}>
      <div style={{ ...col, color: ESPRESSO }}>
        <ArrowRight size={40} />
        <span style={{ fontSize: 12, color: INK }}>Espresso</span>
      </div>
      <div style={{ ...col, color: ACCENT }}>
        <ArrowRight size={40} />
        <span style={{ fontSize: 12, color: INK }}>Accent</span>
      </div>
    </div>
  );
}
