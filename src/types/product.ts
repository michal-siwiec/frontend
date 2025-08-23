export type Product = {
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
}
