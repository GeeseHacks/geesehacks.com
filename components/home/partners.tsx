"use client";

import React from "react";
import Head from "next/head";
import Card from "./utils/sponsorPartnerCard";

const partnersData = [
  {
    href: "https://gdsc.community.dev/university-of-waterloo-waterloo-canada/",
    src: "/images/gdsc-uw.webp",
    alt: "Google Developer Student Club",
  },
  {
    href: "https://cscan-infocan.ca/",
    src: "/images/cs-can.webp",
    alt: "CS-Can",
  },
  {
    href: "https://www.ddclub.uwaterloo.ca/#/",
    src: "/images/double-degree-club.webp",
    alt: "Double Degree Club",
  },
  {
    href: "https://aws.amazon.com/developer/community/students/cloudclubs/",
    src: "/images/aws_cloud_clubs_logo.png",
    alt: "AWS Cloud Clubs",
  },
  {
    href: "https://www.uwdatascience.ca/cxc",
    src: "/images/cxc_logo.png",
    alt: "CxC Data Science",
  },
  {
    href: "",
    src: "/images/ACE.jpg",
    alt: "ACE",
  },
  {
    href: "https://mchacks.ca",
    src: "/images/mchack.svg",
    alt: "McHacks",
  },
  {
    href: "https://qhacks.io",
    src: "/images/qhacks.png",
    alt: "QHacks",
  },
  {
    href: "https://hackthe6ix.com",
    src: "/images/ht6.png",
    alt: "Hack the 6ix",
  },
  {
    href: "",
    src: "/images/hackathon-canada.png",
    alt: "Hackathons Canada",
  },
  {
    href: "https://www.linkedin.com/showcase/yorkcshub/",
    src: "/images/york_cshub.webp",
    alt: "York CS",
  },
];

const Partners: React.FC = () => {
  return (
    <>
      <Head>
        <title>GeeseHacks - Our Partners</title>
        <meta
          name="description"
          content="Meet the amazing partners of GeeseHacks. Learn more about Google Developer Student Club and CS-Can!"
        />
      </Head>
      <div
        className="p-8 sm:p-16 flex flex-col items-center justify-center relative text-white"
        aria-label="Our Partners section"
      >
        <h1 className="text-4xl md:text-6xl md:font-medium text-center mb-12 md:mb-24 text-shadow-section-header-glow">
          And Our Partners
        </h1>
        <div
          className="absolute w-11/12 h-36 md:w-80 md:h-40 lg:w-96 lg:h-48 bg-purple-600 rounded-full blur-lg opacity-10"
          style={{ top: "35%" }}
        ></div>
        <div className="w-full lg:w-3/4 z-10">
          {/* Adjust the grid layout to use `lg` breakpoint */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            {partnersData.map((partner, index) => (
              <div
                key={index}
                className={index >= 2 ? "lg:col-span-2" : "lg:col-span-3"} // Span two columns only on larger screens
              >
                <Card {...partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
