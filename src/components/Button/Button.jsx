import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const Button = ({ children, className, variation, to, type, title }) => {
  if (type === `submit`) {
    return (
      <button className={`button ${className} button--${variation}`} type="submit" title={title}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={`button ${className} button--${variation}`} title={title}>
      {children}
    </Link>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  variation: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
};

export default Button;
