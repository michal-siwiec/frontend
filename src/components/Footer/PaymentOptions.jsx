import React from 'react';
import { paymentOptionsInfo } from '../../data/components/footer.jsx';
import CenteringContainer from '../reusable/CenteringContainer.jsx';

const PaymentOptions = () => (
  <CenteringContainer
    isItem
    columnQuantity={4}
    className="footer__payment-options"
  >
    <ul className="footer__payment-options-list">
      {
        paymentOptionsInfo.map(({ src, alt }) => (
          <li>
            <img
              src={src}
              alt={alt}
              className="footer__payment-options-picture"
            />
          </li>
        ))
      }
    </ul>
  </CenteringContainer>
);

export default PaymentOptions;
