import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "https://kumar-mayank-portfolio.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kumar Mayank | Full-Stack Developer & Backend Enthusiast",
  description:
    "Portfolio of Kumar Mayank — Full-Stack Developer, Backend Enthusiast, Open-Source Contributor, and B.Tech Data Science Engineering student at DSCE Bengaluru.",
  keywords: [
    "Kumar Mayank",
    "Full-Stack Developer",
    "Backend Developer",
    "Open-Source Contributor",
    "DevOps Enthusiast",
    "Data Science Engineering",
    "DSCE Bengaluru",
    "SDE Internship",
    "Node.js",
    "React",
    "FastAPI",
    "Docker",
    "FleetMind",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: "Kumar Mayank | Full-Stack Developer & Backend Enthusiast",
    description:
      "Building scalable full-stack applications, backend systems, and data-driven solutions. Open-source contributor and DevOps enthusiast.",
    url: siteUrl,
    siteName: "Kumar Mayank — Portfolio V2",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Mayank | Full-Stack Developer & Backend Enthusiast",
    description:
      "Building scalable full-stack applications, backend systems, and data-driven solutions. Open-source contributor and DevOps enthusiast.",
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kumar Mayank",
  jobTitle: "Full-Stack Developer & Backend Enthusiast",
  description:
    "B.Tech Data Science Engineering student at DSCE Bengaluru. Full-Stack Developer, Backend Enthusiast, and Open-Source Contributor.",
  url: siteUrl,
  sameAs: [site.contact.github, site.contact.linkedin],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-ink text-slate-100 selection:bg-electric/30">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-electric focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
