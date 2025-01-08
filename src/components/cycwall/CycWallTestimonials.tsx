
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "The cyc wall at cult.studio is perfect for our commercial shoots. The seamless backdrop saves us hours in post-production.",
    author: "Sarah Johnson",
    role: "Commercial Director"
  },
  {
    quote: "Having access to such a professional cyc wall studio has elevated our photography work to new heights.",
    author: "Michael Chen",
    role: "Fashion Photographer"
  },
  {
    quote: "The versatility of the cyc wall allows us to create any environment we imagine. It's a game-changer.",
    author: "Emily Rodriguez",
    role: "Creative Director"
  }
];

export default function CycWallTestimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16"
        >
          What Professionals Say
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-purple-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}