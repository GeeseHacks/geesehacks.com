"use client";

import Link from "next/link";
import React from "react";

const HeroButton: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <Link href={href} legacyBehavior>
      <a className="custom-gradient-button">
        <span className="front">
          {children}
        </span>
        <style jsx>{`
          .custom-gradient-button {
            display: inline-block;
            background: #7547B0;
            border-radius: 9999px;
            transition: all 0.3s ease-in-out;
            text-align: center;
            text-decoration: none; /* Remove underline */
          }

          .front {
            display: block;
            padding: 0.75rem 2rem;
            border-radius: 9999px;
            font-size: 1.25rem;
            font-weight: 600; /* font-semibold */
            background: rgb(2,0,36);
            background: linear-gradient(132deg, rgba(2,0,36,1) 0%, rgba(170,34,156,1) 0%, rgba(184,54,170,1) 0%, rgba(162,95,248,1) 87%);
            color: white;
            transform: translateY(-6px);
            box-shadow: 
              inset 0 0 2px 2px rgba(255, 255, 255, 0.2), /* internal fuzzy white border */
              0px 0px 66px 10px rgba(158,71,201,1); /* purple glow */
            transition: all 0.3s ease-in-out;
          }

          .custom-gradient-button:hover .front {
            transform: translateY(-8px);
            box-shadow: 
              inset 0 0 5px 3px rgba(255, 255, 255, 0.4), /* more intense internal white border */
              0px 0px 90px 15px rgba(162,95,248,1); /* brighter purple glow */
          }

        `}</style>
      </a>
    </Link>
  );
};

export default HeroButton;
