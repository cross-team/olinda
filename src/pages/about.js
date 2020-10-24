/* eslint-disable prettier/prettier */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Image from 'gatsby-image';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import PageTitle from '../components/PageTitle/PageTitle';
import Mission from '../components/Mission/Mission';
import Footer from '../components/Footer/Footer';

export default () => {
  const { aboutImageLarge, aboutImageSmall } = useStaticQuery(graphql`
    query {
      aboutImageLarge: file(relativePath: { eq: "page-about-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      aboutImageSmall: file(relativePath: { eq: "page-about-mobile-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(maxWidth: 1024, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const aboutImage = [
    aboutImageSmall.sharp.fluid,
    {
      ...aboutImageLarge.sharp.fluid,
      media: `(min-width: 1025px)`,
    },
  ];

  return (
    <Layout
      title="About Safrapay | Safrapay US | Merchant and Banking Services"
      description="Safrapay provides an on-the-go digital point-of-sale solution as well as access to merchant, digital banking, and financial services that help our customers grow their businesses."
      keywords="Safra, Safrapay, digital, payment, payment solution, point-of-sale, POS, merchant, merchant services, financial services, financial tools, business, grow"
    >
      <Header variation="internal" />
      <PageTitle title="About Safrapay" />
      <Fade bottom cascade duration={500} distance="50px">
        <Container as="section" className="page-about" fluid>
          <Row>
            <Col sm={12} md={4} className="no-gutters">
              <Image className="page-about__picture" fluid={aboutImage} alt="Lorem Ipsum dolor" />
            </Col>
            <Col sm={12} md={6}>
              <h3 className="page-about__title">Let Safrapay help you grow your business.</h3>
              <div className="page-about__content">
                <p>
                  At Safrapay, we want to make running your business simple, profitable, and sustainable.
                  We understand that each business is unique and requires a customized solution. That’s
                  why we offer more than just the tools that allow for the quick and efficient management
                  of your business, we offer access to an entire financial ecosystem.
                </p>
                <p>
                  Safrapay is a service provider of Safra National Bank of New York, Member FDIC, and both
                  are part of the J. Safra Group, which has been in the banking business for more than 175
                  years. The J. Safra Group believes in maintaining long-term client relationships built
                  on trust and the solidity of an internationally renowned group of dedicated
                  professionals. Safrapay blends that 175-year banking tradition with the flexibility of
                  an on-the-go digital solution.
                </p>
                <p>
                  Safrapay adapts to your needs, making sure you can do business where and when you need
                  to. Through our Merchant App, you can process payments, issue refunds, update your
                  product catalog, and access customer support 24 hours a day. As an approved Safrapay
                  merchant, you will also receive the unique opportunity to bundle your merchant services
                  with a Safra Business Bank Account<sup>1</sup> for a seamless experience that will help
                  your business thrive.
                </p>
                <p>
                  Safra Business Banking customers enjoy low fees, fast payouts, and access to a range of
                  financial services. Through our Banking App, you can easily manage your money, send
                  transfers, make mobile check deposits, and more. We’ve even taken the hassle out of cash
                  transactions by partnering with Allpoint® to give you debit-card access to a nationwide
                  network of ATMs.
                </p>
                <p>
                  All you need to get started is your mobile smartphone<sup>2</sup> and your essential
                  business details. If approved, you can start taking payments in a matter of minutes! Use
                  our Merchant App on its own or pair it with our Banking App<sup>3</sup> for a seamless
                  services experience. Download our Merchant App from your app store and apply to become a
                  Safrapay merchant today!
                </p>
                <p className="page-about__content__note">
                  <sup>1</sup> Only approved Safrapay merchants are eligible for a Safra Business Bank
                  Account.
                  <br />
                  <sup>2</sup> Access to our Merchant and Banking Apps require an iOS or Android device.
                  Carrier charges may apply.
                  <br />
                  <sup>3</sup> Use of the Banking App requires prior approval for a merchant account
                  through the Merchant App.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Fade>
      <Mission />
      <Footer />
    </Layout>
  );
};
