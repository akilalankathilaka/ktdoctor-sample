import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import LanguageProvider from "@/components/LanguageProvider";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kids & Teens Medical Group — Pediatric Care, Simplified",
  description:
    "Same-day visits, telehealth, and 25 clinics across Los Angeles — pediatric care for ages 0–21, built around how your family really lives.",
  openGraph: {
    title: "Kids & Teens Medical Group — Pediatric Care, Simplified",
    description:
      "Same-day visits, telehealth, and 25 clinics across Los Angeles — pediatric care for ages 0–21.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={hanken.variable}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
