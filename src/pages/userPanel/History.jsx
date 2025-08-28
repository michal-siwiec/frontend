import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';
import { GET_ORDERS } from 'graphql/queries/order.js';
import { formatTimestamp } from 'utils/helpers.ts';
import fetchFileOnLocalFileSystem from 'services/fetchFileOnLocalFileSystem.ts';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LoadingModal from 'components/modals/LoadingModal.jsx';
import ErrorModal from 'components/modals/ErrorModal.jsx';
import Pagination from 'components/Pagination.jsx';
import Tooltip from 'components/Tooltip.jsx';

const History = () => {
  const blockName = 'history';
  const quantityPerPage = 5;
  const { loggedUserId } = useSelector((store) => store.user);
  const [activePage, setActivePage] = useState(0);
  const [downloadInvoiceTooltipOpen, setDownloadInvoiceTooltipOpen] = useState(false);
  const [fetchingOrdersError, setFetchingOrdersError] = useState(false);

  const { loading, data } = useQuery(
    GET_ORDERS,
    {
      variables: { input: { userId: loggedUserId, pagination: { page: activePage, quantityPerPage } } },
      fetchPolicy: 'network-only',
      onError: () => setFetchingOrdersError(true)
    }
  );

  const handlePaginationOnChange = (pageNumber) => setActivePage(pageNumber - 1);

  const downloadInvoice = (orderID) => {
    const key = `users/${loggedUserId}/invoices/${orderID}.pdf`;
    const fileName = `Faktura za zamówienie: ${orderID}`;

    fetchFileOnLocalFileSystem(key, fileName);
  };

  return (
    <div className={blockName}>
      <h1 className={`${blockName}__header`}>Historia zamówień</h1>
      {
        data && (
          <Fragment>
            <table className={`${blockName}__table`}>
              <thead>
                <tr className={`${blockName}__table-row`}>
                  <td className={`${blockName}__table-col ${blockName}__table-col--thead`}>
                    Numer zamówienia
                    <div
                      className={`${blockName}__tooltip-wrapper`}
                      onMouseEnter={() => setDownloadInvoiceTooltipOpen(true)}
                      onMouseLeave={() => setDownloadInvoiceTooltipOpen(false)}
                    >
                      <Tooltip
                        open={downloadInvoiceTooltipOpen}
                        headerText="Pobierz fakturę!"
                      >
                        <LiveHelpIcon className={`${blockName}__tooltip-prompt`} />
                      </Tooltip>
                    </div>
                  </td>
                  <td className={`${blockName}__table-col ${blockName}__table-col--thead`}>Cena całkowita</td>
                  <td className={`${blockName}__table-col ${blockName}__table-col--thead`}>Data zakupu</td>
                </tr>
              </thead>
              <tbody>
                {
                  data.orders.orders.map(({ id, totalPrice, createdAt }) => (
                    <tr className={`${blockName}__table-row`}>
                      <td
                        className={`${blockName}__table-col
                                    ${blockName}__table-col--invoice-download`}
                        onClick={() => downloadInvoice(id)}
                      >
                        {id}
                      </td>
                      <td className={`${blockName}__table-col`}>{totalPrice} zł</td>
                      <td className={`${blockName}__table-col`}>{formatTimestamp(createdAt)}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            <Pagination
              activePage={activePage}
              onChange={handlePaginationOnChange}
              itemsQuantity={data.orders.allOrdersQuantity}
              quantityPerPage={quantityPerPage}
            />
          </Fragment>
        )
      }
      <LoadingModal
        isOpen={loading}
        info="Trwa pobieranie historii twoich zamówień"
      />
      <ErrorModal
        isOpen={fetchingOrdersError}
        handleOnClose={() => setFetchingOrdersError(false)}
        info="Niestety nie udało się pobrać historii twoich zamówień."
      />
    </div>
  );
};

export default History;
