import type { Metadata } from "next";
import { Geist, Geist_Mono, DotGothic16 } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dotGothic = DotGothic16({
  weight: "400",
  variable: "--font-dot-gothic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "遊宴技研 | YUENGI-KEN - テクノロジーで遊びと賑わいを開発する",
  description:
    "遊宴技研（YUENGI-KEN）は、テクノロジーで遊びと賑わいを開発する活動体です。体験型インスタレーション、テクノロジー遊具の発明、宴の場の体験設計を通じて、人が集まって遊ぶことの可能性を拡張します。",
  openGraph: {
    title: "遊宴技研 | YUENGI-KEN - テクノロジーで遊びと賑わいを開発する",
    description:
      "テクノロジーで遊びと賑わいを開発する活動体。体験型インスタレーション、テクノロジー遊具の発明、宴の場の体験設計。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dotGothic.variable} antialiased`}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
