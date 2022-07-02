import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formattedPrice } from '../../../../utils/price';
import { generateAddedProductPayload } from './helper';
import { addProductToBasket, clearBasket } from '../../../../redux/basket/actionCreators';
import { STORAGE_URL } from '../../../../constants/environment';
import { propTypes } from './props';

const Product = ({ product: { id, name, price, availableQuantity } }) => {
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const blockName = 'product';

  const selectQuantityOnChange = ({ target: { value } }) => {
    setSelectedQuantity(value);
  };

  const handleAddToBasketOnClick = () => {
    const payload = generateAddedProductPayload({ id, selectedQuantity });
    dispatch(addProductToBasket(payload))
  };

  return (
    <div className={blockName}>
      <div className={`${blockName}__img-wrapper`}>
          <img
            src={`${STORAGE_URL}/m%C5%82otek.jpeg`}
            alt="Zdjęcie produktu"
            className={`${blockName}__img`}
          />
        </div>
        <div className={`${blockName}__info-wrapper`}>
          <h2 className={`${blockName}__name`}>{name}</h2>
          <h3 className={`${blockName}__price`}>{formattedPrice(price)} zł</h3>
          <p className={`${blockName}__description`}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat ducimus, ea impedit id explicabo nihil obcaecati at nisi? Excepturi facilis voluptatibus facere similique doloremque deleniti amet sapiente neque? Quasi?
          </p>
          <div className={`${blockName}__button-wrapper`}>
            <input
              type="number"
              min={1}
              max={availableQuantity}
              value={selectedQuantity}
              className={`${blockName}__button`}
              onChange={selectQuantityOnChange}
            />
            <div
              className={`${blockName}__button`}
              onClick={handleAddToBasketOnClick}
            >
              Dodaj do koszyka
            </div>
          </div>
      </div>
    </div>
  )
};

Product.propTypes = propTypes;

export default Product;
