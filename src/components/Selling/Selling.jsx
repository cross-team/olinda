import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';

const Selling = () => {
  const { sellingBg } = useStaticQuery(graphql`
    query {
      sellingBg: file(relativePath: { eq: "selling-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const motionDuration = usePrefersReducedMotion() ? 0 : 500;

  return (
    <BackgroundImage
      Tag="section"
      id="payment-solutions"
      className="selling"
      fluid={sellingBg.sharp.fluid}
      backgroundColor="#63676f"
      aria-label="Close up of the hands of a cashier using a hand-held Safrapay point-of-sale device to accept contactless payment from their customer’s smartphone."
    >
      <Fade bottom cascade duration={motionDuration} distance="50px">
        <Container fluid>
          <Row className="justify-content-center">
            <Col sm={12} md={10} lg={6}>
              <h2 className="selling__title">Seamless Merchant Services</h2>
              <p className="selling__copy">
                Safrapay is more than just a payment solution. Process transactions, track your
                sales, and initiate payouts all in one place.
              </p>
            </Col>
          </Row>
        </Container>
      </Fade>
    </BackgroundImage>
  );
};

export default Selling;
