
import { motion } from 'framer-motion';

const categories = ['All', 'Photography', 'Film', 'Equipment', 'Tips & Tricks'];

export default function BlogCategories() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-6 py-2 rounded-full bg-white shadow-md hover:bg-purple-600 hover:text-white transition-colors"
            >
              {category}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}