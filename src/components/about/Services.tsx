
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=800",
    category: "Photography",
    title: "Professional Photo Sessions",
    description: "From product photography to fashion shoots, we deliver stunning visuals."
  },
  {
    image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800",
    category: "Video Production",
    title: "Commercial Video Production",
    description: "High-quality video content for brands and businesses."
  },
  {
    image: "https://images.unsplash.com/photo-1621619856624-42fd193a0661?auto=format&fit=crop&w=800",
    category: "Virtual Production",
    title: "Virtual Studio Solutions",
    description: "Cutting-edge virtual production capabilities for modern content creation."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Services We Provide</h2>
          <p className="text-gray-600 text-lg">
            We offer comprehensive creative solutions tailored to your specific needs and vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
                <span className="text-[#f78800] text-sm uppercase tracking-wider mb-2">
                  {service.category}
                </span>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-4">
                  {service.description}
                </p>
                <motion.a
                  href={`/services#${service.category.toLowerCase()}`}
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-2 text-white hover:text-[#f78800] transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}