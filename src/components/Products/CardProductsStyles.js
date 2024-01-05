import styled from "styled-components";

export const CardProductDest = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 300px;
  height: 350px;
  gap: 10px;
  background: #ffffff17;
  padding: 20px;
  border-radius: 8px;
  h2 {
    color: var(--text);
    font-weight: 800;
  }
  h3 {
    color: #696969;
  }
  p {
    font-size: 15px;
    color: var(--purple-500);
    font-weight: 800;
  }
  img {
    width: 38px;
    height: 38px;
  }
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  user-select: none;
  h1{
    text-align: center;
    color: var(--purple-500);
    font-weight: 800;
    font-size: 40px;
  }
`
export const ContainerProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    

`
export const ProductWrapper = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 15px 15px;
  > h2 {
    color: var(--bg);
  }
  @media (max-width: 968px) {
    display: flex;
    flex-direction: column;
  }
`;