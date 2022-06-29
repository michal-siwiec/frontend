import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../../../graphql/queries/product';
import Product from './Product.jsx';
import { loadProducts } from '../../../redux/products/actionsCreator';

const Products = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  const [productsAlreadyInserted, setProductsAlreadyInserted] = useState(false);
  const dispatch = useDispatch();
  const blockName = 'products';
  const products = data?.products || [];

  const insertProductsToStore = () => {
    if (!products || productsAlreadyInserted) return;

    dispatch(loadProducts(products));
    setProductsAlreadyInserted(true);
  };

  if (loading) return <h1>Loading...</h1>
  if (error) return <h1>Error</h1>

  insertProductsToStore();

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
