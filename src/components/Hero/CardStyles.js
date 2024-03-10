// CardStyles.js
import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;;
  width: 100%; /* Ajustar el tamaño para ocupar el ancho disponible */
  position: relative;
  background: var(--grey);
  padding: 20px;
  gap: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: var(--purple-900);
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }


`;

export const Image = styled.img`
    width: 38px;/* Ajustar el tamaño de la imagen */
    height: 38px; /* Mantener la proporción */
`;

export const Title = styled.div`
  font-size: 18px;
  width: 100px;
  color: var(--text);
`;

export const Description = styled.div`
  color: var(--text-grey);
`;
