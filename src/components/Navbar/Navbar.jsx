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
  ShoppingNumber,
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

import { toggleHiddenCart } from '../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';


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
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);
  // Obtén la cantidad total de items en el carrito desde el estado de Redux
  const quantity = useSelector((state) => state.cart.cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0));

// Luego, pasa el valor de quantity a ShoppingBagBubble
<ShoppingBagBubble>{quantity}</ShoppingBagBubble>
  // ======= CARRITO DESPLEGABLE =======

  return (
    <>
      {isOpen && <BlurBackground onClick={toggle} />}
      {hidden && <BlurBackground onClick={toggle} />}
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

              <BagIconContainer>
                <StyledBagIcon  onClick={() => dispatch(toggleHiddenCart())}/>
                <ShoppingBagBubble onClick={() => dispatch(toggleHiddenCart())}>
                  <ShoppingNumber>
                    {quantity}
                  </ShoppingNumber>
                  
                </ShoppingBagBubble>
              </BagIconContainer>
              {hidden && <ModalCart/>}




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