import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Button = ({ children, className }) => {
  return (
    <Link to="/contact-us" className={`button ${className}`} tabIndex="0">
      {children}
    </Link>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Button;
