import React from 'react';
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';

const Navigation = ({ className, label, ariaHidden }) => {
  return (
    <Scrollspy
      items={['payment-solutions', 'digital-banking', 'cards', 'about', 'support']}
      currentClassName="nav__link--active"
      componentTag="nav"
      className={`nav ${className}`}
      aria-label={label}
      aria-hidden={ariaHidden}
    >
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
      <Link
        to="/contact-us"
        className="nav__link nav__link--contact"
        title="Navigate to Contact Page"
      >
        Contact Us
      </Link>
    </Scrollspy>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  ariaHidden: PropTypes.bool,
};

export default Navigation;
