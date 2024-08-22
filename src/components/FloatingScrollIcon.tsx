"use client";
import { motion } from 'framer-motion';
import { RiScrollToBottomLine } from 'react-icons/ri';
import React from 'react';

const FloatingScrollIcon = () => {
  return (
    <motion.div
      className="items-center justify-center flex mt-[15vw]"
      animate={{
        y: [0, -20, 0], // Moves up by 20px and back down
      }}
      transition={{
        duration: 2, // Duration of one cycle (up and down)
        repeat: Infinity, // Infinite looping
        repeatType: "loop", // Ensures continuous looping
        ease: "easeInOut", // Smooth easing
      }}
    >
      <RiScrollToBottomLine size="5vh" />
    </motion.div>
  );
};

export default FloatingScrollIcon;
