import React from 'react';
import { Helmet } from 'react-helmet';

import '../style/main.scss';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page not found</title>
        <html lang="en" />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section>404</section>
    </>
  );
};
