
import { motion, AnimatePresence } from 'framer-motion';

interface MorphTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export default function MorphText({ 
  texts, 
  interval = 3000,
  className = '' 
}: MorphTextProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}