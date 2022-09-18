import React, { Fragment, useState, useContext } from 'react';
import { OrderContext } from 'contexts/contexts.js';
import CheckBox from 'components/inputs/CheckBox.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const DeliveryMethod = () => {
  const blockName = 'delivery-method';
  const [inPostChecked, setInPostChecked] = useState(true);
  const [dpdChecked, setDpdChecked] = useState(false);
  const [pickUpAtThePoint, setPickUpAtThePoint] = useState(false);
  const [selectedDeliveryMethod, setSelectedDevliveryMethod] = useState('inpost');
  const { step, setStep } = useContext(OrderContext);

  const handleInPostOnClick = () => {
    setInPostChecked(true);
    setDpdChecked(false);
    setPickUpAtThePoint(false);
    setSelectedDevliveryMethod('inpost');
  };

  const handleDpdOnClick = () => {
    setDpdChecked(true);
    setInPostChecked(false);
    setPickUpAtThePoint(false);
    setSelectedDevliveryMethod('dpd');
  };

  const handlePickUpAtheThePointOnClick = () => {
    setPickUpAtThePoint(true);
    setInPostChecked(false);
    setDpdChecked(false);
    setSelectedDevliveryMethod('pickUpAtThePoint');
  };

  const handleSubmitOnMouseDown = () => {
    setStep(3);
  };

  // if (step !== 1) return null;

  return (
    <div className={`order__form-part-container ${blockName}`}>
      <CheckBox
        onClick={handleInPostOnClick}
        checked={inPostChecked}
        label={(
          <Fragment>
            <i className={`icon-logo-inpost ${blockName}__icon ${blockName}__icon--inpost`} />
            <span className={`${blockName}__icon-label`}>(10,99 zł)</span>
          </Fragment>
        )}
      />
      <CheckBox
        onClick={handleDpdOnClick}
        checked={dpdChecked}
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
        value="Zapisz"
      />
    </div>
  );
};

export default DeliveryMethod;
