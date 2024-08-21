"use client";

import { motion, Variants, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // for scroll trigger
import { useEffect } from "react";

import { cn } from "@/lib/utils";

interface WordPullUpProps {
  words: string;
  delayMultiple?: number;
  wrapperFramerProps?: Variants;
  framerProps?: Variants;
  className?: string;
}

export default function WordPullUp({
  words,
  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },
  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },
  className,
}: WordPullUpProps) {
  // Use animation controls
  const controls = useAnimation();

  // Set up Intersection Observer with react-intersection-observer
  const { ref, inView } = useInView({
    triggerOnce: true, // trigger the animation only once
    threshold: 0.1, // fire when 10% of the component is visible
  });

  // Play animation when in view
  useEffect(() => {
    if (inView) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.h1
      ref={ref} // reference to track visibility
      variants={wrapperFramerProps}
      initial="hidden"
      animate={controls} // use animation controls
      className={cn(
        "font-display font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps}
          style={{ display: "inline-block", paddingRight: "8px" }}
          className="text-[12vw] mt-[5vw]"
        >
          {word === "" ? <span>&nbsp;</span> : word}
        </motion.span>
      ))}
    </motion.h1>
  );
}
