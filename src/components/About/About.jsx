import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';
import Button from '../Button/Button';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';

const About = () => {
  const { aboutBg } = useStaticQuery(graphql`
    query {
      aboutBg: file(relativePath: { eq: "about-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const motionDuration = usePrefersReducedMotion() ? 0 : 1000;

  return (
    <BackgroundImage id="about" Tag="section" className="about" fluid={aboutBg.sharp.fluid}>
      <Fade bottom cascade duration={motionDuration} distance="50px">
        <div className="about__wrap">
          <h2 className="about__title">Modern Solutions Backed by Tradition</h2>
          <p className="about__copy">
            Safrapay is a service provider of Safra National Bank of New York, Member FDIC. Both are
            part of the J. Safra group of companies, which has been in the banking business for more
            than 175 years. Safrapay blends the flexibility of an on-the-go digital solution with
            the Safra banking tradition to give you the tools you need to grow your business.
          </p>
          <Button className="about__more" to="/about" title="Navigate to About Safrapay Page">
            Learn More About Safrapay
          </Button>
        </div>
      </Fade>
    </BackgroundImage>
  );
};

export default About;
