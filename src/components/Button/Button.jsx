import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Button = ({ children, className, variation }) => {
  return (
    <Link to="/contact-us" className={`button ${className} button--${variation}`} tabIndex="0">
      {children}
    </Link>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  variation: PropTypes.string,
};

export default Button;
