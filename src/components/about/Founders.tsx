
import FadeInView from '../animations/FadeInView';
import { Linkedin, Mail } from 'lucide-react';

const founders = [
  {
    name: "Mayur",
    role: "Co-Founder & Creative Director",
    bio: "A visionary leader with extensive experience in creative production and event management. Mayur brings artistic excellence and innovative thinking to every project.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800"
  },
  {
    name: "Vivek",
    role: "Co-Founder & Technical Director",
    bio: "A technology expert with a passion for pushing creative boundaries. Vivek leads the technical innovation that powers our cutting-edge productions.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800"
  }
];

export default function Founders() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInView className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Meet Our Founders</h2>
          <p className="text-lg text-gray-600">
            The visionaries behind cult.studio, bringing together technology and creativity
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <FadeInView
              key={index}
              delay={index * 0.2}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-[#f78800] font-medium mb-4">{founder.role}</p>
                <p className="text-gray-600 mb-6">{founder.bio}</p>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-600 hover:text-[#f78800] transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href="#" className="text-gray-600 hover:text-[#f78800] transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}