import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { projects } from '../../data/projects';

export default function FeaturedCarousel() {
  const controls = useAnimation();
  const duplicatedProjects = [...projects, ...projects];

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: "-50%",
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    });
  };

  return (
    <section className="py-24 overflow-hidden relative">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
        <p className="text-lg text-gray-600">Our latest work in event production and creative technology</p>
      </div>

      <motion.div 
        className="flex gap-8"
        initial={{ x: 0 }}
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {duplicatedProjects.map((project, index) => (
          <div
            key={`${project.title}-${index}`}
            className="w-[400px] flex-shrink-0"
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <span className="text-[#f78800] text-sm uppercase tracking-wider mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}