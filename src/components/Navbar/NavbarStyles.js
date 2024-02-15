
import styled from 'styled-components';
import { FaUserAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

export const NavbarContainerStyled = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--bg);
  display: flex;
  justify-content: space-between;
  padding: 1rem 4rem;
  align-items: center;
  position: fixed;
  top: 0; 
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

export const StyledUserIcon = styled(FaUserAlt)`
  color: var(--text);
  height: 15px;
  cursor: pointer;
`;

export const BagIconContainer = styled.div`
  position: relative;
  color: var(--text);
  height: 15px;
  cursor: pointer;
`;

export const StyledBagIcon = styled(FaBagShopping)`
  position: relative;
  color: var(--text);
  height: 15px;
  cursor: pointer;
`;

export const ShoppingBagBubble = styled.span`
  position: absolute;
  top: -5px; // Ajusta este valor según sea necesario
  right: -10px; // Ajusta este valor según sea necesario
  background-color: var(--decoration);
  color: white;
  border-radius: 50%;
  width: 1.25em;
  height: 1.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
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
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
export const DropDownMenuStyled = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 20vh;
  height: 100vh;
  background-color: var(--purple-500);
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
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