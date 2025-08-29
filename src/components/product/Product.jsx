import { exact, number, string } from 'prop-types';
import clsx from 'clsx';
import useFetchUrl from 'hooks/useFetchUrl.jsx';
import ShadowedContainer from 'components/containers/ShadowedContainer.jsx';
import { APPEARING_IN_SEQUENCE } from 'data/animations.ts';
import { formatPrice } from 'utils/helpers.ts';
import AddToBasketForm from './AddToBasketForm.jsx';
import SelectedQuantityPresenter from './SelectedQuantityPresenter.tsx';

const Product = ({ product, index, mode }) => {
  const blockName = 'product';
  const { id, name, price, pictureBucket, pictureKey } = product;
  const isMainMode = mode === 'main';
  const isBasketMode = mode === 'basket';

  const pictureURL = useFetchUrl({ bucket: pictureBucket, key: pictureKey });

  return (
    <ShadowedContainer
      classNames={clsx(blockName, isBasketMode && `${blockName}--basket`)}
      animationAttributes={{
        variants: APPEARING_IN_SEQUENCE,
        custom: index,
        initial: APPEARING_IN_SEQUENCE.hidden,
        animate: APPEARING_IN_SEQUENCE.visible
      }}
      dataTestid="product-container"
    >
      <div className={`${blockName}__img-wrapper`}>
        <img
          src={pictureURL}
          alt="Zdjęcie produktu"
          className={`${blockName}__img`}
        />
      </div>
      <div className={`${blockName}__info-wrapper`}>
        <h2 className={`${blockName}__name`}>{name}</h2>
        <h3 className={`${blockName}__price`}>{formatPrice(price)} zł</h3>
        <p className={`${blockName}__description`}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, consequatur. Ex blanditiis accusamus nam molestiae officiis totam repellendus labore beatae ullam quas, hic facilis fugit illum tenetur, magni est distinctio.
        </p>
        { isMainMode && <AddToBasketForm product={product} /> }
        { isBasketMode && <SelectedQuantityPresenter productID={id} /> }
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
