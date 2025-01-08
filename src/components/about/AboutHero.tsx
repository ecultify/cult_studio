
import FadeInView from '../animations/FadeInView';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=2000"
          alt="Ecultify Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInView className="max-w-4xl">
          <span className="text-[#f78800] text-lg font-medium mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Innovating the Future of <span className="text-[#f78800]">Event Production</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Founded by Mayur and Vivek, cult.studio emerged from a vision to revolutionize creative technology in event production.
          </p>
        </FadeInView>
      </div>
    </section>
  );
}