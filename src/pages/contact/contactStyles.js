import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--bg);
    font-size: 2rem;
    color: var(--text);
`;

export const TitleForm = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: 800;
    color: var(--text);
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 10px;
`
export const InputStyles = styled.input`
    background-color: var(--bg);
    color: var(--text);
    border: 1px solid var(--text);
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    outline: none;
`;

export const InputFormStyles = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const TextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: var(--bg);
    color: var(--text);
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    border: 1px solid var(--text);
    border-radius: 5px;
    
    `;  
export const TextAreaFormStyles = styled.div`
    textarea {
        background-color: var(--bg);
        color: var(--text);
        width: 100%;
        height: 100px;
        padding: 10px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: 600;
        outline: none;
        border: none;
        resize: none; // Evita que el textarea se pueda redimensionar
        overflow: auto; // Asegura que el scroll aparezca cuando sea necesario
    }
    ::-webkit-scrollbar{
        display: none;
    }   
`;
export const ButtonFormStyles = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-size: 18px;
    color: var(--text);
    background-color: var(--purple-900);
    font-weight: 700;
    padding: 3px;
    margin-top: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  a:hover {
    background-color: var(--purple-700);
  }
`