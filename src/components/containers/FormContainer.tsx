import React, { ReactElement } from 'react';

type FormContainerProps = {
  header: string | ReactElement,
  form: ReactElement,
  classNames?: string
};

const FormContainer = ({ header, form, classNames = '' }: FormContainerProps) => {
  const blockName = 'form-container';

  return (
    <div className={`${blockName} ${classNames}`}>
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

export default FormContainer;
