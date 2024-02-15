import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding-block-start: 100px;
  background-color: var(--bg);

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: flex-end;
    gap: 100px;
  }
`;

export const AboutContainerTextStyled = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
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
    max-width: 100%;
    h1 {
      text-align: center;
    }
    p {
      text-align: center;
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