import { addProductToBasket } from 'services/basket.ts';

describe('addProductToBasket', () => {
  it('adds product to basket when is not added yet', () => {
    const addedProducts = [
      {
        id: 'c6b47d89-2a35-4201-a9ed-564cf06c993b',
        quantity: 2,
        attributes: {
          availableQuantity: 30,
          id: 'c6b47d89-2a35-4201-a9ed-564cf06c993b',
          name: 'Syropian fundamentowy 15 cm',
          pictureBucket: 'budoman-development',
          pictureKey: 'styropian_fundamentowy_15cm.png',
          price: 178
        }
      }
    ];

    addProductToBasket({
      addedProducts,
      payload: {
        id: '000082f4-69e1-41f9-ba0b-b4004439642f',
        quantity: 2,
        attributes: {
          availableQuantity: 125,
          id: '000082f4-69e1-41f9-ba0b-b4004439642f',
          name: 'Taśma kalenicowa',
          pictureBucket: 'budoman-development',
          pictureKey: 'images/products/roof_ accessories/tasma_kalenicowa.jpeg',
          price: 55
        }
      }
    });

    expect(addedProducts).toEqual(
      [
        {
          id: 'c6b47d89-2a35-4201-a9ed-564cf06c993b',
          quantity: 2,
          attributes: {
            availableQuantity: 30,
            id: 'c6b47d89-2a35-4201-a9ed-564cf06c993b',
            name: 'Syropian fundamentowy 15 cm',
            pictureBucket: 'budoman-development',
            pictureKey: 'styropian_fundamentowy_15cm.png',
            price: 178
          }
        },
        {
          id: '000082f4-69e1-41f9-ba0b-b4004439642f',
          quantity: 2,
          attributes: {
            availableQuantity: 125,
            id: '000082f4-69e1-41f9-ba0b-b4004439642f',
            name: 'Taśma kalenicowa',
            pictureBucket: 'budoman-development',
            pictureKey: 'images/products/roof_ accessories/tasma_kalenicowa.jpeg',
            price: 55
          }
        }
      ]
    );
  });

  it('increses quantity when product is already added', () => {
    const addedProducts = [
      {
        id: '000082f4-69e1-41f9-ba0b-b4004439642f',
        quantity: 2,
        attributes: {
          availableQuantity: 125,
          id: '000082f4-69e1-41f9-ba0b-b4004439642f',
          name: 'Taśma kalenicowa',
          pictureBucket: 'budoman-development',
          pictureKey: 'images/products/roof_ accessories/tasma_kalenicowa.jpeg',
          price: 55
        }
      }
    ];

    addProductToBasket({
      addedProducts,
      payload: {
        id: '000082f4-69e1-41f9-ba0b-b4004439642f',
        quantity: 13,
        attributes: {
          availableQuantity: 125,
          id: '000082f4-69e1-41f9-ba0b-b4004439642f',
          name: 'Taśma kalenicowa',
          pictureBucket: 'budoman-development',
          pictureKey: 'images/products/roof_ accessories/tasma_kalenicowa.jpeg',
          price: 55
        }
      }
    });

    expect(addedProducts).toEqual(
      [
        {
          id: '000082f4-69e1-41f9-ba0b-b4004439642f',
          quantity: 15,
          attributes: {
            availableQuantity: 125,
            id: '000082f4-69e1-41f9-ba0b-b4004439642f',
            name: 'Taśma kalenicowa',
            pictureBucket: 'budoman-development',
            pictureKey: 'images/products/roof_ accessories/tasma_kalenicowa.jpeg',
            price: 55
          }
        }
      ]
    );
  });
});
