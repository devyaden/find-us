import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { getLocale } from "@/utils/get-locale";
import { getTranslations } from "@/utils/translations";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = getLocale();
  const t = getTranslations(locale);

  return {
    title: t.metadata.title,
    description: t.metadata.description,
    keywords: t.metadata.keywords,
    openGraph: {
      title: t.metadata.openGraph.title,
      description: t.metadata.openGraph.description,
      url: "https://yadnxd.com",
      images: [
        {
          url: "./opengraph-image.jpj",
          alt: "YADN icon",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.metadata.twitter.title,
      description: t.metadata.twitter.description,
      images: [
        {
          url: "./opengraph-image.png",
          alt: "YADN cc",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = getLocale();

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
