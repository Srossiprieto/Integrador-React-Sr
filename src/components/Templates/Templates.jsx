
import { CardTemplateDest, ButtonContainer, Button } from "./TemplateStyledCard"


function Templates({title, img, desc, price}) {
  return (
    <>
    <CardTemplateDest>
          
          <img src={img} alt={title} />
          <h2>{title}</h2>
          <p>{price}</p>
          <h3>{desc}</h3>
        <ButtonContainer>
          <Button>Comprar</Button>
        </ButtonContainer>
        
    </CardTemplateDest>
    </>
  )
}

export default Templates
