import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../../graphql/queries/product';
import Product from './Product.jsx';

const Products = () => {
  const blockName = 'products'

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  const { products } = data;

  return (
    <div className={`main__${blockName} ${blockName}`}>
      <h2 className={`${blockName}__header`}>Polecane produkty</h2>
      <div className={`${blockName}__list`}>
        { products.map((product) => <Product productProperties={product} />) }
      </div>
    </div>
  )
};

export default Products;
