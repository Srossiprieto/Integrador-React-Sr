import styled from 'styled-components';
import { FaUserAlt } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

export const NavbarContainerStyled = styled.div`
  position: relative; 
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
  img {
    width: 35px;
    height: 35px;
  }
  

`;

export const BtnSignOut = styled.a`
  cursor: pointer;
  color: var(--text);
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  display: flex;
  background: var(--purple-600);
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
  background: var(--purple-500);
  }
  


`

export const BtnSignOutContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`


export const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--bg);
  padding: 0.5rem 5rem;
  gap: 20px;
  height: 55px;
  a {
    text-decoration: none;
  }
  @media (max-width: 968px) {
    width: 100%;
  }

`


export const NavbarUlStyled = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  ul{
    display: flex;
    gap: 20px;
  }
  a {
    font-size: 0.9rem;
    text-decoration: none;
    color: var(--text);
    margin: 0 10px;
	  font-weight: 500;
    transition: all 0.3s ease-in-out;
    
	&:hover{
		color: var(--nav-hover);
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

export const StyledIoClose = styled(IoClose)`
  position: relative;
  cursor: pointer;
  z-index: 113;
  right: -30px;

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
  right: -12px; // Ajusta este valor según sea necesario
  background-color: var(--purple-900);
  color: white;
  border-radius: 50%;
  width: 1em;
  height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  `;
  export const ShoppingNumber = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 9px;
    font-weight: 500;


  `



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
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

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
  display: none;
  top: 100%;
  right: 0;
 
  a {
  text-decoration: none;
  color: var(--text);
  margin: 0 10px;
  font-weight: 500;
  transition: all 0.30s ease-in-out;
  &:hover {
    color: var(--bg);
  }
}

@media (max-width: 968px) {
  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
    position: absolute;
    font-size: 2rem;
  }
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  width: 300px;
  min-height: 100dvh;
  background-color: var(--purple-900);
  opacity: ${({ open }) => (open ? '1' : '0')};
  transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(200%)'};
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  z-index: 111;
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
  opacity: 1;
  z-index: 4;
`;