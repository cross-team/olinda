import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';
import Plx from 'react-plx';
import Button from '../Button/Button';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';

const About = () => {
  const { aboutBg } = useStaticQuery(graphql`
    query {
      aboutBg: file(relativePath: { eq: "about-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(
            quality: 85
            maxWidth: 2560
            srcSetBreakpoints: [200, 340, 520, 890, 1440, 1920, 2560]
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const parallaxDataSection = [
    {
      start: 'self',
      end: '.about__more',
      properties: [
        {
          startValue: -20,
          endValue: 0,
          unit: 'vh',
          property: 'translateY',
        },
      ],
    },
  ];

  const motionDuration = usePrefersReducedMotion() ? 0 : 1000;

  return (
    <div id="about">
      <Plx parallaxData={parallaxDataSection}>
        <section className="about">
          <BackgroundImage Tag="div" className="about__background" fluid={aboutBg.sharp.fluid} />
          <Fade bottom cascade duration={motionDuration} distance="50px">
            <Container fluid>
              <Row>
                <Col
                  xs={12}
                  sm={{ span: 10, offset: 1 }}
                  md={{ span: 8, offset: 1 }}
                  lg={{ span: 6, offset: 1 }}
                >
                  <h2 className="about__title">Modern Solutions Backed by Tradition</h2>
                </Col>
              </Row>
              <Row>
                <Col
                  xs={12}
                  sm={{ span: 10, offset: 1 }}
                  md={{ span: 8, offset: 1 }}
                  lg={{ span: 5, offset: 1 }}
                  xl={{ span: 5, offset: 1 }}
                >
                  <p className="about__copy">
                    Safrapay is a service provider of Safra National Bank of New York, Member FDIC.
                    Both are part of the J. Safra group of companies, which has been in the banking
                    business for more than 175 years. Safrapay blends the flexibility of an
                    on-the-go digital solution with the Safra banking tradition to give you the
                    tools you need to grow your business.
                  </p>
                  <Button
                    className="about__more"
                    to="/about/"
                    title="Navigate to About Safrapay Page"
                  >
                    Learn More About Safrapay
                  </Button>
                </Col>
              </Row>
            </Container>
          </Fade>
        </section>
      </Plx>
    </div>
  );
};

export default About;
