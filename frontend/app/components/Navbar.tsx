"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full bg-transparent text-white fixed top-0 left-0 z-50 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            </button>
          </div>
          <div className="hidden lg:flex lg:space-x-4 items-center">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              href="/sponsors"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              Sponsors
            </Link>
            <Link
              href="/faq"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
            >
              FAQ
            </Link>
            <Link
              href="/apply"
              className="px-6 py-2 bg-transparent border-2 border-white rounded-full text-white text-sm font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out"
            >
              Apply Now
            </Link>
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            >
              About
            </Link>
            <Link
              href="/sponsors"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            >
              Sponsors
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            >
              FAQ
            </Link>
            <Link
              href="/apply"
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
