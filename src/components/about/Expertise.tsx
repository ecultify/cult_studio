
import FadeInView from '../animations/FadeInView';
import { Camera, Video, Monitor, Lightbulb, PenTool, Users } from 'lucide-react';

const expertiseAreas = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photography",
    description: "Professional photography services with state-of-the-art equipment"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Videography",
    description: "High-quality video production for commercial and creative projects"
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Virtual Production",
    description: "Cutting-edge virtual production solutions using advanced technology"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Creative Direction",
    description: "Expert guidance to bring your creative vision to life"
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Post-Production",
    description: "Professional editing and post-production services"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Seamless collaboration with experienced professionals"
  }
];

export default function Expertise() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInView className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Expertise</h2>
          <p className="text-gray-600 text-lg">
            We combine technical excellence with creative innovation to deliver exceptional results 
            across multiple disciplines.
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <FadeInView
              key={index}
              delay={index * 0.1}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-[#f78800]/10 rounded-full flex items-center justify-center text-[#f78800] mb-6">
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}