import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import shareImage from '../../images/share-image.png';

import '../../style/main.scss';

const Layout = ({ children, title, description, keywords }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang="en" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:url" content="https://www.safrapay.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`https://www.safrapay.com${shareImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main className="wrap">{children}</main>
    </>
  );
};

Layout.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
};

export default Layout;
