import "../globals.css";
import { RootDocument, rootMetadata } from "@/components/RootDocument";

// English root layout. English is the unprefixed source tree; app/zh and app/ms
// are the other two root layouts (one per <html lang>, see RootDocument).
export const metadata = rootMetadata(
  "en",
  "MOH-licensed skin & aesthetic clinic with 9 branches across Malaysia. Book a free consultation on WhatsApp.",
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
