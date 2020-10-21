/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';

export default () => {
  return (
    <Layout
      title="Contact Us | Safrapay | Merchant and Banking Services"
      description="Contact Safrapay to learn more about working with us as a merchant or partner."
      keywords="Safra, safrapay, merchant, banking, merchant services, banking services, contact, work with us, partner"
    >
      <Header variation="internal" />
      <PageTitle title="Contact Us" />
      <Container as="section" className="page-contact-us" fluid>
        <h2 className="page-contact-us__title">Let’s work together!</h2>
        <Row className="justify-content-center">
          <Col md={12} lg={6}>
            <form className="contact-us">
              <fieldset className="contact-us__group contact-us__group--row">
                <legend className="contact-us__group__name contact-us__group__name--alt d-md-block d-lg-none">I’m interested in becoming a...</legend>
                <input
                  type="radio"
                  name="reason"
                  value="merchant"
                  checked
                  className="sl-only"
                  id="reasonMerchant"
                />
                <label className="form-field-radio form-field-radio--left" htmlFor="reasonMerchant" tabIndex="0">
                  <span className="d-sm-none d-lg-block">I’m interested in becoming a Merchant</span>
                  <span className="d-md-block d-lg-none">Merchant</span>
                </label>
                <input
                  type="radio"
                  name="reason"
                  value="partner"
                  className="sl-only"
                  id="reasonPartner"
                />
                <label className="form-field-radio form-field-radio--right" htmlFor="reasonPartner" tabIndex="0">
                  <span className="d-sm-none d-lg-block">I’m interested in becoming a Partner (ISO or Agent)</span>
                  <span className="d-md-block d-lg-none">Partner (ISO or Agent)</span>
                </label>
              </fieldset>
              <fieldset className="contact-us__group">
                <legend className="contact-us__group__name">About You</legend>
                <Row>
                  <Col as="label" md={12} lg={6} className="form-field">
                    First Name
                    <input type="text" name="firstName" className="form-field__text" />
                  </Col>
                  <Col as="label" md={12} lg={6} className="form-field">
                    Last Name
                    <input type="text" name="lastName" className="form-field__text" />
                  </Col>
                </Row>
                <Row>
                  <Col as="label" lg={6} xl={6} className="form-field">
                    Email
                    <input type="text" name="email" className="form-field__text" />
                  </Col>
                  <Col as="label" lg={6} xl={6} className="form-field">
                    Phone Number
                    <input type="text" name="phone" className="form-field__text" />
                  </Col>
                </Row>
              </fieldset>
              <fieldset className="contact-us__group">
                <legend className="contact-us__group__name">About Your Business</legend>
                <Row>
                  <Col as="label" md={12} lg={6} className="form-field">
                    Company Name
                    <input type="text" name="companyName" className="form-field__text" />
                  </Col>
                  <Col as="label" md={12} lg={6} className="form-field">
                    Website (Optional)
                    <input type="text" name="website" className="form-field__text" />
                  </Col>
                </Row>
              </fieldset>
              <fieldset className="contact-us__group">
                <legend className="contact-us__group__name">Your Message</legend>
                <label className="form-field">
                  <span className="sl-only">Message</span>
                  <textarea cols="50" rows="6" name="message" className="form-field__textarea" />
                </label>
              </fieldset>
              <p className="contact-us__legal">
                By clicking ‘Send Message’ you agree to be contacted by Safrapay and its affiliates
                about our services (including through automated, artificial, and/or prerecorded
                means) via telephone, mobile device (including SMS and MMS), and/or email, and you
                agree to our <Link to="/terms-of-use">Terms of Use</Link> and{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>. You understand that your consent
                is not required as a condition to receive a good or service.
              </p>
              <Button variation="primary" type="submit" className="contact-us__submit">
                Send Message
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
};
