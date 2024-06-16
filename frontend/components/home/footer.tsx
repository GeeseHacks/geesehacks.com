import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-around p-6">
      <h1 className="text-2xl sm:text-4xl font-bold text-center text-white mb-4 sm:mb-8">
        Join us for a weekend full of geese!
      </h1>



      <div className="text-white flex flex-row justify-between w-full">
        <p className="w-[350px]">Made with 💙 by the GeeseHacks Team</p>

        <div className="flex flex-row gap-4">
          <FaInstagram size="20px"/>
          <FaLinkedinIn size="20px"/>
        </div>

        <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf" target="_blank" rel="noopener noreferrer" className="w-[350px] text-right">
          MLH Code of Conduct
        </a>
      </div>

    </div>
  );
}
