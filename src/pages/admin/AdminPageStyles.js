import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  margin-top: 150px;
  min-height: 100dvh;
  h2 {
    margin-bottom: 20px;
    padding: 20px;
    border-radius: 8px;
    background-color: var(--bg-btn);
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    background-color: black;
  }

  th {
    background-color: black;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 5px;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const Form = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
