import React from 'react';
import { Link } from 'gatsby';
import Navigation from '../Navigation/Navigation';
import Facebook from '../../images/facebook.svg';
import Instagram from '../../images/instagram.svg';
import LinkedIn from '../../images/linkedin.svg';
import YouTube from '../../images/youtube.svg';
import Twitter from '../../images/twitter.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav-social footer__social">
        <a
          href="http://google.com"
          className="nav-social__link"
          tabIndex="0"
          target="_blank"
          rel="noreferrer"
          aria-label="Sfrapay on Facebook"
        >
          <Facebook aria-label="Facebook Brand" />
        </a>
        <a
          href="http://google.com"
          className="nav-social__link"
          tabIndex="0"
          target="_blank"
          rel="noreferrer"
          aria-label="Sfrapay on Instagram"
        >
          <Instagram aria-label="Instagram Brand" />
        </a>
        <a
          href="http://google.com"
          className="nav-social__link"
          tabIndex="0"
          target="_blank"
          rel="noreferrer"
          aria-label="Sfrapay on LinkedIn"
        >
          <LinkedIn aria-label="LinkedIn Brand" />
        </a>
        <a
          href="http://google.com"
          className="nav-social__link"
          tabIndex="0"
          target="_blank"
          rel="noreferrer"
          aria-label="Sfrapay on YouTube"
        >
          <YouTube aria-label="YouTube Brand" />
        </a>
        <a
          href="http://google.com"
          className="nav-social__link"
          tabIndex="0"
          target="_blank"
          rel="noreferrer"
          aria-label="Sfrapay on Twitter"
        >
          <Twitter aria-label="Twitter Brand" />
        </a>
      </nav>
      <div className="footer__nav">
        <Navigation />
        <nav className="nav-careers">
          <a
            href="http://google.com"
            className="nav-careers__link"
            tabIndex="0"
            target="_blank"
            rel="noreferrer"
          >
            Careers at Safrapay
          </a>
        </nav>
      </div>
      <div className="footer__legal">
        <nav className="nav-legal">
          <Link to="/" className="nav-legal__link" tabIndex="0">
            Privacy Policy
          </Link>
          <Link to="/" className="nav-legal__link" tabIndex="0">
            Terms and Conditions
          </Link>
          <Link to="/" className="nav-legal__link" tabIndex="0">
            Cookies Policy
          </Link>
          <Link to="/" className="nav-legal__link" tabIndex="0">
            Accessibility Statement
          </Link>
        </nav>
        <p className="footer__legal__copy">© 2020 Safrapay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
