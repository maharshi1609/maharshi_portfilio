import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import { seo, site, siteUrl } from "@/data/site";
import { jsonLd } from "@/lib/jsonld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${site.name}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  authors: [{ name: site.name, url: `${siteUrl}/` }],
  creator: site.name,
  publisher: site.name,
  applicationName: `${site.name} — Portfolio`,
  category: "technology",
  alternates: {
    // Canonical placeholder — resolves against NEXT_PUBLIC_SITE_URL.
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Maharshi",
    lastName: "Patel",
    username: "maharshipatel",
    title: seo.title,
    description: seo.description,
    url: `${siteUrl}/`,
    siteName: `${site.name} — ${site.role}`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070e" },
    { media: "(prefers-color-scheme: light)", color: "#f5f8fc" },
  ],
};

/**
 * Runs before paint: marks the document as script-enabled (so reveal
 * animations only hide content they can bring back) and restores the stored
 * theme without a flash.
 *
 * Dark is the designed default; light is opt-in via the toggle, so the OS
 * preference is deliberately not consulted here.
 */
const BOOT_SCRIPT = `(function(){var d=document.documentElement;d.classList.add("js");try{if(localStorage.getItem("mp-theme")==="light"){d.classList.add("light")}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: BOOT_SCRIPT }} />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-accent-fg"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          // Structured data for Person, WebSite, ProfilePage and project list.
          // `<` is escaped so no string in the graph can close this tag.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
