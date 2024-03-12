import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 1em;
  padding: 1em;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  animation: ${slideUp} 0.3s ease-out;
`;
    

export const ModalContent = styled.div`
    background-color: var(--purple-400);
    border-radius: 8px;
    display: flex;
    gap: 10px;
    height: 50px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    color: white;
    `;

export const CloseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    background-color: transparent;
    width: 40px;
    height: 100%;
    font-size: 30px;
    border: none;
    cursor: pointer;
    position: relative;
    top: 0;
    right: 0;
    border-radius: 0 8px 8px 0;


`;