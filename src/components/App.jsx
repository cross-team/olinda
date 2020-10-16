import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Selling from './Selling/Selling';
import DigitalBanking from './DigitalBanking/DigitalBanking';
import Cards from './Cards/Cards';
import Mission from './Mission/Mission';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="wrap">
      <Header />
      <Hero />
      <Selling />
      <DigitalBanking />
      <Cards />
      <Mission />
      <Footer />
    </div>
  );
}

export default App;
