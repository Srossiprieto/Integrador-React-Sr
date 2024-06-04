// About.jsx
import React from 'react';
import arrowRight from '../../components/assets/img/arrow-right.svg';
import { AboutContainerStyled, 
  AboutTextContainerStyled, 
  AboutImageContainerStyled, 
  AboutGridContainerStyled,
  AboutWidthContainer } from './aboutStyle';

import Card from './AboutCard'; 

import { cardsData } from './data';
import { Link } from 'react-router-dom';
import ButtonLayout  from '../../components/Ui/ButtonLayout';



function About() {
  return (
    <AboutContainerStyled>
      <AboutWidthContainer>
        <AboutTextContainerStyled>
        <h2>Tu empresa de confianza<span>.</span></h2>
          <p>Empresa lider en equipamiento técnico</p>
          <Link to="/productos">
            {/* Contactanos <img src={arrowRight} alt="arrowRight" /> */}
            <ButtonLayout text={"Productos"} img={arrowRight}/>
          
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