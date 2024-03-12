import styled from 'styled-components';

export const ModalCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--bg);
  padding: 20px;
  width: 300px;
  position: fixed;
  right: 0;
  top: 55px;
  height: 100vh;
  box-shadow: -1px 0 20px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  hr {
    border: 1px solid var(--text);
  }
`;




  export const CardsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: green;
    height: 100%;


  `;

  export const CardCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: -1px 0 20px rgba(0, 0, 0, 0.15);
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  

  `



// =============================== ModalCart ===============================


export const CardCartDest = styled.div`
    display: flex;
    width: 100%;
    background: #1a1a1af0;
    border-radius: 8px;
    gap: 5px;
  img{
    height: 60px;
    border-radius: 8px 0 0 8px;
    object-fit: contain;
    background: white;
        
    }
    
    `;
    export const TextCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: start;
    gap: 10px;
    h2 {
        font-size: 15px;
        font-weight: 700;
        color: var(--text);
    }
    p {
        font-size: 11px;
        font-weight: 500;
        color: var(--text);
    }
    h3 {
        font-size: 15px;
        font-weight: 300;
        color: var(--gray);
    }


    `

    export const CardCartTop = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      svg { 
        cursor: pointer;
        font-size: 20px;
        position: relative;
        top: -25px;
        right: -15px;
        color: var(--text);
        transition: all 0.3s ease;
      }
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
    font-weight: 700;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
        background-color: var(--purple-600);
    }

`;
// =============================== ModalCart ===============================

// =============================== ModalCard ===============================

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    user-select: none;
    h1{
        text-align: center;
        color: var(--text);
        font-weight: 800;
        font-size: 30px;
    }

`;



export const ContainerCartWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
    
    
    `;
    export const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 400px;
  margin: 0 auto;


  overflow: scroll;

  &::-webkit-scrollbar {
    background: transparent;
  }

  &::-webkit-scrollbar:horizontal {
    display: none;
  }

  @media (max-height: 800px) {
    height: 235px;
  }
`;

export const CartFooterStyled = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5px;
    align-items: center;
    width: 100%;
    padding: 10px;
    background: var(--bg);
    border-radius: 8px;

    h3 {
        font-size: 14px;
        font-weight: 400;
        color: var(--text);
    }
    p {
        font-size: 15px;
        font-weight: 500;
        color: var(--text);
    }
`;

// =============================== ModalCard ===============================

export const Increase = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text);
    cursor: pointer;
    font-size: 15px;
    padding: 10px;
    transition: all 0.3s ease;
    &:hover {
        color: var(--text);
    }
  `;
export const Count = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
`;
