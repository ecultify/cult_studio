
import { motion } from 'framer-motion';
import { Camera, Video, Palette, Maximize } from 'lucide-react';

const benefits = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Perfect for Photography",
    description: "Create seamless backgrounds for professional photo shoots"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Production",
    description: "Ideal for commercial videos and virtual productions"
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Customizable Colors",
    description: "Change the wall color to match your creative vision"
  },
  {
    icon: <Maximize className="w-8 h-8" />,
    title: "Spacious Setup",
    description: "Large shooting area with high ceilings for versatile setups"
  }
];

export default function CycWallBenefits() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mx-auto mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}