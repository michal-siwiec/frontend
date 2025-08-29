import { DeepReadonly } from 'utility-types';

// TODO: Consider adding new type - ProductAttributes

export type Product = DeepReadonly<{
  id: string,
  quantity: number,
  attributes: {
    availableQuantity: number,
    id: string,
    name: string,
    pictureBucket: string,
    pictureKey: string,
    price: number,
    __typename: string
  }
}>

export type Products = Array<Product>;

export type ProductInBasket = Omit<Product, 'quantity'> & { quantity: number }
export type ProductsInBasket = Array<ProductInBasket>;
