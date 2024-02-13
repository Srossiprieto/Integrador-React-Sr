
import styled from 'styled-components';

export const NavbarContainerStyled = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--bg);
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  align-items: center;
  position: fixed;
  top: 0; /* Asegura que el Navbar siempre esté en la parte superior de la ventana del navegador */
  z-index: 4;
  img {
    width: 35px;
    height: 35px;
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
    font-size: 0.9rem;
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
  .active{
  display: none;
}
  @media (max-width: 968px) {
    display: flex;
  }
  
  `;
export const DropDownMenuStyled = styled.div`
  position: absolute;
  top: 70px;
  right: 0;
  width: 20vh;
  height: 100vh;
  background-color: var(--bg-footer);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 111;
  transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  a {
    text-decoration: none;
    color: var(--text);
    margin: 0 10px;
    font-weight: 600;
    &:hover {
      color: var(--decoration);
    }
  } 
`

export const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 111;
  gap: 40px;

  a {
    text-decoration: none;
    color: var(--text);
    margin: 0 10px;
    font-weight: 600;
    &:hover {
      color: var(--decoration);
    }
  }
`
export const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); /* Para soporte en iOS */
  opacity: 1; /* Valor corregido */
  z-index: 1;
`;