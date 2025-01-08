
import { motion } from 'framer-motion';

interface UseCaseProps {
  useCase: {
    title: string;
    image: string;
    category: string;
  };
  index: number;
  isActive: boolean;
}

export default function UseCaseCard({ useCase, index, isActive }: UseCaseProps) {
  return (
    <motion.div
      className="w-[85vw] md:w-[75vw] lg:w-[65vw] flex-shrink-0 snap-center mx-4"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-xl">
        <img
          src={useCase.image}
          alt={useCase.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/60 to-transparent">
          <span className="text-[#f78800] text-sm uppercase tracking-wider mb-2 block">
            {useCase.category}
          </span>
          <h3 className={`text-2xl font-semibold text-white transition-opacity duration-300 ${
            isActive ? 'opacity-100' : 'opacity-60'
          }`}>
            {useCase.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}