import React from "react";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export const footerIcons = [
  {
    icons: FiGithub,
    path: "https://github.com/BlockheaderWeb3-Community/autoswappr-dapp",
  },
  { icons: FaTelegramPlane, path: "https://t.co/yFNm0juRkX" },
  { icons: FaXTwitter, path: "https://twitter.com/auto_swappr" },
];

export const footerLinks: { name: string; path: string }[] = [
  { name: "Team", path: "#" },
  { name: "Documentation", path: "/documentation" },
  { name: "Contact Support", path: "/help-center" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col-reverse md:flex-row justify-between items-center bg-[#010409] px-4 md:px-8 lg:px-20 py-4 md:py-6 gap-4 md:gap-4 border-t-[#2C3035] border-t-[1px]">
      <p className="text-xs md:text-sm text-[#DCDFE1] text-center md:text-left">
        &copy; Autoswappr {new Date().getFullYear()}
      </p>

      <div className="flex flex-row items-center gap-4 md:gap-6">
        {footerLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className="text-xs md:text-sm hover:opacity-80 cursor-pointer text-[#7E8489]"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-7 px-[34px]">
        {footerIcons.map((icon) => (
          <Link
            key={icon.path}
            href={icon.path}
            className="text-sm md:text-xl hover:opacity-80 cursor-pointer text-white"
          >
            <icon.icons />
          </Link>
        ))}
      </div>
    </footer>
  );
}
