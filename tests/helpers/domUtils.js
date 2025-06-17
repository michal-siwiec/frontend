import { act } from '@testing-library/react-hooks';

export const resizeWindow = (width) => {
  act(() => {
    window.innerWidth = width;
    window.dispatchEvent(new Event('resize'));
  });
};
