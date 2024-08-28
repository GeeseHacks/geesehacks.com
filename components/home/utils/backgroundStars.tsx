"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Define the type for a star
interface Star {
  size: string;
  top: string;
  left: string;
  xMovement: number;
  yMovementMultiplier: number;
}

export default function BackgroundStars() {
  const [scrollY, setScrollY] = useState(0);
  const [stars, setStars] = useState<Star[]>([]);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const generateStars = () => {
      const starsArray: Star[] = [...Array(250)].map(() => {
        const size = `${Math.random() * 2 + 2}px`;

        // Generate some stars above the top of the screen and below the bottom of the screen
        const topOffset = Math.random() > 0.5 ? -0 : -300; // 50% chance to generate stars out of screen bounds
        return {
          size,
          top: `${Math.random() * (100 + topOffset) - topOffset}%`, // Adjust the top value
          left: `${Math.random() * 100}%`,
          xMovement: Math.random() * 50 - 25, // Random x movement
          yMovementMultiplier: Math.random() * 0.1 + 0.05, // Multiplier for y movement based on scroll
        };
      });
      setStars(starsArray);
    };

    generateStars();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-50">
      {stars.map((star, i) => {
        return (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-55"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              boxShadow: `0 0 10px 2px rgba(255, 255, 255, 0.1)`,
            }}
            animate={{
              x: star.xMovement,
              y: -scrollY * star.yMovementMultiplier, // Invert the direction of y movement
            }}
            transition={{
              type: "spring",
              stiffness: 30,
              damping: 20,
            }}
          ></motion.div>
        );
      })}
    </div>
  );
}
