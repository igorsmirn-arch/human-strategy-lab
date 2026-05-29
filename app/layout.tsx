import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const siteUrl = "https://igorsmirnovconsulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Human Strategy Lab | Igor Smirnov Consulting",
  description: "Strategic consulting, coaching and relationship support in Wrocław and online.",
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "Human Strategy Lab | Igor Smirnov Consulting",
    description: "Strategic consulting, coaching and relationship support in Wrocław and online.",
    url: siteUrl,
    siteName: "Human Strategy Lab",
    images: [
      {
        url: "/images/founder-portrait-placeholder.png",
        width: 1200,
        height: 1600,
        alt: "Human Strategy Lab founder portrait"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Strategy Lab | Igor Smirnov Consulting",
    description: "Strategic consulting, coaching and relationship support in Wrocław and online.",
    images: ["/images/founder-portrait-placeholder.png"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${manrope.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
