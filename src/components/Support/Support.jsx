import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';
import Button from '../Button/Button';

const Support = () => {
  const { supportBg } = useStaticQuery(graphql`
    query {
      supportBg: file(relativePath: { eq: "support-person.png" }) {
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
      id="support"
      Tag="section"
      className="support"
      fluid={supportBg.sharp.fluid}
      style={{
        backgroundSize: 'contain',
        backgroundPosition: '0 100%',
      }}
    >
      <Fade cascade duration={1000}>
        <div>
          <h3 className="support__title">24/7 Customer Support</h3>
          <p className="support__copy">
            Speak with a Safrapay Agent Monday through Friday from 9am to 9pm ET or take advantage
            of our 24/7 technical support.
          </p>
          <Button className="support__more" variation="secondary">
            Contact Us
          </Button>
        </div>
      </Fade>
    </BackgroundImage>
  );
};

export default Support;
