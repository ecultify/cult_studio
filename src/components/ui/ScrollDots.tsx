
import { motion } from 'framer-motion';

interface ScrollDotsProps {
  total: number;
  current: number;
  onDotClick: (index: number) => void;
}

export default function ScrollDots({ total, current, onDotClick }: ScrollDotsProps) {
  return (
    <div className="flex items-center justify-center gap-3 mt-8">
      {Array.from({ length: total }).map((_, index) => (
        <motion.button
          key={index}
          onClick={() => onDotClick(index)}
          className="group relative p-2"
          whileHover={{ scale: 1.2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <span 
            className={`block w-2 h-2 rounded-full transition-all duration-300 ${
              current === index 
                ? 'bg-[#f78800] scale-125' 
                : 'bg-gray-400 group-hover:bg-[#f78800]/50'
            }`}
          />
        </motion.button>
      ))}
    </div>
  );
}