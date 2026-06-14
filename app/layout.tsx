import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://igorsmirnovconsulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Human Strategy Lab | Igor Smirnov Consulting",
  description: "Психотерапевтически информированное консультирование, парная терапия, группы и wellbeing-программы для людей и команд во Вроцлаве и онлайн.",
  keywords: [
    "relationship consulting",
    "emotional intelligence",
    "couples therapy",
    "wellbeing training",
    "psychological support",
    "burnout prevention",
    "communication training",
    "group facilitation",
    "Wrocław"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: "Human Strategy Lab | Igor Smirnov Consulting",
    description: "Психотерапевтически информированное консультирование, парная терапия, группы и wellbeing-программы для людей и команд во Вроцлаве и онлайн.",
    url: siteUrl,
    siteName: "Human Strategy Lab",
    images: [
      {
        url: "/images/igor-smirnov.jpeg",
        width: 1200,
        height: 1200,
        alt: "Igor Smirnov"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Human Strategy Lab | Igor Smirnov Consulting",
    description: "Психотерапевтически информированное консультирование, парная терапия, группы и wellbeing-программы для людей и команд во Вроцлаве и онлайн.",
    images: ["/images/igor-smirnov.jpeg"]
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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
