import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from 'graphql/queries/products.js';
import { loadProducts } from 'redux_/products/actionsCreator.js';
import Product from 'components/product/Product.jsx';

const PromotedProducts = () => {
  const blockName = 'products';
  const dispatch = useDispatch();
  const { loading, error, data } = useQuery(GET_PRODUCTS, { variables: { promoted: false } });

  useEffect(() => {
    if (!data) return;

    dispatch(loadProducts(data.promotedProducts));
  }, [data]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error</h1>;

  const { products: promotedProducts } = data;

  return (
    <div className={`main__${blockName} ${blockName}`}>
      <h2 className={`${blockName}__header`}>Polecane produkty</h2>
      <div className={`${blockName}__list`}>
        {
          promotedProducts.map((product, index) => (
            <Product
              product={product}
              key={product.id}
              index={index}
              mode="main"
            />
          ))
        }
      </div>
    </div>
  );
};

export default PromotedProducts;
