import React from 'react';

const Products = () => {
  const productsBlockName = 'products'
  const productBlockName = 'product'
  const products = [
    {
      name: 'Młotek ślusarski 500g',
      price: 37.99
    },
    {
      name: 'Młotek ślusarski 500g',
      price: 37.99
    },
    {
      name: 'Młotek ślusarski 500g',
      price: 37.99
    },
    {
      name: 'Młotek ślusarski 500g',
      price: 37.99
    },
    {
      name: 'Młotek ślusarski 500g',
      price: 37.99
    },
    {
      name: 'Młotek ślusarski 500g',
      price: 37.99
    },
    {
      name: 'Młotek ślusarski 500g',
      price: 37.99
    },
    {
      name: 'Młotek ślusarski 500g',
      price: 37.99
    }
  ]

  return (
    <div className={`main__${productsBlockName} ${productsBlockName}`}>
      <h2 className={`${productsBlockName}__header`}>Polecane produkty</h2>
      <div className={`${productsBlockName}__list`}>
        {
          products.map(({ name, price }) => (
            <div className={`${productsBlockName}__${productBlockName} ${productBlockName}`}>
              <div className={`${productBlockName}__img-wrapper`}>
                <img
                  src="https://olx-development.s3.eu-central-1.amazonaws.com/m%C5%82otek.jpeg"
                  alt=""
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
