"use client";
import React, { useState } from "react";
import ConnectWallet from "./connect-wallet";
import Image from "next/image";
import Logo from "@/public/autoswappr.png";
import { X } from "lucide-react";
import menu from "@/public/menu-11.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { title: "Home", href: "#" },
    { title: "Activity", href: "#" },
    { title: "Dex", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full h-[88px] bg-[#000014CC] px-4 sm:px-5 md:px-[80px] z-20">
      <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer">
          <Image
            className="w-[100px] h-[44px] md:w-[124px] md:h-[54px]"
            src={Logo}
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 md:absolute md:left-[300px]">
          {navLinks.map((link) => (
            <li key={link.title}>
              <a
                href={link.href}
                className="text-base text-[#e7ecf0] hover:text-white transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Connect Wallet Button */}
        <div className="hidden md:flex items-center">
          <ConnectWallet />
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[94px] left-0 w-full bg-[#000014] md:hidden">
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.title} className="px-4 py-2">
                  <a
                    href={link.href}
                    className="text-base text-[#e7ecf0] hover:text-white block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="px-4 py-2">
                <ConnectWallet />
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
