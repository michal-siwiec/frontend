import { screen } from '@testing-library/react';
import DesktopContent from 'layouts/topBar/DesktopContent.tsx';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.tsx';
import { WIDTH_BREAKPOINTS } from 'data/breakpoints.ts';
import { resizeWindow } from 'tests/helpers/domUtils.ts';

describe('DesktopContent', () => {
  beforeEach(() => {
    resizeWindow(WIDTH_BREAKPOINTS.lg + 1);
    renderWithProviders(<DesktopContent />);
  });

  it('renders DesktopContent in desktop mood correctly', () => {
    expect(screen.queryByTestId('MenuIcon')).not.toBeInTheDocument();
    expect(screen.getByAltText('Budoman logo')).toBeInTheDocument();
    expect(screen.queryByText('Logowanie')).toBeInTheDocument();
    expect(screen.queryByText('Rejestracja')).toBeInTheDocument();
    expect(screen.queryByText('Produkty')).toBeInTheDocument();
    expect(screen.queryByText('Opinie')).toBeInTheDocument();
  });
});
