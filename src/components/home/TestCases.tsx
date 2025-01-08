
import { motion } from 'framer-motion';
import type { TestCase } from '../../types';

const testCases: TestCase[] = [
  {
    title: "Fashion Photography",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800",
    description: "Professional fashion shoots with perfect lighting"
  },
  {
    title: "Product Photography",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800",
    description: "Showcase your products in the best light"
  }
];

export default function TestCases() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          What You Can Create
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testCases.map((testCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src={testCase.image} 
                alt={testCase.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{testCase.title}</h3>
                <p className="text-gray-600">{testCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/pricing"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-[#f78800] text-white rounded-lg font-semibold hover:bg-[#e67a00] transition-colors mr-6"
          >
            View Pricing
          </motion.a>
          <motion.a
            href="/blog"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border-2 border-[#f78800] text-[#f78800] rounded-lg font-semibold hover:bg-[#f78800] hover:text-white transition-colors"
          >
            Read Our Blog
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}