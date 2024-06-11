import { ButtonContainer, Button } from './ButtonPaginationStyles'

function ButtonPagination({ text, img, onClick, disabled, type }) {
  return (
    <ButtonContainer >
        <Button onClick={onClick} disabled={disabled} type={type}>
          {text}
          {img && <img src={img} alt = "" />}
         
        </Button>
      </ButtonContainer>
  )
}

export default ButtonPagination
