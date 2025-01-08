
import { motion } from 'framer-motion';

export default function CycWallInfo() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl font-bold mb-6">What is a Cyc Wall?</h2>
            <p className="text-lg text-gray-600 mb-8">
              A cyclorama (cyc) wall is a seamless backdrop that curves between the floor and wall, 
              creating the illusion of infinite space. Perfect for photography, videography, and 
              virtual productions.
            </p>
            <ul className="space-y-4">
              {[
                "Seamless background for perfect shots",
                "Customizable lighting and colors",
                "Ideal for commercial photography",
                "Perfect for virtual productions"
              ].map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=800"
                alt="Cyc Wall Studio"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-lg">
                <p className="text-2xl font-bold">2000+ sq ft</p>
                <p>Studio Space</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}