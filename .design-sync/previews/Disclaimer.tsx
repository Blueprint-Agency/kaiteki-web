// Preview for Disclaimer — the standing YMYL medical disclaimer rendered at the
// foot of every treatment/concern/blog page. Takes no props; the copy is fixed.
import { Disclaimer } from "@/components/Disclaimer";

const wrap: React.CSSProperties = { maxWidth: 680 };

export function Standard() {
  return (
    <div style={wrap}>
      <Disclaimer />
    </div>
  );
}
