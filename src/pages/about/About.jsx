import { AboutContainerWidth, 
  AboutContainer,
  AboutContainerTextStyled, 
  AboutContainer2,

  } 
from './aboutStyle';

import ShapesDivider from '../../components/Shapes/ShapesDivider';

function About() {
  return (
    <>
        <AboutContainer>
          <ShapesDivider />
          <AboutContainerWidth>
              <AboutContainerTextStyled>
                <h1>
                  ¿Quienes Somos?
                </h1>
                <p>
                  Somos una empresa que se dedica a la creación de software y desarrollo web. 
                  Nuestro objetivo es ayudar a las empresas a mejorar su presencia en línea y 
                  aumentar sus ventas.
                </p>
                <button>Enviar</button>
              </AboutContainerTextStyled>
          </AboutContainerWidth> 
        </AboutContainer>
        <AboutContainer2> 
          <h1> About 2 </h1>
        </AboutContainer2>
        
    </>
  );
}

export default About;