
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  background?: 'light' | 'offset';
  once?: boolean;
}

export default function AnimatedSection({
  children,
  background = 'light',
  once = false
}: AnimatedSectionProps) {
  const bgColors = {
    light: 'bg-white',
    offset: 'bg-gray-50'
  };

  return (
    <section className={`py-24 ${bgColors[background]}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}