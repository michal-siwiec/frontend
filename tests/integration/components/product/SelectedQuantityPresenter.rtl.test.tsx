import React from 'react';
import { screen } from '@testing-library/react';
import { generatePreloadedState } from 'tests/integration/helpers/preloadedState';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders';
import SelectedQuantityPresenter from 'components/product/SelectedQuantityPresenter';

describe('SelectedQuantityPresenter', () => {
  it('renders component successfully', () => {
    const preloadedState = generatePreloadedState({
      basketStatePresent: true,
      basketState: {
        addedProducts: [
          {
            id: '088fc480-ce29-4d10-852a-971d60a01e59',
            quantity: 3,
            attributes: {
              id: '088fc480-ce29-4d10-852a-971d60a01e59',
              availableQuantity: 97,
              name: 'Listwa wykończeniowa Fakro',
              pictureBucket: 'budoman-development',
              pictureKey: 'images/products/stairway/Listwa wykończeniowa Fakro.jpeg',
              price: 19.99,
              __typename: 'ProductObject'
            }
          }
        ]
      }
    });

    renderWithProviders(<SelectedQuantityPresenter productID="088fc480-ce29-4d10-852a-971d60a01e59" />, { preloadedState });

    const input = screen.getByDisplayValue('3');
    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });
});
