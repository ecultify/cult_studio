
import { motion } from 'framer-motion';
import { Camera, Palette, Maximize, Video, Users, Clock } from 'lucide-react';

const features = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Professional Photography",
    description: "State-of-the-art equipment for stunning photo shoots"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Production",
    description: "Perfect for commercial and creative video shoots"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Support",
    description: "Professional crew available on request"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Flexible Hours",
    description: "24/7 studio access for your convenience"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Why Choose Our Studio
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View All Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}