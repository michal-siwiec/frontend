export const sortByMainField = (a, b) => {
  if (a.main === 'true') return 1;
  if (b.main === 'true') return -1;

  return 0;
};
