import styled from 'styled-components';


export const ShapesContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 200px; // Asegúrate de que el contenedor tenga una altura definida
  overflow: hidden;
  line-height: 0;
  img {
    position: relative;
    display: block;
    width: 100%;
    height: 100%; // Establece la altura de la imagen para que ocupe todo el espacio disponible
    object-position: bottom; // Esto hará que la imagen se alinee con la parte inferior del contenedor
  }
`;