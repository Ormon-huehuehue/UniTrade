// hooks/useInView.js
import { useInView } from 'react-intersection-observer';

export const useCustomInView = (options = {}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    ...options,
  });

  return [ref, inView];
};