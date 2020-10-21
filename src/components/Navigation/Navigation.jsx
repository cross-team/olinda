import React from 'react';
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links';
import PropTypes from 'prop-types';

const Navigation = ({ className, label }) => {
  return (
    <nav className={`nav ${className}`} aria-label={label}>
      <Link to="/#payment-solutions" className="nav__link" stripHash>
        Payment Solutions
      </Link>
      <Link to="/#digital-banking" className="nav__link" stripHash>
        Digital Banking
      </Link>
      <Link to="/#cards" className="nav__link" stripHash>
        Cards
      </Link>
      <Link to="/#about" className="nav__link" stripHash>
        About Us
      </Link>
      <Link to="/#support" className="nav__link" stripHash>
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
