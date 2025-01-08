
import FadeInView from '../animations/FadeInView';
import { Camera, Video, Monitor } from 'lucide-react';

const possibilities = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Photography",
    description: "Perfect for fashion shoots, product photography, and portrait sessions",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Production",
    description: "Ideal for commercials, music videos, and corporate content",
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800"
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Virtual Production",
    description: "Create immersive virtual environments and special effects",
    image: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=800"
  }
];

export default function CycWallPossibilities() {
  return (
    <section id="possibilities" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeInView className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Endless Possibilities</h2>
          <p className="text-lg text-gray-600">
            Discover what you can create with our professional cyc wall studio
          </p>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {possibilities.map((item, index) => (
            <FadeInView
              key={index}
              delay={index * 0.1}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.description}</p>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}