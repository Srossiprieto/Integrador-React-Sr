import { AboutContainerWidth, AboutContainer, AboutContainerTextStyled, ImgContainer } from './aboutStyle';
import robot3d from '../../components/assets/img/robot3d.png';

function About() {
  return (
    <>
        <AboutContainer>
          <AboutContainerWidth>
            <ImgContainer>
              <img src={robot3d} alt="Robot 3D" />
            </ImgContainer>
            <AboutContainerTextStyled>
              <h1>¿Quienes Somos?</h1>
              <p>
                Somos una empresa que se dedica a la creación de software y desarrollo web. 
                Nuestro objetivo es ayudar a las empresas a mejorar su presencia en línea y 
                aumentar sus ventas.
              </p>
            </AboutContainerTextStyled>
          </AboutContainerWidth>    
        </AboutContainer>
    </>
  );
}

export default About;