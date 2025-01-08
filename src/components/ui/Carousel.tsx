import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CarouselProps {
  items: {
    image: string;
    title: string;
    description?: string;
    category?: string;
  }[];
  aspectRatio?: string;
  showArrows?: boolean;
  showDots?: boolean;
}

export default function Carousel({
  items,
  aspectRatio = "16/9",
  showArrows = true,
  showDots = true
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current || isScrolling) return;
    
    setIsScrolling(true);
    const newIndex = Math.max(0, Math.min(index, items.length - 1));
    setCurrentIndex(newIndex);
    
    carouselRef.current.scrollTo({
      left: newIndex * carouselRef.current.offsetWidth,
      behavior: 'smooth'
    });

    setTimeout(() => setIsScrolling(false), 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!carouselRef.current || isScrolling) return;
      const scrollPosition = carouselRef.current.scrollLeft;
      const itemWidth = carouselRef.current.offsetWidth;
      const newIndex = Math.round(scrollPosition / itemWidth);
      setCurrentIndex(newIndex);
    };

    const container = carouselRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isScrolling]);

  return (
    <div className="relative -mx-4 md:-mx-8 lg:-mx-16">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar custom-transition"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          scrollBehavior: 'smooth'
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 snap-center px-4 md:px-8 lg:px-16"
          >
            <div className={`relative aspect-[${aspectRatio}] rounded-2xl overflow-hidden shadow-lg`}>
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                {item.category && (
                  <span className="text-purple-400 text-sm uppercase tracking-wider mb-2 block">
                    {item.category}
                  </span>
                )}
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-200 text-lg max-w-2xl">{item.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {showArrows && (
        <div className="absolute inset-y-0 left-4 md:left-8 lg:left-16 right-4 md:right-8 lg:right-16 flex items-center justify-between pointer-events-none">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToIndex(currentIndex - 1)}
            className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg pointer-events-auto transition-opacity hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === 0 || isScrolling}
          >
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToIndex(currentIndex + 1)}
            className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg pointer-events-auto transition-opacity hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={currentIndex === items.length - 1 || isScrolling}
          >
            <ArrowRight className="w-6 h-6 text-gray-800" />
          </motion.button>
        </div>
      )}

      {showDots && (
        <div className="flex justify-center mt-8 gap-3">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? 'bg-purple-600 scale-150' 
                  : 'bg-gray-300 hover:bg-purple-400'
              }`}
              disabled={isScrolling}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}