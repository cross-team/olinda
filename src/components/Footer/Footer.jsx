import React from 'react';
import { Link } from 'gatsby';
import Navigation from '../Navigation/Navigation';
import LinkedIn from '../../images/linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <Navigation />
        <nav className="nav-careers">
          <a
            href="https://www.linkedin.com/company/safrapay-inc/jobs/"
            className="nav-careers__link"
            tabIndex="0"
            target="_blank"
            rel="noreferrer"
            aria-label="Sfrapay on LinkedIn"
          >
            <LinkedIn aria-label="LinkedIn Brand" />
          </a>
          <a
            href="https://safrapay.applytojob.com/apply"
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
            Terms of Use
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
