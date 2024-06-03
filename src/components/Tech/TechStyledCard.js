import styled from 'styled-components';


// =============================== Tech ===============================


export const CardTechDest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 300px;
  gap: 10px;
  background: var(--bg-card);
  border-radius: 8px;
  img{
        width: 100%;
        height: 200px;
        border-radius: 8px 8px 0 0;
        object-fit: contain;
        background: white;
        
    }
    
    `;
    export const TextTechContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 10px;
    gap: 10px;
    h2 {
        font-size: 20px;
        font-weight: 700;
        color: var(--text);
    }
    p {
        font-size: 15px;
        font-weight: 500;
        color: var(--text);
    }
    h3 {
        font-size: 15px;
        font-weight: 300;
        color: var(--gray);
    }


    `





export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-top: auto;
    padding: 10px;


`;



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
// =============================== Tech ===============================

// =============================== TechCard ===============================

export const TechContainer = styled.div`
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



export const ContainerTechWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
    
    
    `;
export const TechWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1300px;
    gap: 10px;
    justify-content: center;
    margin: 15px 15px;
    > h2 {
        color: var(--bg);
    }
    
`;

// =============================== TechCard ===============================