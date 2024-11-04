import styled from 'styled-components';

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

export const Button = styled.button`
  padding: 5px 10px;
  background-color: var(--bg-btn2);
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--bg-btn2-hover);
  }
`;