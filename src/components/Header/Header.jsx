import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Fade from 'react-reveal/Fade';
import Brand from '../../images/brand.svg';
import IconMenu from '../../images/icon-menu.svg';
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

  const [revealed, setRevealed] = useState('hide');

  return (
    <header className={`header header--${scrolly} header--${revealed}`}>
      <h1 className="header__brand">
        <Fade duration={500} onReveal={() => setRevealed('revealed')}>
          <Link to="/">
            <Brand className="header__brand__image" aria-hidden="true" />
            <span className="header__brand__name">Safrapay</span>
          </Link>
        </Fade>
      </h1>
      <Navigation className="header__nav" />
      <Button className="header__contact">Contact Us</Button>
      <IconMenu className="header__menu" />
    </header>
  );
};

export default Header;
