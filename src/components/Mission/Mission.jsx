import React from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';

const Mission = () => {
  const motionDuration = usePrefersReducedMotion() ? 0 : 500;

  return (
    <section id="mission" className="mission">
      <Fade bottom cascade duration={motionDuration} distance="50px">
        <Container fluid>
          <Row className="justify-content-center">
            <Col sm={12} md={10} lg={10}>
              <h3 className="mission__copy">
                “Our goal is to remove the worry surrounding financial services by helping merchants
                improve earning potential and grow their business. ”
              </h3>
              <p className="mission__by">Helio Sarfaty - CEO Worldwide - Safrapay</p>
            </Col>
          </Row>
        </Container>
      </Fade>
    </section>
  );
};

export default Mission;
