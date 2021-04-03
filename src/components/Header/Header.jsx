/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { AnchorLink as Link } from 'gatsby-plugin-anchor-links';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import Brand from '../../images/brand.svg';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';

const Header = ({ variation, location }) => {
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

  const motionDuration = usePrefersReducedMotion() ? 0 : 500;

  return (
    <>
      <div className="skiplink">
        <Link to={`${location}#content`} className="skiplink__action">
          Skip to main content
        </Link>
      </div>
      <header
        className={`header header--${scrolly} header--${revealed} header--${variation}`}
      >
        <div className="header__brand">
          <Fade duration={motionDuration} onReveal={() => setRevealed('revealed')}>
            <Link to="/">
              <Brand className="header__brand__image" aria-hidden="true" />
              <span className="header__brand__name">Safrapay</span>
            </Link>
          </Fade>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  variation: PropTypes.string,
  location: PropTypes.string,
};

export default Header;
