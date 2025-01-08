
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ScrollControlsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
}

export default function ScrollControls({ onPrevClick, onNextClick }: ScrollControlsProps) {
  return (
    <div className="absolute inset-y-0 left-0 right-0 pointer-events-none">
      <div className="container mx-auto px-4 relative h-full flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onPrevClick}
          className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10 pointer-events-auto"
          aria-label="Previous project"
        >
          <ArrowLeft className="w-5 h-5" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onNextClick}
          className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10 pointer-events-auto"
          aria-label="Next project"
        >
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
}