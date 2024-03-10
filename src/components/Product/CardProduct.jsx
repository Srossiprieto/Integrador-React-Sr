import { CardProductDest, CheckItem, StyledCheckIcon, ButtonContainer, Button } from "./CardProductsStyles"


function CardProduct({title, desc, price, currency,check1, check2, check3, check4, check5, check6, check7, check8}) {
  return (
    <CardProductDest>
      <h2>{title}</h2>
      <p>{price} <span>{currency}</span></p>
      <h3>{desc}</h3>
      {check1 && <CheckItem><StyledCheckIcon /> {check1}</CheckItem>}
      {check2 && <CheckItem><StyledCheckIcon /> {check2}</CheckItem>}
      {check3 && <CheckItem><StyledCheckIcon /> {check3}</CheckItem>}
      {check4 && <CheckItem><StyledCheckIcon /> {check4}</CheckItem>}
      {check5 && <CheckItem><StyledCheckIcon /> {check5}</CheckItem>}
      {check6 && <CheckItem><StyledCheckIcon /> {check6}</CheckItem>}
      {check7 && <CheckItem><StyledCheckIcon /> {check7}</CheckItem>}
      {check8 && <CheckItem><StyledCheckIcon /> {check8}</CheckItem>}
      <ButtonContainer>
        <Button>Comprar</Button>
      </ButtonContainer>
    </CardProductDest>
  )
}

export default CardProduct