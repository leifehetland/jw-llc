import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Self-hosted via next/font: no extra network round-trip at runtime, no layout shift.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://jameswilliamsllc.com";
const title = "James Williams, LLC | General Contracting in Metro Atlanta";
const description =
  "James Williams, LLC offers general contracting and home remodeling built on 30+ years of experience serving Metro Atlanta. Kitchens, bathrooms, additions, and whole-home renovations.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | James Williams, LLC",
  },
  description,
  manifest: "/site.webmanifest",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "James Williams, LLC",
    title,
    description,
    images: [
      { url: "/logo/jw-full.png", width: 1056, height: 922, alt: "James Williams, LLC" },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/logo/jw-full.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#3a5a2c",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
