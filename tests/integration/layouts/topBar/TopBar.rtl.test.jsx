import { screen } from '@testing-library/react';
import TopBar from 'layouts/topBar/TopBar.tsx';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.ts';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';
import { resizeWindow } from 'tests/helpers/domUtils.js';

describe('TopBar', () => {
  it('renders MobileContent when window width is below mobile breakpoint', () => {
    resizeWindow(WIDTH_BREAKPOINTS.lg - 1);
    renderWithProviders(<TopBar />);

    expect(screen.queryByText('Logowanie')).not.toBeInTheDocument();
    expect(screen.queryByText('Rejestracja')).not.toBeInTheDocument();
  });

  it('renders DesktopContent when window width is above mobile breakpoint', () => {
    resizeWindow(WIDTH_BREAKPOINTS.lg + 1);
    renderWithProviders(<TopBar />);

    expect(screen.getByText('Logowanie')).toBeInTheDocument();
    expect(screen.getByText('Rejestracja')).toBeInTheDocument();
  });
});
