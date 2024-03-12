import { FaBagShopping } from "react-icons/fa6";

import { useDispatch, useSelector } from 'react-redux';
import { toggleHiddenCart } from '../../../redux/cart/cartSlice';
import { BagIconContainer } from '../NavbarStyles';

function CartIcon() {
  const dispatch = useDispatch();

  const totalCartItems = useSelector((state) => state.cart.cartItems.reduce((acc, item) => (acc + item.quantity), 0));

  return (
      <BagIconContainer>
        <FaBagShopping onClick={() => dispatch(toggleHiddenCart())}/>
        <span>{totalCartItems}</span>
      </BagIconContainer>
  );
}

export default CartIcon;
