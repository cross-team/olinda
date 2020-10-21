import React from 'react';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
  return (
    <section id="title" className="title">
      <Fade bottom cascade duration={500} distance="50px">
        <div>
          <h3 className="title__content">{title}</h3>
        </div>
      </Fade>
    </section>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
