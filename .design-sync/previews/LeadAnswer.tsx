// Preview for LeadAnswer — the answer-first "In brief" capsule shown under the
// H1 on treatment/concern/blog pages. Each export is one cell (a realistic
// question this capsule answers). Copy is MAB-compliant: cautious, no
// guarantees, consultation-gated.
import { LeadAnswer } from "@/components/LeadAnswer";

const wrap: React.CSSProperties = { maxWidth: 680 };

export function TreatmentIntro() {
  return (
    <div style={wrap}>
      <LeadAnswer>
        Pico laser is a picosecond-pulse laser treatment that delivers very
        short bursts of energy to the skin. It is commonly used for pigmentation
        concerns, uneven skin tone and tattoo removal. Suitability and the
        number of sessions vary between individuals; a consultation is required
        to assess whether it is appropriate for you.
      </LeadAnswer>
    </div>
  );
}

export function ConcernIntro() {
  return (
    <div style={wrap}>
      <LeadAnswer>
        Pigmentation refers to darker patches or uneven tone caused by excess
        melanin, and it can have several underlying triggers. A doctor assesses
        the type and likely cause before discussing whether treatments such as
        lasers or topical care may be suitable for your skin.
      </LeadAnswer>
    </div>
  );
}
