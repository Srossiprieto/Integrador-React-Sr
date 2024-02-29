import styled from 'styled-components';

export const AboutContainerWidth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1300px;
`


export const AboutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: var(--purple-200);

`;

export const AboutContainerTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  h1 {
    font-size: 90px;
    margin-top: 140px;
    text-align: center;
    margin-bottom: 10px;
    font-weight: 900;
    color: var(--purple-400);
  }
  p {
    font-size: 1.2rem;
    color: var(--bg);
    text-align: center;
    max-width: 400px;
    font-weight: 500;
    line-height: 1.5;
    border-radius: 10px;
  }
  button {
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    background-color: var(--purple-400);
    color: var(--text);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  button:hover {
    background-color: var(--purple-600);
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    h1 {
      text-align: center;
      font-size: 60px;
    }
    p {
      text-align: center;
      width: 100%;
    }
  }
  `;



export const ShapesContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  img {
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

`


export const AboutContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background: var(--bg-2) ;
  color: black;

`