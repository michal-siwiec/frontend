import { generateAddedProductPayload, generateHeaderCaption, generatePossibleProductQuantity } from 'services/products.js';

describe('generateAddedProductPayload', () => {
  test('should return proper object with properties', () => {
    const response = generateAddedProductPayload({ product: { id: '000082f4-69e1-41f9-ba0b-b4004439642f', name: 'Product name' }, selectedQuantity: 4 });

    expect(response).toEqual({
      id: '000082f4-69e1-41f9-ba0b-b4004439642f',
      quantity: 4,
      attributes: { id: '000082f4-69e1-41f9-ba0b-b4004439642f', name: 'Product name' }
    });
  });
});

describe('generateHeaderCaption', () => {
  test('should return promoted products inscription', () => {
    const response = generateHeaderCaption({ arePromoted: true, productType: null });

    expect(response).toBe('Polecane produkty');
  });

  test('should return all products inscription', () => {
    const response = generateHeaderCaption({ arePromoted: false, productType: null });

    expect(response).toBe('Wszystkie produkty');
  });

  test('should return product from specific category inscription', () => {
    const response = generateHeaderCaption({ arePromoted: false, productType: 'foundationZone' });

    expect(response).toBe('Produkty z kategori "Strefa fundamentu"');
  });
});

describe('generatePossibleProductQuantity', () => {
  it('should subtract the quantity of the product already in the basket', () => {
    const productsInBasket = [{ id: '123', quantity: 2 }, { id: '456', quantity: 1 }];
    const result = generatePossibleProductQuantity({ productID: '123', productsInBasket, availableQuantity: 5 });

    expect(result).toBe(3);
  });

  it('should return full available quantity if product is not in the basket', () => {
    const productsInBasket = [{ id: '123', quantity: 2 }, { id: '456', quantity: 1 }];
    const result = generatePossibleProductQuantity({ productID: '789', productsInBasket, availableQuantity: 5 });

    expect(result).toBe(5);
  });
});
