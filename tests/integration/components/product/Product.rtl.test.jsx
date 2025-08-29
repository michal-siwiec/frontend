import { screen } from '@testing-library/react';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';
import Product from 'components/product/Product.tsx';

jest.mock('hooks/useFetchUrl', () => ({
  __esModule: true,
  default: () => 'https://example.com/mock-image.jpg'
}));

const product = {
  id: '088fc480-ce29-4d10-852a-971d60a01e59',
  name: 'Powłoka przeciwwilgociowa',
  picture: 'images/products/foundation_materials/powłoka_przeciwwilgociowa.jpeg',
  pictureBucket: 'budoman-development',
  price: 599.99,
  availableQuantity: 3
};

describe('Product', () => {
  it('renders component successfully is main mode', () => {
    renderWithProviders(<Product product={product} index={0} mode="main" />);

    expect(screen.getByAltText('Zdjęcie produktu')).toBeInTheDocument();
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText('599,99 zł')).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum, dolor/)).toBeInTheDocument();
    expect(screen.getByText('Dodaj do koszyka')).toBeInTheDocument();
  });

  it('renders component successfully is basket mode', () => {
    const preloadedState = { basket: { addedProducts: [{ id: product.id, quantity: 222 }] } };
    renderWithProviders(<Product product={product} index={0} mode="basket" />, { preloadedState });

    expect(screen.getByAltText('Zdjęcie produktu')).toBeInTheDocument();
    expect(screen.getByText(product.name)).toBeInTheDocument();
    expect(screen.getByText('599,99 zł')).toBeInTheDocument();
    expect(screen.getByText(/Lorem ipsum, dolor/)).toBeInTheDocument();
    expect(screen.getByDisplayValue(222)).toBeInTheDocument();
  });
});
