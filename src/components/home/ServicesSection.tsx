
import { motion } from 'framer-motion';
import { Camera, Video, Users, Clock } from 'lucide-react';

const services = [
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

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold">Why Choose Our Studio</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}