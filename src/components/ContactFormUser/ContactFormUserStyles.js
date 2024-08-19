import styled from 'styled-components';


export const ContentForm = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  h2{
    display: flex;
    justify-content: center;
    color: var(--text);
    font-weight: 800;
    font-size: 4vh;
    border-bottom: 1px solid var(--gray);
    padding-bottom: 1vh;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 50vh;
  background: var(--bg-footer);
  border-radius: 10px;
  flex-direction: column;
  padding: 3vh;
  margin: auto;
  gap: 7px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Input = styled.input`
  margin: 10px 0px 10px 0px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  &placeholder {
    color: var(--gray-400);
    font-weight: 500;
  }
`;



