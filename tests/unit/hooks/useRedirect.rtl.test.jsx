import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import useRedirect from 'hooks/useRedirect.jsx';

jest.mock('react-router-dom', () => {
  const actual = jest.requireActual('react-router-dom');

  return { ...actual, useNavigate: jest.fn() };
});

describe('useRedirect', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useNavigate.mockReturnValue(mockNavigate);
  });

  // TODO: Simplify it after update react router to v7
  it('calls navigate when shouldRedirect is true', () => {
    renderHook(() => useRedirect({ path: '/target', shouldRedirect: true }), {
      wrapper: ({ children }) => (
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          {children}
        </MemoryRouter>
      )
    });

    expect(mockNavigate).toHaveBeenCalledWith('/target');
  });

  // TODO: Simplify it after update react router to v7
  it('does not call navigate when shouldRedirect is false', () => {
    renderHook(() => useRedirect({ path: '/target', shouldRedirect: false }), {
      wrapper: ({ children }) => (
        <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          {children}
        </MemoryRouter>
      )
    });

    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
