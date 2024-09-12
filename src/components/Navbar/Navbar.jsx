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

import { DropDownContext } from './DropDownContext';
import { useContext } from 'react';

import logoNav from '../assets/img/logoNav.webp';
import { AiOutlineMenu } from "react-icons/ai";

import { Outlet, Link } from "react-router-dom";

import ModalCart from './ModalCart/ModalCart';

import { toggleHiddenCart } from '../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import CartIcon from './CartIcon/CartIcon';

function Navbar() {
  // ======= MENU DESPLEGABLE =======
  const { isOpen, toggle } = useContext(DropDownContext);
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);

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

  

  // ======= CARRITO DESPLEGABLE =======
  const quantity = useSelector((state) => {
    if (state.cart && state.cart.cartItems) {
      return state.cart.cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0);
    }
    return 0;
  });

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    if (hidden) {
      dispatch(toggleHiddenCart());
    }
    toggle();
  };

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
              <ul>
                <li>
                  <Link to='/' onClick={toggle}>Home</Link>
                </li>
                <li>
                  <Link to='productos' onClick={toggle}>Productos</Link>
                </li>
                <li>
                  <Link to="nosotros" onClick={toggle}>Nosotros</Link>
                </li>
                <li>
                  <Link to="contacto" onClick={toggle}>Contacto</Link>
                </li>
                <Outlet />
              </ul>
            </NavbarUlStyled>
            <Link to="/login">
              <StyledUserIcon />
            </Link>

            <BagIconContainer>
              <StyledBagIcon onClick={() => dispatch(toggleHiddenCart())} />

              <ShoppingBagBubble onClick={() => dispatch(toggleHiddenCart())}>
                <ShoppingNumber>
                  {quantity}
                </ShoppingNumber>
              </ShoppingBagBubble>
            </BagIconContainer>
            {hidden && <ModalCart />}

            <MenuContainerStyled>
              <MenuContainerStyledBtn onClick={handleMenuToggle}>
                {isOpen ? <StyledIoClose /> : <AiOutlineMenu />}
              </MenuContainerStyledBtn>
            </MenuContainerStyled>
          </RightContainer>
        </NavbarContainer>
        <DropDownMenuStyled open={isOpen} onClick={(e) => e.stopPropagation()}>
          <ul>
            <li>
              <Link to='/' onClick={toggle}>Home</Link>
            </li>
            <li>
              <Link to='/productos' onClick={toggle}>Productos</Link>
            </li>
            <li>
              <Link to="/nosotros" onClick={toggle}>Nosotros</Link>
            </li>
            <li>
              <Link to="/contacto" onClick={toggle}>Contacto</Link>
            </li>
            <Outlet />
          </ul>
        </DropDownMenuStyled>
      </NavbarContainerStyled>
    </>
  );
};

export default Navbar;