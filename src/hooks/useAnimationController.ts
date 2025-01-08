import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { animation } from '../constants/design';

interface AnimationControllerProps {
  threshold?: number;
  once?: boolean;
}

export function useAnimationController({ 
  threshold = animation.threshold,
  once = false 
}: AnimationControllerProps = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once
  });

  return {
    ref,
    isInView,
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    },
    transition: {
      duration: animation.duration.normal,
      ease: animation.easing
    }
  };
}