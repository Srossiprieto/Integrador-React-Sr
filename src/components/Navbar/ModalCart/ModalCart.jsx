import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, toggleHiddenCart } from '../../../redux/cart/cartSlice';
import { IoClose } from 'react-icons/io5';
import Modal from '../../Modal/Modal';
import ButtonPrimary from '../../Ui/Button';
import ModalCard from './ModalCard';
import {
  ModalCartContainer,
  CardCart,
  CartWrapper,
  CartFooterStyled,
  ButtonCartContainer,
  CardCartTop,
  BlurBackground
} from './ModalCartStyles';

function ModalCart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const [isBuyModalOpen, setBuyModalOpen] = useState(false);
  const [isClearModalOpen, setClearModalOpen] = useState(false);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Efecto para manejar el cierre del carrito al actualizar la página
  useEffect(() => {
    const handleBeforeUnload = () => dispatch(toggleHiddenCart(true));

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [dispatch]);

  return (
    <>
      <BlurBackground onClick={() => dispatch(toggleHiddenCart(true))} />
      <ModalCartContainer>
        <CardCartTop>
          <h3>Tus Productos:</h3> <IoClose onClick={() => dispatch(toggleHiddenCart(true))} />
        </CardCartTop>
        <CardCart>
          <CartWrapper>
            {cartItems.length ? (
              cartItems.map((item) => <ModalCard key={item.id} {...item} />)
            ) : (
              <p>El carrito está vacío...</p>
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
                dispatch(clearCart());
                setBuyModalOpen(true);
                setTimeout(() => setBuyModalOpen(false), 3000);
              }}
              text="Comprar"
              disabled={cartItems.length === 0}
            />
            <ButtonPrimary
              onClick={() => {
                dispatch(clearCart());
                setClearModalOpen(true);
                setTimeout(() => setClearModalOpen(false), 3000);
              }}
              text="Limpiar Carrito"
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
    </>
  );
}

export default ModalCart;