import React from 'react';
import { Link } from 'gatsby';
import Navigation from '../Navigation/Navigation';
import LinkedIn from '../../images/linkedin.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <Navigation label="Footer Menu" />
        <nav className="nav-careers" aria-label="Careers Menu">
          <a
            href="https://www.linkedin.com/company/safrapay-inc/jobs/"
            className="nav-careers__link"
            target="_blank"
            rel="noreferrer"
            aria-label="Sfrapay on LinkedIn"
          >
            <LinkedIn aria-label="LinkedIn Brand" />
          </a>
          <a
            href="https://safrapay.applytojob.com/apply"
            className="nav-careers__link"
            target="_blank"
            rel="noreferrer"
          >
            Careers at Safrapay
          </a>
        </nav>
      </div>
      <div className="footer__legal">
        <nav className="nav-legal" aria-label="Legal Menu">
          <Link to="/privacy-policy" className="nav-legal__link">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use" className="nav-legal__link">
            Terms of Use
          </Link>
          <Link to="/accessibility-statement" className="nav-legal__link">
            Accessibility Statement
          </Link>
        </nav>
        <p className="footer__legal__copy">© 2020 Safrapay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
