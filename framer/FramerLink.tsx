"use client";

import { motion } from "framer-motion";

interface FramerLinkProps {
  url: string;
  icon?: React.ReactElement;
  className?: string;
  onClick?: () => void;
}

const FramerLink: React.FC<FramerLinkProps> = ({
  url,
  icon,
  className = "",
  onClick,
}) => {
  return (
    <motion.a
      href={url}
      className={`bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full ${className}`}
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.7 }}
      onClick={onClick}
    >
      {icon}
    </motion.a>
  );
};

export default FramerLink;
