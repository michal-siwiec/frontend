import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'types/store';
import useRedirect from 'hooks/useRedirect';

const UserPanel = () => {
  const blockName = 'user-panel';
  const { loggedUserId } = useSelector((store: RootState) => store.user);

  useRedirect({ path: '/', shouldRedirect: !loggedUserId });

  return (
    <div className={blockName}>
      <div className={`${blockName}__action-toggler-wrapper`}>
        <div className={`${blockName}__toggle-action-tile`}>
          <Link to="data" className={`${blockName}__action-tile-link`}>
            Moje dane
          </Link>
        </div>
        <div className={`${blockName}__toggle-action-tile`}>
          <Link to="history" className={`${blockName}__action-tile-link`}>
            Historia
          </Link>
        </div>
        <div className={`${blockName}__toggle-action-tile`}>
          <Link to="change-password" className={`${blockName}__action-tile-link`}>
            Zmień hasło
          </Link>
        </div>
        <div className={`${blockName}__toggle-action-tile`}>
          <Link to="newsletter" className={`${blockName}__action-tile-link`}>
            Newsletter
          </Link>
        </div>
        <div className={`${blockName}__toggle-action-tile`}>
          <Link to="remove-account" className={`${blockName}__action-tile-link`}>
            Usuń konto
          </Link>
        </div>
      </div>
      <div className={`${blockName}__action-wrapper`}>
        <Outlet />
      </div>
    </div>
  );
};

export default UserPanel;
