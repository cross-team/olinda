import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';

const Seling = () => {
  const { selingBg } = useStaticQuery(graphql`
    query {
      selingBg: file(relativePath: { eq: "seling-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage Tag="section" className="seling" fluid={selingBg.sharp.fluid}>
      <Fade bottom cascade duration={500} distance="50px">
        <div>
          <h2 className="seling__title">Seamless Merchant Services</h2>
          <p className="seling__copy">
            Safrapay is more than just a payment solution. Process transactions, track your sales,
            and initiate payouts all in one place.
          </p>
        </div>
      </Fade>
    </BackgroundImage>
  );
};

export default Seling;
