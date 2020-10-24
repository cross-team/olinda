import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import shareImage from '../../images/share-image.png';

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
        <meta property="og:url" content="https://www.safrapay.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Welcome to the future of payments, banking, and credit. | Safrapay US | Merchant and Banking Services"
        />
        <meta
          property="og:description"
          content=" Safrapay offers a seamless merchant services and digital banking experience that is the perfect solution for your business."
        />
        <meta property="og:image" content={`https://www.safrapay.com${shareImage}`} />
        <meta name="twitter:card" content="summary_large_image" />
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
