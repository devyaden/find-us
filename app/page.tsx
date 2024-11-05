"use client";
import Image from "next/image";
import { BiLocationPlus } from "react-icons/bi";
import {
  FaEnvelope,
  FaExternalLinkAlt,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const SocialLinksPage = () => {
  const links = [
    // {
    //   title: "Website",
    //   url: "http://www.yadnxd.com",
    //   icon: FaGlobe,
    //   description: "Discover more about our services and projects",
    //   bgColor: "bg-white",
    //   hoverColor: "hover:bg-gray-50",
    // },

    {
      title: "Twitter",
      url: "https://x.com/yadnxd?t=xESgy0TMXyGCJivzdbRQ0A&s=09",
      icon: FaTwitter,
      description: "Follow us for the latest updates and news",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "LinkedIn",
      url: "https://www.linkedin.com/company/yadnxd/",
      icon: FaLinkedin,
      description: "Connect with us professionally",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/yadnxd?igsh=Y2xpYzFncWVwdzY5",
      icon: FaInstagram,
      description: "Get a glimpse behind the scenes of YADN",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61551582941267&mibextid=ZbWKwL",
      icon: FaFacebook,
      description: "Follow us on Facebook",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "TikTok",
      url: "https://www.tiktok.com/@yadnxd",
      icon: FaTiktok,
      description: "Watch our latest TikTok videos",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "Mail",
      url: "mailto:info@yadnxd.com",
      icon: FaEnvelope,
      description: "Contact us via email",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "WhatsApp",
      url: "https://wa.me/+966550513539",
      icon: FaWhatsapp, // Use an appropriate icon for WhatsApp if desired
      description: "Chat with us on WhatsApp",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "Phone",
      url: "tel:+966550513539",
      icon: FaPhone,
      description: "Call us",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
    {
      title: "Location",
      url: "https://maps.app.goo.gl/ZMZZ8cKnNqEyAyJ66",
      icon: BiLocationPlus,
      description: "Find us here",
      bgColor: "bg-white",
      hoverColor: "hover:bg-gray-50",
    },
  ];

  return (
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
                <div className="flex items-center space-x-4">
                  <Icon className="w-6 h-6 text-[#ED1E78] group-hover:text-gray-800 transition-colors" />
                  <div>
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
          <span className="font-medium text-gray-600">YADN</span>
          {" • "}
          <span className="text-gray-400">Innovating the Future</span>
        </p>
      </footer>
    </div>
  );
};

export default SocialLinksPage;
