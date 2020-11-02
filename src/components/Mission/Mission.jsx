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
                Safrapay’s mission is to provide businesses with easy access to flexible payment,
                banking, and credit solutions all in one convenient location.
              </h3>
            </Col>
          </Row>
        </Container>
      </Fade>
    </section>
  );
};

export default Mission;
