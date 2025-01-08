
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NavigationMenuProps {
  items: string[];
  onClose: () => void;
}

export default function NavigationMenu({ items, onClose }: NavigationMenuProps) {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center md:hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-x-16 gap-y-6">
          {items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="text-2xl font-light text-white hover:text-[#f78800] transition-colors"
                onClick={onClose}
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}