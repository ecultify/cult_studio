
import { motion } from 'framer-motion';

interface MenuOverlayProps {
  isOpen: boolean;
}

export default function MenuOverlay({ isOpen }: MenuOverlayProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed inset-0 z-30 bg-black/95 backdrop-blur-sm"
    />
  );
}