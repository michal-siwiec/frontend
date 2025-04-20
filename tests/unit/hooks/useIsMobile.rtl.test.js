import { renderHook, act } from '@testing-library/react-hooks';
import useIsMobile from 'hooks/useIsMobile';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.js';

describe('useIsMobile', () => {
  const originalInnerWidth = global.innerWidth;

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    global.innerWidth = originalInnerWidth;
  });

  it('returns true when window width is less than breakpoint', () => {
    global.innerWidth = WIDTH_BREAKPOINTS.md - 1;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it('returns false when window width is greater than or equal to breakpoint', () => {
    global.innerWidth = WIDTH_BREAKPOINTS.md + 100;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it('updates on window resize', () => {
    global.innerWidth = WIDTH_BREAKPOINTS.md + 100;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);

    act(() => {
      global.innerWidth = WIDTH_BREAKPOINTS.md - 50;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current).toBe(true);
  });
});
