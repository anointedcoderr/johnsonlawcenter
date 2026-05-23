import type { Metadata, Viewport } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import JsonLd from "@/components/JsonLd";
import { site } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Johnson Law Center | Personal Injury Lawyer in Gloucester, VA",
    template: "%s | Johnson Law Center",
  },
  description:
    "Personal injury and accident representation in Gloucester, VA. Johnson Law Center helps injured clients across Gloucester, Mathews, Middlesex, and Virginia courts. Free consultations.",
  applicationName: "Johnson Law Center",
  authors: [{ name: "Johnson Law Center" }],
  keywords: [
    "personal injury lawyer",
    "Gloucester VA",
    "car accident lawyer",
    "truck accident lawyer",
    "motorcycle accident lawyer",
    "boating accident lawyer",
    "wrongful death lawyer",
    "Virginia injury attorney",
  ],
  openGraph: {
    type: "website",
    title: "Johnson Law Center | Personal Injury Lawyer in Gloucester, VA",
    description:
      "Trusted local representation for injured clients across Gloucester, Mathews, Middlesex, and Virginia courts. 40+ years experience. Free consultations.",
    url: site.url,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnson Law Center | Personal Injury Lawyer in Gloucester, VA",
    description:
      "Trusted local representation for injured clients across Gloucester, Mathews, Middlesex, and Virginia courts.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B1B2B",
  width: "device-width",
  initialScale: 1,
};

const legalServiceLd = {
  "@context": "https://schema.org",
  "@type": ["LegalService", "LocalBusiness"],
  name: site.name,
  url: site.url,
  telephone: site.phones.office.display,
  email: site.email,
  image: `${site.url}/placeholders/og-default.svg`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postal,
    addressCountry: site.address.country,
  },
  areaServed: site.serviceAreas.map((name) => ({
    "@type": "AdministrativeArea",
    name,
  })),
  priceRange: "Free consultation",
  description:
    "Personal injury and accident representation for clients across Gloucester, Mathews, Middlesex, and Virginia courts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${libre.variable}`}>
      <body className="antialiased has-mobile-cta">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCTA />
        <JsonLd data={legalServiceLd} />
      </body>
    </html>
  );
}
