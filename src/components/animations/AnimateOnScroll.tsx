
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: 'fade' | 'slide' | 'scale';
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  triggerOnce?: boolean;
}

export default function AnimateOnScroll({
  children,
  animation = 'fade',
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  triggerOnce = true
}: AnimateOnScrollProps) {
  const { ref, isInView } = useIntersectionObserver({ triggerOnce });

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    };

    switch (animation) {
      case 'slide':
        const offset = 50;
        const slideOffset = {
          up: { y: offset },
          down: { y: -offset },
          left: { x: offset },
          right: { x: -offset }
        }[direction];
        return {
          hidden: { ...baseVariants.hidden, ...slideOffset },
          visible: { opacity: 1, x: 0, y: 0 }
        };
      case 'scale':
        return {
          hidden: { ...baseVariants.hidden, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        };
      default:
        return baseVariants;
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={getAnimationVariants()}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}