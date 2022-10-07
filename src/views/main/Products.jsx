import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from 'graphql/queries/products.js';

const Products = () => {
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const { loading, error, data } = useQuery(GET_PRODUCTS, { variables: { type } });

  return <h1>Products</h1>;
};

export default Products;
