import { tech } from '../../data/tech'

import { 
    TechContainer,
    ContainerTechWrapper,
    TechWrapper
 } from "./TechStyledCard"

import Tech from "./Tech"




function TechCard() {
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
