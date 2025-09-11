export const APPEARING_IN_SEQUENCE = {
  visible: (i: number) => ({ opacity: 1, transition: { delay: i * 0.3 } }),
  hidden: { opacity: 0 }
};
