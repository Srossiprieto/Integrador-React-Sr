import styled from "styled-components";

export const AdminContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  min-height: 100dvh;
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
