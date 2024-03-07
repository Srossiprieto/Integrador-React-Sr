import { AboutContainerWidth, 
  AboutContainer,
  AboutContainerTextStyled, 
  ShapesContainer, 
  AboutContainer2,

  } 
from './aboutStyle';
// import Shapes from '../../components/assets/img/shapes.svg'

function About() {
  return (
    <>
        <AboutContainer>
        <ShapesContainer>
        <svg  data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path  d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill" fill="#FEF2FF" fill-opacity="1"></path></svg>
        </ShapesContainer> 
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