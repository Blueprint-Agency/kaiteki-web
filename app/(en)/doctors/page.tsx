import { DoctorsHub, doctorsHubMeta } from "@/components/DoctorPages";

export const metadata = doctorsHubMeta("en");

export default function DoctorsHubPage() {
  return <DoctorsHub locale="en" />;
}
