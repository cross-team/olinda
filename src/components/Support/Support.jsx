import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Plx from 'react-plx';
import Button from '../Button/Button';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';

const Support = () => {
  const { supportBgLarge, supportBgSmall } = useStaticQuery(graphql`
    query {
      supportBgLarge: file(relativePath: { eq: "support-person.png" }) {
        sharp: childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      supportBgSmall: file(relativePath: { eq: "support-person-mobile.png" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1024, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const supportBg = [
    supportBgSmall.sharp.fluid,
    {
      ...supportBgLarge.sharp.fluid,
      media: `(min-width: 1025px)`,
    },
  ];

  const [supportPosition, setSupportPosition] = useState(100);

  useScrollPosition(() => {
    const newSupportOffset =
      document.querySelector('#support').offsetTop -
      window.innerHeight +
      document.querySelector('#support').clientHeight * 0.6;
    setSupportPosition(newSupportOffset);
  });

  const parallaxDataSection = [
    {
      start: 'self',
      end: supportPosition,
      properties: [
        {
          startValue: -200,
          endValue: 0,
          property: 'translateY',
        },
      ],
    },
  ];

  const motionDuration = usePrefersReducedMotion() ? 0 : 1000;

  return (
    <div id="support">
      <Plx parallaxData={parallaxDataSection}>
        <BackgroundImage
          Tag="section"
          className="support"
          fluid={supportBg}
          style={{
            backgroundSize: 'contain',
            backgroundPosition: '0 100%',
          }}
          aria-label="A smiling brunette Safrapay Customer Support representative wearing headset and a white polo shirt with the Safrapay logo."
        >
          <Fade cascade duration={motionDuration}>
            <Container fluid>
              <Row className="justify-content-center">
                <Col
                  xs={12}
                  sm={{ span: 7, offset: 4 }}
                  md={{ span: 7, offset: 3 }}
                  xl={{ span: 4, offset: 0 }}
                >
                  <h3 className="support__title">Human Customer Service</h3>
                  <p className="support__copy">
                    Our team is ready to answer your questions and help you choose the best solution
                    for your needs.
                  </p>
                  <Button
                    to="/contact-us"
                    className="support__more"
                    variation="secondary"
                    title="Navigate to Contact Page"
                  >
                    Contact Us
                  </Button>
                </Col>
              </Row>
            </Container>
          </Fade>
        </BackgroundImage>
      </Plx>
    </div>
  );
};

export default Support;
