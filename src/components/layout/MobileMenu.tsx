
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: string[];
  isScrolled: boolean;
}

export default function MobileMenu({ isOpen, onClose, navItems, isScrolled }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`absolute top-24 left-0 right-0 overflow-hidden ${
            isScrolled ? 'bg-white' : 'bg-black/90'
          }`}
        >
          <nav className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    className={`block text-2xl font-light hover:text-[#f78800] transition-colors ${
                      isScrolled ? 'text-black' : 'text-white'
                    }`}
                    onClick={onClose}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}