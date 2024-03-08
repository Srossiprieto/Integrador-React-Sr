import { 
      ShapesContainer,
      ShapesImg
      } from './ShapesStyled'

import Shapes from '../assets/img/shapes.svg'

function ShapesDivider() {
  return (
    <>
      <ShapesContainer>
        <ShapesImg>
          <img src={Shapes} alt="Shapes" />
        </ShapesImg>
      </ShapesContainer>
    </>
  )
}

export default ShapesDivider
