import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';
import Button from '../Button/Button';

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

  return (
    <BackgroundImage id="about" Tag="section" className="about" fluid={aboutBg.sharp.fluid}>
      <Fade bottom cascade duration={1000} distance="50px">
        <div className="about__wrap">
          <h2 className="about__title">Your Security is Our Priority</h2>
          <p className="about__copy">
            Safrapay Inc. is a service provider of Safra National Bank of New York, Member FDIC.
            Both are part of the J. Safra group of companies, which has been in the banking business
            for more than 175 years.
          </p>
          <Button className="about__more" to="/about">
            About Us
          </Button>
        </div>
      </Fade>
    </BackgroundImage>
  );
};

export default About;
