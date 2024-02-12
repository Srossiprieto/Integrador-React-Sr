import React, { useEffect } from 'react';
import {
  NavbarContainerStyled,
  NavbarUlStyled,
  MenuContainerStyled,
  UserNavStyled,
  DropDownMenuStyled,
  DropDownMenu,
  BlurBackground
} from './NavbarStyles';

import { DropDownContext } from './DropDownContext'
import { useContext } from 'react';

import logoNav from '../assets/img/logoNav.png'
import {FaUserAlt} from "react-icons/fa";
import {AiOutlineMenu} from "react-icons/ai" 
import { IoClose } from "react-icons/io5";

import { NavLink } from 'react-router-dom';



function Navbar() {
  const { isOpen, toggle } = useContext(DropDownContext);

  useEffect(() => {
    const closeMenu = () => {
      if (isOpen) {
        toggle();
      }
    };

    window.addEventListener('scroll', closeMenu);
    window.addEventListener('click', closeMenu);

    return () => {
      window.removeEventListener('scroll', closeMenu);
      window.removeEventListener('click', closeMenu);
    };
  }, [isOpen, toggle]);

  return (
    <>
      {isOpen && <BlurBackground onClick={toggle} />}
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
        <MenuContainerStyled onClick={(e) => {e.stopPropagation(); toggle();}}>
          {isOpen ? <IoClose /> : <AiOutlineMenu/>}
        </MenuContainerStyled>
          <DropDownMenuStyled open={isOpen} onClick={(e) => e.stopPropagation()}>
            <DropDownMenu>
              <a href="#">Inicio</a>
              <a href="#">Nosotros</a>
              <a href="#">Categorias</a>
              <a href="#">Productos</a>
            </DropDownMenu>
          </DropDownMenuStyled>
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;