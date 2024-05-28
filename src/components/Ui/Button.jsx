import { ButtonContainer, Button } from './ButtonStyles'

function ButtonPrimary({ text, img, onClick, disabled, type }) {
  return (
    <ButtonContainer >
        
        <Button onClick={onClick} disabled={disabled} type={type}>
          {text}
          {img && <img src={img} alt = "" />}
         
        </Button>
      </ButtonContainer>
  )
}

export default ButtonPrimary
