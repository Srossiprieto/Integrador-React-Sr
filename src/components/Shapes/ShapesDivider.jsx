import { 
      ShapesContainer,
      } from './ShapesStyled'

import Shapes from '../assets/img/shapes.svg'

function ShapesDivider() {
  return (
    <>

      <ShapesContainer>
          <img src={Shapes} alt="Shapes" />
      </ShapesContainer>
    </>
  )
}

export default ShapesDivider
