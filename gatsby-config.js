module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-optimize-svgs`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Source Sans Pro:400,600'],
          display: 'swap',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -80,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleTagManager: {
          trackingId: 'GTM-WZK9MSJ',
          cookieName: 'safrapay-google-tagmanager',
          dataLayerName: 'dataLayer',
        },
        environments: ['production', 'development'],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Safrapay`,
        short_name: `safrapay`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#000`,
        display: `browser`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
