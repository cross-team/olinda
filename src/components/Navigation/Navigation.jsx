import React from 'react';
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links';
import PropTypes from 'prop-types';

const Navigation = ({ className, label }) => {
  return (
    <nav className={`nav ${className}`} aria-label={label}>
      <Link
        to="/#payment-solutions"
        className="nav__link"
        stripHash
        title="Navigate to Payment Solutions Section"
      >
        Payment Solutions
      </Link>
      <Link
        to="/#digital-banking"
        className="nav__link"
        stripHash
        title="Navigate to Digital Banking section"
      >
        Digital Banking
      </Link>
      <Link to="/#cards" className="nav__link" stripHash title="Navigate to Cards Section">
        Cards
      </Link>
      <Link to="/#about" className="nav__link" stripHash title="Navigate to About Us Section">
        About Us
      </Link>
      <Link to="/#support" className="nav__link" stripHash title="Navigate to support Section">
        Support
      </Link>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

export default Navigation;
