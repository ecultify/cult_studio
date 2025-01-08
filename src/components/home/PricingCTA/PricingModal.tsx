
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PricingModal({ isOpen, onClose }: PricingModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative w-full max-w-md bg-white rounded-lg mx-4"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            {/* Content */}
            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold">Get Our Pricing Guide</h3>
                <p className="text-sm text-gray-600 mt-2">
                  Complete the form below and we'll send you our detailed pricing information
                </p>
              </div>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f78800] focus:border-[#f78800]"
                />
                
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f78800] focus:border-[#f78800]"
                />
                
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#f78800] focus:border-[#f78800]"
                />

                <button
                  type="submit"
                  className="w-full py-3 bg-[#f78800] text-white font-semibold rounded-md hover:bg-[#e67a00] transition-colors"
                >
                  Send Me the Guide
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}