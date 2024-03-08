import {templates} from '../../data/templates'

import { 
    TemplateContainer,
    ContainerTemplateWrapper,
    TemplateWrapper
 } from "./TemplateStyledCard"

 
import Templates from "./Templates"




function TemplatesCard() {
  return (
    <>
      <TemplateContainer>
          <h1>Nuestros Planes</h1>
          <ContainerTemplateWrapper>
              <TemplateWrapper>
                {products.map(prod =>(

                <CardProduct key={prod.id} {...prod} />

                ))}
              </TemplateWrapper>
          </ContainerTemplateWrapper>
      </TemplateContainer>
    );
     </>
  )
}

export default TemplatesCard
