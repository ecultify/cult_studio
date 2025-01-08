
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    details: "123 Studio Street, Creative District, CA 90210"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    details: "+1 (555) 123-4567"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    details: "hello@cultstudio.com"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Hours",
    details: "Mon-Sun: 24/7 (By Appointment)"
  }
];

export default function ContactInfo() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 mb-4">
                {info.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}