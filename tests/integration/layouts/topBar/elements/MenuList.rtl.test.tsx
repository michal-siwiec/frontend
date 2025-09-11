import React from 'react';
import { screen } from '@testing-library/react';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders';
import MenuList from 'layouts/topBar/elements/MenuList';
import { TOP_BAR_MENU_ROUTING } from 'data/routing';

describe('MenuList ', () => {
  it('renders menu list correctly', () => {
    renderWithProviders(<MenuList />);

    TOP_BAR_MENU_ROUTING.forEach(({ path, name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByRole('link', { name })).toHaveAttribute('href', path);
    });
  });
});
