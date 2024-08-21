"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Card from "../Card";
import WordPullUp from "./word-pull-up";

import { cn } from "@/lib/utils";


interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200rem] ", className)}>
      <div
        className={
          "sticky top-0 mx-auto  h-[20%] max-w-8xl items-center bg-transparent px-[1rem] "
        }
      >
        <p
          ref={targetRef}
          className={
            "flex flex-wrap justify-center font-bold  text  -black/20 dark:text-white/20 xl:text-[6rem]  text-[4rem] py-[5vw]"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <span className={"absolute opacity-0"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black text-center dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
