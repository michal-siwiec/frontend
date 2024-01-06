import React, { useState, useEffect } from 'react';
import { exact, bool } from 'prop-types';
import { useSearchParams, useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import useScrollIntoElement from 'hooks/useScrollIntoElement.jsx';
import { GET_PRODUCTS } from 'graphql/queries/products.js';
import generateHeaderCaption from 'services/products/generateHeaderCaption.js';
import LoadingModal from 'components/modals/LoadingModal.jsx';
import Product from 'components/product/Product.jsx';
import Pagination from 'components/Pagination.jsx';

const Products = ({ arePromoted }) => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const blockName = 'products';
  const quantityPerPage = 5;
  const productType = searchParams.get('type');
  const headerCaption = generateHeaderCaption({ arePromoted, productType });
  const [activePage, setActivePage] = useState(0);
  const { loading, error, data } = useQuery(
    GET_PRODUCTS,
    {
      variables: {
        input: { promoted: arePromoted, type: productType, pagination: { page: activePage, quantityPerPage } }
      }
    }
  );

  useScrollIntoElement({ data, locationKey: location.key, elementSelector: '.main .products__header' });

  const handlePaginationOnChange = (pageNumber) => setActivePage(pageNumber - 1);

  if (loading) return <LoadingModal isOpen={loading} info="Trwa pobieranie produktów!" />;
  if (error) return <h1>Error...</h1>;

  const { productsDetails: { quantity, products } } = data;

  return (
    <div className={`main__${blockName} ${blockName}`}>
      <h2 className={`${blockName}__header`} data-cy="products-header">
        {headerCaption}
      </h2>
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

Products.propTypes = exact({ arePromoted: bool }).isRequired;
Products.defaultProps = { arePromoted: false };

export default Products;
