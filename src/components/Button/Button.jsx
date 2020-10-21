import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Button = ({ children, className, variation, to }) => {
  return (
    <Link to={to} className={`button ${className} button--${variation}`} tabIndex="0">
      {children}
    </Link>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  variation: PropTypes.string,
  to: PropTypes.string,
};

export default Button;
