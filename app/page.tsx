"use client";
import Image from "next/image";
import { BiLocationPlus } from "react-icons/bi";
import { CiFacebook } from "react-icons/ci";
import { FaExternalLinkAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiTiktokLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";
import Head from "next/head";

const SocialLinksPage = () => {
  const links = [
    {
      title: "اكس",
      url: "https://x.com/yadnxd?t=xESgy0TMXyGCJivzdbRQ0A&s=09",
      icon: FaXTwitter,
      description: "تابعنا لأحدث الأخبار والتحديثات",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "لينكد إن",
      url: "https://www.linkedin.com/company/yadnxd/",
      icon: SlSocialLinkedin,
      description: "تواصل معنا مهنياً",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "إنستغرام",
      url: "https://www.instagram.com/yadnxd?igsh=Y2xpYzFncWVwdzY5",
      icon: FaInstagram,
      description: "اكتشف الجانب الآخر من YADN",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "فيسبوك",
      url: "https://www.facebook.com/profile.php?id=61551582941267&mibextid=ZbWKwL",
      icon: CiFacebook,
      description: "تابعنا على فيسبوك",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "تيك توك",
      url: "https://www.tiktok.com/@yadnxd",
      icon: RiTiktokLine,
      description: "شاهد آخر فيديوهاتنا على تيك توك",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "البريد الإلكتروني",
      url: "mailto:info@yadnxd.com",
      icon: MdOutlineMailOutline,
      description: "تواصل معنا عبر البريد الإلكتروني",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "واتساب",
      url: "https://wa.me/+966550513539",
      icon: FaWhatsapp,
      description: "تحدث معنا عبر واتساب",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "الهاتف",
      url: "tel:+966550513539",
      icon: LuPhone,
      description: "اتصل بنا",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "الموقع",
      url: "https://maps.app.goo.gl/ZMZZ8cKnNqEyAyJ66",
      icon: BiLocationPlus,
      description: "اعثر علينا هنا",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
  ];

  return (
    <>
      <Head>
        <title>الروابط الاجتماعية | YADN</title>
        <meta
          name="description"
          content="صفحة الروابط الاجتماعية لـ YADN، تابعنا على جميع منصات التواصل الاجتماعي لمعرفة أحدث الأخبار والتحديثات."
        />
        <meta
          name="keywords"
          content="YADN, تويتر, لينكد إن, إنستغرام, فيسبوك, تيك توك, واتساب, تواصل, البريد الإلكتروني"
        />
        <meta
          property="og:title"
          content="تابع YADN على وسائل التواصل الاجتماعي"
        />
        <meta
          property="og:description"
          content="احصل على روابط مباشرة لجميع حساباتنا الاجتماعية وتواصل معنا عبر مختلف المنصات."
        />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:url" content="https://yadnxd.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="تابع YADN على وسائل التواصل الاجتماعي"
        />
        <meta
          name="twitter:description"
          content="تواصل معنا عبر منصاتنا الاجتماعية المختلفة."
        />
        <meta name="twitter:image" content="/logo.svg" />
      </Head>

      <div className="min-h-screen flex flex-col justify-between bg-[#F3F3F3] px-4 rtl">
        <div className="max-w-2xl w-full mx-auto py-8 flex flex-col items-center">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-6">
            <a className="mb-4" href="http://www.yadnxd.com" target="_blank">
              <Image src="/logo.svg" alt="YADN Logo" width={100} height={100} />
            </a>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between p-4 rounded-xl bg-[#E7E0E0] ${link.hoverColor} 
                    transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100
                    transform hover:-translate-y-1`}
                >
                  <div className="flex items-center space-x-reverse space-x-4">
                    <Icon className="w-6 h-6 text-[#ED1E78] group-hover:text-gray-800 transition-colors" />
                    <div className="text-right">
                      <h2 className="text-lg font-semibold text-gray-800">
                        {link.title}
                      </h2>
                      <p className="text-sm text-gray-500 mt-1">
                        {link.description}
                      </p>
                    </div>
                  </div>
                  <FaExternalLinkAlt className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-4">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-600">یدن</span>
            {" • "}
            <span className="text-gray-400">ابتكار المستقبل</span>
          </p>
        </footer>
      </div>
    </>
  );
};

export default SocialLinksPage;
