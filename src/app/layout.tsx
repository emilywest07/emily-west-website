import type { Metadata } from "next";
import { Inter, Literata } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteContent } from "@/content/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const literata = Literata({ variable: "--font-literata", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.siteUrl),
  title: { default: siteContent.siteTitle, template: "%s | Emily A. West" },
  description: siteContent.socialDescription,
  applicationName: "Emily A. West",
  authors: [{ name: "Emily A. West" }],
  creator: "Emily A. West",
  openGraph: { type: "website", siteName: "Emily A. West", title: siteContent.siteTitle, description: siteContent.socialDescription, images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteContent.socialImageAlt }] },
  twitter: { card: "summary_large_image", title: siteContent.siteTitle, description: siteContent.socialDescription, images: [{ url: "/opengraph-image", alt: siteContent.socialImageAlt }] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Person", name: "Emily A. West", url: siteContent.siteUrl };
  return <html lang="en" className={`${inter.variable} ${literata.variable}`}><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader/><main id="main-content">{children}</main><SiteFooter/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}/></body></html>;
}
