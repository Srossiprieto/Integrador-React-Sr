import styled from 'styled-components';


export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 100px;
  gap: 30px;

  h1 {
    margin-bottom: 2rem;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--purple-500);
    color: var(--text);
    margin-top: 10px;
    padding: 5px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 800;
  }

  a:hover {
    background-color: var(--purple-800);
  }


  @media (max-width: 968px) {
    flex-direction: column;
    gap: 100px;
  }

`;
export const HeroWidthContainer = styled.div`
  width: 100%;
  display: flex;
  padding-block-start: 30px;
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
  width: 50%;

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

  h2 {
    font-size: 1rem;
    font-weight: 800;
    margin: 0;
    color: var(--text-grey);
  }

  p {
    font-size: 1.4rem;
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
  width: 40%; // Asegura que el contenedor ocupe todo el ancho disponible
  height: 40%; // Ajusta la altura automáticamente en función del contenido
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
    filter: blur(15px); // Aplica un desenfoque al fondo
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
    border-radius: 8px;
  }

  @media (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    
  }
  @media (max-width: 768px) {
    > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    padding: 20px;
    border-radius: 8px;
  }
  
  }
`;


export const HeroGridContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%; 
  box-sizing: border-box;
  position: relative;
  padding: 20px;
  border-radius: 8px;

`