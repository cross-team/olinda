import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import Fade from 'react-reveal/Fade';
import SNBNY from '../../images/snbny-brand.svg';
import FDICMember from '../../images/fdic-brand.svg';

const DigitalBanking = () => {
  const { digitalBankingBg, iconCoin } = useStaticQuery(graphql`
    query {
      digitalBankingBg: file(relativePath: { eq: "digital-banking-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      iconCoin: file(relativePath: { eq: "icon-coin.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      id="digital-banking"
      Tag="section"
      className="digital-banking"
      fluid={digitalBankingBg.sharp.fluid}
      style={{
        backgroundSize: 'contain',
        backgroundPosition: '0 100%',
      }}
    >
      <Fade bottom cascade duration={500} distance="50px">
        <div className="digital-banking__wrap">
          <h2 className="digital-banking__title">Convenient Digital Banking</h2>
          <p className="digital-banking__copy">
            Open a Business Bank Account with us to move money, make mobile check deposits, and view
            statements from the convenience of your mobile phone. Use your included debit card to
            make cash deposits and withdrawals at any of our in-network ATMs.
          </p>
          <div className="digital-banking__brands">
            <SNBNY
              className="digital-banking__brands__brand"
              aria-label="Safra National Bank of New York"
            />
            <FDICMember className="digital-banking__brands__brand" aria-label="Member FDIC" />
          </div>
          <span className="digital-banking__note">
            Banking services provided by Safra National Bank of New York, Member FDIC.
          </span>
        </div>
      </Fade>
      <Fade left duration={1500} distance="200px">
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
    </BackgroundImage>
  );
};

export default DigitalBanking;
