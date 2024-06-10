"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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

    window.addEventListener('scroll', handleVisibility);

    // event listener to close the navbar when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleVisibility);
      document.removeEventListener('mousedown', handleClickOutside);
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
      onClick={smoothScroll}
    >
      {link.text}
    </a>
  ));

  return (
    <nav
      ref={navbarRef}
      className={`w-screen fixed top-0 left-0 text-white z-50 lg:pt-4 pt-0 px-4 sm:px-6 lg:px-8 xl:px-16 transition-all h-20 duration-300 ${scrolled ? `bg-[rgba(0,0,0,0.1)] fixed w-full ${isVisible ? 'top-0' : '-top-20'} transition-top duration-300 ease-in-out z-50` : "bg-transparent"
        } `}
    >
      <div className="mx-auto w-full 2xl:w-4/5">
        <div className="flex justify-between h-12">
          <div className="hidden lg:flex">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/images/geesehacksLogo.png"
                alt="Logo"
                width={45}
                height={45}
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
          {/* <div className="hidden lg:flex lg:space-x-4 items-center pr-36 2xl:pr-0"> */}
          <div className="hidden lg:flex lg:space-x-4 items-center">
            {navLinks}
            {applicationOpen && <Link
              href="/apply"
              className="px-6 py-2 bg-transparent border-2 border-white rounded-full text-white text-sm md:text-base lg:text-md xl:text-lg font-medium hover:bg-white hover:text-gray-900 transition-all duration-300 ease-in-out"
            >
              Apply Now
            </Link>}
          </div>
        </div>
        {isOpen && (
          <div className="lg:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1 flex flex-col">
            {navLinks}
            {applicationOpen && <Link href="/apply" className={linkStyle}>
              Apply Now
            </Link>}
          </div>
        )}
      </div>
    </nav>
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
