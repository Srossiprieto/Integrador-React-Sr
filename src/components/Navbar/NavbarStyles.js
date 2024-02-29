
import styled from 'styled-components';
import { FaUserAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";

export const NavbarContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 5rem;
  position: fixed;
  top: 0;
  z-index: 100;
  img {
    width: 35px;
    height: 35px;
  }

`;

export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 100px;
  background: #a285ffcf;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  backdrop-filter: blur(6.3px);
  -webkit-backdrop-filter: blur(10px); /* Para soporte en iOS */
  padding: 0.5rem 1rem;

  gap: 20px;
  a {
    text-decoration: none;
  }
  img {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 968px) {
    width: 100%;
  }

`


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
		color: var(--bg);
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
  @media (max-width: 968px) {
    display: flex;
    z-index: 115;
  }
  
  `;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

`
export const MenuContainerStyledBtn = styled.div`
  display: none;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  color: var(--text);
  @media (max-width: 968px) {
      display: flex;
  }
  `
export const DropDownMenuStyled = styled.div`
display: flex;
position: absolute;
top: 10px;
border-radius: 10px 10px;
right: 10px;
max-width: 30vh;
height: 40vh;
background-color: var(--purple-500);
opacity: ${({ open }) => (open ? '1' : '0')};
flex-direction: column;
justify-content: center;
text-align: start;
transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
z-index: 111;

a {
  text-decoration: none;
  color: var(--text);
  margin: 0 10px;
  font-weight: 600;
  &:hover {
    color: var(--bg);
  }
}

`;

export const BlurBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px); /* Para soporte en iOS */
  opacity: 1; /* Valor corregido */
  z-index: 4;
`;