
import { motion } from 'framer-motion';
import { Monitor, Speaker, Camera, Wifi, Database, Shield } from 'lucide-react';

const specs = [
  {
    icon: <Monitor className="w-8 h-8" />,
    title: "4K Displays",
    description: "Ultra HD monitoring and playback systems"
  },
  {
    icon: <Speaker className="w-8 h-8" />,
    title: "Pro Audio",
    description: "High-end sound system and acoustics"
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: "Camera Systems",
    description: "Professional grade recording equipment"
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Network",
    description: "High-speed fiber connectivity"
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "Storage",
    description: "Enterprise-grade data management"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Security",
    description: "24/7 monitored facility access"
  }
];

export default function TechnicalSpecs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Technical Specifications</h2>
          <p className="text-lg text-gray-600">
            State-of-the-art equipment and infrastructure for professional productions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#f78800] rounded-2xl p-8 text-white"
            >
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-6">
                {spec.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{spec.title}</h3>
              <p className="text-gray-200">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}