import React from 'react';
import { useSelector } from 'react-redux';
import FileDownloader from 'services/fileDownloader.js';
import { STORAGE_URL } from 'utils/environment.js';
import SubmitButton from 'components/SubmitButton.jsx';

const ThankYouPage = () => {
  const blockName = 'thank-you-page';
  const { user: { loggedUserId }, order: { orderID, totalPrice } } = useSelector((store) => store);

  const downloadInvoice = () => {
    const fileName = `Faktura za zamówienie: ${orderID}`;
    const pathToFile = `${STORAGE_URL}/users/${loggedUserId}/invoices/${orderID}.pdf`;

    new FileDownloader({ url: pathToFile, outputName: fileName }).call();
  };

  return (
    <div className={blockName}>
      <h1 className={`${blockName}__main-header`}>Dziękujemy za dokonanie zakupu!</h1>
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
      <SubmitButton
        value="Pobierz fakturę w formacie PDF"
        classNames={`${blockName}__download-invoice-button`}
        onMouseDown={downloadInvoice}
      />
    </div>
  );
};

export default ThankYouPage;
