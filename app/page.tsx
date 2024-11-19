"use client";
import { getLocale } from "@/utils/get-locale";
import { getTranslations } from "@/utils/translations";
import Head from "next/head";
import Image from "next/image";
import { BiLocationPlus } from "react-icons/bi";
import { CiFacebook } from "react-icons/ci";
import { FaExternalLinkAlt, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiTiktokLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

const SocialLinksPage = () => {
  const locale = getLocale();
  const t = getTranslations(locale);

  const isRTL = locale === "ar";

  const links = [
    {
      title: t.social.twitter,
      url: "https://x.com/yadnxd?t=xESgy0TMXyGCJivzdbRQ0A&s=09",
      icon: FaXTwitter,
      description: t.descriptions.twitter,
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: t.social.linkedin,
      url: "https://www.linkedin.com/company/yadnxd/",
      icon: SlSocialLinkedin,
      description: t.descriptions.linkedin,
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: t.social.instagram,
      url: "https://www.instagram.com/yadnxd?igsh=Y2xpYzFncWVwdzY5",
      icon: FaInstagram,
      description: t.descriptions.instagram,
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: t.social.facebook,
      url: "https://www.facebook.com/profile.php?id=61551582941267&mibextid=ZbWKwL",
      icon: CiFacebook,
      description: t.descriptions.facebook,
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: t.social.tiktok,
      url: "https://www.tiktok.com/@yadnxd",
      icon: RiTiktokLine,
      description: t.descriptions.tiktok,
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: t.social.email,
      url: "mailto:info@yadnxd.com",
      icon: MdOutlineMailOutline,
      description: t.descriptions.email,
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: t.social.whatsapp,
      url: "https://wa.me/+966550513539",
      icon: FaWhatsapp,
      description: t.descriptions.whatsapp,
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: t.social.phone,
      url: "tel:+966550513539",
      icon: LuPhone,
      description: t.descriptions.phone,
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: t.social.location,
      url: "https://maps.app.goo.gl/ZMZZ8cKnNqEyAyJ66",
      icon: BiLocationPlus,
      description: t.descriptions.location,
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

      <div className="min-h-screen flex flex-col justify-between bg-[#F3F3F3] px-4">
        <div className="max-w-2xl w-full mx-auto py-8 flex flex-col items-center">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-6">
            <a className="mb-4" href="http://www.yadnxd.com" target="_blank">
              <Image src="/logo.svg" alt="YADN Logo" width={100} height={100} />
            </a>

            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4" />
          </div>

          {/* Links Section */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 w-full ${
              isRTL ? "rtl" : ""
            }`}
          >
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-between p-4 rounded-xl bg-[#E7E0E0] ${
                    link.hoverColor
                  } 
                    transition-all duration-300 shadow-sm hover:shadow-md border border-gray-100
                    transform hover:-translate-y-1 ${
                      isRTL ? "flex-row-reverse" : ""
                    }`}
                >
                  <FaExternalLinkAlt
                    className={`w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors order-3`}
                  />

                  <div
                    className={`flex-1 order-2 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    <h2 className="text-lg font-semibold text-gray-800">
                      {link.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {link.description}
                    </p>
                  </div>
                  <Icon
                    className={`w-6 h-6 text-[#ED1E78] group-hover:text-gray-800 mx-4 transition-colors order-1`}
                  />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 py-4">
          <p className="text-sm">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-gray-600">YADN</span>
            {" • "}
            <span className="text-gray-400">{t.footer.slogan}</span>
          </p>
        </footer>
      </div>
    </>
  );
};

export default SocialLinksPage;
