// Preview for WhatsApp — the filled brand glyph used only inside the green
// conversion CTA. Cells: large glyph, size ramp, two tones, and the live
// green chip usage. The glyph fills with currentColor.
import { WhatsApp } from "@/components/icons";

const ESPRESSO = "#493628";
const ACCENT = "#8a6a4f";
const SURFACE = "#faf7f2";
const BORDER = "#e7ddd0";
const INK = "#6f6152";
const WHATSAPP_GREEN = "#0e7a55";

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
    <div style={{ ...surface, color: WHATSAPP_GREEN }}>
      <WhatsApp size={48} />
    </div>
  );
}

export function SizeRamp() {
  return (
    <div style={{ ...surface, gap: 44, color: WHATSAPP_GREEN }}>
      {[16, 24, 32, 48].map((s) => (
        <div key={s} style={col}>
          <WhatsApp size={s} />
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
        <WhatsApp size={40} />
        <span style={{ fontSize: 12, color: INK }}>Espresso</span>
      </div>
      <div style={{ ...col, color: ACCENT }}>
        <WhatsApp size={40} />
        <span style={{ fontSize: 12, color: INK }}>Accent</span>
      </div>
    </div>
  );
}

export function GreenChip() {
  return (
    <div style={surface}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          background: WHATSAPP_GREEN,
          color: "#ffffff",
          padding: "14px 22px",
          borderRadius: 999,
          fontSize: 15,
          fontWeight: 600,
        }}
      >
        <WhatsApp size={22} />
        <span>Book a FREE consultation</span>
      </div>
    </div>
  );
}
