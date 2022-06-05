import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../../graphql/queries/product';

const Products = () => {
  const productsBlockName = 'products'
  const productBlockName = 'product'

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  const { products } = data;

  return (
    <div className={`main__${productsBlockName} ${productsBlockName}`}>
      <h2 className={`${productsBlockName}__header`}>Polecane produkty</h2>
      <div className={`${productsBlockName}__list`}>
        {
          products.map(({ name, price, picture }) => (
            <div className={`${productsBlockName}__${productBlockName} ${productBlockName}`}>
              <div className={`${productBlockName}__img-wrapper`}>
                <img
                  src={picture}
                  alt={name}
                  className={`${productBlockName}__img`}
                />
              </div>
              <div className={`${productBlockName}__name`}>{name}</div>
              <div className={`${productBlockName}__basket`}>
                <p className={`${productBlockName}__basket-price`}>{`${price} zł`}</p>
                <span className={`${productBlockName}__basket-tax`}>Zawiera 23% VAT, bez kosztu dostawy</span>
                <div className={`${productBlockName}__basket-buttons-wrapper`}>
                  <button
                    className={`${productBlockName}__basket-button ${productBlockName}__basket-button--quantity`}
                  >
                    1
                  </button>
                  <button
                    className={`${productBlockName}__basket-button ${productBlockName}__basket-button--add`}
                  >
                    Do koszyka
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Products;
