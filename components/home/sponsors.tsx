"use client";

import React from "react";
import Image from "next/image";
import Head from "next/head";

interface Sponsor {
  href: string;
  src: string;
  alt: string;
}

const sponsorsData: Sponsor[] = [
  {
    href: "https://about.google/",
    src: "/images/google_logo.png",
    alt: "Google",
  },
  {
    href: "https://www.sunlife.ca/en/",
    src: "/images/sunlife-logo-vector.webp",
    alt: "Sun Life",
  },
  {
    href: "https://uwaterloo.ca/",
    src: "/images/uwaterloo_logo.png",
    alt: "University of Waterloo",
  },
  {
    href: "https://cscan-infocan.ca/",
    src: "/images/cs-can.webp",
    alt: "CS-Can",
  },
  {
    href: "https://www.voiceflow.com/",
    src: "/images/voiceflow.png",
    alt: "Voiceflow",
  }
];

interface SponsorCardProps {
  href: string;
  src: string;
  alt: string;
  width: string;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ href, src, alt, width }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${alt} website`}  // Add ARIA label
      className="flex"
    >
      <div className="flex justify-center items-center bg-gradient-to-br  from-purple-600/20 to-indigo-300/20 border-0 border-purple-300 rounded-2xl p-12 min-h-[10rem] hover:scale-102 ease-in-out duration-300 w-full">
      <div className="relative w-full h-24"> 
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: 'contain' }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </a>
  );
};

const Sponsors: React.FC = () => {
  return (
    <>
      <Head>
        <title>Sponsors | GeeseHacks</title>
        <meta name="description" content="Meet the sponsors of GeeseHacks, including Google, Sun Life, University of Waterloo, and CS-Can." />
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
        <div className="w-full sm:w-3/4 z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sponsorsData.slice(0, 2).map((sponsor, index) => (
              <SponsorCard key={index} {...sponsor} width="80%" />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {sponsorsData.slice(2, 4).map((sponsor, index) => (
              <SponsorCard key={index} {...sponsor} width="70%" />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mt-4">
            {sponsorsData.slice(4).map((sponsor, index) => (
              <SponsorCard key={index} {...sponsor} width="70%" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sponsors;