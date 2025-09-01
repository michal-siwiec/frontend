import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import useRedirect from 'hooks/useRedirect';
import { MemoryRouter } from 'react-router-dom';

// TODO: v7_startTransition

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}));

describe('useRedirect', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('calls navigate when shouldRedirect is true', () => {
    renderHook(() => useRedirect({ path: '/target', shouldRedirect: true }), {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });

    expect(mockNavigate).toHaveBeenCalledWith('/target');
  });

  it('does not call navigate when shouldRedirect is false', () => {
    renderHook(() => useRedirect({ path: '/target', shouldRedirect: false }), {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });

    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
