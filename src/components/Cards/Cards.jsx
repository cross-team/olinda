import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Image from 'gatsby-image';
import Fade from 'react-reveal/Fade';

const Cards = () => {
  const { cardsBg, cardsScreens, cardsCardLeft, cardsCardRight } = useStaticQuery(graphql`
    query {
      cardsBg: file(relativePath: { eq: "cards-bg.jpg" }) {
        sharp: childImageSharp {
          fluid(quality: 95) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      cardsScreens: file(relativePath: { eq: "cards-screen.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      cardsCardLeft: file(relativePath: { eq: "cards-card-left.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }

      cardsCardRight: file(relativePath: { eq: "cards-card-right.png" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      id="cards"
      Tag="section"
      className="cards"
      fluid={cardsBg.sharp.fluid}
      backgroundColor="#63676f"
    >
      <Fade bottom cascade duration={500} distance="50px">
        <div>
          <h2 className="cards__title">Easy Card Management</h2>
          <p className="cards__copy">
            Manage your debit and credit cards through our banking app. Contactless pay options
            available. Terms and Conditions apply.
          </p>
        </div>
      </Fade>
      <div className="cards__screen">
        <Fade bottom duration={1000} delay={200} distance="100px">
          <Image fluid={cardsScreens.sharp.fluid} alt="Lorem Ipsum dolor" />
        </Fade>
      </div>
      <div className="cards__back">
        <Fade bottom duration={1000} delay={400} distance="150px">
          <div>
            <div className="cards__back__left">
              <Image fluid={cardsCardLeft.sharp.fluid} alt="Lorem Ipsum dolor" />
            </div>
            <div className="cards__back__right">
              <Image fluid={cardsCardRight.sharp.fluid} alt="Lorem Ipsum dolor" />
            </div>
          </div>
        </Fade>
      </div>
      <p className="hero__legal">
        Banking services provided by Safra National Bank of New York, Member FDIC.
      </p>
    </BackgroundImage>
  );
};

export default Cards;
