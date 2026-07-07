// Preview for SeeAllCard — the trailing "browse the full set" tile that closes a
// card grid and carries the section's "view all" link. Each export is one grid cell.
import { SeeAllCard } from "@/components/cards";

const cell: React.CSSProperties = { width: 340 };

export function ViewAllTreatments() {
  return (
    <div style={cell}>
      <SeeAllCard href="/treatments" label="View all treatments" />
    </div>
  );
}

export function AllNineLocations() {
  return (
    <div style={cell}>
      <SeeAllCard href="/locations" label="All 9 locations" />
    </div>
  );
}
