import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const TraditionalTransferContent = () => {
  const blockName = 'thank-you-page';
  const { orderID, totalPrice } = useSelector((store) => store.order);

  return (
    <Fragment>
      <h4 className={`${blockName}__secondary-header`}>Prosimy o dokonanie płatności według poniszych danych:</h4>
      <div className={`${blockName}__transfer-info-wrapper`}>
        <ul>
          <li>
            <span className={`${blockName}__transfer-info-label`}>Kwota do zapłaty:</span>
            <span className={`${blockName}__transfer-info-value`}>{totalPrice} zł</span>
          </li>
          <li>
            <span className={`${blockName}__transfer-info-label`}>Numer konta:</span>
            <span className={`${blockName}__transfer-info-value`}>39 1240 6960 4539 1123 2002 9161</span>
          </li>
          <li>
            <span className={`${blockName}__transfer-info-label`}>Tytuł przelewu:</span>
            <span className={`${blockName}__transfer-info-value`}>
              Zamówienie {orderID} - Budoman
            </span>
          </li>
          <li>
            <span className={`${blockName}__transfer-info-label`}>Nazwa odbiorcy:</span>
            <span className={`${blockName}__transfer-info-value`}>Budoman</span>
          </li>
          <li>
            <span className={`${blockName}__transfer-info-label`}>Adres odbiorcy:</span>
            <span className={`${blockName}__transfer-info-value`}>Żywiec 34-300, Beskidzka 50</span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default TraditionalTransferContent;
