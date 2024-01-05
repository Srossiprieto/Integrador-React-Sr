import React from 'react';
import { CardContainer, Image, Title, Description } from './CardStyles';

const HeroCard = ({ imageSrc, alt, title, description }) => {
  return (
    <CardContainer>
      <Image src={imageSrc} alt={alt} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default HeroCard;
