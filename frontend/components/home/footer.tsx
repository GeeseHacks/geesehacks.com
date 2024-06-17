import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Carousel from "./utils/carousel";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-around p-4 md:p-6 px-4 md:px-16">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-white mb-4 sm:mb-8">
        Join us for a weekend full of geese!
      </h1>

      {/* Organizer Team Carousel Section */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full pb-7 gap-5">
        <div className="flex flex-col text-white gap-3 min-w-fit text-center sm:text-left">
          <h1 className="text-base sm:text-2xl font-bold">The Organizing Team</h1>
          <p className="text-xs sm:text-sm">Contact us at geesehack@gmail.com</p>
        </div>
          <Carousel />
      </div>

      <div className="text-white flex flex-row items-center justify-between w-full">
        <p className="w-[350px] text-xs sm:text-base">Made with 💙 by the GeeseHacks Team</p>

        <div className="flex flex-row gap-4">
          <a href="https://www.instagram.com/geesehacks/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <FaInstagram size="25px" />
          </a>
          <a href="https://ca.linkedin.com/company/geesehacks-hackathon" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-300">
            <FaLinkedinIn size="25px" />
          </a>
        </div>

        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer" className="w-[350px] text-right text-xs sm:text-base">
          MLH Code of Conduct
        </a>
      </div>
    </div>
  );
}
