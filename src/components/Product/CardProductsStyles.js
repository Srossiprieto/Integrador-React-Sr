import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

export const CardProductDest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 300px;
  gap: 10px;
  /* border: 1px solid var(--gray); */
  background-color: var(--bg-card);
  padding: 20px;
  border-radius: 8px;
  h2 {
    color: var(--text);
    font-weight: 800;
  }
  h3 {
    color: var(--text);
    font-weight: 400;
    font-size: 15px;
  }
  p {
    font-size: 26px;
    color: var(--text-contrast);
    font-weight: 700;
  }
  span{
    color: var(--gray);
    font-weight: 600;
    font-size: 15px;

  }
  img {
    width: 38px;
    height: 38px;
  }
`;


export const ProductContainer = styled.div`
  display: flex;
  padding-block-start: 100px;
  flex-direction: column;
  user-select: none;
  h1{
    text-align: center;
    color: var(--text);
    font-weight: 800;
    font-size: 30px;
  }
`



export const ContainerProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 100px;
    

`
export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 15px 15px;
  > h2 {
    color: var(--bg);
  }
`;


export const CheckItem = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  color: var(--gray);
  font-weight: 300;
  font-size: 15px;

`

export const StyledCheckIcon = styled(FaCheck)`
  color: var(--text-contrast);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: auto;
`
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  color: var(--text);
  background-color: var(--purple-700);
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: var(--purple-500);
  }
`
