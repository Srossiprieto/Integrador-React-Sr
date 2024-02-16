import styled from 'styled-components';

export const AboutContainerWidth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block-start: 100px;
  max-width: 1300px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: 100px;
  }

`


export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: var(--bg);

`;

export const AboutContainerTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 2rem;
    margin-bottom: 10px;
    font-weight: 900;
    color: var(--text);
  }
  p {
    font-size: 1.2rem;
    max-width: 400px;
    line-height: 1.5;
    color: var(--purple-400);
    background-color: var(--purple-900);
    border-radius: 10px;
    padding: 10px;
  }

  @media (max-width: 768px) {
    padding: 20px;
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
      width: 100%;
    }
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  img {
    width: 100%;
    max-width: 300px;
  }

  @media (max-width: 768px) {
    width: 100%;
    img{
      max-width: 200px;
    }
  }
`;