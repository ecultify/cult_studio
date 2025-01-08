
import { motion } from 'framer-motion';
import RevealOnScroll from '../animations/RevealOnScroll';

const beforeAfterItems = [
  {
    before: "https://images.unsplash.com/photo-1594032194509-0056023973b2?auto=format&fit=crop&w=800",
    after: "https://images.unsplash.com/photo-1589830400053-5600d42d5e7f?auto=format&fit=crop&w=800",
    title: "Product Photography"
  },
  {
    before: "https://images.unsplash.com/photo-1576824228862-5a3c1f6b4c78?auto=format&fit=crop&w=800",
    after: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=800",
    title: "Fashion Editorial"
  },
  {
    before: "https://images.unsplash.com/photo-1574427797991-2abcef40ebf5?auto=format&fit=crop&w=800",
    after: "https://images.unsplash.com/photo-1594032194509-0056023973b2?auto=format&fit=crop&w=800",
    title: "Virtual Production"
  }
];

export default function BeforeAfter() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-center mb-24">
            Transform Your <span className="text-[#f78800]">Vision</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-24">
          {beforeAfterItems.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center mb-8">{item.title}</h3>
                <div className="flex flex-col md:flex-row gap-[10px] items-center">
                  <div className="flex-1 relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <motion.img
                      src={item.before}
                      alt={`${item.title} Before`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xl font-semibold">Before</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 relative aspect-[4/3] rounded-2xl overflow-hidden group">
                    <motion.img
                      src={item.after}
                      alt={`${item.title} After`}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xl font-semibold">After</span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}