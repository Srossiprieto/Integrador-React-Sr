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
  MenuContainerStyledBtn,
  BtnSignOut,
  BtnSignOutContainer
} from './NavbarStyles';

import { DropDownContext } from './DropDownContext';
import { useContext } from 'react';

import logoNav from '../assets/img/logoNav.webp';
import { AiOutlineMenu } from "react-icons/ai";

import { Outlet, Link, useNavigate } from "react-router-dom";

import ModalCart from './ModalCart/ModalCart';

import { toggleHiddenCart } from '../../redux/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

import CartIcon from './CartIcon/CartIcon';
import { useAuth } from '../../context/AuthContext';

function Navbar() {
  // ======= MENU DESPLEGABLE =======
  const { isOpen, toggle } = useContext(DropDownContext);
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);

  const { user, isAuthenticated, signout } = useAuth();

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
          <Link to='/'>
            <img src={logoNav} alt="LogoNav" />
          </Link>
          <RightContainer>
            <NavbarUlStyled>
              <ul>
                <li>
                  <Link to='/' onClick={toggle}>Home</Link>
                </li>
                <li>
                  <Link to='/productos' onClick={toggle}>Productos</Link>
                </li>
                <li>
                  <Link to="/about" onClick={toggle}>Nosotros</Link>
                </li>
                <li>
                  <Link to="/contacto" onClick={toggle}>Contacto</Link>
                </li>
                {isAuthenticated ? (
                  <li>
                    <Link to="/admin" onClick={toggle}>Admin</Link>
                  </li>
                )
                : null}
                <Outlet />
              </ul>
            </NavbarUlStyled>
            
            {isAuthenticated ? (

              <BtnSignOutContainer>
                <BtnSignOut onClick={signout}
                >Sign Out</BtnSignOut>
              </BtnSignOutContainer>
    
            ) : (
              <Link to="/login">
                <StyledUserIcon />
              </Link>
            )}

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
              <Link to="/about" onClick={toggle}>about</Link>
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