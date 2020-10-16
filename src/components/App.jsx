import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Selling from './Selling/Selling';
import DigitalBanking from './DigitalBanking/DigitalBanking';
import Cards from './Cards/Cards';
import Mission from './Mission/Mission';
import About from './About/About';
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
      <About />
      <Footer />
    </div>
  );
}

export default App;
