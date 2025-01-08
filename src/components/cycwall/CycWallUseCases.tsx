
import { motion } from 'framer-motion';

const useCases = [
  {
    image: "https://images.unsplash.com/photo-1595521969746-7e9f07692d8e?auto=format&fit=crop&w=800",
    title: "Fashion Photography",
    description: "Create stunning fashion editorials with seamless backgrounds"
  },
  {
    image: "https://images.unsplash.com/photo-1589830400053-5600d42d5e7f?auto=format&fit=crop&w=800",
    title: "Product Shoots",
    description: "Showcase products in a professional, distraction-free environment"
  },
  {
    image: "https://images.unsplash.com/photo-1574427797991-2abcef40ebf5?auto=format&fit=crop&w=800",
    title: "Virtual Sets",
    description: "Transform the space with virtual production techniques"
  }
];

export default function CycWallUseCases() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Popular Use Cases</h2>
          <p className="text-lg text-gray-600">
            Discover how our cyc wall studio can elevate your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}