import { screen, fireEvent, waitFor } from '@testing-library/react';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.tsx';
import Basket from 'layouts/topBar/elements/basket/Basket.tsx';

describe('Basket', () => {
  it('renders basket when some product is added', () => {
    const preloadedState = {
      basket: {
        addedProducts: [
          {
            id: 'da97aa73-f0e4-4a17-9157-9f17454c73f3',
            quantity: 3,
            attributes: {
              id: 'da97aa73-f0e4-4a17-9157-9f17454c73f3',
              name: 'Bloczek Termalika',
              price: 124.99,
              availableQuantity: 1000,
              pictureKey: 'images/products/foundation_materials/bloczke_termalika.jpeg',
              pictureBucket: 'budoman-development'
            }
          }
        ]
      }
    };

    renderWithProviders(<Basket />, { preloadedState });

    expect(screen.getByText('374.97 zł')).toBeInTheDocument();
    expect(screen.getByTestId('basket-icon')).toBeInTheDocument();
    expect(screen.queryByText('Twój koszyk jest pusty!')).not.toBeInTheDocument();
    expect(screen.queryByText('Twój koszyk')).not.toBeInTheDocument();
  });

  it('displays and hides empty basket modal after click in icon when basket is empty', async () => {
    const preloadedState = { basket: { addedProducts: [] } };

    renderWithProviders(<Basket />, { preloadedState });

    fireEvent.mouseDown(screen.getByTestId('basket-icon'));

    await waitFor(() => {
      expect(screen.getByText('Twój koszyk jest pusty!')).toBeInTheDocument();
    });

    const modalBackdrop = screen.getByRole('presentation');
    fireEvent.keyDown(modalBackdrop, { key: 'Escape', code: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByText('Twój koszyk jest pusty!')).not.toBeInTheDocument();
    });
  });

  it('displays and hides basket summary modal after click in icon when basket has added products', async () => {
    const preloadedState = {
      basket: {
        addedProducts: [
          {
            id: 'da97aa73-f0e4-4a17-9157-9f17454c73f3',
            quantity: 3,
            attributes: {
              id: 'da97aa73-f0e4-4a17-9157-9f17454c73f3',
              name: 'Bloczek Termalika',
              price: 124.99,
              availableQuantity: 1000,
              pictureKey: 'images/products/foundation_materials/bloczke_termalika.jpeg',
              pictureBucket: 'budoman-development'
            }
          }
        ]
      }
    };

    renderWithProviders(<Basket />, { preloadedState });

    fireEvent.mouseDown(screen.getByTestId('basket-icon'));

    await waitFor(() => {
      expect(screen.getByText('Twój koszyk')).toBeInTheDocument();
    });

    const modalBackdrop = screen.getByRole('presentation');
    fireEvent.keyDown(modalBackdrop, { key: 'Escape', code: 'Escape' });

    await waitFor(() => {
      expect(screen.queryByText('Twój koszyk')).not.toBeInTheDocument();
    });
  });
});
