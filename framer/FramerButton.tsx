"use client";

import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  style?: React.CSSProperties; 
}

const ButtonAnimation: React.FC<ButtonProps> = ({ text, onClick, style}) => {
  return (
    <motion.button
      //to change color based on UI design and color themes
      whileHover={{ scale: 1.0, backgroundColor: 'black', color: 'white' }}
      whileTap={{ scale: 0.8 }}
      style={{
        backgroundColor: 'gray',
        color: 'white',
        cursor: 'pointer',
        padding: '20px', 
        ...style
      }}
    >
      {text}
    </motion.button>
  );
};

export default ButtonAnimation;
