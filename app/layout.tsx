import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://www.breinrock.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Breinsport — Where capital builds champions",
    template: "%s · Breinsport",
  },
  description:
    "Breinsport is a joint venture between Breinrock, an AI-driven digital neo-bank, and Ultimate Sports, an elite youth football fund — investing in sports infrastructure, academies and first teams across five continents.",
  keywords: [
    "Breinsport",
    "Breinrock",
    "Ultimate Sports",
    "sports investment",
    "youth academy",
    "football fund",
    "MNK Izola",
    "sports infrastructure",
  ],
  authors: [{ name: "Breinsport" }],
  openGraph: {
    type: "website",
    siteName: "Breinsport",
    url: SITE_URL,
    title: "Breinsport — Where capital builds champions",
    description:
      "AI-driven finance meets elite youth development. Breinsport rebuilds sports infrastructure and forges the next generation of champions.",
    images: [
      {
        url: "/brand/stadium-render.png",
        width: 1299,
        height: 617,
        alt: "Breinsport-branded stadium concept",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breinsport — Where capital builds champions",
    description:
      "AI-driven finance meets elite youth development across five continents.",
    images: ["/brand/stadium-render.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a2136",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full bg-midnight text-arctic">{children}</body>
    </html>
  );
}
