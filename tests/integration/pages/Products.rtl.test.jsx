import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Products from 'pages/Products.tsx';
import renderWithProviders from 'tests/integration/helpers/renderWithProviders.jsx';
import { GET_PRODUCTS } from 'graphql/queries/products.ts';

describe('Products', () => {
  beforeAll(() => {
    Element.prototype.scrollIntoView = jest.fn();
  });

  it('displayes loading modal when products are fetching', async () => {
    const mocks = [
      {
        request: {
          query: GET_PRODUCTS,
          variables: { input: { promoted: false, type: null, pagination: { page: 0, quantityPerPage: 5 } } }
        },
        result: {
          data: {
            productsDetails: {
              quantity: 1,
              products: [
                {
                  id: 'f3044ca4-fe1b-435b-a6cb-628ff5d4e341',
                  name: 'Taśma kalenicowa',
                  price: 55.0,
                  availableQuantity: 125,
                  pictureKey: 'images/products/roof_ accessories/tasma_kalenicowa.jpeg',
                  pictureBucket: 'budoman-development',
                  __typename: 'ProductObject'
                }
              ]
            }
          }
        },
        delay: 50
      }
    ];

    renderWithProviders(<Products />, { mocks });

    expect(await screen.findByText('Trwa pobieranie produktów!')).toBeInTheDocument();
  });

  it('displayes products correctly', async () => {
    const mocks = [
      {
        request: {
          query: GET_PRODUCTS,
          variables: { input: { promoted: false, type: null, pagination: { page: 0, quantityPerPage: 5 } } }
        },
        result: {
          data: {
            productsDetails: {
              quantity: 2,
              products: [
                {
                  id: 'f3044ca4-fe1b-435b-a6cb-628ff5d4e341',
                  name: 'Taśma kalenicowa',
                  price: 55.0,
                  availableQuantity: 125,
                  pictureKey: 'images/products/roof_ accessories/tasma_kalenicowa.jpeg',
                  pictureBucket: 'budoman-development'
                },
                {
                  id: '99ae8243-3b70-4dc0-90ee-b5453a2f052d',
                  name: 'Tynk nanosilikonowy',
                  price: 80.99,
                  availableQuantity: 10,
                  pictureKey: 'images/products/constuction_chemicals/tynk_nanosilikonowy.png',
                  pictureBucket: 'budoman-development'
                }
              ]
            }
          }
        }
      }
    ];

    renderWithProviders(<Products />, { mocks });

    expect((await screen.findAllByAltText('Zdjęcie produktu')).length).toBe(2);
  });

  it("displayes error modal when products weren't downloaded successfully", async () => {
    const mocks = [
      {
        request: {
          query: GET_PRODUCTS,
          variables: {
            input: { promoted: false, type: null, pagination: { page: 0, quantityPerPage: 5 } }
          }
        },
        error: new Error('Something went wrong!')
      }
    ];

    renderWithProviders(<Products />, { mocks });

    expect(await screen.findByText('Nie udało się pobrać listy produktów')).toBeInTheDocument();
  });

  it('displayes pagination correclty', async () => {
    const mocks = [
      {
        request: {
          query: GET_PRODUCTS,
          variables: { input: { promoted: false, type: null, pagination: { page: 0, quantityPerPage: 5 } } }
        },
        result: {
          data: {
            productsDetails: {
              quantity: 26,
              products: [
                {
                  id: 'f3044ca4-fe1b-435b-a6cb-628ff5d4e341',
                  name: 'Taśma kalenicowa',
                  price: 55.0,
                  availableQuantity: 125,
                  pictureKey: 'images/products/roof_ accessories/tasma_kalenicowa.jpeg',
                  pictureBucket: 'budoman-development'
                },
                {
                  id: '99ae8243-3b70-4dc0-90ee-b5453a2f052d',
                  name: 'Tynk nanosilikonowy',
                  price: 80.99,
                  availableQuantity: 10,
                  pictureKey: 'images/products/constuction_chemicals/tynk_nanosilikonowy.png',
                  pictureBucket: 'budoman-development'
                },
                {
                  id: 'd15ef210-a015-4e70-995e-d42d04d11abf',
                  name: 'Świetlik',
                  price: 100.0,
                  availableQuantity: 30,
                  pictureKey: 'images/products/roof_ accessories/swietlik_fakro.png',
                  pictureBucket: 'budoman-development'
                },
                {
                  id: '49780aaf-e59d-408a-af4a-8b3ce1a1c186',
                  name: 'Tynk mozaikowy',
                  price: 110.99,
                  availableQuantity: 10,
                  pictureKey: 'images/products/constuction_chemicals/tynk_mozaikowy.jpeg',
                  pictureBucket: 'budoman-development'
                },
                {
                  id: '9e5fda1d-fd25-44d2-a724-c1de6b37f673',
                  name: 'Tynk akrylowy',
                  price: 120.99,
                  availableQuantity: 10,
                  pictureKey: 'images/products/constuction_chemicals/tynk akrylowy.jpeg',
                  pictureBucket: 'budoman-development'
                }
              ]
            }
          }
        }
      }
    ];

    renderWithProviders(<Products />, { mocks });

    expect((await screen.findByText('1'))).toBeInTheDocument();
    expect((await screen.findByText('2'))).toBeInTheDocument();
    expect((await screen.findByText('3'))).toBeInTheDocument();
    expect((await screen.findByText('4'))).toBeInTheDocument();
    expect((await screen.findByText('5'))).toBeInTheDocument();
    expect((await screen.findByText('»'))).toBeInTheDocument();
  });

  it('change product page after clicking in pagination bar', async () => {
    const mocks = [
      {
        request: {
          query: GET_PRODUCTS,
          variables: { input: { promoted: false, type: null, pagination: { page: 0, quantityPerPage: 5 } } }
        },
        result: {
          data: {
            productsDetails: {
              quantity: 6,
              products: [
                {
                  id: 'f3044ca4-fe1b-435b-a6cb-628ff5d4e341',
                  name: 'Taśma kalenicowa',
                  price: 55.0,
                  availableQuantity: 125,
                  pictureKey: 'images/products/roof_ accessories/tasma_kalenicowa.jpeg',
                  pictureBucket: 'budoman-development'
                },
                {
                  id: '99ae8243-3b70-4dc0-90ee-b5453a2f052d',
                  name: 'Tynk nanosilikonowy',
                  price: 80.99,
                  availableQuantity: 10,
                  pictureKey: 'images/products/constuction_chemicals/tynk_nanosilikonowy.png',
                  pictureBucket: 'budoman-development'
                },
                {
                  id: 'd15ef210-a015-4e70-995e-d42d04d11abf',
                  name: 'Świetlik',
                  price: 100.0,
                  availableQuantity: 30,
                  pictureKey: 'images/products/roof_ accessories/swietlik_fakro.png',
                  pictureBucket: 'budoman-development'
                },
                {
                  id: '49780aaf-e59d-408a-af4a-8b3ce1a1c186',
                  name: 'Tynk mozaikowy',
                  price: 110.99,
                  availableQuantity: 10,
                  pictureKey: 'images/products/constuction_chemicals/tynk_mozaikowy.jpeg',
                  pictureBucket: 'budoman-development'
                },
                {
                  id: '9e5fda1d-fd25-44d2-a724-c1de6b37f673',
                  name: 'Tynk akrylowy',
                  price: 120.99,
                  availableQuantity: 10,
                  pictureKey: 'images/products/constuction_chemicals/tynk akrylowy.jpeg',
                  pictureBucket: 'budoman-development'
                }
              ]
            }
          }
        }
      },
      {
        request: {
          query: GET_PRODUCTS,
          variables: { input: { promoted: false, type: null, pagination: { page: 1, quantityPerPage: 5 } } }
        },
        result: {
          data: {
            productsDetails: {
              quantity: 6,
              products: [
                {
                  id: '9e5fda1d-fd25-44d2-a724-c1de6b3hh573',
                  name: 'Gips szpachlowy',
                  price: 19.99,
                  availableQuantity: 400,
                  pictureKey: 'images/products/constuction_chemicals/gips_szpachlowy.jpeg',
                  pictureBucket: 'budoman-development'
                }
              ]
            }
          }
        }
      }
    ];

    renderWithProviders(<Products />, { mocks });

    expect(await screen.findByText('Taśma kalenicowa')).toBeInTheDocument();
    expect(await screen.findByText('Tynk nanosilikonowy')).toBeInTheDocument();
    expect(await screen.findByText('Świetlik')).toBeInTheDocument();
    expect(await screen.findByText('Tynk mozaikowy')).toBeInTheDocument();
    expect(await screen.findByText('Tynk akrylowy')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.queryByText('Gips szpachlowy')).not.toBeInTheDocument();
    });

    await userEvent.click(await screen.findByText('2'));

    await waitFor(() => {
      expect(screen.queryByText('Taśma kalenicowa')).not.toBeInTheDocument();
      expect(screen.queryByText('Tynk nanosilikonowy')).not.toBeInTheDocument();
      expect(screen.queryByText('Świetlik')).not.toBeInTheDocument();
      expect(screen.queryByText('Tynk mozaikowy')).not.toBeInTheDocument();
      expect(screen.queryByText('Tynk akrylowy')).not.toBeInTheDocument();
    });

    expect(await screen.findByText('Gips szpachlowy')).toBeInTheDocument();
  });
});
