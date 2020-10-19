import React from 'react';
// import { AnchorLink as Link } from 'gatsby-plugin-anchor-links';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

const Navigation = ({ className }) => {
  return (
    <nav className={`nav ${className}`}>
      <Link
        to="payment-solutions"
        className="nav__link"
        activeClass="nav__link--active"
        spy
        hashSpy
        smooth
        offset={-80}
        duration={500}
        tabIndex="0"
      >
        Payment Solutions
      </Link>
      <Link
        to="digital-banking"
        className="nav__link"
        activeClass="nav__link--active"
        spy
        hashSpy
        smooth
        offset={-80}
        duration={500}
        tabIndex="0"
      >
        Digital Banking
      </Link>
      <Link
        to="cards"
        className="nav__link"
        activeClass="nav__link--active"
        spy
        hashSpy
        smooth
        offset={-80}
        duration={500}
        tabIndex="0"
      >
        Cards
      </Link>
      <Link
        to="about"
        className="nav__link"
        activeClass="nav__link--active"
        spy
        hashSpy
        smooth
        offset={-80}
        duration={500}
        tabIndex="0"
      >
        About Us
      </Link>
      <Link
        to="support"
        className="nav__link"
        activeClass="nav__link--active"
        spy
        hashSpy
        smooth
        offset={-80}
        duration={500}
        tabIndex="0"
      >
        Support
      </Link>
    </nav>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
};

export default Navigation;
