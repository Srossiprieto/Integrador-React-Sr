// About.jsx
import React from 'react';
import arrowRight from '../../components/assets/img/arrow-right.svg';
import { AboutContainerStyled, 
  AboutTextContainerStyled, 
  AboutImageContainerStyled, 
  AboutGridContainerStyled,
  AboutWidthContainer } from './aboutStyle';

import Card from '../about/HeroCard'; 

import { cardsData } from './data';
import { Link } from 'react-router-dom';
import ButtonPrimary  from '../../components/Ui/Button';



function About() {
  return (
    <AboutContainerStyled>
      <AboutWidthContainer>
        <AboutTextContainerStyled>
        <h1><span>¿Quienes somos?</span></h1>
          <h2>Empresa lider en equipamiento técnico</h2>
          <Link to="/contacto">
            {/* Contactanos <img src={arrowRight} alt="arrowRight" /> */}
            <ButtonPrimary text={"Contactanos"} img={arrowRight}/>
          
          </Link>
        </AboutTextContainerStyled>
        <AboutImageContainerStyled>
          <AboutGridContainerStyled>

          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              alt={card.alt}
              title={card.title}
              description={card.description}
            />
          ))}

          </AboutGridContainerStyled>
        </AboutImageContainerStyled>
      </AboutWidthContainer>
    </AboutContainerStyled>
  );
}

export default About;