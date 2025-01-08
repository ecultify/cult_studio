
import { motion } from 'framer-motion';
import FAQItem from '../faq/FAQItem';

const faqs = [
  {
    question: "What is the size of your cyc wall?",
    answer: "Our cyc wall spans 40 feet wide by 24 feet high, with a 20-foot deep shooting space, providing ample room for large-scale productions.",
    category: "Studio"
  },
  {
    question: "Do you provide lighting equipment?",
    answer: "Yes, we offer professional lighting equipment packages. Our standard setup includes LED panels, softboxes, and various modifiers.",
    category: "Equipment"
  },
  {
    question: "Can I book the studio for half-day sessions?",
    answer: "Yes, we offer both half-day (4-hour) and full-day (8-hour) booking options to accommodate different project needs.",
    category: "Booking"
  }
];

export default function CycWallFAQ() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our cyc wall studio.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}