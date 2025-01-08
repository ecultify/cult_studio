
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-12">
              Ready to bring your vision to life? We're here to help make it happen.
              Fill out the form below and we'll get back to you shortly.
            </p>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f78800] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f78800] focus:border-transparent"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#f78800] focus:border-transparent"
                  required
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-[#f78800] text-white rounded-lg font-semibold hover:bg-[#e67a00] transition-colors"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[500px] rounded-2xl overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&w=1000&q=80"
              alt="Studio Contact"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2">Visit Our Studio</h3>
              <p className="text-gray-200">
                123 Creative Street<br />
                Art District, CA 90210
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}