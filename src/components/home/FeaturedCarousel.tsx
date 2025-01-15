import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';

export default function FeaturedCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);

  // Create 5 sets of projects for smoother looping
  const duplicatedProjects = [...projects, ...projects, ...projects, ...projects, ...projects];

  useEffect(() => {
    if (containerRef.current) {
      const updateWidths = () => {
        setContainerWidth(containerRef.current?.offsetWidth || 0);
        // Calculate single item width including gap
        const firstItem = containerRef.current?.firstChild?.firstChild as HTMLElement;
        if (firstItem) {
          setItemWidth(firstItem.offsetWidth + 32); // 32px is the gap
        }
      };

      updateWidths();
      window.addEventListener('resize', updateWidths);
      return () => window.removeEventListener('resize', updateWidths);
    }
  }, []);

  // Handle infinite scroll
  const handleDrag = () => {
    const currentX = x.get();
    const totalWidth = itemWidth * projects.length;
    
    if (currentX > 0) {
      // If dragged too far right, loop to end
      x.set(currentX - totalWidth);
    } else if (currentX < -totalWidth) {
      // If dragged too far left, loop to start
      x.set(currentX + totalWidth);
    }
  };

  const handleDragEnd = () => {
    const currentX = x.get();
    const totalWidth = itemWidth * projects.length;
    
    // Ensure we stay within bounds after drag
    if (currentX > 0) {
      x.set(currentX - totalWidth);
    } else if (currentX < -totalWidth) {
      x.set(currentX + totalWidth);
    }
  };

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-4xl font-bold mb-6 text-center">Featured Projects</h2>
        <p className="text-lg text-gray-600 text-center">
          Our latest work in event production and creative technology
        </p>
      </div>

      <div className="relative max-w-[90vw] mx-auto">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-l-full shadow-lg">
          <span className="text-sm font-medium">Swipe</span>
          <motion.div
            animate={{
              x: [0, 10, 0],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowRight className="w-5 h-5 text-[#f78800]" />
          </motion.div>
        </div>

        <div 
          ref={containerRef}
          className="overflow-hidden cursor-grab active:cursor-grabbing"
        >
          <motion.div 
            className="flex gap-8"
            style={{ x }}
            drag="x"
            dragConstraints={{
              left: -(itemWidth * projects.length * 3),
              right: itemWidth * projects.length
            }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            dragElastic={0.1}
            dragMomentum={true}
          >
            {duplicatedProjects.map((project, index) => (
              <motion.div
                key={`${project.title}-${index}`}
                className="w-[calc(45vw-24px)] flex-shrink-0 select-none"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8 text-white pointer-events-none">
                    <span className="text-[#f78800] text-sm uppercase tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-base text-gray-200 max-w-xl">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}