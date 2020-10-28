import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Lottie from 'lottie-web-react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Brand from '../../images/brand.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';
import menuAnimation from '../../motions/menu-animation.json';

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
  const [playingState, setPlayingState] = useState('pause');
  const [direction, setDirection] = useState(1);

  const handleMenu = () => {
    if (menu === 'closed') {
      setMenu('open');
      setPlayingState('play');
      setDirection(1);
    } else {
      setMenu('closed');
      setPlayingState('play');
      setDirection(-1);
    }
  };

  const eventsMenu = [
    {
      eventName: 'complete',
      callback: () => {
        setPlayingState('pause');
      },
    },
  ];

  const motionDuration = usePrefersReducedMotion() ? 0 : 500;

  return (
    <header
      className={`header header--${scrolly} header--${revealed} header--${menu} header--${variation}`}
    >
      <div className="header__brand">
        <Fade duration={motionDuration} onReveal={() => setRevealed('revealed')}>
          <Link to="/">
            <Brand className="header__brand__image" aria-hidden="true" />
            <span className="header__brand__name">Safrapay</span>
          </Link>
        </Fade>
      </div>
      <button className="header__menu" onClick={() => handleMenu()} type="button">
        <Lottie
          options={{
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: menuAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMinYMin slice',
            },
          }}
          playingState={playingState}
          speed={2}
          direction={direction}
          className="header__menu__icon"
          eventListeners={eventsMenu}
        />
      </button>
      <Navigation className={`header__nav nav--${menu}`} label="Main Menu" />
      <Button to="/contact-us" className="header__contact" title="Navigate to Contact Page">
        Contact Us
      </Button>
    </header>
  );
};

Header.propTypes = {
  variation: PropTypes.string,
};

export default Header;
