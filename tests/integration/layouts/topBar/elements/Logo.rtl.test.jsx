import { screen } from '@testing-library/react';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';
import Logo from 'layouts/topBar/elements/Logo.jsx';

describe('Logo', () => {
  it('renders logo image inside a link to "/"', () => {
    renderWithProviders(<Logo />);

    const logoImg = screen.getByAltText('Budoman logo');
    expect(logoImg).toBeInTheDocument();

    const logoLink = logoImg.closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
