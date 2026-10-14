import "../globals.css";
import { RootDocument, rootMetadata } from "@/components/RootDocument";

// Malay root layout: its own <html lang>, same shell as English (RootDocument).
// Pages under /ms exist only once signed (content/i18n/pages.ts).
export const metadata = rootMetadata("ms", "Klinik kulit dan estetik berlesen KKM dengan 9 cawangan di seluruh Malaysia. Tempah konsultasi percuma di WhatsApp.");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="ms">{children}</RootDocument>;
}
