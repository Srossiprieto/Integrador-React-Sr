import styled from 'styled-components';


// =============================== Templates ===============================


export const CardTemplateDest = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 300px;
  gap: 10px;
  border: 1px solid var(--gray);
  padding: 20px;
  border-radius: 8px;
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
    
    }

`;
export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-top: auto;


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
// =============================== Templates ===============================

// =============================== TemplatesCard ===============================

export const TemplateContainer = styled.div`
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



export const ContainerTemplateWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 100px;
    
    
    `;
export const TemplateWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin: 15px 15px;
    > h2 {
        color: var(--bg);
    }
    
`;

// =============================== TemplatesCard ===============================