import { redirect } from "next/navigation";

// /anniversary is the section root; each year's campaign lives at
// /anniversary/<year>. Until there is more than one, the root points at the
// current one. A temporary redirect, since next year's page will take over.
export default function AnniversaryIndex() {
  redirect("/anniversary/2026");
}
