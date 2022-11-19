import React from 'react';
import { exact, number, string } from 'prop-types';
import clsx from 'clsx';
import ShadowedContainer from 'components/containers/ShadowedContainer.jsx';
import { appearingInSequence } from 'data/animations.js';
import { formattedPrice } from 'utils/helpers.js';
import AddToBasketForm from './AddToBasketForm.jsx';
import SelectedQuantityPresenter from './SelectedQuantityPresenter.jsx';

const Product = ({ product, index, mode }) => {
  const blockName = 'product';
  const { id, name, price, picturePath } = product;
  const isMainMode = mode === 'main';
  const isBasketMode = mode === 'basket';

  return (
    <ShadowedContainer
      classNames={clsx(blockName, isBasketMode && `${blockName}--basket`)}
      animationAttributes={{
        variants: appearingInSequence,
        custom: index,
        initial: appearingInSequence.hidden,
        animate: appearingInSequence.visible
      }}
      dataCy={`product-${index}`}
    >
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
        { isMainMode && <AddToBasketForm product={product} /> }
        { isBasketMode && <SelectedQuantityPresenter id={id} /> }
      </div>
    </ShadowedContainer>
  );
};

Product.propTypes = exact({
  id: string.isRequired,
  name: string.isRequired,
  price: number.isRequired,
  availableQuantity: number.isRequired
}).isRequired;

export default Product;
