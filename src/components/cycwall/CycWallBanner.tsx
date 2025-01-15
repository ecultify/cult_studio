import FadeInView from '../animations/FadeInView';
import AnimatedButton from '../ui/AnimatedButton';

export default function CycWallBanner() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=2000"
          alt="Cyc Wall Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInView className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Professional <span className="text-purple-600">Cyc Wall</span> Studio
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Create stunning visuals with our state-of-the-art cyclorama wall, perfect for photography, videography, and virtual productions.
          </p>
          <div className="flex flex-wrap gap-6">
            <AnimatedButton 
              href="#possibilities" 
              className="bg-purple-600 hover:bg-purple-700"
            >
              Explore Possibilities
            </AnimatedButton>
            <AnimatedButton 
              href="https://calendly.com/ecultify-1/cyc-wall-studio-booking"
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
            >
              Book Now
            </AnimatedButton>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}