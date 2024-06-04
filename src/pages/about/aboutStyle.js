// AboutStyles.js
import styled from 'styled-components';

export const AboutContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 100px 0 100px;
  gap: 30px;
  height: 100vh;

  h1 {
    margin-bottom: 2rem;
  }

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 100px;
  }
`;

export const AboutWidthContainer = styled.div`
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

export const AboutTextContainerStyled = styled.div`
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

  h2 {
    font-size: 1rem;
    font-weight: 300;
    padding-bottom: 5px;
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

export const AboutImageContainerStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(to bottom, var(--decoration),var(--purple-500) ,var(--purple-400));
    z-index: -1;
    border-radius: 8px;
    filter: blur(7px);
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

export const AboutGridContainerStyled = styled.div`
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
`;