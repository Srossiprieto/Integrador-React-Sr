import { useState, useEffect } from 'react';
import { CardTechDest, TextTechContainer, ButtonContainer } from "./TechStyledCard";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import Modal from '../Modal/Modal';
import ButtonPrimary from '../Ui/Button';

function Tech({ name, image, description, price, _id }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ image, name, description, price, id: _id }));
    setModalOpen(true);
    setButtonDisabled(true);
  };

  useEffect(() => {
    let timer;
    if (isModalOpen) {
      timer = setTimeout(() => {
        setModalOpen(false);
        setButtonDisabled(false);
      }, 3000);
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [isModalOpen]);

  return (
    <>
      <CardTechDest>
        <img src={image} alt={name} />
        <TextTechContainer>
          <h2>{name}</h2>
          <p>$ {price}</p>
          <h3>{description}</h3>
        </TextTechContainer>
        <ButtonContainer>
          <ButtonPrimary text="Agregar" onClick={handleAddToCart} />
        </ButtonContainer>

      </CardTechDest>
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <p>Ítem agregado al carrito.</p>
        </Modal>
    </>
  );
}

export default Tech;