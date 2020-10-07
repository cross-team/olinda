import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Brand from '../../images/brand.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const Header = () => {
  const [scrolly, setScrolly] = useState('top');

  const handleScroll = (position) => {
    if (position <= -100) {
      setScrolly('fixed');
    } else if (position >= -100) {
      setScrolly('top');
    }
  };

  useScrollPosition(({ currPos }) => {
    handleScroll(currPos.y);
  });

  return (
    <header className={`header header--${scrolly}`}>
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
