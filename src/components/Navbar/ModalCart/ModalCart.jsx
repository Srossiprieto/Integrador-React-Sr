import { 
  ModalCartContainer, 
  CardCart, 
  CartWrapper, 
  CartFooterStyled, 
  ButtonCartContainer, 
  CardCartTop 
} from './ModalCartStyles';

import ModalCard from './ModalCard';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, toggleHiddenCart } from '../../../redux/cart/cartSlice';
import { IoClose } from 'react-icons/io5';

import Modal from '../../Modal/Modal'

import ButtonPrimary from '../../Ui/Button';

function ModalCart() {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const hiddenCart = useSelector((state) => state.cart.hidden);
  const dispatch = useDispatch();

  const [isBuyModalOpen, setBuyModalOpen] = useState(false);
  const [isClearModalOpen, setClearModalOpen] = useState(false);

  const totalPrice = Array.isArray(cartItems) ? cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0) : 0;
  useEffect(() => {
    if (cartItems.length === 0 && !hiddenCart) {
      setBuyModalOpen(true);
      setTimeout(() => setBuyModalOpen(false), 3000);
    }
  }, [cartItems, hiddenCart]);

  return (
    <ModalCartContainer>
      <CardCartTop>
        <h3>Tus Productos:</h3> <IoClose onClick={() => dispatch(toggleHiddenCart())} />
      </CardCartTop>
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
        <ButtonCartContainer>
          <ButtonPrimary 
            onClick={() => {
              // dispatch(toggleHiddenCart());
              dispatch(clearCart());
              // setClearModalOpen(true);
              setBuyModalOpen(true);
              setTimeout(() => setBuyModalOpen(false), 3000);
            }} 
            text={"Comprar"} 
            disabled={cartItems.length === 0}
          />
          <ButtonPrimary 
            onClick={() => {
              dispatch(clearCart());
              setClearModalOpen(true);
              setTimeout(() => setClearModalOpen(false), 3000);
            }} 
            text={"Limpiar Carrito"}
            disabled={cartItems.length === 0}
          />

          <Modal isOpen={isBuyModalOpen} onClose={() => setBuyModalOpen(false)}>
            <p>Gracias por comprar los productos.</p>
          </Modal>

          <Modal isOpen={isClearModalOpen} onClose={() => setClearModalOpen(false)}>
            <p>Limpiaste el carrito con éxito!</p>
          </Modal>
        </ButtonCartContainer>
      </CardCart>
    </ModalCartContainer>
  );
}

export default ModalCart;