import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formattedPrice } from '../../../../utils/price.js';
import { generateAddedProductPayload, generatePossibleProductQuantity } from './helper.js';
import { addProductToBasket } from '../../../../redux/basket/actionCreators.js';
import { propTypes } from './props.js';

const Product = ({
  product: {
    id,
    name,
    price,
    availableQuantity,
    picturePath
  }
}) => {
  const productsInBasket = useSelector(({ basket: { addedProducts } }) => addedProducts);
  const dispatch = useDispatch();
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const blockName = 'product';
  const possibleProductQuantity = generatePossibleProductQuantity({ id, productsInBasket, availableQuantity });

  const selectQuantityOnChange = ({ target: { value } }) => {
    setSelectedQuantity(value);
  };

  const handleAddToBasketOnMouseDown = () => {
    const payload = generateAddedProductPayload({ id, selectedQuantity });
    dispatch(addProductToBasket(payload));
  };

  return (
    <div className={blockName}>
      <div className={`${blockName}__img-wrapper`}>
        <img
          src={picturePath}
          alt="Zdjęcie produktu"
          className={`${blockName}__img`}
        />
      </div>
      <div className={`${blockName}__info-wrapper`}>
        <h2 className={`${blockName}__name`}>{name}</h2>
        <h3 className={`${blockName}__price`}>{formattedPrice(price)} zł</h3>
        <p className={`${blockName}__description`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, consequatur. Ex blanditiis accusamus nam molestiae officiis totam repellendus labore beatae ullam quas, hic facilis fugit illum tenetur, magni est distinctio.
        </p>
        <div className={`${blockName}__button-wrapper`}>
          <input
            type="number"
            min={1}
            max={possibleProductQuantity}
            value={selectedQuantity}
            className={`${blockName}__button`}
            onChange={selectQuantityOnChange}
          />
          <div
            className={`${blockName}__button ${blockName}__button--add-to-basket`}
            onMouseDown={handleAddToBasketOnMouseDown}
            role="button"
            tabIndex={0}
          >
            Dodaj do koszyka
          </div>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = propTypes;

export default Product;
