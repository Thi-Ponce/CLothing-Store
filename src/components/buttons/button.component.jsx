/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import './button.styles.scss';

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
};

const Button = ({ children, buttonType, ...otherProps }) => (
  <button
    type="button"
    className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    {...otherProps}
  >
    {children}
  </button>
);
export default Button;
