"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { url: "/", text: "Home" },
    { url: "/about", text: "About" },
    { url: "/sponsors", text: "Sponsors" },
    { url: "/faq", text: "FAQ" },
  ];

  const navLinks = links.map((link) => (
    <Link href={link.url} className={linkStyle} key={link.url}>
      {link.text}
    </Link>
  ));

  return (
    <nav className="w-screen bg-transparent text-white fixed top-0 left-0 z-50 lg:pt-4 pt-0 px-4 sm:px-6 lg:px-8 xl:px-16">
      <div className="mx-auto w-full 2xl:w-4/5">
        <div className="flex justify-between h-16">
          <div className="hidden lg:flex">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/images/geesehacksLogoTemp.png"
                alt="Logo"
                width={40}
                height={40}
              />
            </div>
          </div>
          <div className="flex space-x-4 items-center lg:hidden">
            <button
              onClick={toggleNavbar}
              className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Toggle navigation</span>
              {hamburger}
            </button>
          </div>
          {/* the right padding (pr) is used to make space for the MLH Badge. Can remove if MLH badge not used */}
          <div className="hidden lg:flex lg:space-x-4 items-center pr-36 2xl:pr-0">
            {navLinks}
            <Link
              href="/apply"
              className="px-6 py-2 bg-transparent border-2 border-white rounded-full text-white text-sm md:text-base lg:text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out"
            >
              Apply Now
            </Link>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1 flex flex-col">
            {navLinks}
            <Link href="/apply" className={linkStyle}>
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

const linkStyle = "px-3 py-2 rounded-md text-sm md:text-base lg:text-lg font-medium hover:bg-gray-700";

const hamburger = (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
