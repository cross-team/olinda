import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';
import Button from '../Button/Button';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';

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

  const motionDuration = usePrefersReducedMotion() ? 0 : 1000;

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
      role="img"
      aria-label="A smiling brunette Safrapay Customer Support representative wearing headset and a white polo shirt with the Safrapay logo."
    >
      <Fade cascade duration={motionDuration}>
        <div>
          <h3 className="support__title">Human Customer Service</h3>
          <p className="support__copy">
            Our team is ready to answer your questions and help you choose the best solution for
            your needs.
          </p>
          <Button className="support__more" variation="secondary" title="Navigate to Contact Page">
            Contact Us
          </Button>
        </div>
      </Fade>
    </BackgroundImage>
  );
};

export default Support;
