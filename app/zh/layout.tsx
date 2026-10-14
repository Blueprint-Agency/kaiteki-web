import "../globals.css";
import { RootDocument, rootMetadata } from "@/components/RootDocument";

// Chinese root layout: its own <html lang>, same shell as English (RootDocument).
// Pages under /zh exist only once signed (content/i18n/pages.ts).
export const metadata = rootMetadata("zh", "卫生部注册的医美皮肤诊所，全马 9 间分行，由 MMC 注册医生亲自评估与治疗。WhatsApp 预约免费咨询。");

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <RootDocument locale="zh">{children}</RootDocument>;
}
