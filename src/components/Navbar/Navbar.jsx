import React, { useEffect } from 'react';
import {
  NavbarContainerStyled,
  NavbarUlStyled,
  MenuContainerStyled,
  DropDownMenuStyled,
  DropDownMenu,
  BlurBackground,
  RightContainer,
  StyledUserIcon,
  StyledBagIcon,
  ShoppingBagBubble,
  BagIconContainer

} from './NavbarStyles';

import { DropDownContext } from './DropDownContext'
import { useContext } from 'react';

import logoNav from '../assets/img/logoNav.png'
import {AiOutlineMenu} from "react-icons/ai" 
import { IoClose } from "react-icons/io5";

import { Outlet, Link } from "react-router-dom";



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
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='productos'>Productos</Link>
          </li>
          <li>
            <Link to="nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="contacto">Contacto</Link>
          </li>
          <Outlet />
        </NavbarUlStyled>
        <RightContainer>
          <StyledUserIcon/>
          <BagIconContainer>
            <StyledBagIcon/>
            <ShoppingBagBubble>0</ShoppingBagBubble>
          </BagIconContainer>
          <MenuContainerStyled onClick={(e) => {e.stopPropagation(); toggle();}}>
            {isOpen ? <IoClose /> : <AiOutlineMenu/>}
          </MenuContainerStyled>
        </RightContainer>
          <DropDownMenuStyled open={isOpen} onClick={(e) => e.stopPropagation()}>
            <DropDownMenu>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='productos'>Productos</Link>
              </li>
              <li>
                <Link to="nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="contacto">Contacto</Link>
              </li>
              <Outlet />
            </DropDownMenu>
          </DropDownMenuStyled>
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;