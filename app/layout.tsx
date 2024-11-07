import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
//import favicon from './favicon.ico'
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

export const metadata: Metadata = {
  title: "تواصل معنا",
  description: "تواصل مع يدن",
  keywords:
    "YADN, تواصل اجتماعي, تويتر, لينكد إن, إنستغرام, فيسبوك, تيك توك, واتساب, البريد الإلكتروني",
  openGraph: {
    title: "تابع YADN على وسائل التواصل الاجتماعي",
    description:
      "احصل على روابط مباشرة لجميع حساباتنا الاجتماعية وتواصل معنا عبر مختلف المنصات.",
    url: "https://yadnxd.com",
    images: [
      {
        url: "https://raw.githubusercontent.com/devyaden/find-us/refs/heads/main/app/favicon.ico",
        alt: "YADN Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تابع YADN على وسائل التواصل الاجتماعي",
    description: "تواصل معنا عبر منصاتنا الاجتماعية المختلفة.",
    images: [
      {
        url: "https://raw.githubusercontent.com/devyaden/find-us/refs/heads/main/app/favicon.ico",
        alt: "YADN Logo",
      },
    ],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
