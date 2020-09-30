import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';

import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Safrapay</title>
        <html lang="en" />
        <meta name="description" content="Safrapay Website" />
      </Helmet>
      <App />
    </>
  );
};
