'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowUpWideFill , RiArrowDownWideFill } from "react-icons/ri";

// Define the props type for FaqItem
interface FaqItemProps {
  question: string;
  answer: string;
}

// FAQ Item Component
const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    console.log('toggleOpen', question);
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-[#373d60] bg-opacity-50 mb-2 rounded-3xl">
      <div className="flex items-center justify-between px-6 py-4">
        <button
          className="flex-grow text-left text-lg text-white"
          onClick={toggleOpen}
        >
          {question}
        </button>
        <button
          className="text-lg text-white"
          onClick={toggleOpen}
        >
          {isOpen ? <RiArrowUpWideFill size={32} /> : <RiArrowDownWideFill size={32} />}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.1, ease: "easeInOut"}} 
            className="overflow-hidden px-6 pt-2 pb-4 text-white"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default FaqItem;