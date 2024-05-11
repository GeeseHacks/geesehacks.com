"use client";

import React from 'react';
import { motion } from 'framer-motion';


const ButtonAnimation = ({text, onClick}) => {
  return (
    <motion.button
    //to change color based on UI design and color themes
      whileHover={{ scale: 1.0, backgroundColor: 'black', color: 'white' }}
      whileTap={{ scale: 0.8 }}
      style={{
        backgroundColor: 'gray',
        color: 'white',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {text}
    </motion.button>
  );
};

export default ButtonAnimation;
