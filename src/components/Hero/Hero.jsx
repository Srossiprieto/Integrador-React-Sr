// Hero.jsx
import React from 'react';
import arrowRight from '../assets/img/arrow-right.svg';
import { HeroContainerStyled, 
  HeroTextContainerStyled, 
  HeroImageContainerStyled, 
  HeroGridContainerStyled,
  HeroWidthContainer } from './HeroStyles';
import Card from '../Hero/HeroCard'; 
import { cardsData } from './data';
import { Link } from 'react-router-dom';


function Hero() {
  return (
    <HeroContainerStyled>
      <HeroWidthContainer>
        <HeroTextContainerStyled>
          <h1>Aumenta la <span>calidad</span> de tu <span>empresa</span>.</h1>
          <h2>¡Hasta un x10 garantizado en tus ventas!</h2>
          <Link to="/contacto">
            Contactanos <img src={arrowRight} alt="arrowRight" />
          </Link>
        </HeroTextContainerStyled>
        <HeroImageContainerStyled>
          <HeroGridContainerStyled>

          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          ))}
          </HeroGridContainerStyled>
        </HeroImageContainerStyled>
      </HeroWidthContainer>
    </HeroContainerStyled>
  );
}

export default Hero;
