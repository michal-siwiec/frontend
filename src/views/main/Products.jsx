import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from 'graphql/queries/products.js';
import { scrollIntoElement } from 'utils/helpers.js';
import LoadingModal from 'components/modals/LoadingModal.jsx';
import Product from 'components/product/Product.jsx';
import Pagination from 'components/Pagination.jsx';
import translatedCathegoriesNames from 'dictionaries/cathegoriesNames.js';

const Products = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const productType = searchParams.get('type');
  const blockName = 'products';
  const quantityPerPage = 5;
  const headerCaption = productType
    ? `Produkty z kategori "${translatedCathegoriesNames[productType]}"`
    : 'Wszystkie produkty';
  const [activePage, setActivePage] = useState(0);
  const { loading, error, data } = useQuery(
    GET_PRODUCTS,
    { variables: { input: { type: productType, pagination: { page: activePage, quantityPerPage } } } }
  );

  const handlePaginationOnChange = (pageNumber) => setActivePage(pageNumber - 1);

  useEffect(() => {
    if (!data) return;

    scrollIntoElement({ elementSelector: '.main .products__header' });
  }, [location.key, data]);

  if (loading) return <LoadingModal info="Trwa pobieranie produktów!" />;
  if (error) return <h1>Error...</h1>;

  const { productsDetails: { quantity, products } } = data;

  return (
    <div className={`main__${blockName} ${blockName}`}>
      <h2 className={`${blockName}__header`}>{headerCaption}</h2>
      <div className={`${blockName}__list`}>
        {
          products.map((product, index) => (
            <Product
              product={product}
              key={product.id}
              index={index}
              mode="main"
            />
          ))
        }
      </div>
      <Pagination
        activePage={activePage}
        onChange={handlePaginationOnChange}
        itemsQuantity={quantity}
        quantityPerPage={quantityPerPage}
      />
    </div>
  );
};

export default Products;
