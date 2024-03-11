import React, { useEffect } from 'react';
import {
  NavbarContainerStyled,
  NavbarContainer,
  NavbarUlStyled,
  MenuContainerStyled,
  DropDownMenuStyled,
  BlurBackground,
  RightContainer,
  StyledUserIcon,
  StyledBagIcon,
  StyledIoClose,
  ShoppingBagBubble,
  BagIconContainer,
  MenuContainerStyledBtn

} from './NavbarStyles';

import { DropDownContext } from './DropDownContext'
import { useContext } from 'react';

import logoNav from '../assets/img/logoNav.webp'
import {AiOutlineMenu} from "react-icons/ai" 

import { Outlet, Link } from "react-router-dom";

import ModalCart from './ModalCart/ModalCart';


import CartIcon from './CartIcon/CartIcon';



function Navbar() {
  // ======= MENU DESPLEGABLE =======
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
  // ======= MENU DESPLEGABLE =======

  // ======= CARRITO DESPLEGABLE =======


  // ======= CARRITO DESPLEGABLE =======

  return (
    <>
      {isOpen && <BlurBackground onClick={toggle} />}
      <NavbarContainerStyled>
          <NavbarContainer>
            <a href="#">
                <img src={logoNav} alt="LogoNav" />
              </a>
            <RightContainer>
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
              <StyledUserIcon/>

              <BagIconContainer  >
                <CartIcon/>
                <StyledBagIcon/>
                <ShoppingBagBubble>0</ShoppingBagBubble>
              </BagIconContainer>
                <ModalCart/>
              <MenuContainerStyled>
                <MenuContainerStyledBtn onClick={(e) => {e.stopPropagation(); toggle();}}>
                          {isOpen ? <StyledIoClose />: <AiOutlineMenu/>}
                </MenuContainerStyledBtn>
              </MenuContainerStyled>
            </RightContainer>
          </NavbarContainer>
            <DropDownMenuStyled open={isOpen} onClick={(e) => e.stopPropagation()}>
      
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/productos'>Productos</Link>
                </li>
                <li>
                  <Link to="/nosotros">Nosotros</Link>
                </li>
                <li>
                  <Link to="/contacto">Contacto</Link>
                </li>
                <Outlet />

            </DropDownMenuStyled>
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;