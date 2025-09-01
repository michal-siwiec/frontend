import React from 'react';
import { exact, element } from 'prop-types';
import useIsLogged from 'hooks/useIsLogged.jsx';

type EmptyOpinionsListProps = { textAreaRef: React.RefObject<HTMLTextAreaElement> }

const EmptyOpinionsList = ({ textAreaRef }: EmptyOpinionsListProps) => {
  const blockName = 'opinions';
  const isLogged = useIsLogged();

  const handleSetFocusOnMouseDown = () => {
    const timeToSetFocus = 0;
    // It'll not work without setTimeout
    setTimeout(() => textAreaRef!.current?.focus(), timeToSetFocus);
  };

  return (
    <div className={`${blockName}__empty-opinions-wrapper`}>
      <h3 className={`${blockName}__empty-opinion-header`}>
        Niestety nie posiadamy jeszcze żadnych opini
      </h3>
      {
        isLogged && (
          <span
            className={`${blockName}__empty-opinion-scroller`}
            onMouseDown={handleSetFocusOnMouseDown}
            role="button"
            tabIndex={0}
          >
            Podziel się z nami swoją!
          </span>
        )
      }
    </div>
  );
};

EmptyOpinionsList.propTypes = exact({
  textAreaRef: element.isRequired
}).isRequired;

export default EmptyOpinionsList;
