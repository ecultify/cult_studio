
import { motion } from 'framer-motion';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div 
      className="relative w-[85vw] md:w-[75vw] lg:w-[65vw] flex-shrink-0 snap-center mx-4 first:ml-0 last:mr-0 rounded-[2.5rem] overflow-hidden bg-white"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover="hover"
    >
      <div className="aspect-[16/9] relative">
        <motion.img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
          variants={{
            hover: { scale: 1.05 }
          }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          variants={{
            hover: { opacity: 0.8 }
          }}
        />
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 text-white">
          <motion.div
            variants={{
              hover: { y: -10 }
            }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-[#f78800] text-sm uppercase tracking-wider mb-3 block font-medium">
              {project.category}
            </span>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">{project.title}</h3>
            <p className="text-lg text-gray-200 max-w-2xl">{project.description}</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}