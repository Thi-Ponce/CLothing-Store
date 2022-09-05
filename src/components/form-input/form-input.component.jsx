/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => (
  <div className="group">
    {label && (
    <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
    )}
    <input
      className="form-input"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    />
  </div>
);

export default FormInput;
