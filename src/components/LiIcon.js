import React from 'react';
import { motion, useScroll } from 'framer-motion';
export default function LiIcon({ reference }) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ['center end', 'end center'],
  });
  return (
    <figure className="absolute -left-[19px] stroke-dark">
      <svg width={`75`} height={`75`} viewBox="0 0 100 100 ">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none -rotate-90"
        />
        <motion.circle
          style={{
            pathLength: scrollYProgress,
          }}
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-light"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="animate-pulse stroke-1 fill-primary"
        />
      </svg>
    </figure>
  );
}
