import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

import '../../style/main.scss';

const Layout = ({ children, title, decription, keywords }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang="en" />
        <meta name="description" content={decription} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <main className="wrap">{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.string,
  title: PropTypes.string,
  decription: PropTypes.string,
  keywords: PropTypes.string,
};

export default Layout;
