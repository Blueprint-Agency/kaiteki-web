import "./globals.css";
import type { Metadata } from "next";
import { RootDocument } from "@/components/RootDocument";
import { NotFoundView } from "@/components/NotFoundView";

// URLs that match no route at all. There are three root layouts (one per
// <html lang>), so there is no single layout for Next to compose a 404 from;
// this renders the English shell around the shared 404 body.
export const metadata: Metadata = {
  title: "Page not found | Kaiteki Skin Aesthetic Clinic",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <RootDocument locale="en">
      <NotFoundView />
    </RootDocument>
  );
}
