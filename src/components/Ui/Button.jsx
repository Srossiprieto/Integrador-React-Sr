import { ButtonContainer, Button } from './ButtonStyles'

function ButtonPrimary({ text, img, onClick, disabled }) {
  return (
    <ButtonContainer >
        
        <Button onClick={onClick} disabled={disabled}>
          {text}
          {img && <img src={img} alt = "" />}
         
        </Button>
      </ButtonContainer>
  )
}

export default ButtonPrimary
