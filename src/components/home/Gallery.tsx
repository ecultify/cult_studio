import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from '../animations/RevealOnScroll';

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1594032194509-0056023973b2?auto=format&fit=crop&w=1920",
    title: "Fashion Editorial",
    category: "Photography",
    description: "High-end fashion photography in our professional studio setting"
  },
  {
    image: "https://images.unsplash.com/photo-1589830400053-5600d42d5e7f?auto=format&fit=crop&w=1920",
    title: "Product Showcase",
    category: "Commercial",
    description: "Premium product photography with perfect lighting"
  },
  {
    image: "https://images.unsplash.com/photo-1576824228862-5a3c1f6b4c78?auto=format&fit=crop&w=1920",
    title: "Virtual Production",
    category: "Film",
    description: "State-of-the-art virtual production capabilities"
  },
  {
    image: "https://images.unsplash.com/photo-1574427797991-2abcef40ebf5?auto=format&fit=crop&w=1920",
    title: "Portrait Session",
    category: "Photography",
    description: "Professional portrait photography in our cyc wall studio"
  }
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return;
      
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = scrollRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      
      setActiveIndex(newIndex);
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-32 bg-[#0066CC]">
      <div className="container mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold text-center mb-24 text-white">
            Featured <span className="text-[#f78800]">Work</span>
          </h2>
        </RevealOnScroll>

        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-4 px-4"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                className="w-full flex-shrink-0 snap-center px-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="text-[#f78800] text-sm uppercase tracking-wider mb-2 block">
                      {item.category}
                    </span>
                    <h3 className={`text-2xl md:text-3xl font-semibold transition-colors duration-300 ${
                      activeIndex === index ? 'text-white' : 'text-white/60'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-white/80 mt-2 max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!scrollRef.current) return;
                  scrollRef.current.scrollTo({
                    left: index * scrollRef.current.clientWidth,
                    behavior: 'smooth'
                  });
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-[#f78800] scale-125' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}