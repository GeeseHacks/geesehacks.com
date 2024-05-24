import React from "react";
import background from "@/assets/heroBackground.png";
// import terminal from "@/assets/Terminal.svg";
import Image from "next/image";
import AnimatedTerminal from "./terminal";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-hero-image bg-cover w-full h-screen flex items-center justify-center md:justify-evenly bg-bottom">
      <div className="flex-col space-y-8 mb-3 mx-3">
        <h1 className="text-blue-300 text-center text-5xl sm:text-6xl md:text-white lg:text-7xl xl:text-8xl font-bold drop-shadow-2xl">
          GeeseHacks
        </h1>
        <div className="space-y-6">
          <h1 className="text-white text-2xl text-center mx-2 sm:font-medium sm:text-left lg:text-3xl">
            January 10-13 · Waterloo, ON
          </h1>
          <h1 className="text-white mx-2 text-center font-semilight text-lg lg:text-xl lg:text-left">
            Hacker application opens soon. Stay Tuned!
          </h1>
        </div>
        <div className="flex space-x-4 justify-center md:justify-start">
          <Link
            href="/apply"
            className="px-8 py-3  bg-gradient-to-r from-purple-600 to-purple-800 rounded-full text-white text-sm md:text-base lg:text-lg font-medium hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 transition-all duration-300 ease-in-out"
          >
            Apply Now
          </Link>
        </div>
      </div>
      <div className="flex mt-8 sr-only md:not-sr-only">
        <AnimatedTerminal />
      </div>
    </div>
  );
};

export default Hero;
