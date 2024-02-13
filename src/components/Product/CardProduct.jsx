

import { CardProductDest } from "./CardProductsStyles"

function CardProduct({img,title,category,desc,price}) {
  return (
      <CardProductDest>
        <img src={img} alt={category} />
        <h2>{title}</h2>
        <h3>{desc}</h3>
        <p>{price}</p>
      </CardProductDest>
  )
}

export default CardProduct
