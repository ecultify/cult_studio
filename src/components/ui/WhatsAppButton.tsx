
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  // Replace with your actual WhatsApp number
  const whatsappNumber = '+919876543210';
  const message = encodeURIComponent('Hi! I would like to know more about your services.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <div className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow">
        <MessageCircle className="w-6 h-6" />
      </div>
      <span className="absolute -top-10 right-0 bg-white px-4 py-2 rounded-lg shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </motion.a>
  );
}