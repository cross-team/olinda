import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Brand from '../../images/brand.svg';
import IconMenuOpen from '../../images/icon-menu.svg';
import IconMenuClose from '../../images/icon-close.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';

const Header = ({ variation }) => {
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

  const [menu, setMenu] = useState('closed');

  const handleMenu = () => {
    if (menu === 'closed') {
      setMenu('open');
    } else {
      setMenu('closed');
    }
  };

  return (
    <header
      className={`header header--${scrolly} header--${revealed} header--${menu} header--${variation}`}
    >
      <nav className="header__brand">
        <Fade duration={500} onReveal={() => setRevealed('revealed')}>
          <Link to="/" className="header__brand">
            <Brand className="header__brand__image" aria-hidden="true" />
            <span className="header__brand__name">Safrapay</span>
          </Link>
        </Fade>
      </nav>
      <Navigation className={`header__nav nav--${menu}`} label="Main Menu" />
      <Button to="/contact-us" className="header__contact" title="Navigate to Contact Page">
        Contact Us
      </Button>
      <button className="header__menu" onClick={() => handleMenu()} type="button">
        <IconMenuOpen className="header__menu__open" />
        <IconMenuClose className="header__menu__close" />
      </button>
    </header>
  );
};

Header.propTypes = {
  variation: PropTypes.string,
};

export default Header;
