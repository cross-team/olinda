import React, { useState } from 'react';
import ScrollContext from '../context/scrollContext';
import Layout from '../components/Layout/Layout';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Selling from '../components/Selling/Selling';
import DigitalBanking from '../components/DigitalBanking/DigitalBanking';
import Cards from '../components/Cards/Cards';
import Mission from '../components/Mission/Mission';
import About from '../components/About/About';
import Support from '../components/Support/Support';
import Footer from '../components/Footer/Footer';

export default () => {
  const scrollPosition = useState('');

  return (
    <ScrollContext.Provider value={scrollPosition}>
      <Layout
        title="Safrapay - One Place for Your Payment, Banking, and Credit Needs"
        description="Safrapay offers a seamless merchant services and digital banking experience that is the perfect solution for your business."
        keywords="Safra, Safrapay, payments, banking, credit, digital banking,  merchant services, merchant, business"
      >
        <Header location="/" />
        <Hero />
        <Selling />
        <DigitalBanking />
        <Cards />
        <Mission />
        <About />
        <Support />
        <Footer />
      </Layout>
    </ScrollContext.Provider>
  );
};
