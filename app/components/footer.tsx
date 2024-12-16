import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative flex flex-col-reverse md:flex-row justify-between items-center w-full min-h-[100px] bg-[#000014] px-4 md:px-8 lg:px-20 py-6 md:py-0 gap-6 md:gap-4 mt-[100px]">
      {/* Copyright section */}
      <div className="text-center md:text-left">
        <p className="text-sm md:text-base text-gray-600">
          copyright@Autoswappr2024
        </p>
      </div>

      {/* Social icons section */}
      <div className="flex items-center gap-12">
        <Image
          className="w-4 h-4 md:w-5 md:h-5 hover:opacity-80 cursor-pointer"
          src="git.svg"
          alt="GitHub"
          width="4"
          height="4"
        />
        <Image
          className="w-4 h-4 md:w-5 md:h-5 hover:opacity-80 cursor-pointer"
          src="telegram.svg"
          alt="Telegram"
          width="4"
          height="4"
        />
        <Image
          className="w-4 h-4 md:w-5 md:h-5 hover:opacity-80 cursor-pointer"
          src="x.svg"
          alt="X (Twitter)"
          width="4"
          height="4"
        />
      </div>

      {/* Navigation section */}
      <div className="flex flex-row items-center gap-4 md:gap-8">
        <p className="text-sm md:text-base hover:opacity-80 cursor-pointer">
          Team
        </p>
        <p className="text-sm md:text-base hover:opacity-80 cursor-pointer">
          Documentation
        </p>
      </div>
    </footer>
  );
};

export default Footer;
