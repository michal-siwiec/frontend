import React, { Fragment } from 'react';
import { scrollIntoElement } from 'utils/helpers.ts';

const UnsavedContent = () => {
  const blockName = 'newsletter';

  const handleSaveToNewsletterClick = () => {
    scrollIntoElement('#newsletter-form');
  };

  return (
    <Fragment>
      <h3 className={`${blockName}__status-header`}>Status: Niezapisany</h3>
      <p className={`${blockName}__unsave-text`}>
        Aktualnie jesteś niezapisany na nasz budowlany newsletter
        <span
          className={`${blockName}__link-to-newsletter`}
          onClick={handleSaveToNewsletterClick}
          role="presentation"
        >
          (Zapisz się).
        </span>
        <br />
        Serdecznie zachęcamy do zapisu.<br />
        Co tydzień wysyłamy ciekawostki ze świata budownictwa oraz informację o naszych najnowszych promocjach.<br />
        Zapis na newsletter jest całkowicie darmowy, w każdej chwili możesz równie rezygnować.
      </p>
    </Fragment>
  );
};

export default UnsavedContent;
