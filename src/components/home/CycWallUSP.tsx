
import { motion } from 'framer-motion';
import { Camera, Video, Monitor } from 'lucide-react';
import Button from '../ui/Button';

const features = [
  {
    title: "Perfect for Photography",
    description: "Create flawless, distraction-free backgrounds for professional photo shoots",
    icon: <Camera className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1595521969746-7e9f07692d8e?auto=format&fit=crop&w=800"
  },
  {
    title: "Video Production",
    description: "Ideal for commercial videos and virtual productions with seamless backgrounds",
    icon: <Video className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800"
  },
  {
    title: "Virtual Production",
    description: "State-of-the-art virtual production capabilities for modern content creation",
    icon: <Monitor className="w-8 h-8" />,
    image: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=800"
  }
];

export default function CycWallUSP() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">Why Choose Our Cyc Wall</h2>
          <p className="text-lg text-gray-600 mb-8">
            Experience the versatility and quality of our professional cyclorama wall studio
          </p>
          <Button
            to="/cyc-wall" 
            variant="primary"
            className="bg-purple-600 hover:bg-purple-700"
          >
            Explore Our Cyc Wall Studio
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}