
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface MenuItemsProps {
  items: string[];
  onItemClick: () => void;
}

export default function MenuItems({ items, onItemClick }: MenuItemsProps) {
  const location = useLocation();

  const getPath = (item: string): string => {
    switch (item.toLowerCase()) {
      case 'home':
        return '/';
      case 'about us':
        return '/about';
      case 'cyc wall':
        return '/cyc-wall';
      case 'contact us':
        return '/contact';
      default:
        return `/${item.toLowerCase()}`;
    }
  };

  return (
    <motion.nav
      className="fixed inset-0 z-40 flex items-center"
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {items.map((item) => {
              const path = getPath(item);
              const isActive = location.pathname === path;
              
              return (
                <motion.div key={item}>
                  <Link
                    to={path}
                    className={`group relative block py-3 text-3xl md:text-4xl font-light transition-colors ${
                      isActive ? 'text-[#f78800]' : 'text-white'
                    }`}
                    onClick={onItemClick}
                  >
                    {item}
                    <span className={`absolute left-0 bottom-0 w-0 h-[2px] bg-[#f78800] transition-all duration-300 ${
                      isActive ? 'w-full' : 'group-hover:w-full'
                    }`} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}