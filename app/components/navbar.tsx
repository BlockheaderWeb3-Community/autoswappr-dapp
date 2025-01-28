"use client";
import React, { useState } from "react";
import WalletBar from "./WalletBar";
import Image from "next/image";
import { X } from "lucide-react";
import menu from "@/public/menu-11.svg";
import MobileMenu from "./mobile-menu";
import { createPortal } from "react-dom";
import LockBodyScroll from "./lock-body-scroll";
import { useAccount } from "@starknet-react/core";
// import Link from "next/link";
// import { TetherLogo } from "@/assets/general";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { address } = useAccount();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "AutoSwappr", href: "/" },
    { title: "Activity", href: "/activity-log" },
    { title: "Dex", href: "/dex" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#080B11] bg-opacity-80 backdrop-blur-sm px-6 md:px-[80px] z-20 py-5 md:py-[14px] flex items-center justify-between">
      <LockBodyScroll lock={isMenuOpen} />
      {isMenuOpen &&
        createPortal(
          <MobileMenu
            navLinks={navLinks}
            closeMenu={() => setIsMenuOpen(false)}
          />,
          document.body
        )}
      <div className="flex items-center gap-x-[137px]">
        {/* Logo */}
        <button
          className="flex items-center cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <img
            src="/auto-swappr-logo.png"
            className="w-[150px] hidden md:inline-block"
            alt=""
          />
          <img
            src="/auto-swappr-logo-icon.svg"
            className="md:hidden inline-block w-[24px]"
            alt=""
          />
        </button>

        {/* Desktop Navigation */}
        {address && (
          <ul className="hidden md:flex items-center gap-6 md:left-[300px]">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className=" text-[#e7ecf0] text-sm md:text-lg  hover:text-white transition-colors"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Connect Wallet Button */}
      <div className="hidden md:flex items-center">
        <WalletBar />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 text-white"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X size={24} />
        ) : (
          <Image src={menu} alt="menu icon" width={24} height={24} />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
