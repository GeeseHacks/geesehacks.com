"use client";

import React from "react";
import Image from "next/image";

interface CardProps {
  href: string;
  src: string;
  alt: string;
  width?: string; // Optional, can be omitted if not passed
}

const SponsorPartnerCard: React.FC<CardProps> = ({ href, src, alt, width = "100%" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${alt} website`}
      className="flex"
    >
      <div className="flex justify-center items-center bg-gradient-to-br from-purple-600/20 to-indigo-300/20 border-0 border-purple-300 rounded-2xl p-6 min-h-[6rem] hover:scale-102 ease-in-out duration-300 w-full">
        <div className="relative w-full h-24">
          <Image
            src={src}
            alt={alt}
            fill
            style={{ objectFit: "contain" }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </a>
  );
};

export default SponsorPartnerCard;
