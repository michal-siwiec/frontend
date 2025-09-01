import { DeepReadonly } from 'utility-types';

// TODO Why do I keep inside Product type quantity? Product should keep only attributes...

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

export type GetProductsResponse = DeepReadonly<{
  productsDetails: {
    products: Array<Product['attributes']>,
    quantity: number,
    __typename: string
  }
}>;
