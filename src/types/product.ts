import { DeepReadonly } from 'utility-types';

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
