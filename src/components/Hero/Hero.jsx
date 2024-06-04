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
// import ButtonPrimary  from '../Ui/Button';
import ButtonLayout from '../Ui/ButtonLayout';



function Hero() {
  return (
    <HeroContainerStyled>
      <HeroWidthContainer>
        <HeroTextContainerStyled>
        <h1><span>Equipa</span> y <span>potencia</span> tu empresa.</h1>
          <p>Tecnología de vanguardia para empresas en crecimiento</p>
          <Link to="/contacto">
            {/* Contactanos <img src={arrowRight} alt="arrowRight" /> */}
            <ButtonLayout text={"Contactanos"} img={arrowRight}/>
          
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


