import {
  NavbarContainerStyled,
  NavbarUlStyled,
  MenuContainerStyled,
  UserNavStyled
} from './NavbarStyles';

import logoNav from '../assets/img/logoNav.png'
import {FaUserAlt} from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai" 


function Navbar() {
  return (
    <NavbarContainerStyled>
        <a href="#">
          <img src={logoNav} alt="LogoNav" />
        </a>
      <NavbarUlStyled>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Nosotros</a>
        </li>
        <li>
          <a href="#">Categorias</a>
        </li>
        <li>
          <a href="#">Productos</a>
        </li>
      </NavbarUlStyled>
      <UserNavStyled>
        <FaUserAlt/>
      </UserNavStyled>
      <MenuContainerStyled>
        <AiOutlineMenu/>
      </MenuContainerStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;