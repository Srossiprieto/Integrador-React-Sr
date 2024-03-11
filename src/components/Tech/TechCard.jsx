import { tech } from '../../data/tech'
import {useSelector} from 'react-redux'
import { 
    TechContainer,
    ContainerTechWrapper,
    TechWrapper
 } from "./TechStyledCard"

import Tech from "./Tech"




function TechCard() {
  let tech = useSelector((state) => state.products.tech)
  return (
    <>
      <TechContainer>
          <ContainerTechWrapper>
              <TechWrapper>
                {tech.map(prod =>(

                <Tech key={prod.id} {...prod} />

                ))}
              </TechWrapper>
          </ContainerTechWrapper>
      </TechContainer>
     </>
  )
}

export default TechCard
