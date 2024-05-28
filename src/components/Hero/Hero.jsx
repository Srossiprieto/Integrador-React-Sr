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
import ButtonPrimary  from '../Ui/Button';



function Hero() {
  return (
    <HeroContainerStyled>
      <HeroWidthContainer>
        <HeroTextContainerStyled>
        <h1><span>Equipa</span> y <span>potencia</span> tu empresa.</h1>
          <h2>Tecnología de vanguardia para empresas en crecimiento</h2>
          <Link to="/contacto">
            {/* Contactanos <img src={arrowRight} alt="arrowRight" /> */}
            <ButtonPrimary text={"Contactanos"} img={arrowRight}/>
          
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


