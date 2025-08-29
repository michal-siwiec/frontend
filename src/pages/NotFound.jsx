import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShadowedContainer from 'components/containers/ShadowedContainer.tsx';

const NotFound = () => {
  const blockName = 'not-found';
  const navigate = useNavigate();

  const redirectToMainPageAfterTimeout = () => {
    const remainingTime = 5000;
    return setTimeout(() => navigate('/'), remainingTime);
  };

  useEffect(() => {
    const timeout = redirectToMainPageAfterTimeout();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <ShadowedContainer classNames={blockName}>
      <h1 className={`${blockName}__header`}>404</h1>
      <p className={`${blockName}__description`}>
        Wygląda na to, że szukana przez Ciebie strona nie istnieje!
      </p>
      <p className={`${blockName}__description ${blockName}__description--secondary`}>
        Za chwilę zostaniesz przekierowany na stronę główną
      </p>
    </ShadowedContainer>
  );
};

export default NotFound;
