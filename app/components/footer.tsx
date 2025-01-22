import React from "react";
import Link from 'next/link'
import { IconType } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

export const footerIcon: { icons: IconType; path: string }[] = [
  { icons: FiGithub, path: "https://github.com/BlockheaderWeb3-Community/autoswappr-dapp" },
  { icons: FaTelegramPlane, path: "https://t.co/yFNm0juRkX" },
  { icons: FaXTwitter, path: "https://twitter.com/auto_swappr" },
];

export const footerDocumentation: { name: string; path: string }[] = [
    {name: 'Team', path: '#'},
    {name: 'Documentation', path: '/documentation'},
    {name: 'Contact Support', path: '/contact'},
];


const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="relative flex flex-col-reverse md:flex-row justify-between items-center w-full min-h-[100px] bg-[#02060D] px-4 md:px-8 lg:px-20 py-6 md:py-0 gap-6 md:gap-4 mt-[100px]">
      {/* Copyright section */}
      <div className="text-center md:text-left">
        <p className="text-sm md:text-base text-[#E7ECF0]">
          copyright@Autoswappr{date}
        </p>
      </div>
      {/* Navigation section */}

      <div className="flex flex-row items-center gap-4 md:gap-4">
        {footerDocumentation.map((doc, index) => (
          <div className="flex items-center gap-4">
          <Link
            key={index}
            href={doc.path}
            className="text-sm md:text-base hover:opacity-80 cursor-pointer"
          >
            {doc.name}
          </Link>
          {index !== footerDocumentation.length - 1 && <div className=" w-[3px] bg-[#1E2021] h-[12px] rounded-[8px]"></div>}

          </div>
        ))}
      </div>
      {/* Social icons section */}
      <div className="flex items-center gap-4">
        {footerIcon.map((icon, index) => (
                    <div className="flex items-center gap-4">

          <Link
            key={index}
            href={icon.path}
            className="text-sm md:text-xl hover:opacity-80 cursor-pointer"
          >
            <icon.icons />
            {/* w-4 h-4 md:w-5 md:h-5  */}
          </Link>
          {index !== footerIcon.length - 1 && <div className=" w-[3px] bg-[#1E2021] h-[12px] rounded-[8px]"></div>}

          </div>
        ))}
      </div>

      
    </footer>
  );
};

export default Footer;
