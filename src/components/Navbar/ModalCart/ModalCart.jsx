import { ModalCartContainer, CardCart, CartWrapper, CartFooterStyled, Button } from './ModalCartStyles';

import ModalCard from './ModalCard';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, toggleHiddenCart } from '../../../redux/cart/cartSlice';
import { IoClose } from 'react-icons/io5';



function ModalCart() {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hiddenCart) {
      dispatch(toggleHiddenCart());
    }
  }, [dispatch, hiddenCart]);

  const totalPrice = Array.isArray(cartItems) ? cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0) : 0;

  return (
    <ModalCartContainer>
      <h3>Tus Productos:</h3> <IoClose onClick={() => dispatch(toggleHiddenCart())} />
      <CardCart>
        <CartWrapper>
        {cartItems.length ? (
                  cartItems.map((item) => (
                    <ModalCard key={item.id} {...item} />
                  ))
                ) : (
                  <p> El carrito esta vacio...</p>
                )}
        </CartWrapper>
        <hr />
        <CartFooterStyled>
          <h3>Total:</h3>
          <p>${totalPrice}</p>
        </CartFooterStyled>
        <hr />
        <Button 
          onClick={() => dispatch(toggleHiddenCart()) 
          && dispatch(clearCart())
        }>
          Comprar
        </Button>
        <hr />
        <Button onClick={() => dispatch(clearCart())}>Limpiar Carrito</Button>
      </CardCart>
    </ModalCartContainer>
  );
}

export default ModalCart;
