/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Formik, Field, Form } from 'formik';
import MaskedInput from "react-text-mask";
import { forEach } from 'lodash';
import { navigate } from '@reach/router';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';
import Button from '../components/Button/Button';
import usePrefersReducedMotion from '../hooks/use-reduced-motion';
import IconError from '../images/icon-error.svg';

export default () => {
  const motionDuration = usePrefersReducedMotion() ? 0 : 500;

  const subimtContact = async (values) => {
    const data = JSON.stringify(values, null, 2);
    
    const fetchOptions = {
      method: 'POST',
      body: data,
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    };

    const response = await fetch(`${process.env.SAFRAPAY_API_URL}/interests`, fetchOptions);
    navigate('/contact-us-success');

    return response;
  };

  const validateGeneral = (values) => {
    const errors = {};
    
    forEach(values, (value, field) => {
      if (field !== 'website' && value === '') {
        errors[field] = 'Required';
      }
    });
    
    return errors;
  };

  const validateEmail = (value) => {
    let error;
 
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) && value !== '') {
      error = 'Email format is not valid';
    }
 
    return error;
  };

  const phoneNumberMask = ["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/];

  const validatePhone = (value) => {
    let error;
 
    if (!/^[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/i.test(value) && value !== '') {
      error = 'Phone Number format is not valid';
    }
 
    return error;
  };

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
          <h2 className="page-contact-us__title">Let’s work together!</h2>
          <Row className="justify-content-center">
            <Col sm={12} md={6}>
              <Formik
                initialValues={{
                  interestType: 'merchant',
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  companyName: '',
                  website: '',
                  message: '',
                }}
                validate={validateGeneral}
                onSubmit={(values) => subimtContact(values)}
              >
                {({ errors, touched, setFieldValue }) => (
                  <Form className="contact-us">
                    <fieldset className="contact-us__group contact-us__group--row">
                      <legend className="contact-us__group__name contact-us__group__name--alt d-sm-block d-md-none">
                        I’m interested in becoming a...
                      </legend>
                      <Field
                        type="radio"
                        name="interestType"
                        value="merchant"
                        className="sl-only"
                        id="interestTypeMerchant"
                      />
                      <label
                        className="form-field-radio form-field-radio--left"
                        htmlFor="interestTypeMerchant"
                        tabIndex="0"
                        onKeyPress={() => {setFieldValue('interestType', 'merchant')}}
                      >
                        <span className="form-field-radio__label">
                          I’m interested in becoming a Merchant
                        </span>
                        <span className="form-field-radio__label form-field-radio__label--mobile">Merchant</span>
                      </label>
                      <Field
                        type="radio"
                        name="interestType"
                        value="partner"
                        className="sl-only"
                        id="interestTypePartner"
                      />
                      <label
                        className="form-field-radio form-field-radio--right"
                        htmlFor="interestTypePartner"
                        tabIndex="0"
                        onKeyPress={() => {setFieldValue('interestType', 'partner')}}
                      >
                        <span className="form-field-radio__label">
                          I’m interested in becoming a Partner (ISO or Agent)
                        </span>
                        <span className="form-field-radio__label form-field-radio__label--mobile">Partner (ISO or Agent)</span>
                      </label>
                    </fieldset>
                    <fieldset className="contact-us__group">
                      <legend className="contact-us__group__name">About You</legend>
                      <Row>
                        <Col sm={12} md={6} className="form-field">
                          <label className="form-field__label" htmlFor="firstName">
                            First Name
                          </label>
                          <Field type="text" id="firstName" name="firstName" className={`form-field__text ${errors.firstName && touched.firstName ? `form-field__text--error` : ``}`} />
                          {errors.firstName && touched.firstName && <div className="form-field__error" aria-live="polite"><IconError /> {errors.firstName}</div>}
                        </Col>
                        <Col sm={12} md={6} className="form-field">
                          <label className="form-field__label" htmlFor="lastName">
                            Last Name
                          </label>
                          <Field type="text" id="lastName" name="lastName" className={`form-field__text ${errors.lastName && touched.lastName ? `form-field__text--error` : ``}`} />
                          {errors.lastName && touched.lastName && <div className="form-field__error" aria-live="polite"><IconError /> {errors.lastName}</div>}
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12} md={6} className="form-field">
                          <label className="form-field__label" htmlFor="email">
                            Email
                          </label>
                          <Field type="email" id="email" name="email" className={`form-field__text ${errors.email && touched.email ? `form-field__text--error` : ``}`} validate={validateEmail} />
                          {errors.email && touched.email && <div className="form-field__error" aria-live="polite"><IconError /> {errors.email}</div>}
                        </Col>
                        <Col sm={12} md={6} className="form-field">
                          <label className="form-field__label" htmlFor="phone">
                            Phone Number
                          </label>
                          <Field 
                            name="phone"  
                            validate={validatePhone}
                            render={({ field }) => (
                              <MaskedInput
                                {...field}
                                mask={phoneNumberMask}
                                id="phone"
                                type="text"
                                className={`form-field__text ${errors.phone && touched.phone ? `form-field__text--error` : ``}`}
                              />
                            )} 
                          />
                          {errors.phone && touched.phone && <div className="form-field__error" aria-live="polite"><IconError /> {errors.phone}</div>}
                        </Col>
                      </Row>
                    </fieldset>
                    <fieldset className="contact-us__group">
                      <legend className="contact-us__group__name">About Your Business</legend>
                      <Row>
                        <Col sm={12} md={6} className="form-field">
                          <label className="form-field__label" htmlFor="companyName">
                            Company Name
                          </label>
                          <Field type="text" id="companyName" name="companyName" className={`form-field__text ${errors.companyName && touched.companyName ? `form-field__text--error` : ``}`} />
                          {errors.companyName && touched.companyName && <div className="form-field__error" aria-live="polite"><IconError /> {errors.companyName}</div>}
                        </Col>
                        <Col sm={12} md={6} className="form-field">
                          <label className="form-field__label" htmlFor="website">
                            Website (Optional)
                          </label>
                          <Field type="text" id="website" name="website" className="form-field__text" />
                        </Col>
                      </Row>
                    </fieldset>
                    <fieldset className="contact-us__group">
                      <Row>
                        <Col sm={12} md={12} className="form-field">
                          <label className="form-field__label form-field__label--big" htmlFor="message">
                            Your Message
                          </label>
                          <Field as="textarea" cols="6" rows="6" id="message" name="message" className={`form-field__textarea ${errors.message && touched.message ? `form-field__textarea--error` : ``}`} />
                          {errors.message && touched.message && <div className="form-field__error" aria-live="polite"><IconError /> {errors.message}</div>}
                        </Col>
                      </Row>
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
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </Fade>  
      <Footer />
    </Layout>
  );
};
