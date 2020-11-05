/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';
import usePrefersReducedMotion from '../hooks/use-reduced-motion';
import IconHand from '../images/icon-hand.svg';

export default () => {
  const motionDuration = usePrefersReducedMotion() ? 0 : 500;

  return (
    <Layout
      title="Safrapay - Contact Us"
      description="Contact Safrapay to learn more about working with us as a merchant or partner."
      keywords="Safra, safrapay, merchant, banking, merchant services, banking services, contact, work with us, partner"
    >
      <Header variation="internal" location="/contact-us/" />
      <PageTitle title="Contact Us" />
      <Fade bottom duration={motionDuration} distance="50px">
        <Container as="section" className="page-contact-us" id="content" fluid>
          <Row className="justify-content-center">
            <Col sm={10} md={6}>
              <IconHand className="page-contact-us__icon" aria-hidden />
              <h2 className="page-contact-us__title">Thank you for contacting us.</h2>
              <p className="page-contact-us__copy">Your message has been delivered. We will contact you soon!</p>
            </Col>
          </Row>
        </Container>
      </Fade>  
      <Footer />
    </Layout>
  );
};
