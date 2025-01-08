
import FadeInView from '../animations/FadeInView';
import AnimatedButton from '../ui/AnimatedButton';
import { Camera, Palette, Maximize, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Professional Photography",
    description: "State-of-the-art equipment for stunning photo shoots"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Customizable Colors",
    description: "Versatile cyc wall with adjustable lighting and colors"
  },
  {
    icon: <Maximize className="w-8 h-8" />,
    title: "Spacious Studio",
    description: "2000 sq ft of versatile shooting space"
  }
];

export default function CycWallFeatures() {
  return (
    <section className="relative py-32">
      {/* Background with pre-loaded blur */}
      <div className="absolute inset-0 z-0 backdrop-blur-lg">
        <img 
          src="https://images.unsplash.com/photo-1594032194509-0056023973b2?auto=format&fit=crop&w=1920"
          alt="Studio Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeInView>
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-semibold text-white leading-tight">
              The Perfect Canvas for
              <span className="text-[#f78800]"> Your Vision</span>
            </h2>
            <p className="text-xl text-gray-300 mt-8">
              Experience our state-of-the-art cyclorama wall studio, designed for professional photography and video production.
            </p>
          </div>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {features.map((feature, index) => (
            <FadeInView key={index} delay={index * 0.2}>
              <div className="bg-white/10 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-16 h-16 bg-[#f78800] rounded-full flex items-center justify-center text-white mb-8">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.4}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <AnimatedButton href="/cyc-wall" variant="primary">
                Explore Our Cyc Wall Studio
              </AnimatedButton>
              <AnimatedButton href="/contact" variant="secondary">
                Book a Session
              </AnimatedButton>
            </div>
            <p className="text-gray-400 mt-8">
              Experience the difference a professional cyclorama wall can make in your next project
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}