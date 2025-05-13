import React from 'react';
import { screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import DesktopContent from 'layouts/topBar/DesktopContent.jsx';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.js';
import { resizeWindow } from 'tests/helpers/domUtils.js';

describe('DesktopContent', () => {
  beforeEach(() => {
    resizeWindow(WIDTH_BREAKPOINTS.lg + 1);

    // TODO: Fix this
    renderWithProviders(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <DesktopContent />
      </MemoryRouter>
    );
  });

  it('renders DesktopContent in desktop mood correctly', () => {
    expect(screen.queryByTestId('MenuIcon')).not.toBeInTheDocument();
    expect(screen.getByAltText('Budoman logo')).toBeInTheDocument();
    expect(screen.queryByText('Logowanie')).toBeInTheDocument();
    expect(screen.queryByText('Rejestracja')).toBeInTheDocument();
    expect(screen.queryByText('Produkty')).toBeInTheDocument();
    expect(screen.queryByText('O nas')).toBeInTheDocument();
    expect(screen.queryByText('Opinie')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Wyszukaj produktów')).toBeInTheDocument();
  });
});
