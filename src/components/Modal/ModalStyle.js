import styled from 'styled-components';

export const ModalBackground = styled.div`
    position: fixed;
    bottom: 0;
    top: 0;
    left: 0;
    margin: 1em;
    padding: 1em;
    z-index: 10;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    
    `;

export const ModalContent = styled.div`
    background-color: var(--purple-400);
    border-radius: 8px;
    display: flex;
    gap: 10px;
    height: 70px;
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