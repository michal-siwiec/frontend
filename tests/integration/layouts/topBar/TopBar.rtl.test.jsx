import React from 'react';
import { screen } from '@testing-library/react';
import TopBar from 'layouts/topBar/TopBar.jsx';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.js';
import { MemoryRouter } from 'react-router-dom';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';

const resizeWindow = (width) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};

describe('TopBar', () => {
  it('renders MobileContent when window width is below mobile breakpoint', () => {
    resizeWindow(WIDTH_BREAKPOINTS.lg - 1);
    renderWithProviders(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <TopBar />
      </MemoryRouter>
    );

    expect(screen.queryByText('Logowanie')).not.toBeInTheDocument();
    expect(screen.queryByText('Rejestracja')).not.toBeInTheDocument();
  });

  it('renders DesktopContent when window width is above mobile breakpoint', () => {
    resizeWindow(WIDTH_BREAKPOINTS.lg + 1);
    renderWithProviders(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <TopBar />
      </MemoryRouter>
    );

    expect(screen.getByText('Logowanie')).toBeInTheDocument();
    expect(screen.getByText('Rejestracja')).toBeInTheDocument();
  });
});
