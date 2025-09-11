import { act } from '@testing-library/react-hooks';

export const resizeWindow = (width: number) => {
  act(() => {
    window.innerWidth = width;
    window.dispatchEvent(new Event('resize'));
  });
};
