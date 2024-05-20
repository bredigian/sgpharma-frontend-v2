import { useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export const useCustomAnimation = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return {
    ref,
    controls,
  };
};
