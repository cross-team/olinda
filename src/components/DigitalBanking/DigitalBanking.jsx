import React, { useState, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import Image from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Plx from 'react-plx';
import SNBNY from '../../images/snbny-brand.svg';
import FDICMember from '../../images/fdic-brand.svg';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';

const DigitalBanking = () => {
  const { digitalBankingBg, iconCoin } = useStaticQuery(graphql`
    query {
      digitalBankingBg: file(relativePath: { eq: "digital-banking-bg.jpg" }) {
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

      iconCoin: file(relativePath: { eq: "icon-coin.png" }) {
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

  const digitalBakingRef = useRef();
  const [digitalBakingPosition, setDigitalBakingPosition] = useState(100);
  const [digitalBakingPositionStart, setDigitalBakingPositionStart] = useState(100);
  const [cardsPosition, setCardsPosition] = useState(100);

  useScrollPosition(() => {
    const windowHeight = window.innerHeight;

    const banking = document.querySelector('#digital-banking');
    const bankingHeight = banking.clientHeight;
    const bankingOffset = banking.offsetTop;

    const cards = document.querySelector('#cards');
    const cardsOffset = cards.offsetTop;

    if (bankingHeight >= windowHeight) {
      setDigitalBakingPositionStart('#cards');
      setDigitalBakingPosition(bankingOffset);
    } else {
      setDigitalBakingPositionStart(bankingOffset);
      setDigitalBakingPosition(bankingOffset - (windowHeight - bankingHeight));
    }

    setCardsPosition(cardsOffset);
  });

  const parallaxDataSection = [
    {
      start: 'self',
      end: digitalBakingPosition,
      properties: [
        {
          startValue: -50,
          endValue: 0,
          unit: 'vh',
          property: 'translateY',
        },
      ],
    },
    {
      start: digitalBakingPositionStart,
      startOffset: '5vh',
      end: cardsPosition,
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
      start: 'self',
      end: digitalBakingPosition,
      properties: [
        {
          startValue: 80,
          endValue: 0,
          unit: '%',
          property: 'opacity',
        },
      ],
    },
    {
      start: digitalBakingPositionStart,
      startOffset: '5vh',
      end: cardsPosition,
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
  const motionDurationCoins = usePrefersReducedMotion() ? 0 : 1500;

  return (
    <div id="digital-banking" ref={digitalBakingRef}>
      <Plx parallaxData={parallaxDataSection}>
        <BackgroundImage
          Tag="section"
          className="digital-banking"
          fluid={digitalBankingBg.sharp.fluid}
          style={{
            backgroundSize: 'contain',
            backgroundPosition: '0 100%',
          }}
          aria-label="Close up of a man’s hands using the Safrapay Banking App to view his account details on his smartphone."
        >
          <Fade bottom cascade duration={motionDuration} distance="50px">
            <Container fluid>
              <Row className="justify-content-center">
                <Col
                  xs={12}
                  sm={{ span: 12, offset: 0 }}
                  md={{ span: 8, offset: 0 }}
                  lg={{ span: 5, offset: 6 }}
                >
                  <h2 className="digital-banking__title">Convenient Digital Banking</h2>
                  <p className="digital-banking__copy">
                    Open a Business Bank Account with us to move money, make mobile check deposits,
                    and view statements from the convenience of your mobile phone. Use your included
                    debit card to make cash deposits and withdrawals at any of our in-network ATMs.
                  </p>
                  <div className="digital-banking__brands">
                    <SNBNY
                      className="digital-banking__brands__brand"
                      aria-label="Safra National Bank of New York"
                    />
                    <FDICMember
                      className="digital-banking__brands__brand"
                      aria-label="Member FDIC"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col
                  xs={12}
                  sm={{ span: 12, offset: 0 }}
                  md={{ span: 8, offset: 0 }}
                  lg={{ span: 3, offset: 8 }}
                >
                  <p className="digital-banking__note">
                    Banking services provided by Safra National Bank of New York, Member FDIC.
                  </p>
                </Col>
              </Row>
            </Container>
          </Fade>
          <Fade left duration={motionDurationCoins} distance="200px">
            <div className="digital-banking__float-elements" aria-hidden>
              <Image
                fluid={iconCoin.sharp.fluid}
                alt="Coin icon"
                className="digital-banking__coin digital-banking__coin--1"
                fadeIn={false}
              />
              <Image
                fluid={iconCoin.sharp.fluid}
                alt="Coin icon"
                className="digital-banking__coin digital-banking__coin--2"
                fadeIn={false}
              />
              <Image
                fluid={iconCoin.sharp.fluid}
                alt="Coin icon"
                className="digital-banking__coin digital-banking__coin--3"
                fadeIn={false}
              />
              <Image
                fluid={iconCoin.sharp.fluid}
                alt="Coin icon"
                className="digital-banking__coin digital-banking__coin--4"
                fadeIn={false}
              />
              <Image
                fluid={iconCoin.sharp.fluid}
                alt="Coin icon"
                className="digital-banking__coin digital-banking__coin--5"
                style={{ postion: 'absolute' }}
                fadeIn={false}
              />
              <Image
                fluid={iconCoin.sharp.fluid}
                alt="Coin icon"
                className="digital-banking__coin digital-banking__coin--6"
                fadeIn={false}
              />
            </div>
          </Fade>
          <Plx className="digital-banking--overlay" parallaxData={parallaxDataOverlay} />
        </BackgroundImage>
      </Plx>
    </div>
  );
};

export default DigitalBanking;
