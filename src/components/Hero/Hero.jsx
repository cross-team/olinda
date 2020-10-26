import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Image from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';

const Hero = () => {
  const {
    heroBg,
    heroScreensFront,
    heroScreensBackLeft,
    heroScreensBackRight,
  } = useStaticQuery(graphql`
    query {
      heroBg: file(relativePath: { eq: "hero-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      heroScreensFront: file(relativePath: { eq: "hero-screens-front.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      heroScreensBackLeft: file(relativePath: { eq: "hero-screens-back-left.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      heroScreensBackRight: file(relativePath: { eq: "hero-screens-back-right.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const motionDuration = usePrefersReducedMotion() ? 0 : 500;
  const motionDurationBack = usePrefersReducedMotion() ? 0 : 1000;

  return (
    <BackgroundImage Tag="section" className="hero" id="content" fluid={heroBg.sharp.fluid}>
      <Fade bottom cascade duration={motionDuration} distance="50px">
        <div>
          <h1 className="hero__title">Welcome to the Future of Payments, Banking, and Credit</h1>
          <p className="hero__copy">Safrapay is the Perfect Solution for Your Business</p>
        </div>
      </Fade>
      <div className="hero__screens-front">
        <Fade bottom duration={motionDurationBack} delay={200} distance="100px">
          <Image
            fluid={heroScreensFront.sharp.fluid}
            alt="Safrapay Merchant App on a smartphone."
          />
        </Fade>
      </div>
      <div className="hero__screens-back">
        <Fade bottom duration={motionDurationBack} delay={400} distance="150px">
          <div>
            <div className="hero__screens-back__left">
              <Image
                fluid={heroScreensBackLeft.sharp.fluid}
                alt="Safrapay Banking App on a smartphone."
              />
            </div>
            <div className="hero__screens-back__right">
              <Image
                fluid={heroScreensBackRight.sharp.fluid}
                alt="Safrapay point-of-sale device being used to start a new sale."
              />
            </div>
          </div>
        </Fade>
      </div>
      <p className="hero__legal">
        Banking services provided by Safra National Bank of New York, Member FDIC.
      </p>
    </BackgroundImage>
  );
};

export default Hero;
