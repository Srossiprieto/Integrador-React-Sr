import styled from 'styled-components';


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: auto;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 1vh;
  border-radius: 8px;
  color: var(--text);
  background-color: var(--bg-btn);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  &:hover {
    background-color: var(--bg-btn-hover);
  }
  &:disabled {
  /* Tus estilos para el botón deshabilitado van aquí */
  opacity: 0.5; /* Esto hará que el botón se vea semi-transparente */
  cursor: not-allowed; /* Esto cambiará el cursor a un ícono de "no permitido" */
}
`