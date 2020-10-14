import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';

const Selling = () => {
  const { sellingBg } = useStaticQuery(graphql`
    query {
      sellingBg: file(relativePath: { eq: "selling-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      id="payment-solutions"
      Tag="section"
      className="selling"
      fluid={sellingBg.sharp.fluid}
      backgroundColor="#63676f"
    >
      <Fade bottom cascade duration={500} distance="50px">
        <div>
          <h2 className="selling__title">Seamless Merchant Services</h2>
          <p className="selling__copy">
            Safrapay is more than just a payment solution. Process transactions, track your sales,
            and initiate payouts all in one place.
          </p>
        </div>
      </Fade>
    </BackgroundImage>
  );
};

export default Selling;
