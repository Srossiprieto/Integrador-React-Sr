import { CardCartDest, TextCartContainer, Increase, Count } from "./ModalCartStyles";
import { FaTrash } from "react-icons/fa";
import { LuTrash } from "react-icons/lu";


import { removeFromCart, addToCart } from "../../../redux/cart/cartSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

function ModalCard({ name, image, price, quantity, id }) {
  const dispatch = useDispatch();

  return (
    <>
      <CardCartDest>
        <img src={image} alt={name} />
        <TextCartContainer>
          <h2>{name}</h2>
          <p>$ {price}</p>
        </TextCartContainer>
        <Increase onClick={() => dispatch(removeFromCart(id))}>
          {quantity === 1 ? <LuTrash /> : <IoRemoveCircleOutline />}
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={() => dispatch(addToCart({ image, name, price, id }))}>
          <IoIosAddCircleOutline />
        </Increase>
      </CardCartDest>
    </>
  );
}

export default ModalCard;