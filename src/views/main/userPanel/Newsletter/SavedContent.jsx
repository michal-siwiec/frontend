import React, { Fragment } from 'react';
import SubmitButton from 'components/SubmitButton.jsx';

const SavedContent = () => {
  const blockName = 'newsletter';

  return (
    <Fragment>
      <h3 className={`${blockName}__status-header`}>Status: Zapisany</h3>
      <p>
        Cieszymy się, że jesteś z nami.<br />
        Liczymy, że treści które reguarnie od nas otrzymujesz sprawiają, że stajesz się bardziej świadomym człowiekiem jak i nabywcą.<br />
        Gdybyś z jakiegoś powodu nie chciał otrzymywać naszego newslettera możesz łatwo wypisać się klikając w przycisk poniżej.
      </p>
      <SubmitButton
        onMouseDown={() => alert('Unsubscribing!')}
        value="Wypisz się!"
        classNames={`${blockName}__submit-button`}
      />
    </Fragment>
  );
};

export default SavedContent;
