"use client";

import React from "react";
import Head from "next/head";
import Card from "./utils/sponsorPartnerCard";

const sponsorsData = [
  {
    href: "https://www.sunlife.ca/en/",
    src: "/images/sunlife_logo.png",
    alt: "Sun Life",
  },
  {
    href: "https://about.google/",
    src: "/images/google_logo.png",
    alt: "Google",
  },
  {
    href: "https://uwaterloo.ca/math-endowment-fund/",
    src: "/images/mef_logo.png",
    alt: "Math Endowment Fund",
  },
  {
    href: "https://cscan-infocan.ca/",
    src: "/images/cs-can.webp",
    alt: "CS-Can",
  },
  {
    href: "https://uwaterloo.ca/",
    src: "/images/uwaterloo_logo.png",
    alt: "University of Waterloo",
  },
  {
    href: "https://www.voiceflow.com/",
    src: "/images/voiceflow.png",
    alt: "Voiceflow",
  },
  {
    href: "https://apidiscovery.teejlab.com",
    src: "/images/teejlab.png",
    alt: "TeejLab",
  },
];

const Sponsors: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sponsors | GeeseHacks</title>
        <meta
          name="description"
          content="Meet the sponsors of GeeseHacks, including Google, Sun Life, University of Waterloo, and CS-Can."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="p-8 sm:p-16 flex flex-col items-center justify-center relative mt-24 text-white">
        <h1 className="text-4xl md:text-6xl md:font-medium text-center mb-12 md:mb-24 text-shadow-section-header-glow">
          Thank You to Our Sponsors
        </h1>
        <div
          className="absolute w-11/12 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-purple-600 rounded-full blur-3xl opacity-30"
          style={{ top: "30%" }}
        ></div>
        <div className="w-full lg:w-3/4 z-10">
          {/* Set lg:grid-cols-1 to make a sponsor take up an entire row */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            {sponsorsData.slice(0, 1).map((sponsor, index) => (
              <Card key={index} {...sponsor} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {sponsorsData.slice(1, 3).map((sponsor, index) => (
              <Card key={index} {...sponsor} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {sponsorsData.slice(3, 5).map((sponsor, index) => (
              <Card key={index} {...sponsor} />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
            {sponsorsData.slice(5, 7).map((sponsor, index) => (
              <Card key={index} {...sponsor} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
