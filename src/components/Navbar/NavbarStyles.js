
import styled from 'styled-components';

export const NavbarContainerStyled = styled.div`
  width: 100%;
  height: 70px;
  background-color: var(--bg);
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  align-items: center;
  position: fixed;
  z-index: 4;
  img {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const NavbarUlStyled = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  a {
    text-decoration: none;
    color: var(--text);
    margin: 0 10px;
	font-weight: 600;
	&:hover{
		color: var(--decoration);
	}
  }
  @media (max-width: 968px) {
    display: none;
  }
`;

export const UserNavStyled = styled.div`
  gap: 15px;
  cursor: pointer;
  span {
    color: white;
    font-size: 1rem;
    margin-right: 20px;
  }
`;

export const MenuContainerStyled = styled.div`
  display: none;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text);
  @media (max-width: 968px) {
    display: flex;
  }
`;
