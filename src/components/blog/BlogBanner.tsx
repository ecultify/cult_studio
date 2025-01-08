
import FadeInView from '../animations/FadeInView';
import AnimatedButton from '../ui/AnimatedButton';

export default function BlogBanner() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=2000"
          alt="Blog Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInView className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Stories & <span className="text-[#f78800]">Insights</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Discover the latest trends, techniques, and stories from the world of professional photography and production.
          </p>
          <AnimatedButton
            href="#featured"
            variant="primary"
          >
            Latest Stories
          </AnimatedButton>
        </FadeInView>
      </div>
    </section>
  );
}