
import { CardTechDest, TextTechContainer, ButtonContainer, Button } from "./TechStyledCard"

function Tech({title, img, desc, price, buy}) {
  return (
    <>
    <CardTechDest> 
          <img src={img} alt={title} />
          <TextTechContainer>
            <h2>{title}</h2>
            <p>{price}</p>
            <h3>{desc}</h3>
          </TextTechContainer>
            <ButtonContainer>
              <Button>Comprar</Button>
            </ButtonContainer>
    </CardTechDest>
    </>
  )
}

export default Tech
