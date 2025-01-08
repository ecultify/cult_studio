import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  offset?: number;
  className?: string;
}

export default function ParallaxSection({ 
  children, 
  offset = 50,
  className = '' 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, offset]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}