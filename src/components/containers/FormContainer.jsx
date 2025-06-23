import { exact, oneOfType, string, element } from 'prop-types';

const FormContainer = ({ header, form, classNames }) => {
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

FormContainer.propTypes = exact({
  header: oneOfType([string, element]).isRequired,
  form: element.isRequired,
  classNames: string
}).isRequired;

FormContainer.defaultProps = {
  classNames: ''
};

export default FormContainer;
