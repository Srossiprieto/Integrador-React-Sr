import { ButtonContainer, Button } from './ButtonLayoutStyles'

function ButtonLayout({ text, img, onClick, disabled, type }) {
  return (
    <ButtonContainer >
        <Button onClick={onClick} disabled={disabled} type={type}>
          {text}
          {img && <img src={img} alt = "" />}
         
        </Button>
      </ButtonContainer>
  )
}

export default ButtonLayout
