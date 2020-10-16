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
          <h2 className="about__title">Convenient Digital Banking</h2>
          <p className="about__copy">
            Open a Business Bank Account with us to move money, make mobile check deposits, and view
            statements from the convenience of your mobile phone. Use your included debit card to
            make cash deposits and withdrawals at any of our in-network ATMs.
          </p>
          <Button className="about__more">About Us</Button>
        </div>
      </Fade>
    </BackgroundImage>
  );
};

export default About;
