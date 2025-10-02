"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

type Props = {
  label?: string;
  className?: string;
};

export default function ProblemToFeatureArrow({
  label = "Scroll to the solution",
  className,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { amount: 0.5, margin: "0px 0px -20% 0px" });

  const pathVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: { duration: 2, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const headVariants: Variants = {
    hidden: { opacity: 0, scale: 0.6, rotate: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div ref={ref} className={className}>
      <motion.svg
        role="img"
        aria-label={label}
        viewBox="0 0 687.22 671.54"
        width="100%"
        className="pointer-events-none mx-auto max-w-[520px]">
        <motion.path
          d="M84.01.48c43.52,11.91,86.91,30.34,112.26,69.29,15.64,23.32,23.54,52.44,18.97,80.35-4.06,26.73-20.97,50.53-45.61,62.07-33.57,15.65-86.94,17.74-114.84-9-17.66-16.59-19.76-47-2.32-64.31,20.34-20.24,53.33-13.95,76.41.62,38.42,23.63,62.79,67.84,62.92,112.82.75,45-22.92,87.04-55.94,116.47C97.11,404,48.41,424.37.43,444.42"
          fill="none"
          stroke="url(#arrowStroke)"
          strokeWidth="10"
          strokeLinecap="round"
          variants={pathVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
        <motion.path
          d="M.43,444.42c16.67-28.51,35.59-55.7,56.53-81.23"
          fill="url(#arrowStroke)"
          variants={headVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
        <motion.path
          d="M98.07,460.58c-32.9-2.81-65.58-8.22-97.64-16.16"
          fill="url(#arrowStroke)"
          variants={headVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        />
        {/* Arrow head */}
        {/* <motion.path
          d="M360,110 l-18,-10 l6,10 l-6,10 z" // a tiny kite head
          fill="url(#arrowStroke)"
          variants={headVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        /> */}

        {/* Nice gradient stroke */}
        <defs>
          <linearGradient id="arrowStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
}
