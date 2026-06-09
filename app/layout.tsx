import type { Metadata, Viewport } from "next";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { SiteNav } from "@/components/site-nav";
import { StructuredData } from "@/components/structured-data";
import { siteConfig } from "@/lib/data";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "Rana Mal Singh",
    "Software Engineer",
    "Frontend Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Next.js portfolio",
    "React portfolio",
    "TypeScript engineer",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@RanaMS999",
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0e1116" },
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <a
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[var(--foreground)] focus:px-4 focus:py-2 focus:text-[var(--background)]"
            href="#content"
          >
            Skip to content
          </a>

          <SiteNav />
          <StructuredData />

          <div className="relative">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
