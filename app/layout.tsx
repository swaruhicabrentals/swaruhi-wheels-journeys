import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCTAs } from "@/components/StickyCTAs";
import { SITE } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/seo";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} - ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.name }],
  openGraph: {
    siteName: SITE.name,
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} - ${SITE.tagline}`,
    description: SITE.description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a2545",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <StickyCTAs />
          </div>
        </Providers>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
      </body>
    </html>
  );
}
