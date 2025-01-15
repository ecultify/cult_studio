
import FadeInView from '../animations/FadeInView';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://player.vimeo.com/external/517088067.hd.mp4?s=1d6cd1d85a365f8d990a4f5f9c3564eff2764e0d&profile_id=175" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <FadeInView>
            <h2 className="text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] leading-tight text-white mb-8">
              <span className="block mt-6">
                A cult that believes in the power of{' '}
                <span className="text-[#f78800] font-bold">creative tech.</span>
              </span>
            </h2>
          </FadeInView>
          
          <FadeInView delay={0.2}>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mt-12 leading-relaxed font-bold text-white">
              Our core business is the technical- and logistical planning as well as the execution of event, show and live touring productions.
            </p>
          </FadeInView>

          <FadeInView delay={0.3}>
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Button to="/about" variant="primary" size="lg">
                Learn More About Us
              </Button>
              <Button to="/contact" variant="ghost" size="lg">
                Get in Touch
              </Button>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}