import type { Metadata } from "next";
import { Unbounded, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteData } from "@/data/site";

const display = Unbounded({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteData.companyName} — ${siteData.tagline}`,
  description: siteData.heroSubtitle,
  keywords: [
    "body piercing",
    "piercing",
    "perfuração",
    "ear styling",
    siteData.companyName,
  ],
  openGraph: {
    title: `${siteData.companyName} — ${siteData.tagline}`,
    description: siteData.heroSubtitle,
    images: [siteData.heroBackground],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-ink-950 font-body text-ink-100 antialiased selection:bg-volt-600">
        {children}
      </body>
    </html>
  );
}
