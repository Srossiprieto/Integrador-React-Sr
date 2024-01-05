import styled from 'styled-components';

export const HeroContainerStyled = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1300px;
  margin: 100px;
  gap: 30px;

  h1 {
    margin-bottom: 2rem;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: var(--purple-500);
    color: var(--text);
    margin-top: 30px;
    padding: 10px;
    border-radius: 20px;
    font-size: 18px;
    font-weight: 800;
  }

  a:hover {
    background-color: var(--purple-800);
  }


  @media (max-width: 968px) {
    flex-direction: column;
  }

`;

export const HeroTextContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;

  h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 10px;
    color: var(--text);
  }

  span{
    background: linear-gradient(to bottom, var(--decoration), var(--decoration), var(--purple-500));
    background-clip: text;
    color: transparent;
    -webkit-background-clip: text;

  }

  h2 {
    font-size: 1.5rem;
    font-weight: 800;
    margin: 0;
    color: var(--text-grey);
  }

  p {
    font-size: 1.2rem;
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

export const HeroImageContainerStyled = styled.div`
  width: 50%;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 100%;
    background: linear-gradient(to top, var(--purple-500), var(--decoration));
    filter: blur(30px);
    border-radius: 20%;
    z-index: -1;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 400px;
    margin: 10%;
    box-sizing: border-box;
    z-index: 2;
    position: relative;
    padding: 20px;
    border-radius: 8px;
  }

  @media (max-width: 960px) {
    display: none;
  }
`;


export const HeroGridContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%; 
  box-sizing: border-box;
  position: relative;
  padding: 20px;
  border-radius: 8px;
`