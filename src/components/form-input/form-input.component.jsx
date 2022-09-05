/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => (
  <div className="group">
    <input
      className="form-input"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
    {label && (
    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
    )}
  </div>
);

export default FormInput;
