import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ type, disabled, primary, dashed, text, link, children, ...rest }) => {
  let className = 'button';

  if (primary) {
    className += ' button--primary';
  } else if (dashed) {
    className += ' button--dashed';
  } else if (text) {
    className += ' button--text';
  } else if (link) {
    className += ' button--link';
  }

  return (
    <button className={className} type={type} disabled={disabled} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']),
  disabled: PropTypes.bool,
  primary: PropTypes.bool,
  dashed: PropTypes.bool,
  text: PropTypes.bool,
  link: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
  disabled: false,
  primary: false,
  dashed: false,
  text: false,
  link: false,
};

export default Button;
