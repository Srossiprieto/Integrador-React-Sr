import { useState, useEffect } from 'react';
import { CardTechDest, TextTechContainer, ButtonContainer } from "./TechStyledCard";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice';
import Modal from '../Modal/Modal';
import ButtonPrimary from '../Ui/Button';

function Tech({ title, img, desc, price, id }) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ img, title, desc, price, id }));
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
        <img src={img} alt={title} />
        <TextTechContainer>
          <h2>{title}</h2>
          <p>$ {price}</p>
          <h3>{desc}</h3>
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