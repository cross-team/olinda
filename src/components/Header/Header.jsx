import React from 'react';
import { Link } from 'gatsby';
import Brand from '../../images/brand.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__brand">
        <Link to="/">
          <Brand className="header__brand__image" aria-hidden="true" />
          <span className="header__brand__name">Safrapay</span>
        </Link>
      </h1>
      <Navigation className="header__nav" />
      <Button className="header__contact">Contact Us</Button>
    </header>
  );
};

export default Header;
