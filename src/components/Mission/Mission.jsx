import React from 'react';
import Fade from 'react-reveal/Fade';

const Mission = () => {
  return (
    <section id="mission" className="mission">
      <Fade bottom cascade duration={500} distance="50px">
        <div>
          <h3 className="mission__copy">
            “Our goal is to remove the worry surrounding financial services by helping merchants
            improve earning potential and grow their business. ”
          </h3>
          <p className="mission__by">Helio Sarfaty - CEO Worldwide - Safrapay</p>
        </div>
      </Fade>
    </section>
  );
};

export default Mission;
