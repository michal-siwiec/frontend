import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuList from 'layouts/topBar/elements/MenuList.jsx';
import { TOP_BAR_MENU_ROUTING } from 'data/routing.js';

describe('MenuList ', () => {
  it('renders menu list correctly', () => {
    // TODO: Fix this
    render(
      <MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <MenuList />
      </MemoryRouter>
    );

    TOP_BAR_MENU_ROUTING.forEach(({ path, name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', path);
    });
  });
});
