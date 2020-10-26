import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import usePrefersReducedMotion from '../../hooks/use-reduced-motion';

const PageTitle = ({ title }) => {
  const motionDuration = usePrefersReducedMotion() ? 0 : 500;

  return (
    <section id="title" className="title">
      <Fade bottom cascade duration={motionDuration} distance="50px">
        <div>
          <h1 className="title__content">{title}</h1>
        </div>
      </Fade>
    </section>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
