
import { motion } from 'framer-motion';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  isScrolled: boolean;
  isHomePage: boolean;
  hasDarkBackground: boolean;
}

export default function MenuButton({ 
  isOpen, 
  onClick, 
  isScrolled, 
  isHomePage,
  hasDarkBackground 
}: MenuButtonProps) {
  const getTextColor = () => {
    if (isOpen) return 'text-white';
    if (isScrolled) return 'text-black';
    if (isHomePage || hasDarkBackground) return 'text-white';
    return 'text-black';
  };

  const getLineColor = () => {
    if (isOpen) return 'bg-white';
    if (isScrolled) return 'bg-black';
    if (isHomePage || hasDarkBackground) return 'bg-white';
    return 'bg-black';
  };

  return (
    <motion.button 
      onClick={onClick}
      className="z-50 flex items-center gap-3 focus:outline-none pl-4 group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={`text-sm font-medium tracking-wide transition-colors ${getTextColor()}`}>
        {isOpen ? 'Close' : 'Menu'}
      </span>
      <div className="relative w-6 h-5">
        <span
          className={`block absolute h-[2px] w-6 transform transition-all duration-300 ease-in-out ${
            isOpen ? 'rotate-45 top-2' : 'top-0'
          } ${getLineColor()}`}
        />
        <span
          className={`block absolute h-[2px] w-6 top-2 transform transition-all duration-300 ease-in-out ${
            isOpen ? 'opacity-0 translate-x-3' : 'opacity-100 translate-x-0'
          } ${getLineColor()}`}
        />
        <span
          className={`block absolute h-[2px] w-6 transform transition-all duration-300 ease-in-out ${
            isOpen ? '-rotate-45 top-2' : 'top-4'
          } ${getLineColor()}`}
        />
      </div>
    </motion.button>
  );
}