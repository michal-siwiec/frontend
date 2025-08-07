import React, { Fragment, useContext } from 'react';
import { OrderContext } from 'contexts/contexts.js';
import { useSelector, useDispatch } from 'react-redux';
import { setDeliveryMethod } from 'redux_/order/actionsCreator.js';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ApprovalIcon from '@mui/icons-material/Approval';
import CheckBox from 'components/inputs/CheckBox.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const DeliveryMethod = () => {
  const blockName = 'delivery-method';
  const { setStep } = useContext(OrderContext);
  const { inPost, dpd, pickUpAtThePoint } = useSelector((store) => store.order.delivery);
  const dispatch = useDispatch();

  const handleInPostOnChange = () => {
    dispatch(setDeliveryMethod({ inPost: true, dpd: false, pickUpAtThePoint: false }));
  };

  const handleDpdOnChange = () => {
    dispatch(setDeliveryMethod({ inPost: false, dpd: true, pickUpAtThePoint: false }));
  };

  const handlePickUpAtheThePointOnChange = () => {
    dispatch(setDeliveryMethod({ inPost: false, dpd: false, pickUpAtThePoint: true }));
  };

  const handleSubmitOnMouseDown = () => setStep(2);

  return (
    <div className={`order__form-part-container ${blockName}`}>
      <CheckBox
        onChange={handleInPostOnChange}
        checked={inPost}
        label={(
          <Fragment>
            <LocalShippingIcon className={`${blockName}__icon ${blockName}__icon--inpost`} />
            <span className={`${blockName}__icon-label`}>Inpost (10,99 zł)</span>
          </Fragment>
        )}
        dataTestId="inpost-checkbox"
      />
      <CheckBox
        onChange={handleDpdOnChange}
        checked={dpd}
        label={(
          <Fragment>
            <PostAddIcon className={`${blockName}__icon`} />
            <span className={`${blockName}__icon-label`}>DPD (15,99 zł)</span>
          </Fragment>
        )}
        dataTestId="dpd-checkbox"
      />
      <CheckBox
        onChange={handlePickUpAtheThePointOnChange}
        checked={pickUpAtThePoint}
        label={(
          <Fragment>
            <ApprovalIcon className={`${blockName}__icon`} />
            <span className={`${blockName}__icon-label`}>Odbiór w punkcie (0,00 zł)</span>
          </Fragment>
        )}
        dataTestId="pickup-at-the-point-checkbox"
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
