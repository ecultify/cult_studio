
import { motion } from 'framer-motion';

export default function CycWallInfo() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6">What is a Cyc Wall?</h2>
          <p className="text-lg text-gray-600">
            A cyclorama (cyc) wall is a seamless backdrop that curves between the floor and wall, 
            creating the illusion of infinite space. Perfect for photography, videography, and 
            virtual productions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}