import styled from 'styled-components';

export const Form = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
export const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: var(--bg-btn2);
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-btn2-hover);
  }
`;
