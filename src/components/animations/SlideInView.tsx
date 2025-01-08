
import { motion } from 'framer-motion';

interface SlideInViewProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'left' | 'right';
  className?: string;
}

export default function SlideInView({
  children,
  delay = 0,
  direction = 'right',
  className = ''
}: SlideInViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
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