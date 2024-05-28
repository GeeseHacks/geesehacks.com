'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    <div className="w-full bg-gray-800 mb-2 rounded-lg">
      <div className="flex items-center justify-between bg-gray-700 rounded-lg px-4 py-2">
        <button
          className="flex-grow text-left text-lg text-white font-semibold"
          onClick={toggleOpen}
        >
          {question}
        </button>
        <button
          className="text-lg text-white font-semibold"
          onClick={toggleOpen}
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.01 }}
            className="overflow-hidden px-4 py-2 text-white"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default FaqItem;