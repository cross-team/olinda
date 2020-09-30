import React from 'react';
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links';

const Navigation = () => {
  return (
    <nav className="nav">
      <Link to="/#cards" className="nav__link" tabIndex="0">
        Payment Solutions
      </Link>
      <Link to="/#cards" className="nav__link" tabIndex="0">
        Digital Banking
      </Link>
      <Link to="/#cards" className="nav__link" tabIndex="0">
        Cards
      </Link>
      <Link to="/#cards" className="nav__link" tabIndex="0">
        About Us
      </Link>
      <Link to="/#cards" className="nav__link" tabIndex="0">
        Support
      </Link>
    </nav>
  );
};

export default Navigation;
