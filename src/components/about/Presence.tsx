
import FadeInView from '../animations/FadeInView';
import SlideInView from '../animations/SlideInView';
import { Globe, Users, Award, Zap } from 'lucide-react';

const stats = [
  { number: '10+', label: 'Years Experience', icon: <Globe className="w-6 h-6" /> },
  { number: '500+', label: 'Projects Completed', icon: <Zap className="w-6 h-6" /> },
  { number: '200+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
  { number: '15+', label: 'Industry Awards', icon: <Award className="w-6 h-6" /> }
];

export default function Presence() {
  return (
    <section id="presence" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SlideInView direction="left">
            <h2 className="text-4xl font-bold mb-6">Our Global Presence</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              Since our inception, we've established ourselves as a leading force in the creative industry, 
              serving clients across the globe with innovative solutions and unparalleled expertise.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <FadeInView
                  key={index}
                  delay={index * 0.1}
                  className="text-center p-6 rounded-xl bg-gray-50"
                >
                  <div className="w-12 h-12 bg-[#f78800] rounded-full flex items-center justify-center text-white mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#f78800] mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </FadeInView>
              ))}
            </div>
          </SlideInView>

          <SlideInView direction="right" className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000"
              alt="Team Collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-8 -right-8 bg-[#f78800] text-white p-8 rounded-2xl">
              <p className="text-2xl font-bold">Global Impact</p>
              <p>Serving clients worldwide</p>
            </div>
          </SlideInView>
        </div>
      </div>
    </section>
  );
}