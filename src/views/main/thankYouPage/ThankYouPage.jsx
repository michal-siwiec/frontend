import React from 'react';
import { useSelector } from 'react-redux';
import FileDownloader from 'services/fileDownloader.js';
import { STORAGE_URL } from 'utils/environment.js';
import TraditionalTransferContent from './TraditionalTransferContent.jsx';
import SubmitButton from 'components/SubmitButton.jsx';

const ThankYouPage = () => {
  const blockName = 'thank-you-page';
  const { user: { loggedUserId }, order: { orderID, paymentMethod } } = useSelector((store) => store);
  const isTraditionalTransfer = paymentMethod === 'traditional_transfer';

  const downloadInvoice = () => {
    const fileName = `Faktura za zamówienie: ${orderID}`;
    const pathToFile = `${STORAGE_URL}/users/${loggedUserId}/invoices/${orderID}.pdf`;

    new FileDownloader({ url: pathToFile, outputName: fileName }).call();
  };

  return (
    <div className={blockName}>
      <h1 className={`${blockName}__main-header`}>Dziękujemy za dokonanie zakupu!</h1>
      { isTraditionalTransfer && <TraditionalTransferContent /> }
      <SubmitButton
        value="Pobierz fakturę w formacie PDF"
        classNames={`${blockName}__download-invoice-button`}
        onMouseDown={downloadInvoice}
      />
    </div>
  );
};

export default ThankYouPage;
