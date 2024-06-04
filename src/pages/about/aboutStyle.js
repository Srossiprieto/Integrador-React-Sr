// AboutStyles.js
import styled from 'styled-components';

export const AboutContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px 100px 50px 100px;
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
  gap: 5px;
  h2 {
    font-size: 3rem;
    font-weight: 800;
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
    h2{
      font-size: 2.5rem;
      width: 270px;
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
    background:linear-gradient(
  0deg,
  hsl(180deg 3% 81%) 0%,
  hsl(187deg 21% 77%) 11%,
  hsl(193deg 37% 74%) 22%,
  hsl(198deg 52% 71%) 33%,
  hsl(202deg 65% 69%) 44%,
  hsl(206deg 76% 69%) 56%,
  hsl(212deg 84% 70%) 67%,
  hsl(221deg 88% 72%) 78%,
  hsl(235deg 84% 76%) 89%,
  hsl(258deg 77% 73%) 100%
);
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