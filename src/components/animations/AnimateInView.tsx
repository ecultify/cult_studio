
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

interface AnimateInViewProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimateInView({ children, className = '' }: AnimateInViewProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}