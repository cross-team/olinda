import React, { useState, useEffect } from 'react';
import CookieConsent, { Cookies } from 'react-cookie-consent';
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Lottie from 'lottie-web-react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Brand from '../../images/brand.svg';
import Navigation from '../Navigation/Navigation';
import Button from '../Button/Button';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';
import menuAnimation from '../../motions/menu-animation.json';

const Header = ({ variation, location }) => {
  const [scrolly, setScrolly] = useState('top');
  const [cookieConsent, setCookieConsent] = useState(Cookies.get('safrapay-google-tagmanager'));

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
  const [menuAriaHidden, setMenuAriaHidden] = useState(false);
  const [playingState, setPlayingState] = useState('pause');
  const [direction, setDirection] = useState(1);

  const handleMenu = () => {
    if (menu === 'closed') {
      setMenu('open');
      setPlayingState('play');
      setDirection(1);
      setMenuAriaHidden(false);
    } else {
      setMenu('closed');
      setPlayingState('play');
      setDirection(-1);
      setMenuAriaHidden(true);
    }
  };

  const handleMenuAriaHidden = () => {
    if (window.innerWidth <= 1280 && menuAriaHidden === false && menu === 'closed') {
      setMenuAriaHidden(true);
    }
  };

  useEffect(() => {
    handleMenuAriaHidden();
  });

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
    <>
      <CookieConsent
        buttonText="Accept"
        declineButtonText="Decline"
        disableStyles
        enableDeclineButton
        containerClasses="cookie-banner"
        contentClasses="cookie-banner__content"
        buttonWrapperClasses="cookie-banner__buttons"
        buttonClasses="button button--primary"
        declineButtonClasses="button button--secondary"
        cookieName="safrapay-google-tagmanager"
        onAccept={() => setCookieConsent(Cookies.get('safrapay-google-tagmanager'))}
        onDecline={() => setCookieConsent(Cookies.get('safrapay-google-tagmanager'))}
      >
        <p>
          <strong>Your privacy is important to us.</strong>
        </p>
        <p>
          We use cookies to improve our site, understand our audience, and enhance your browsing
          experience. See our <Link to="/privacy-policy">Privacy Policy</Link> for more details.
        </p>
      </CookieConsent>
      <div className="skiplink">
        <Link to={`${location}#content`} className="skiplink__action">
          Skip to main content
        </Link>
      </div>
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
        <button
          className="header__menu"
          onClick={() => handleMenu()}
          type="button"
          aria-label={menu === 'open' ? 'Close Menu' : 'Open Menu'}
        >
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
        <Navigation
          className={`header__nav nav--${menu} nav--${
            cookieConsent !== undefined ? 'cookie-hidden' : 'cookie-open'
          }`}
          label="Main Menu"
          ariaHidden={menuAriaHidden}
        />
        <Button to="/contact-us/" className="header__contact" title="Navigate to Contact Page">
          Contact Us
        </Button>
      </header>
    </>
  );
};

Header.propTypes = {
  variation: PropTypes.string,
  location: PropTypes.string,
};

export default Header;
