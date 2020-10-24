/* eslint-disable prettier/prettier */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';

export default () => {
  return (
    <Layout
      title="Accessibility Statement | Safrapay | Merchant and Banking Services"
      description="This Accessibility Statement details the commitment by Safrapay to make our products as accessible as possible using WCAG 2.1 guidelines."
      keywords="Safra, Safrapay, accessible, ADA, WCAG, WCAG 2.1, accessibility, statement, accessibility statement"
    >
      <Header variation="internal" />
      <PageTitle title="Accessibility Statement" />
      <Container as="section" className="page-legal" id="content" fluid>
        <Row className="justify-content-center">
          <Col sm={12} md={8} className="page-legal__content">
            <p>At Safrapay, we believe that inclusivity should be at the forefront of everything we do, from the language that we use to the products and services we provide. One of the most critical aspects of that inclusivity is designing with accessibility in mind so that users across the spectrum of needs and abilities are able to easily and intuitively use our products.</p>
            <h2 className="copy-size">Standards</h2>
            <p>We want everyone to be able to use, navigate, and interact with our website and mobile app.  Our design system has been created with the Web Content Accessibility Guidelines (WCAG)  2.1’s Level AA and AAA in mind. This means, among other things, that we put time and effort into providing accessible color contrasts for every type of viewer, pages that are coded for use with keyboard navigation and screen readers, and text alternatives for all non-textual elements such as icons, images, and videos. We use headers that help define page organization, and invisible skip links that can lead screen reader users to the main content on a page.</p>
            <h2 className="copy-size">Monitoring Compliance </h2>
            <p>We believe in constantly improving and measuring our products in order to provide a fully accessible website and app for all users.  We test our designs using a variety of assistive technologies and accessibility plug-ins, ADA knowledgeable employees to confirm design decisions, and accessibility consultants to cross-check and validate the WCAG 2.1 conformance of our products. </p>
            <p>We have taken steps to ensure that our web and app products continue to comply with ADA and WCAG 2.1 standards as they evolve. We have and will continue to conduct audits on all of our products with the goal of achieving WCAG’s recommended level of compliance. </p>
            <h2 className="copy-size">Contact Us</h2>
            <p>We want to ensure that communicating with us is easy and convenient.  If you encounter any issues, would like assistance, or have a recommendation for how we can improve, please contact us at contact <a href="mailto:">email</a> and <a href="tel:">telelephone</a> and let us know.</p>
            <p>It is our belief that through diligence, collaboration, and communication we can ensure that our products are as inclusive and accessible as possible.</p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Layout>
  );
};
