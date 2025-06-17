import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from 'layouts/topBar/elements/Logo.jsx';

describe('Logo', () => {
  it('renders logo image inside a link to "/"', () => {
    // TODO: Fix this
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Logo />
      </MemoryRouter>
    );

    const logoImg = screen.getByAltText('Budoman logo');
    expect(logoImg).toBeInTheDocument();

    const logoLink = logoImg.closest('a');
    expect(logoLink).toHaveAttribute('href', '/');
  });
});
