import React from 'react';
import { screen } from '@testing-library/react';
import renderWithProviders from '../../helpers/renderWithProviders.js'; // TODO - fix path
import SelectedQuantityPresenter from 'components/product/SelectedQuantityPresenter.jsx';

describe('SelectedQuantityPresenter', () => {
  it('renders the quantity from the store for the given product id', () => {
    const preloadedState = { basket: { addedProducts: [{ id: '088fc480-ce29-4d10-852a-971d60a01e59', quantity: 3 }] }};
    renderWithProviders(<SelectedQuantityPresenter id="088fc480-ce29-4d10-852a-971d60a01e59" />, { preloadedState });

    const input = screen.getByDisplayValue('3');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });
});
