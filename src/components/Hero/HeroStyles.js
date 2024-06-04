import styled from 'styled-components';


export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 100px;
  gap: 30px;
  height: 100vh;
  
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 100px;
  }

`;
export const HeroWidthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
  gap: 30px;
  @media (max-width: 968px) {
    flex-direction: column;
    gap: 100px;
    }
  `;


export const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;

  h1 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 2px;
    color: var(--text);
  }

  span{
    background: linear-gradient(to bottom, var(--decoration),var(--purple-500) ,var(--purple-400));
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;

  }

  p {
    font-size: 1rem;
    font-weight: 300;
    padding-bottom: 5px;
    margin: 0;
    color: var(--text-grey);
  }

  

  @media (max-width: 968px) {
    width: 80%;
    align-items: center;
    text-align: center;
    h1{
      font-size: 2.5rem;
      width: 270px;
    }
    h2{
      font-size: 1.5rem;
    }
  }
  @media (max-width: 468px) {
    h2{
      font-size: 1.2rem;
      
    }
  }
`;

export const HeroImageContainerStyled = styled.div`
      position: relative; // Esto permite que las tarjetas posicionadas absolutamente se coloquen en relación a este contenedor
      width: 100%; // Asegura que el contenedor ocupe todo el ancho disponible
      height: 100%; // Ajusta la altura automáticamente en función del contenido
      display: flex; // Utiliza flexbox para un control más fácil del diseño
      justify-content: center; // Centra las tarjetas horizontalmente
      align-items: center; // Centra las tarjetas verticalmente
      &::before {
        content: ""; // Añade un pseudo-elemento para crear un fondo
        position: absolute; // Posiciona el fondo en relación al contenedor
        top: 0; // Coloca el fondo en la parte superior del contenedor
        right: 0; // Coloca el fondo en la parte derecha del contenedor
        bottom: 0; // Coloca el fondo en la parte inferior del contenedor
        left: 0; // Coloca el fondo en la parte izquierda del contenedor
        background: linear-gradient(to bottom, var(--decoration),var(--purple-500) ,var(--purple-400)); // Aplica un degradado de color al fondo
        z-index: -1; // Coloca el fondo detrás del contenido
        border-radius: 8px; // Añade esquinas redondeadas al fondo
        filter: blur(7px); // Aplica un desenfoque al fondo
      }
      @media (max-width: 968px) {
        width: 100%;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 468px) {
        width: 170%;
      }


  
      `;


export const HeroGridContainerStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
    border-radius: 8px;
    
      @media (max-width: 968px) {
        width: 80%;
        justify-content: center;
        
      }
      @media (max-width: 768px) { 
        gap: 20px;
        width: 80%;
      }
      @media (max-width: 468px) {
        gap: 10px;
        width: 20%;
      }
`