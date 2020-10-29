import React, { useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Image from 'gatsby-image';
import Fade from 'react-reveal/Fade';
import Plx from 'react-plx';
import { Container, Row, Col } from 'react-bootstrap';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';

const Cards = () => {
  const {
    cardsBg,
    cardsScreens,
    cardsCardLeft,
    cardsCardRight,
    cardsCardMobile,
  } = useStaticQuery(graphql`
    query {
      cardsBg: file(relativePath: { eq: "cards-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      cardsScreens: file(relativePath: { eq: "cards-screen.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      cardsCardLeft: file(relativePath: { eq: "cards-card-left.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      cardsCardRight: file(relativePath: { eq: "cards-card-right.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      cardsCardMobile: file(relativePath: { eq: "cards-card-mobile.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const [cardsPosition, setCardsPosition] = useState(100);
  const [missionPosition, setMissionPosition] = useState(100);

  useScrollPosition(() => {
    setCardsPosition(document.querySelector('#cards').offsetTop);
    setMissionPosition(document.querySelector('#mission').offsetTop);
  });

  const parallaxDataSection = [
    {
      start: cardsPosition,
      startOffset: '10vh',
      end: missionPosition,
      properties: [
        {
          startValue: 0,
          endValue: 50,
          unit: 'vh',
          property: 'translateY',
        },
      ],
    },
  ];

  const parallaxDataOverlay = [
    {
      start: cardsPosition,
      startOffset: '10vh',
      end: missionPosition,
      properties: [
        {
          startValue: 0,
          endValue: 80,
          unit: '%',
          property: 'opacity',
        },
      ],
    },
  ];

  const motionDuration = usePrefersReducedMotion() ? 0 : 500;

  return (
    <div id="cards">
      <Plx parallaxData={parallaxDataSection}>
        <BackgroundImage
          Tag="section"
          className="cards"
          fluid={cardsBg.sharp.fluid}
          backgroundColor="#63676f"
        >
          <Fade bottom cascade duration={motionDuration} distance="50px">
            <Container fluid>
              <Row className="justify-content-center">
                <Col sm={12} md={8} lg={6}>
                  <h2 className="cards__title">Easy Card Management</h2>
                  <p className="cards__copy">
                    Manage your debit and credit cards through our banking app. Contactless pay
                    options available. Terms and Conditions apply.
                  </p>
                </Col>
              </Row>
            </Container>
          </Fade>
          <div className="cards__screen">
            <Fade bottom duration={motionDuration} delay={200} distance="100px">
              <Image fluid={cardsScreens.sharp.fluid} alt="Safrapay Banking App on a smartphone." />
            </Fade>
          </div>
          <div className="cards__back">
            <Fade bottom duration={motionDuration} delay={400} distance="150px">
              <div>
                <div className="cards__back__left">
                  <Image
                    fluid={cardsCardLeft.sharp.fluid}
                    alt="Digital rendering of the front of a Safra Business Debit Card."
                  />
                </div>
                <div className="cards__back__right">
                  <Image
                    fluid={cardsCardRight.sharp.fluid}
                    alt="Digital rendering of the front of a Safra Business Credit Card."
                  />
                </div>
                <div className="cards__back__mobile">
                  <Image
                    fluid={cardsCardMobile.sharp.fluid}
                    alt="Digital rendering of the front of a Safra Business Credit Card."
                  />
                </div>
              </div>
            </Fade>
          </div>
          <p className="cards__legal">
            Banking services provided by Safra National Bank of New York, Member FDIC.
          </p>
          <Plx className="cards--overlay" parallaxData={parallaxDataOverlay} />
        </BackgroundImage>
      </Plx>
    </div>
  );
};

export default Cards;
