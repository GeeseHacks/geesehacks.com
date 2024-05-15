"use client";

import { motion } from "framer-motion";

interface FramerListProps {
  item: any;
  index: number;
  className?: string;
}

const fadeInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

const FramerList: React.FC<FramerListProps> = ({
  item,
  index,
  className = "",
}) => {
  return (
    <motion.li
      className={className}
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.2 }}
      custom={index}
    >
      {item}
    </motion.li>
  );
};

export default FramerList;
