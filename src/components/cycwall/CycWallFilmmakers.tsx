
import { motion } from 'framer-motion';
import { Camera, Video, Monitor, Lightbulb } from 'lucide-react';

const reasons = [
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Perfect Backgrounds",
    description: "Create flawless, distraction-free backgrounds for any type of shoot"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Versatile Lighting",
    description: "Achieve precise lighting control and consistent results"
  },
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "Virtual Production",
    description: "Ideal for green screen and virtual production workflows"
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Creative Freedom",
    description: "Unlimited possibilities for creative expression"
  }
];

export default function CycWallFilmmakers() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Why Filmmakers Love Our Cyc Wall</h2>
          <p className="text-lg text-gray-600">
            Professional creators choose our cyc wall studio for its versatility, quality, and 
            state-of-the-art features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}