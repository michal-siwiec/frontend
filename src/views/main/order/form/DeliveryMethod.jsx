import React, { Fragment, useContext } from 'react';
import { OrderContext } from 'contexts/contexts.js';
import { useSelector, useDispatch } from 'react-redux';
import { setDeliveryMethod } from 'redux_/order/actionsCreator.js';
import CheckBox from 'components/inputs/CheckBox.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const DeliveryMethod = () => {
  const blockName = 'delivery-method';
  const { setStep } = useContext(OrderContext);
  const { inPost, dpd, pickUpAtThePoint } = useSelector((store) => store.order.delivery);
  const dispatch = useDispatch();

  const handleInPostOnClick = () => {
    dispatch(setDeliveryMethod({ inPost: true, dpd: false, pickUpAtThePoint: false }));
  };

  const handleDpdOnClick = () => {
    dispatch(setDeliveryMethod({ inPost: false, dpd: true, pickUpAtThePoint: false }));
  };

  const handlePickUpAtheThePointOnClick = () => {
    dispatch(setDeliveryMethod({ inPost: false, dpd: false, pickUpAtThePoint: true }));
  };

  const handleSubmitOnMouseDown = () => {
    setStep(2);
  };

  return (
    <div className={`order__form-part-container ${blockName}`}>
      <CheckBox
        onClick={handleInPostOnClick}
        checked={inPost}
        label={(
          <Fragment>
            <i className={`icon-logo-inpost ${blockName}__icon ${blockName}__icon--inpost`} />
            <span className={`${blockName}__icon-label`}>(10,99 zł)</span>
          </Fragment>
        )}
      />
      <CheckBox
        onClick={handleDpdOnClick}
        checked={dpd}
        label={(
          <Fragment>
            <i className={`icon-logo-dpd ${blockName}__icon`} />
            <span className={`${blockName}__icon-label`}>(10,99 zł)</span>
          </Fragment>
        )}
      />
      <CheckBox
        onClick={handlePickUpAtheThePointOnClick}
        checked={pickUpAtThePoint}
        label="Odbiór w punkcie (0,00 zł)"
      />
      <SubmitButton
        classNames="button--client-details"
        onMouseDown={handleSubmitOnMouseDown}
        value="Dalej"
      />
    </div>
  );
};

export default DeliveryMethod;
