// Preview for ReviewByline — the "Medically reviewed by" trust byline on every
// YMYL page. Doctors are real clinic physicians (content/data/doctors.ts). The
// MMC registration number is a sample: real MMC numbers are a pending client
// data dependency, so the value below is illustrative only.
import { ReviewByline } from "@/components/Ledger";

const wrap: React.CSSProperties = { maxWidth: 460 };

export function WithRegistration() {
  return (
    <div style={wrap}>
      <ReviewByline
        doctorName="Dr Chew Yuhhui"
        mmc="MMC 00000 (sample)"
        date="20 June 2026"
      />
    </div>
  );
}

export function WithoutRegistration() {
  return (
    <div style={wrap}>
      <ReviewByline doctorName="Dr Jessie Lim Jia Min" date="20 June 2026" />
    </div>
  );
}
