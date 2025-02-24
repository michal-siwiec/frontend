import { store } from 'redux_/store.js';
import { generateAddOrderPayload } from 'services/orders.js';

describe('generateAddOrderPayload', () => {
  it('returns proper payload based on input', () => {
    jest.spyOn(store, 'getState').mockReturnValue({
      basket: {
        addedProducts: [
          { id: 'a9758911-6438-4b0b-abf4-a6193940503f', quantity: 2 },
          { id: '70347f38-31e5-4944-bde0-65973140de2a', quantity: 5 },
        ],
      },
      order: {
        clientDetails: {
          name: 'Michal',
          surname: 'Siwiec',
          street: 'Beskidzka',
          city: 'Gliwice',
          postalCode: '44-100',
          street: 'Gruszczynskiego',
          email: 'siwiec.michal724@gmail.com',
          phoneNumber: '724131140'
        },
        delivery: {
          inPost: false,
          dpd: true,
          pickUpAtThePoint: false
        },
        payment: {
          cashPayment: true,
          traditionalTransfer: false
        },
      },
      user: {
        loggedUserId: '2e785e4-93d5-42f4-aea1-8196b26a4f49'
      },
    });

    const result = generateAddOrderPayload();

    expect(result).toEqual({
      name: 'Michal',
      surname: 'Siwiec',
      street: 'Beskidzka',
      city: 'Gliwice',
      postalCode: '44-100',
      street: 'Gruszczynskiego',
      email: 'siwiec.michal724@gmail.com',
      phoneNumber: '724131140',
      deliveryMethod: 'dpd',
      paymentMethod: 'cash_payment',
      userId: '2e785e4-93d5-42f4-aea1-8196b26a4f49',
      productsOrder: [
        { productId: 'a9758911-6438-4b0b-abf4-a6193940503f', productQuantity: 2 },
        { productId: '70347f38-31e5-4944-bde0-65973140de2a', productQuantity: 5 },
      ]
    });
  });
});
