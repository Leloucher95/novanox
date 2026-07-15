import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { brand, brandCssVariables } from "@/config/brand";
import { publicEnv } from "@/lib/env/public";

import "./globals.css";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: publicEnv.appUrl,
  applicationName: brand.name,
  title: {
    default: `${brand.name} | Agence de communication et création digitale`,
    template: `%s | ${brand.name}`,
  },
  description:
    "NOVANOX accompagne les entreprises dans leurs projets de communication et de création digitale au sein d’une plateforme unifiée.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: brand.name,
    title: `${brand.name} | Agence de communication et création digitale`,
    description:
      "Découvrez les services NOVANOX, soumettez votre projet et suivez sa réalisation.",
  },
  icons: {
    icon: "/brand/novanox-logo.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={inter.variable}
      lang="fr"
      style={brandCssVariables as React.CSSProperties}
    >
      <body>{children}</body>
    </html>
  );
}
