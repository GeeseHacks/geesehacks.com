import React from "react";
import AnimatedTerminal from "./utils/terminal";
import HeroButton from "./utils/heroButton";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";


// SET TO TRUE WHEN APPLICATION OPENS
const applicationOpen = false;

const Hero = () => {
  return (
    <div className="bg-hero-image bg-cover w-full h-screen flex items-center justify-center md:justify-evenly bg-bottom">
      <div className="flex-col space-y-8 mb-3 mx-3">
        <h1 className="text-white text-2xl text-center mx-2 sm:text-left lg:text-3xl text-shadow-white-glow">
          January 10-12 · Waterloo, ON
        </h1>

        <h1 className="text-blue-300 text-center text-5xl sm:text-6xl md:text-white lg:text-7xl xl:text-8xl font-bold text-shadow-white-glow">
          GeeseHacks
        </h1>
        <div className="space-y-6">
          <h1 className="text-white mx-2 text-center font-semilight text-lg lg:text-xl lg:text-left text-shadow-white-glow">
            Hacker applications open soon. Stay Tuned!
          </h1>
        </div>

        <div className="flex flex-row justify-center md:justify-normal gap-6 px-2">
          <div className="rounded-full bg-[#EAE0D5] p-2">
            <FaInstagram size="30px"/>
          </div>
          <div className="rounded-full bg-[#EAE0D5] p-2">
            <FaLinkedinIn size="30px"/>
          </div>
        </div>

        {applicationOpen && <div className="flex space-x-4 justify-center md:justify-start">
          <HeroButton href="/apply">Apply Now</HeroButton>
        </div>}
      </div>
      <div className="flex mt-8 sr-only md:not-sr-only">
        <AnimatedTerminal />
      </div>
    </div>
  );
};

export default Hero;
