import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_PROMOTED_PRODUCTS } from '../../../graphql/queries/promotedProducts';
import { loadProducts } from '../../../redux/products/actionsCreator';
import Product from './product/Index.jsx';

const Products = () => {
  const { loading, error, data } = useQuery(GET_PROMOTED_PRODUCTS);
  const [productsAlreadyInserted, setProductsAlreadyInserted] = useState(false);
  const dispatch = useDispatch();
  const blockName = 'products';
  const products = data?.promotedProducts || [];

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
        {
          products.map((product) => <Product product={product} key={product.id} />)
        }
      </div>
    </div>
  )
};

export default Products;
