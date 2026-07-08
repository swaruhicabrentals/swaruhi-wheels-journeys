import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyCTAs } from "@/components/StickyCTAs";
import { SITE } from "@/lib/site";
import { localBusinessJsonLd } from "@/lib/seo";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name}: ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.name }],
  icons: {
    icon: [
      { url: "/assets/swaruhi-travels-favicon-circular-32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/swaruhi-travels-logo-circular.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/assets/swaruhi-travels-favicon-circular-32.png",
    apple: [{ url: "/assets/swaruhi-travels-logo-circular.png", sizes: "512x512", type: "image/png" }],
  },
  openGraph: {
    siteName: SITE.name,
    title: `${SITE.name}: ${SITE.tagline}`,
    description: SITE.description,
    url: SITE.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name}: ${SITE.tagline}`,
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
    <html lang="en">
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
