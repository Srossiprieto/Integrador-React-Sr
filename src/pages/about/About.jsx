import { AboutContainerWidth, 
  AboutContainer,
  AboutContainerTextStyled, 
  ShapesContainer, 
  AboutContainer2,

  } 
from './aboutStyle';
import Shapes from '../../components/assets/img/shapes.svg'

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
                <button>Enviar</button>
              </AboutContainerTextStyled>
          </AboutContainerWidth> 
 
        </AboutContainer>

            <ShapesContainer>
              <img src={Shapes} alt="shapes" />
            </ShapesContainer> 

        <AboutContainer2>
          <h1> About 2 </h1>
        </AboutContainer2>
        
    </>
  );
}

export default About;