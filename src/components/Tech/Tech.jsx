
import { CardTechDest, TextTechContainer, ButtonContainer, Button } from "./TechStyledCard"

import {useDispatch} from 'react-redux';

import { addToCart } from '../../redux/cart/cartSlice'



function Tech({title, img, desc, price, id}) {
  const dispatch = useDispatch();
  return (
    <CardTechDest> 
          <img src={img} alt={title} />
          <TextTechContainer>
            <h2>{title}</h2>
            <p>$ {price}</p>
            <h3>{desc}</h3>
          </TextTechContainer>
            <ButtonContainer>
              <Button onClick={()=> dispatch(addToCart({img,title,desc,price,id}))}>Agregar</Button>
            </ButtonContainer>
    </CardTechDest>
  )
}

export default Tech
