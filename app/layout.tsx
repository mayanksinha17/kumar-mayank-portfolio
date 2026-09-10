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

const siteUrl = "https://kumarmayank.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kumar Mayank | Data Science Student & MERN Stack Developer",
  description:
    "Portfolio of Kumar Mayank, a Data Science student and MERN Stack Developer specializing in Full Stack Development and exploring AI, Data Science, Backend Engineering, and DevOps.",
  keywords: [
    "Kumar Mayank",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Data Science Student",
    "SDE Internship",
    "React Developer",
    "Node.js Developer",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title: "Kumar Mayank | Data Science Student & MERN Stack Developer",
    description:
      "MERN Stack Developer and Data Science student building modern, practical web applications while exploring AI and DevOps.",
    url: siteUrl,
    siteName: "Kumar Mayank — Portfolio",
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Mayank | Data Science Student & MERN Stack Developer",
    description:
      "MERN Stack Developer and Data Science student building modern, practical web applications while exploring AI and DevOps.",
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
  jobTitle: "MERN Stack Developer",
  description:
    "Data Science student and MERN Stack Developer building full-stack web applications.",
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
