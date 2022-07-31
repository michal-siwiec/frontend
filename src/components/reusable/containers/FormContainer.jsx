import React from 'react';
import {
  exact,
  oneOfType,
  string,
  element
} from 'prop-types';

const FormContainer = ({ headerChildren, formChildren }) => {
  const blockName = 'form-container';

  return (
    <div className={blockName}>
      <div className={`${blockName}__wrapper`}>
        <h2 className={`${blockName}__header`}>
          {headerChildren}
        </h2>
        <div className={`${blockName}__form`}>
          {formChildren}
        </div>
      </div>
    </div>
  );
};

FormContainer.propTypes = exact({
  headerChildren: element.isRequired,
  formChildren: oneOfType([string, element]).isRequired
}).isRequired;

export default FormContainer;
