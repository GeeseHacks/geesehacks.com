"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// SET TO TRUE WHEN APPLICATION OPENS
const applicationOpen = false;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    // The px valid needs to match the size when the hamburger icon appears
    const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
    if (isLargeScreen && window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const [isVisible, setIsVisible] = useState<boolean>(true);
  let lastScrollY = 0;

  useEffect(() => {
    // Logic to handle scroll animation
    const handleVisibility = () => {
      if (window.scrollY < lastScrollY || window.scrollY < 50) {
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      }
      lastScrollY = window.scrollY;

      handleScroll();
    };

    window.addEventListener("scroll", handleVisibility);

    // event listener to close the navbar when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleVisibility);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const links = [
    // urls that start with # correspond to the id of the div that the link will scroll to
    { url: "#hero", text: "Home" },
    { url: "#about", text: "About" },
    { url: "#sponsors", text: "Sponsors" },
    { url: "#faq", text: "FAQ" },
  ];

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Stop the immediate jump
    const targetId = e.currentTarget.getAttribute("href"); // Get the href attribute of the clicked link
    if (targetId) {
      const targetSection = document.querySelector(targetId); // Select the section that matches the ID
      if (targetSection) {
        window.scrollTo({
          top: targetSection.getBoundingClientRect().top + window.scrollY, // More accurate positioning
          behavior: "smooth", // Smooth scroll
        });
      }
    }
  };

  const navLinks = links.map((link) => (
    <a
      href={link.url}
      className={linkStyle}
      key={link.url}
      onClick={(e) => {
        smoothScroll(e);
        setIsOpen(false);
      }}
      aria-label={link.text} // Add ARIA label
    >
      {link.text}
    </a>
  ));

  return (
    <>
      <Head>
        <title>GeeseHacks Navbar</title>
        <meta
          name="description"
          content="GeeseHacks Navbar - Navigate through Home, About, Sponsors, and FAQ sections."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <nav
        ref={navbarRef}
        className={`w-screen fixed top-0 left-0 text-white z-50 lg:pt-4 pt-0 px-4 sm:px-6 lg:px-8 2xl:px-0 transition-all h-20 duration-300 ${
          scrolled
            ? `bg-[rgba(0,0,0,0.1)] fixed w-full ${
                isVisible ? "top-0" : "-top-20"
              } transition-top duration-300 ease-in-out z-50`
            : "bg-transparent"
        } `}
        aria-label="Main navigation" // Add ARIA label for the navigation
      >
        <div className="mx-auto w-full 2xl:w-4/5">
          <div className="flex justify-between h-12">
            <div className="hidden lg:flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" aria-label="GeeseHacks Home">
                  <Image
                    src="/images/geesehacksLogo.png"
                    alt="GeeseHacks Logo"
                    width={45}
                    height={45}
                  />
                </Link>
              </div>
            </div>
            <div className="flex space-x-4 items-center lg:hidden">
              <button
                onClick={toggleNavbar}
                className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-expanded={isOpen} // Add ARIA expanded state for the button
                aria-controls="navbar-menu" // ARIA controls to associate with the collapsible menu
              >
                <span className="sr-only">Toggle navigation</span>
                {hamburger}
              </button>
            </div>
            <div className="hidden lg:flex lg:space-x-4 items-center">
              {navLinks}
              {applicationOpen && (
                <Link
                  href="http://portal.geesehacks.com"
                  target="_blank"
                  className="px-6 py-2 bg-transparent border-2 border-white rounded-full text-white text-sm md:text-base lg:text-md xl:text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out"
                  aria-label="Apply Now"
                >
                  Apply Now
                </Link>
              )}
            </div>
          </div>
          {isOpen && (
  <div
    id="navbar-menu"
    className="lg:hidden bg-gray-800 w-full px-4 pt-4 pb-6 space-y-2 flex flex-col rounded-lg bg-opacity-90"
  >
    {navLinks}
    {applicationOpen && (
      <Link
        href="http://portal.geesehacks.com"
        target="_blank"
        className="px-4 py-2 bg-white text-gray-900 rounded-full text-center text-sm font-medium shadow-md hover:bg-gray-100 transition-all duration-300 ease-in-out"
        aria-label="Apply Now"
      >
        Apply Now
      </Link>
    )}
  </div>
)}

          
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const linkStyle =
  "px-3 py-2 rounded-md text-sm md:text-base lg:text-md xl:text-lg font-medium hover:bg-gray-700";

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
