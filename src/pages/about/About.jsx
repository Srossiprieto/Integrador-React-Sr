import { AboutContainerWidth, 
  AboutContainer,
  AboutContainerTextStyled, 

  } 
from './aboutStyle';

import logoNav from '../../components/assets/img/logoNav.webp';

function About() {
  return (
    <>
        <AboutContainer>
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
                <button>Ver más</button>
                <div></div>
              </AboutContainerTextStyled>
          </AboutContainerWidth> 
        </AboutContainer>
        
    </>
  );
}

export default About;