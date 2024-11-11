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
  description: "نقوم في يدن بتوفير حلول لأعمالك بما يتناسب مع احتياجات شركتك والبنية الإدارية لها، ونقدم حلولاً لتتمكن من التطور والنمو بكفاءة. ",
  keywords:
    "Yadn, Al-Safar Group, business solutions, policy governance, procedure governance, service design, knowledge management, digitization, digital transformation, company growth, administrative structure, corporate development, business consulting, efficient growth, business innovation, management solutions, business policy, service management, digital services, يدن, مجموعة الصفر, حلول الأعمال, حوكمة السياسات, حوكمة الإجراءات, تصميم الخدمات, إدارة المعرفة, الرقمنة, التحول الرقمي, نمو الشركات, الهيكل الإداري, تطوير الشركات, استشارات الأعمال, النمو الفعال, الابتكار في الأعمال, حلول الإدارة, سياسات الشركات, إدارة الخدمات, الخدمات الرقمية",
  openGraph: {
    title: "يدن حاضرة على جميع منصات التواصل الاجتماعي",
    description: "ستجد هنا روابط مباشرة لجميع حساباتنا",
    url: "https://yadnxd.com",
    images: [
      {
        url: "./opengraph-image.png",
        alt: "YADN icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "يدن حاضرة على جميع منصات التواصل الاجتماعي",
    description: "With Yadn you will reach the highest levels of efficiency. | مع يدن ستصل الى أعلى مستويات الكفاءة. ",
    images: [
      {
        url: "./opengraph-image.png",
        alt: "YADN cc",
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
