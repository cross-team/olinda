/* eslint-disable prettier/prettier */
import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__legal">
        <p className="footer__legal__copy">
          © {new Date().getFullYear()} Safrapay Inc.
        </p>
        <nav className="nav-legal" aria-label="Legal Menu">
          <Link to="/privacy-policy/" className="nav-legal__link">
            Privacy Policy
          </Link>
          <Link to="/terms-of-use/" className="nav-legal__link">
            Terms of Use
          </Link>
          <Link to="/accessibility-statement/" className="nav-legal__link">
            Accessibility Statement
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
