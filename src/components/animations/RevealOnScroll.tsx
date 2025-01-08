import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  const directionOffset = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        x: isInView ? 0 : directionOffset[direction].x,
        y: isInView ? 0 : directionOffset[direction].y
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}