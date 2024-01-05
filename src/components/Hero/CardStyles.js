// CardStyles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%; /* Ajustar el tamaño para ocupar el ancho disponible */
  box-sizing: border-box;
  position: relative;
  background: var(--grey);
  padding: 20px;
  border-radius: 8px;
`;

export const Image = styled.img`
    width: 38px;/* Ajustar el tamaño de la imagen */
    height: 38px; /* Mantener la proporción */
`;

export const Title = styled.div`
  font-size: 18px;
  color: var(--text);
`;

export const Description = styled.div`
  font-size: 14px;
  color: var(--text-grey);
`;
