import React from 'react';
import {
  exact,
  oneOfType,
  string,
  element
} from 'prop-types';

const FormContainer = ({ header, form }) => {
  const blockName = 'form-container';

  return (
    <div className={blockName}>
      <div className={`${blockName}__wrapper`}>
        <h2 className={`${blockName}__header`}>
          {header}
        </h2>
        <div className={`${blockName}__form`}>
          {form}
        </div>
      </div>
    </div>
  );
};

FormContainer.propTypes = exact({
  header: oneOfType([string, element]).isRequired,
  form: element.isRequired
}).isRequired;

export default FormContainer;
