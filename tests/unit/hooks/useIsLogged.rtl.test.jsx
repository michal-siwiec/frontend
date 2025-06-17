import { renderHook } from '@testing-library/react-hooks';
import useIsLogged from 'hooks/useIsLogged.jsx';
import createProvidersWrapper from 'tests/unit/helpers/createProvidersWrapper.jsx';

describe('useIsLogged', () => {
  it('returns true if loggedUserId exists in store', () => {
    const preloadedState = { user: { loggedUserId: '088fc480-ce29-4d10-852a-971d60a01e59' } };
    const { wrapper } = createProvidersWrapper(preloadedState);
    const { result: { current } } = renderHook(() => useIsLogged(), { wrapper });

    expect(current).toBe(true);
  });

  it('returns false if loggedUserId is null in store', () => {
    const preloadedState = { user: { loggedUserId: null } };
    const { wrapper } = createProvidersWrapper(preloadedState);
    const { result: { current } } = renderHook(() => useIsLogged(), { wrapper });

    expect(current).toBe(false);
  });
});
