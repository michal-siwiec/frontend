import { renderHook, act } from '@testing-library/react-hooks';
import useIsMobile from 'hooks/useIsMobile.tsx';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.ts';
import { resizeWindow } from 'tests/helpers/domUtils.ts';

describe('useIsMobile', () => {
  const originalInnerWidth = global.innerWidth;

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  afterEach(() => {
    global.innerWidth = originalInnerWidth;
  });

  it('returns true when window width is less than breakpoint', () => {
    resizeWindow(WIDTH_BREAKPOINTS.md - 1);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it('returns false when window width is greater than or equal to breakpoint', () => {
    resizeWindow(WIDTH_BREAKPOINTS.md + 100);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it('updates on window resize', () => {
    resizeWindow(WIDTH_BREAKPOINTS.md + 100);
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);

    resizeWindow(WIDTH_BREAKPOINTS.md - 50);

    expect(result.current).toBe(true);
  });
});
