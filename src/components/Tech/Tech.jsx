import { useState } from 'react';
import { CardTechDest, TextTechContainer, ButtonContainer, Button } from "./TechStyledCard"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cart/cartSlice'
import Modal from '../Modal/Modal'




function Tech({title, img, desc, price, id}) {
  const [isModalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({img,title,desc,price,id}));
    setModalOpen(true);

    setTimeout(() => {
      setModalOpen(false);
    }, 2000);
  };

  return (
    <CardTechDest> 
      <img src={img} alt={title} />
      <TextTechContainer>
        <h2>{title}</h2>
        <p>$ {price}</p>
        <h3>{desc}</h3>
      </TextTechContainer>
      <ButtonContainer>
        <Button onClick={handleAddToCart}>Agregar</Button>
      </ButtonContainer>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <p>Ítem agregado al carrito.</p>
      </Modal>
    </CardTechDest>
  )
}

export default Tech;